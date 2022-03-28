import * as React from "react";
import * as ReactDOM from "react-dom/server";
import express from "express";
import { getUser, generateToken, setUser } from "./utils";
import Layout from "../layout/Layout";
import Complete, { CompleteProps } from "../components/complete";

const router = express.Router();

router.post("/", (req, res) => {
  const user = getUser(req);
  if (user && user.token === req.body._token) {
    const token = generateToken();
    const props: CompleteProps = {
      message: req.body.message,
    };
    const Element = (
      <Layout>
        <Complete {...props} />
      </Layout>
    );
    const html = ReactDOM.renderToStaticMarkup(Element);
    setUser(req, { token });
    res.status(303).send(html);
  } else {
    res.send(`Sessionが切れました。<a href="/" rel="noopener">トップへ</a>`);
  }
});

export default router;
