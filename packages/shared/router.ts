import { router, publicProcedure } from "./trpc";
import { z } from "zod";

const greetingProcedure = publicProcedure
  .input(z.object({ name: z.string() }))
  .query(({ input }) => {
    return { message: `Welcome! ${input.name}` };
  });

export const appRouter = router({
  greeting: greetingProcedure,
});

export type AppRouter = typeof appRouter;
