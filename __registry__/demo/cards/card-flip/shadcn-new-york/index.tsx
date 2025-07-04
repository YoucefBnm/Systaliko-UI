'use client';
import * as React from 'react';
import {
  CardFlip,
  CardFlipBack,
  CardFlipFront,
} from '@/__registry__/cards/card-flip/shadcn-new-york';
import { Button } from '@/components/ui/button';
export function CardFlipDemo() {
  return (
    <div className="container py-12">
      <div className="flex flex-wrap justify-center gap-4">
        <CardFlip className="h-96 w-2/6">
          <CardFlipFront className="rounded-xl">
            <img
              width={1015}
              height={678}
              src="https://images.unsplash.com/photo-1655853548169-646b6e0f15ca?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </CardFlipFront>
          <CardFlipBack className="flex flex-col items-center justify-center rounded-xl bg-secondary-foreground px-4 py-6 text-center text-secondary">
            <h2 className="text-xl font-bold">Nike Air Jordan</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button>Add to cart</Button>
          </CardFlipBack>
        </CardFlip>

        <CardFlip flipDirection="vertical" className="h-96 w-2/6">
          <CardFlipFront className="rounded-xl">
            <img
              width={542}
              height={678}
              src="https://images.unsplash.com/photo-1656944227425-5646be300a14?q=80&w=2527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </CardFlipFront>
          <CardFlipBack className="flex flex-col items-center justify-center rounded-xl bg-secondary-foreground px-4 py-6 text-center text-secondary">
            <h2 className="text-xl font-bold">Nike Air Jordan</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button>Add to cart</Button>
          </CardFlipBack>
        </CardFlip>
      </div>
    </div>
  );
}
