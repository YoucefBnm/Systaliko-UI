"use client";

import React from "react";
import { cn } from "@/lib/utils";
// You would typically import a highlighting library here, e.g., import { highlight } from 'shiki';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code?: string;
  language?: string;
  children?: React.ReactNode;
}

export function CodeBlock({
  code = "",
  language = "text",
  className,
  children,
  ...props
}: CodeBlockProps) {
  // If children are provided, use them directly
  if (children) {
    return (
      <pre
        className={cn(
          "relative overflow-x-auto rounded-md bg-muted/50 dark:bg-neutral-900 p-6 font-mono text-sm text-foreground dark:text-white",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    );
  }

  // Otherwise, use the code prop
  const highlightedCode = code;

  if (typeof highlightedCode !== "string") {
    console.error("CodeBlock received non-string code:", highlightedCode);
    return (
      <pre
        className={cn(
          "relative overflow-x-auto rounded-md bg-muted/50 dark:bg-neutral-900 p-6 font-mono text-sm text-foreground dark:text-white",
          className
        )}
        {...props}
      >
        <code className="grid leading-relaxed [&>span]:table-row">
          <span className="table-row">
            <span className="table-cell w-4 select-none text-muted-foreground">
              1
            </span>
            <span className="table-cell pl-4 text-foreground dark:text-white">
              No code content available
            </span>
          </span>
        </code>
      </pre>
    );
  }

  // Split the code into lines and add line numbers
  const lines = highlightedCode.split("\n");

  return (
    <pre
      className={cn(
        "relative overflow-x-auto rounded-md bg-muted/50 dark:bg-neutral-900 p-6 font-mono text-sm text-foreground dark:text-white",
        className
      )}
      {...props}
    >
      <code
        className={cn(
          "grid leading-relaxed [&>span]:table-row",
          `language-${language}`
        )}
      >
        {lines.map((line, index) => (
          <span key={index} className="table-row">
            <span className="table-cell w-4 select-none text-muted-foreground">
              {index + 1}
            </span>
            <span className="table-cell pl-4 text-foreground dark:text-white">
              {line}
            </span>
          </span>
        ))}
      </code>
    </pre>
  );
}

// The Pre helper is not strictly needed if CodeBlock handles rendering lines
// but keeping it for now based on animate-ui structure reference.
export function Pre({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
