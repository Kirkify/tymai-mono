import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Routing } from '@mn/project-one/shared/routing/server-one';
import { Auth, UserId } from '@mn/project-one/server/shared/decorators';

const route = Routing.review;

@ApiTags(route.capitalizedPath)
@Auth()
@Controller(route.absolutePath())
export class ReviewController {
  constructor(
    private service: ReviewService,
  ) {}

  @ApiOperation({ description: `Testing a super admin API.` })
  @Get(':prId')
  async test(@UserId() userId: string, @Param('prId') prId: string) {
    const workspace = 'your-workspace'; // Replace with your BitBucket workspace
    const repoSlug = 'your-repo-slug';  // Replace with your repo slug
    await this.service.reviewPullRequest(workspace, repoSlug, prId, userId);
  }
}
