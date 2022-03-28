import type { GetServerSidePropsContext, NextPage } from "next/types";

export interface Props {

}

const Home: NextPage<Props> = () => {
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

Home.getInitialProps = async () => {
  return {};
}

export const getServerSideProps = async ({ req, res, query }: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Home;