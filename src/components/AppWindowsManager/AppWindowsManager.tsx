import React, { useMemo } from 'react';
import { useAppStatesStore } from '../../store/appStatesStore';
import { PigeonOsApp } from '../../types/apps';
import { AppWindow } from '../AppWindow/AppWindow';

export interface AppWindowsManagerProps {
  apps: PigeonOsApp[];
}

export const AppWindowsManager = ({ apps }: AppWindowsManagerProps) => {
  const openedAppIds = useAppStatesStore((store) => store.openedAppIds);

  const openedApps = useMemo(
    () => apps.filter((app) => openedAppIds.includes(app.id)),
    [apps, openedAppIds]
  );

  return (
    <>
      {openedApps.map((app) => (
        <AppWindow key={app.id} {...app} />
      ))}
    </>
  );
};
