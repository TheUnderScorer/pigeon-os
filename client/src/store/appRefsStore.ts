import create from 'zustand';

export interface AppRefsStore {
  refs: Record<string, HTMLDivElement>;
  addRef: (id: string, ref: HTMLDivElement) => any;
  removeRef: (id: string) => any;

  [key: string]: any;
}

export const useAppRefsStore = create<AppRefsStore>((set, get) => ({
  refs: {},
  addRef: (id, ref) => {
    const refs = get().refs;

    set({
      refs: {
        ...refs,
        [id]: ref,
      },
    });
  },
  removeRef: (id) => {
    const { refs } = get();

    delete refs[id];

    set({
      refs,
    });
  },
}));
