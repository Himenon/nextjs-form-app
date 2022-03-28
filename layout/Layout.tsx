import * as React from "react";

export interface Props {
  children?: JSX.Element;
}

export const Component: React.FC<Props> = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
};


export default Component;