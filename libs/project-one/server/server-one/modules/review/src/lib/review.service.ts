import { Injectable } from '@nestjs/common';
import { BitBucketService } from '@mn/project-one/server/server-one/modules/bit-bucket';
import { ReviewRepo } from '@mn/project-one/server/server-one/repos/review';

@Injectable()
export class ReviewService {
  constructor(
    private bitBucketService: BitBucketService,
    private repo: ReviewRepo,
  ) {}

  async reviewPullRequest(workspace: string, repoSlug: string, prId: string, userId: string): Promise<void> {
    const diff = await this.bitBucketService.getPullRequestDiff(workspace, repoSlug, Number(prId));
    const issues = this.analyzeDiff(diff);
    await this.repo.upsert(userId, prId, issues);
  }

  private analyzeDiff(diff: string): string[] {
    const lines = diff.split('\n');
    const issues = [];
    for (const line of lines) {
      if (line.startsWith('+') && line.includes('console.log')) {
        issues.push('Console log found');
      }
    }
    return issues.length > 0 ? issues : ['No issues found'];
  }
}
