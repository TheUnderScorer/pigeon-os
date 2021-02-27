import React, { PropsWithChildren } from 'react';
import { TitleBar, TitleBarProps } from '../TitleBar/TitleBar';
import { Box } from '../Box/Box';
import Draggable, { DraggableProps } from 'react-draggable';
import { ResizableBox } from 'react-resizable';

export interface AppWindowProps
  extends Pick<TitleBarProps, 'title' | 'active'>,
    Pick<Partial<DraggableProps>, 'defaultPosition'> {
  width?: number | string;
  height?: number | string;
  id: string;
  draggable?: boolean;
  resizable?: boolean;
}

export const AppWindow = ({
  title,
  children,
  defaultPosition = {
    y: 0,
    x: 0,
  },
  width = 600,
  height = 400,
  id,
  draggable = true,
  resizable = true,
  active,
}: PropsWithChildren<AppWindowProps>) => {
  return (
    <Draggable
      disabled={!draggable}
      handle={`#handle-${id}`}
      defaultPosition={defaultPosition}
    >
      <ResizableBox
        minConstraints={[300, 300]}
        resizeHandles={resizable ? ['sw', 'se', 's'] : []}
        width={width !== 'auto' ? parseInt(width!.toString()) : 600}
        height={height !== 'auto' ? parseInt(height!.toString()) : 400}
      >
        <Box
          display="flex"
          flexDirection="column"
          overflow="auto"
          height={height === 'auto' ? 'auto' : '100%'}
          width="100%"
          position="relative"
          className="window"
        >
          <TitleBar
            active={active}
            cursor={draggable ? 'move' : undefined}
            id={`handle-${id}`}
            title={title}
          />
          <Box className="window-body" flex={1}>
            {children}
          </Box>
        </Box>
      </ResizableBox>
    </Draggable>
  );
};
