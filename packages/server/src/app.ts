import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "shared";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/trpc", trpcExpress.createExpressMiddleware({ router: appRouter }));

const port = 3000;

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port} `);
});
