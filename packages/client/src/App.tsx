import { trpc } from "./lib/trpc";

export default function App() {
  const { isLoading, data, error } = trpc.greeting.useQuery({
    name: "Raghavendra",
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-sm">Something went wrong</p>;
  }

  return <p className="text-green-500 text-sm">{data?.message}</p>;
}
