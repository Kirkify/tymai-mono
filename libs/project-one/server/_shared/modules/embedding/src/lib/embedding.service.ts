import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from '@aws-sdk/client-bedrock-runtime';
import { TitanEmbeddingType } from './models/titan-embedding.type';
import { TitanEmbeddingMultiModelV1Interface } from './models/titan-embedding-multi-model-v1.interface';
import { awsBedrockConfig } from '@mn/project-one/server/shared/configs';

@Injectable()
export class EmbeddingService {
  // Using native Bedrock Runtime Client
  private bedrockRuntimeClient;
  // This can be 256 | 384 | 1024
  private readonly OutputEmbeddingLength = 1024;

  constructor(
    @Inject(awsBedrockConfig.KEY)
    private config: ConfigType<typeof awsBedrockConfig>
  ) {
    this.bedrockRuntimeClient = new BedrockRuntimeClient({
      region: this.config.region,
      credentials: {
        accessKeyId: this.config.accessKeyId,
        secretAccessKey: this.config.secretAccessKey,
      },
    });
  }

  async getTextEmbedding(inputText: string) {
    const model: TitanEmbeddingMultiModelV1Interface = {
      modelId: 'amazon.titan-embed-image-v1',
      request: {
        inputText,
        embeddingConfig: {
          outputEmbeddingLength: this.OutputEmbeddingLength,
        },
      },
    };

    return await this._getNativeEmbedding(model);
  }

  async getImageEmbedding(inputImage: string) {
    const model: TitanEmbeddingMultiModelV1Interface = {
      modelId: 'amazon.titan-embed-image-v1',
      request: {
        inputImage,
        embeddingConfig: {
          outputEmbeddingLength: this.OutputEmbeddingLength,
        },
      },
    };

    return await this._getNativeEmbedding(model);
  }

  /**
   * Invokes an Amazon Titan Text generation model.
   * https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-titan-embed-text.html
   * View LangChain implementation here https://github.com/langchain-ai/langchainjs/blob/f2b54c934e0d153bd2b5ca3ce66a10b2262edfcf/libs/langchain-aws/src/embeddings.ts
   *
   */
  private async _getNativeEmbedding<T extends TitanEmbeddingType>(
    params: T
  ): Promise<T['response']> {
    // Invoke the model with the payload and wait for the response.
    const command = new InvokeModelCommand({
      contentType: 'application/json',
      body: JSON.stringify(params.request),
      modelId: params.modelId,
    });

    try {
      const apiResponse = await this.bedrockRuntimeClient.send(command);

      // Decode and return the response.
      const decodedResponseBody = new TextDecoder().decode(apiResponse.body);

      params.response = JSON.parse(decodedResponseBody);

      return params.response;
    } catch (error) {
      console.log(error);
    }

    return undefined;
  }
}
