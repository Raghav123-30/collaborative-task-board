import { useState, type ReactNode } from "react";
import { trpc } from "../lib/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import superJSON from "superjson";
type TrpcProviderProps = {
  children: ReactNode;
};

export default function TrpcProvider({ children }: TrpcProviderProps) {
  const [queryClient] = useState(new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
          transformer: superJSON,
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
