/* eslint-disable @next/next/no-html-link-for-pages */
import * as React from "react";
import Link from "next/link";

export interface CompleteProps {
  message: string;
  nextPageUri: string;
}

export const Complete: React.VFC<CompleteProps> = (props) => {
  return (
    <div>
      <h1>Completed</h1>
      <div>
        <h2>The following information has been received</h2>
        <div>
          <p>Message</p>
          <pre>{props.message}</pre>
        </div>
        <div>
          <Link href={props.nextPageUri}>To Next</Link>
        </div>
      </div>
    </div>
  );
};

export default Complete;
