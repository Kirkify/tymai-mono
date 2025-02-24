import { Injectable } from '@nestjs/common';
import Axios from 'axios';

const BITBUCKET_API_URL = 'https://api.bitbucket.org/2.0';

const auth = {
  username: 'test',
  password: 'test',
};

@Injectable()
export class BitBucketService {
  async getPullRequests(workspace: string, repoSlug: string): Promise<Array<{ id: number }>> {
    const url = `${BITBUCKET_API_URL}/repositories/${workspace}/${repoSlug}/pullrequests?state=OPEN`;
    const response = await Axios.get(url, { auth });
    return response.data.values;
  }

  async getPullRequestDiff(workspace: string, repoSlug: string, prId: number): Promise<string> {
    const url = `${BITBUCKET_API_URL}/repositories/${workspace}/${repoSlug}/pullrequests/${prId}/diff`;
    const response = await Axios.get(url, { auth });
    return response.data;
  }
}
