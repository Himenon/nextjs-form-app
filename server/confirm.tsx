import * as React from "react";
import * as ReactDOM from "react-dom/server";
import express from "express";
import { getUser, generateToken, setUser } from "./utils";
import Layout from "../layout/Layout";
import Form, { FormProps } from "../components/form";

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req);
  const user = getUser(req);
  console.log("post:/confirm = " + JSON.stringify({ user, body: req.body }));
  if (user && user.token === req.body._token) {
    const token = generateToken();
    const props: FormProps = {
      formTitle: "確認画面",
      message: req.body.message,
      _token: token,
      readOnly: true,
      actinoUrl: "/complete",
      submitMessage: "確定する",
    };
    const Element = (
      <Layout>
        <Form {...props} />
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
