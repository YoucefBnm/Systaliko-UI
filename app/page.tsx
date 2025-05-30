import * as React from 'react';
import { OpenInV0Button } from '@/components/open-in-v0-button';
import { TextVertical } from '@/registry/text/text-vertical';

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="min-h-svh flex justify-center items-center p-6">
      <div className="flex gap-8 justify-center">
        <TextVertical className="uppercase text-sm tracking-wider font-medium">
          our summer collection
        </TextVertical>

        <img
          className="max-w-full max-h-[80vh] h-auto w-full"
          width={483}
          height={604}
          alt="nike"
          src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}
