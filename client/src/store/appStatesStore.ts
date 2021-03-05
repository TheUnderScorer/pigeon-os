import create from 'zustand';

export interface AppStatesStore {
  openedAppIds: string[];
  addOpenedApp: (id: string) => void;
  removeOpenedApp: (id: string) => void;
  focusedAppId: string;
  setFocusedAppId: (id: string) => void;

  [key: string]: any;
}

export const useAppStatesStore = create<AppStatesStore>((set, get) => ({
  openedAppIds: [],
  addOpenedApp: (id) => {
    set({
      openedAppIds: [...get().openedAppIds, id],
    });
  },
  removeOpenedApp: (id) => {
    const prevItems = get().openedAppIds;

    set({
      openedAppIds: prevItems.filter((item) => item !== id),
    });
  },
  focusedAppId: '',
  setFocusedAppId: (id) => {
    set({
      focusedAppId: id,
    });
  },
}));
