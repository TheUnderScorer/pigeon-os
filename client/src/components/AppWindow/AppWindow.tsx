import React, { MutableRefObject, useEffect, useRef } from 'react';
import { PigeonOsApp } from '../../types/apps';
import { Window } from '../../ui/library/Window/Window';
import { useMount, useUnmount } from 'react-use';
import { useAppStatesStore } from '../../store/appStatesStore';
import { useAppRefsStore } from '../../store/appRefsStore';
import { Button } from '../../ui/library/Button/Button';
import { useCloseApp } from '../../hooks/apps/useCloseApp';
import { ImageIcon } from '../../ui/library/ImageIcon/ImageIcon';

export interface AppWindowProps extends PigeonOsApp {}

export const AppWindow = ({ name, id, content, icon }: AppWindowProps) => {
  const closeApp = useCloseApp(id);

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
      titleBarContent={<Button onClick={closeApp} aria-label="Close" />}
      resizable
      icon={<ImageIcon width={15} height={15} icon={icon} />}
    >
      {content()}
    </Window>
  );
};
