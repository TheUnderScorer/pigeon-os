import { List } from '../../../../ui/library/List/List';
import { ListItem } from '../../../../ui/library/List/Item/ListItem';
import { ImageIcon } from '../../../../ui/library/ImageIcon/ImageIcon';
import { Text } from '../../../../ui/library/Text/Text';
import { Box } from '../../../../ui/library/Box/Box';
import { useLogout } from '../../../../hooks/api/useLogout';
import styled from '@emotion/styled';
import { Font } from '../../../../ui/library/Text/Text.types';
import { thisPcApp } from '../../../../apps/thisPc/thisPcApp';
import { useOpenApp } from '../../../../hooks/apps/useOpenApp';

const Gradient = styled(Box)`
  background: ${({ theme }) =>
    `linear-gradient(178deg,${theme.colors.black},${theme.colors.dialogBlue})`};
  margin: 0;
  padding: 0;
  position: relative;
`;

const GradientText = styled(Text)`
  transform: rotate(-90deg);
  display: block;
  position: absolute;
  bottom: 10px;
  user-select: none;
  right: 0;
  left: 0;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  white-space: nowrap;
`;

export const TaskBarStartMenu = () => {
  const logout = useLogout();
  const openApp = useOpenApp();

  return (
    <Box display="flex" height={300} width={150} backgroundColor="surface">
      <Gradient height="100%" width={30}>
        <GradientText variant={Font.DesktopDisplayBig} color="white">
          Pigeon OS <Text variant={Font.DesktopTextBody}>Special Edition</Text>
        </GradientText>
      </Gradient>
      <List flex={1}>
        <ListItem
          onClick={() => openApp(thisPcApp.id)}
          cursor="pointer"
          icon={<ImageIcon icon={thisPcApp.icon} width={20} />}
        >
          {thisPcApp.name}
        </ListItem>
        <ListItem
          onClick={logout}
          cursor="pointer"
          icon={<ImageIcon width={20} icon="Keys5" />}
        >
          <Text>Log out...</Text>
        </ListItem>
      </List>
    </Box>
  );
};
