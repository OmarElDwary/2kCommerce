import express from "express";
import { getPayload } from "./getPayload";
import { nextApp, nextHandler } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";

const app = express();
const portNum = Number(process.env.PORT) || 3000;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});

const start = async () => {
  const payload = await getPayload({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL is: ${cms.getAdminURL()}`);
      },
    },
  });

  //trpc
  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info(`Starting server on port ${portNum}`);

    app.listen(portNum, async () => {
      payload.logger.info(`Server started on port ${portNum}`);
    });
  });
};

start();
