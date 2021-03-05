import { useAppRefsStore } from '../store/appRefsStore';

export const useAppRef = (id: string) => {
  const refs = useAppRefsStore((store) => store.refs);

  return refs[id];
};
