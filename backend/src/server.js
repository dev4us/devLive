import "./env";
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import logger from "morgan";

import "./helpers/passport";
import { authenticateJwt } from "./helpers/passport";
import { verifyAuth } from "./helpers/verifyAuth";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, verifyAuth })
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
