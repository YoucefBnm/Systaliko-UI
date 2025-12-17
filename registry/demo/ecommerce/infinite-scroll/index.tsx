'use client';
import { Skeleton } from '@/components/ui/skeleton';
import {
  InfiniteScroll,
  InfiniteScrollCell,
} from '@/registry/ecommerce/infinite-scroll';
import { useEffect, useCallback, useState } from 'react';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function CardSkelton() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center gap-2">
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="w-full h-6 rounded" />
      </div>
      <Skeleton className="w-full h-24 rounded" />
    </div>
  );
}
export function InfiniteScrollDemo() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  const LIMIT = 6;

  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number | null>();
  const [isPending, setIsPending] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    if (isPending) return;

    setIsPending(true);
    const start = page * LIMIT;

    try {
      const response = await fetch(
        `${BASE_URL}?_start=${start}&_limit=${LIMIT}`,
      );
      const totalItems = response.headers.get('x-total-count');
      const data = await response.json();

      setTotalCount(Number(totalItems));
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsPending(false);
    }
  }, [page, isPending]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <InfiniteScroll
      isPending={isPending}
      currentItemsLength={posts.length}
      allItemsCount={totalCount}
      loadMore={fetchData}
      className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-center items-start gap-4 p-8"
    >
      {posts.map((post) => (
        <InfiniteScrollCell
          className="p-6 bg-card border border-border/50 rounded-xl shadow-2xs"
          key={post.id}
          amount={0.2}
          skelton={<CardSkelton />}
        >
          <div className="flex flex-col space-y-6 ">
            <div className="flex items-center gap-2">
              <div className="font-semibold text-sm text-muted-foreground">
                #{post.id}
              </div>
              <h2
                title={post.title}
                className="font-medium max-w-[15ch] capitalize line-clamp-1"
              >
                {post.title}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">{post.body}</p>
          </div>
        </InfiniteScrollCell>
      ))}
    </InfiniteScroll>
  );
}
