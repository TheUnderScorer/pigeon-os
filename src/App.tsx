import React from 'react';
import { TextBox } from './ui/library/TextBox/TextBox';
import { Box } from './ui/library/Box/Box';
import { Text } from './ui/library/Text/Text';
import { AppWindow } from './ui/library/AppWindow/AppWindow';

function App() {
  return (
    <AppWindow active id="test" title="Test app">
      <Box mt={10}>
        <TextBox id="test" label="Test field ;)" />
      </Box>
      <Box mt={10}>
        <TextBox stacked id="test" label="Stacked field ;)" />
      </Box>
      <Text>Hello!</Text>
    </AppWindow>
  );
}

export default App;
