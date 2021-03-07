import React, { useCallback } from 'react';
import { TextBox } from '../ui/library/TextBox/TextBox';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/library/Button/Button';
import { Box, Flex } from '../ui/library/Box/Box';
import LoginImage from '../ui/assets/LoginLogo.png';
import { Image } from '../ui/library/Image/Image';
import { TreeViewSelection } from '../ui/library/TreeView/Selection/TreeViewSelection';
import { users } from '../constants/users';
import { LoginInputInterface } from '@lib/types/user';
import { useLogin } from '../hooks/api/useLogin';
import { Text } from '../ui/library/Text/Text';

export const LoginForm = () => {
  const loginMutation = useLogin();
  const form = useForm<LoginInputInterface>();

  const handleSubmit = useCallback(
    async (input: LoginInputInterface) => {
      await loginMutation.mutateAsync(input);
    },
    [loginMutation]
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
          name="userName"
          form={form}
          padding="0 !important"
          minHeight={60}
          ControllerProps={{
            rules: {
              required: 'Select user',
            },
            defaultValue: '',
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

      <Flex alignItems="center" justifyContent="flex-end" mt={4}>
        {loginMutation.error && (
          <Text mr={2} color="error">
            {loginMutation.error.message}
          </Text>
        )}
        <Button disabled={form.formState.isSubmitting} type="submit">
          OK
        </Button>
      </Flex>
    </Box>
  );
};
