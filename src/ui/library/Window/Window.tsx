import React, { forwardRef, PropsWithChildren } from 'react';
import { TitleBar, TitleBarProps } from '../TitleBar/TitleBar';
import { Box, BoxProps } from '../Box/Box';
import Draggable, { DraggableProps } from 'react-draggable';

export interface WindowProps
  extends Pick<TitleBarProps, 'title' | 'active'>,
    Pick<Partial<DraggableProps>, 'defaultPosition'> {
  width?: number | string;
  height?: number | string;
  id: string;
  draggable?: boolean;
  resizable?: boolean;
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
    },
    ref
  ) => {
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
          zIndex={4}
          {...BoxProps}
          ref={ref}
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
      </Draggable>
    );
  }
);
