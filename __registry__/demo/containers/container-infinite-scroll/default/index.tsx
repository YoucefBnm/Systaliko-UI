'use client';

import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  CellInfiniteScroll,
  ContainerInfiniteScroll,
} from '@/__registry__/containers/container-infinite-scroll/default';
import { ScrollArea } from '@/components/ui/scroll-area';
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const LIMIT = 10;

export function ContainerInfiniteScrollDemo() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [page, setPage] = React.useState<number>(0);
  const [totalCount, setTotalCount] = React.useState<number | null>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function fetchData() {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollArea className="w-full h-80">
      <ContainerInfiniteScroll
        items={posts}
        isPending={isLoading}
        itemsCount={totalCount}
        loadMore={fetchData}
        className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 p-12"
      >
        {posts.map((post, index) => (
          <CellInfiniteScroll isPending={isLoading} key={`${post.id}-${index}`}>
            <Card className=" bg-fd-card">
              <CardHeader>
                <CardTitle className="text-primary">#{post.id}</CardTitle>
                <CardDescription className="text-xs">
                  {post.title}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-sm text-foreground">
                <p>{post.body}</p>
              </CardContent>
            </Card>
          </CellInfiniteScroll>
        ))}
      </ContainerInfiniteScroll>
    </ScrollArea>
  );
}
