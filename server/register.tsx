import * as React from "react";
import * as ReactDOM from "react-dom/server";
import express from "express";
import { generateToken, setUser } from "./utils";
import Layout from "../layout/Layout";
import Form, { FormProps } from "../components/form";

const router = express.Router();

const Page: React.VFC<FormProps> = (props) => {
  return (
    <Layout>
      <Form {...props} />
    </Layout>
  );
};

router.get("/", (req, res) => {
  const token = generateToken();
  setUser(req, { token });
  const props: FormProps = {
    formTitle: "Register",
    message: "",
    _token: token,
    readOnly: false,
    actinoUrl: "/confirm",
    submitMessage: "Next Confirm",
  };
  const html = ReactDOM.renderToStaticMarkup(<Page {...props} />);
  setUser(req, { token });
  res.send(html);
});

export default router;
