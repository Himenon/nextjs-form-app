function Page() {
  return <div>Hello World</div>;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default Page;
