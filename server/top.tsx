import * as React from "react";
import * as ReactDOM from "react-dom/server";
import express from "express";
import { generateToken, setUser } from "./utils";
import Layout from "../layout/Layout";
import Form, { FormProps } from "../components/form";

const router = express.Router();

router.get("/", (req, res) => {
  const token = generateToken();
  setUser(req, { token });
  const props: FormProps = {
    formTitle: "入力画面",
    message: "",
    _token: token,
    readOnly: false,
    actinoUrl: "/confirm",
    submitMessage: "確認する",
  };

  const Element = (
    <Layout>
      <Form {...props} />
    </Layout>
  );
  const html = ReactDOM.renderToStaticMarkup(Element);
  setUser(req, { token });
  res.send(html);
});

export default router;
