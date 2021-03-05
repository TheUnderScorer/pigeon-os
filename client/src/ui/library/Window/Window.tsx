import React, { forwardRef, PropsWithChildren, ReactNode } from 'react';
import { TitleBar, TitleBarProps } from '../TitleBar/TitleBar';
import { Box, BoxProps } from '../Box/Box';
import Draggable, { DraggableProps } from 'react-draggable';
import { useTheme } from '@emotion/react';

export interface WindowProps
  extends Pick<TitleBarProps, 'title' | 'active'>,
    Pick<Partial<DraggableProps>, 'defaultPosition'> {
  width?: number | string;
  height?: number | string;
  id: string;
  draggable?: boolean;
  resizable?: boolean;
  titleBarContent?: ReactNode;
  BoxProps?: Omit<BoxProps, 'as'>;
}

export const Window = forwardRef<
  HTMLDivElement,
  PropsWithChildren<WindowProps>
>(
  (
    {
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
      BoxProps,
      titleBarContent,
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <Draggable
        disabled={!draggable}
        handle={`#handle-${id}`}
        defaultPosition={defaultPosition}
      >
        <Box
          minWidth={400}
          minHeight={400}
          resize={resizable ? 'both' : 'none'}
          display="flex"
          flexDirection="column"
          overflow="auto"
          height={height}
          width={width}
          position="relative"
          className="window"
          zIndex={active ? theme.zIndexes.windowFocused : theme.zIndexes.window}
          {...BoxProps}
          ref={ref}
        >
          <TitleBar
            active={active}
            cursor={draggable ? 'move' : undefined}
            id={`handle-${id}`}
            title={title}
          >
            {titleBarContent}
          </TitleBar>
          <Box className="window-body" flex={1}>
            {children}
          </Box>
        </Box>
      </Draggable>
    );
  }
);
