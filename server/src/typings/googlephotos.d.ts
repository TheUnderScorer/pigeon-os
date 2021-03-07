declare module 'googlephotos' {
  import { MediaItemsResponse } from '@lib/types/googlePhotos';

  export interface MediaItems {
    search: (
      albumId: string,
      pageSize?: number,
      pageToken?: string
    ) => Promise<MediaItemsResponse>;
  }

  export declare class Photos {
    mediaItems: MediaItems;

    constructor(authToken: string) {}
  }

  export default Photos;
}
