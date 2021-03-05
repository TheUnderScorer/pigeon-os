import React from 'react';
import { Window } from '../ui/library/Window/Window';
import { Centered } from '../ui/library/Centered/Centered';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  return (
    <Centered backgroundColor="desktopBlue" minHeight="100vh" width="100vw">
      <Window
        width={400}
        height="auto"
        active
        title="Welcome to Pigeon OS"
        id="login"
        draggable={false}
        resizable={false}
        BoxProps={{
          minHeight: 'auto',
          minWidth: 'auto',
        }}
      >
        <LoginForm />
      </Window>
    </Centered>
  );
};
