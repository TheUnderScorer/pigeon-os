import { ImageIcon } from '../../../ui/library/ImageIcon/ImageIcon';
import { Button } from '../../../ui/library/Button/Button';
import { useToggle } from 'react-use';
import { ButtonVariants } from '../../../ui/library/Button/Button.types';
import Popover from 'react-popover';
import { TaskBarStartMenu } from './Menu/TaskBarStartMenu';

export const TaskBarStart = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <Popover
      tipSize={0.01}
      enterExitTransitionDurationMs={0}
      onOuterAction={() => toggleOpen(false)}
      preferPlace="above"
      isOpen={open}
      body={<TaskBarStartMenu />}
    >
      <Button
        variant={open ? ButtonVariants.SolidInserted : ButtonVariants.Solid}
        onClick={() => toggleOpen()}
        px={4}
        minWidth="0"
      >
        <ImageIcon width={50} icon="StartButton" />
      </Button>
    </Popover>
  );
};
