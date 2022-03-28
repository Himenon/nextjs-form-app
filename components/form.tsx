import * as React from "react";
import Link from "next/link";

export interface FormProps {
  formTitle: string;
  message: string;
  _token: string;
  actinoUrl: string;
  readOnly: boolean;
  submitMessage: string;
}

export const Form: React.VFC<FormProps> = (props) => {
  return (
    <div>
      <h1>{props.formTitle}</h1>
      <form action={props.actinoUrl} method="post">
        <p>
          <label htmlFor="message">Message</label>
          <input readOnly={props.readOnly} id="message" name="message" type="text" defaultValue={props.message} />
          <input name="_token" type="hidden" value={props._token} />
        </p>
        <p>
          <input type="submit" value={props.submitMessage} />
        </p>
      </form>
      <Link href="/">To Top</Link>
    </div>
  );
};

export default Form;
