import React from 'react';
import { AppWindow } from '../../ui/library/AppWindow/AppWindow';
import { Centered } from '../../ui/library/Centered/Centered';
import { LoginForm } from '../../components/LoginForm';

export const Login = () => {
  return (
    <Centered backgroundColor="desktopBlue" minHeight="100vh" width="100vw">
      <AppWindow
        width={300}
        height="auto"
        active
        title="Welcome to Pigeon OS"
        id="login"
        draggable={false}
        resizable={false}
      >
        <LoginForm />
      </AppWindow>
    </Centered>
  );
};
