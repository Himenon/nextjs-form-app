import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <form action="/confirm" method="post">
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

export default Home;
