import React, { MutableRefObject, useEffect, useRef } from 'react';
import { PigeonOsApp } from '../../types/apps';
import { Window } from '../../ui/library/Window/Window';
import { useEvent, useMount, useUnmount } from 'react-use';
import { useAppStatesStore } from '../../store/appStatesStore';
import { useAppRefsStore } from '../../store/appRefsStore';

export interface AppWindowProps extends PigeonOsApp {}

export const AppWindow = ({ name, id, content }: AppWindowProps) => {
  const addRef = useAppRefsStore((store) => store.addRef);
  const removeRef = useAppRefsStore((store) => store.removeRef);

  const [focusedAppId, setFocusedAppId] = useAppStatesStore((store) => [
    store.focusedAppId,
    store.setFocusedAppId,
  ]);

  const containerRef = useRef<HTMLDivElement>();

  useMount(() => {
    if (containerRef.current) {
      containerRef.current!.focus();
    }
  });

  useEffect(() => {
    if (containerRef.current) {
      addRef(id, containerRef.current);
    }
  }, [addRef, containerRef, id]);

  useUnmount(() => {
    removeRef(id);
  });

  return (
    <Window
      ref={containerRef as MutableRefObject<HTMLDivElement>}
      BoxProps={{
        position: 'absolute',
        left: '30%',
        right: 0,
        top: '25%',
        onFocus: () => {
          setFocusedAppId(id);
        },
        onBlur: () => {
          setFocusedAppId('');
        },
        tabIndex: 0,
      }}
      defaultPosition={{
        y: 0,
        x: 0,
      }}
      width={600}
      height={400}
      id={id}
      title={name}
      active={focusedAppId === id}
    >
      {content}
    </Window>
  );
};
