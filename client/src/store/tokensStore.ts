import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface TokensStore {
  token?: string;
  setToken: (token?: string) => any;

  [key: string]: any;
}

export const useTokensStore = create<TokensStore>(
  persist(
    (set) => ({
      setToken: (token) => {
        set({ token });
      },
      token: undefined,
    }),
    {
      name: 'tokens',
    }
  )
);
