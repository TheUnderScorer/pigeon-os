import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

export interface CreateGoogleOauth2Deps {
  googleClientId: string;
  googleSecret: string;
  googleRedirectUrl: string;
  googleAccessToken: string;
  googleRefreshToken: string;
}

export const createGoogleOauth2 = ({
  googleClientId,
  googleRedirectUrl,
  googleSecret,
  googleAccessToken,
  googleRefreshToken,
}: CreateGoogleOauth2Deps): OAuth2Client => {
  const oauth = new google.auth.OAuth2(
    googleClientId,
    googleSecret,
    googleRedirectUrl
  );

  oauth.setCredentials({
    access_token: googleAccessToken,
    refresh_token: googleRefreshToken,
    scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
  });

  return oauth;
};
