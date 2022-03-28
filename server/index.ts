import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

import next from "next";

const port = parseInt(process.env.PORT || "4000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: process.cwd() });
const handle = app.getRequestHandler();

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

  server.get("/hello", (req, res) => {
    res.json({ hello: "world" });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
