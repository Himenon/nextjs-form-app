import * as React from "react";
import * as ReactDOM from "react-dom/server";
import express from "express";
import { getUser, generateToken, setUser } from "./utils";
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


router.post("/", (req, res) => {
  const user = getUser(req);
  if (user && user.token === req.body._token) {
    const token = generateToken();
    const props: FormProps = {
      formTitle: "Confirm",
      message: req.body.message,
      _token: token,
      readOnly: true,
      actinoUrl: "/complete",
      submitMessage: "Submit",
    };
    const html = ReactDOM.renderToStaticMarkup(<Page {...props} />);
    setUser(req, { token });
    res.status(303).send(html);
  } else {
    res.send(`Expired Session. <a href="/" rel="noopener">To Top</a>`);
  }
});

export default router;
