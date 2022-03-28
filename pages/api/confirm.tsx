import { renderToStaticMarkup } from "react-dom/server";
import type { NextPage, NextApiRequest, NextApiResponse } from "next";

const Component: NextPage = () => {
  return (
    <div>
      <h2>確認画面</h2>
      <form action="/api/confirm" method="post">
        <p>
          <label htmlFor="message">Message</label>
          <input id="message" name="message" type="text" />
          <input name="_token" type="hidden" value="{{ _token }}" />
        </p>
        <p>
          <input type="submit" value="確認画面へ" />
        </p>
      </form>
    </div>
  );
};

function handler(req: NextApiRequest, res: NextApiResponse<string>) {
    const html = renderToStaticMarkup(<Component />);
    res.status(200).end(html);
}

export default handler;
