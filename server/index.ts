import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import { parse } from 'url'
import { inspect } from "util";

import next from "next";

const port = parseInt(process.env.PORT || "4000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  dir: ".",
});

const handle = app.getRequestHandler();

console.log(inspect(handle, { showHidden: true }));

app.prepare().then(() => {
  const server = express();
  server.set("trust proxy", 1); // trust first proxy
  server.use(
    session({
      secret: "my_session_secret",
      name: "my.connect.sid",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );
  server.use(cookieParser());
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url!, true)
    return handle(req, res, parsedUrl);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
