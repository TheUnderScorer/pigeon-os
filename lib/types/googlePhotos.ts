export interface MediaItem {
  baseUrl: string;
  filename: string;
  productUrl: string;
  id: string;
}

export interface MediaItemsResponse {
  nextPageToken: string;
  mediaItems: MediaItem[];
}

export interface MediaItemsRequest {
  pageToken?: string;
  pageSize?: string;
}
