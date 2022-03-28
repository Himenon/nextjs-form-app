import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import next from "next";
import registerRouter from "./register";
import confirmRouter from "./confirm";
import completeRouter from "./complete";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

const run = async () => {
  const app = next({
    dev,
    dir: ".",
  });
  await app.prepare();
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
  const handler = app.getRequestHandler();

  server.use("/register", registerRouter);
  server.use("/confirm", confirmRouter);
  server.use("/complete", completeRouter);

  
  server.all("*", (req, res) => {
    return handler(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
};

run();
