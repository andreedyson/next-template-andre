/**
 * ⚠️ React Query Provider
 * This wraps your app with QueryClientProvider to enable React Query features.
 * You can extend this with devtools, hydration, or logging later.
 */

"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 6 * 1000,
            refetchInterval: 6 * 1000,
            refetchOnWindowFocus: true,
            refetchOnMount: true,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
