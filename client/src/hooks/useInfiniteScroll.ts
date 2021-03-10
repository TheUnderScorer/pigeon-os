import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { usePrevious, useScroll } from 'react-use';

export interface UseInfiniteScrollProps {
  onScroll: () => any;
  hasNext: boolean;
  offset?: number;
  loading?: boolean;
}

export const useInfiniteScroll = ({
  hasNext,
  onScroll,
  offset = 25,
  loading,
}: UseInfiniteScrollProps) => {
  const scrollRef = useRef<HTMLElement>();

  const { y } = useScroll(scrollRef as MutableRefObject<HTMLElement>);
  const prevY = usePrevious(y);

  useLayoutEffect(() => {
    if (
      scrollRef.current &&
      y !== prevY &&
      y > scrollRef.current.clientHeight - offset &&
      hasNext &&
      !loading
    ) {
      console.log('Scrolled to bottom');

      onScroll();
    }
  }, [hasNext, loading, offset, onScroll, prevY, y]);

  return scrollRef;
};
