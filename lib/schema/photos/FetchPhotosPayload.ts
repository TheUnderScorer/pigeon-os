import { string } from 'joiful';
import { BaseSchema } from '@lib/schema/BaseSchema';

export class FetchPhotosPayload extends BaseSchema<FetchPhotosPayload> {
  @string()
  nextPageToken?: string;
}
