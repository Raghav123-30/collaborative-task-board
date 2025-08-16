import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
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

  return (
    <div className="grid min-h-screen">
      <Card className="self-center max-w-md w-full mx-auto">
        <CardHeader>
          <CardTitle>Collaborative Task Board</CardTitle>
          <CardDescription>
            App to practice react query and tRPC
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground">{data?.message}</p>
          <Button>Lets get started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
