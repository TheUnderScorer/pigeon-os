import { google } from 'googleapis';

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
}: CreateGoogleOauth2Deps) => {
  const oauth = new google.auth.OAuth2(
    googleClientId,
    googleSecret,
    googleRedirectUrl
  );

  oauth.setCredentials({
    access_token: googleAccessToken,
    refresh_token: googleRefreshToken,
  });

  return oauth;
};
