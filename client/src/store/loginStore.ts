import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface LoginStore {
  isLogged: boolean;
  setIsLoggedIn: (isLogged: boolean) => any;

  [key: string]: any;
}

export const useLoginStore = create<LoginStore>(
  persist(
    (set) => ({
      isLogged: false,
      setIsLoggedIn: (isLogged: boolean) => {
        set({
          isLogged,
        });
      },
    }),
    {
      name: 'loginStore',
    }
  )
);
