"use client";
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 50000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}

      {<ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
