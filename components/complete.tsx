/* eslint-disable @next/next/no-html-link-for-pages */
import * as React from "react";

export interface CompleteProps {
  message: string;
}

export const Complete: React.VFC<CompleteProps> = (props) => {
  return (
    <div>
      <h1>受付完了</h1>
      <div>
        <h2>以下の内容受けつけました</h2>
        <div>
          <p>Message: {props.message}</p>
        </div>
        <div>
          <a href="/" rel="noopener">
            Topへ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Complete;
