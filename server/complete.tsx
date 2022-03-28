import * as React from "react";
import * as ReactDOM from "react-dom/server";
import express from "express";
import { getUser, generateToken, setUser } from "./utils";
import Layout from "../layout/Layout";
import Complete, { CompleteProps } from "../components/complete";

const router = express.Router();

const Page: React.VFC<CompleteProps> = (props) => {
  return (
    <Layout>
      <Complete {...props} />
    </Layout>
  );
};

router.post("/", (req, res) => {
  const user = getUser(req);
  if (user && user.token === req.body._token) {
    const token = generateToken();
    const props: CompleteProps = {
      message: req.body.message,
      nextPageUri: "/register",
    };
    const html = ReactDOM.renderToStaticMarkup(<Page {...props} />);
    setUser(req, { token });
    res.status(303).send(html);
  } else {
    res.send(`Expired Session. <a href="/" rel="noopener">To Top</a>`);
  }
});

export default router;
