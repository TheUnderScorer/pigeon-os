import React, { useCallback } from 'react';
import { TextBox } from '../ui/library/TextBox/TextBox';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/library/Button/Button';
import { Box, Flex } from '../ui/library/Box/Box';
import LoginImage from '../ui/assets/LoginLogo.png';
import { Image } from '../ui/library/Image/Image';
import { LoginInput } from '../types/login';
import { useLoginStore } from '../store/loginStore';
import { TreeViewSelection } from '../ui/library/TreeView/Selection/TreeViewSelection';
import { users } from '../constants/users';
import { ImageIcon } from '../ui/library/ImageIcon/ImageIcon';

export interface LoginFormProps {}

// TODO Validate password on server
const password = 'pigeon';

export const LoginForm = (props: LoginFormProps) => {
  const form = useForm<LoginInput>();
  const setIsLoggedIn = useLoginStore((store) => store.setIsLoggedIn);

  const handleSubmit = useCallback(
    (input: LoginInput) => {
      if (input.password === password && input.user === 'Pigeon') {
        setIsLoggedIn(true);
      } else {
        form.setError('password', { message: 'Invalid password' });
      }
    },
    [form, setIsLoggedIn]
  );

  return (
    <Box
      width="100%"
      height="100%"
      as="form"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Image as="img" src={LoginImage} />
      <Box mt={4}>
        <TreeViewSelection
          label="Pick user:"
          margin={0}
          items={users.map((user) => ({
            value: user,
            label: user,
          }))}
          name="user"
          form={form}
          padding="0 !important"
          minHeight={60}
          ControllerProps={{
            rules: {
              required: 'Select user',
            },
            defaultValue: users[0],
          }}
        />
      </Box>
      <Box mt={4}>
        <TextBox
          form={form}
          type="password"
          id="password"
          label="Password: "
          ControllerProps={{
            rules: {
              required: 'Enter your password',
            },
            defaultValue: '',
          }}
        />
      </Box>

      <Flex justifyContent="flex-end" mt={4}>
        <Button type="submit">OK</Button>
      </Flex>
    </Box>
  );
};
