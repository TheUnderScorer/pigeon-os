import { FetchPhotosPayload } from '@lib/schema/photos/FetchPhotosPayload';
import { MediaItemsResponse } from '@lib/types/googlePhotos';
import { serverRoutes } from '@lib/serverRoutes';
import { LoginInputInterface, LoginResult, User } from '@lib/types/user';
import { UnauthorizedError } from '@lib/errors/UnauthorizedError';
import { bearer } from '../utils/headers';
import { ApiError } from './ApiError';

export class ApiClient {
  protected token?: string;

  constructor(private readonly apiUrl: string) {}

  async login(input: LoginInputInterface): Promise<LoginResult> {
    const url = new URL(this.apiUrl);
    url.pathname = serverRoutes.login;

    const response = await fetch(url.toString(), {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    ApiClient.checkResponse(response, result);

    return result;
  }

  private static checkResponse(response: Response, result: Error) {
    if (response.status !== 200) {
      throw new ApiError(result.message, result.name);
    }
  }

  async getMe(): Promise<User> {
    if (!this.token) {
      throw new UnauthorizedError();
    }

    const url = new URL(this.apiUrl);
    url.pathname = serverRoutes.me;

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: bearer(this.token),
      },
    });

    return response.json();
  }

  async getPhotos(input?: FetchPhotosPayload): Promise<MediaItemsResponse> {
    if (!this.token) {
      throw new UnauthorizedError();
    }

    const url = new URL(this.apiUrl);
    url.pathname = serverRoutes.getPhotos;

    if (input?.nextPageToken) {
      url.searchParams.append('nextPageToken', input.nextPageToken);
    }

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: bearer(this.token),
      },
    });

    const result = await response.json();

    ApiClient.checkResponse(response, result);

    return result;
  }

  setToken(token?: string) {
    this.token = token;
  }
}
