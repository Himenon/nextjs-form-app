import Link from "next/link";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Sample form application using next.js, which can be realised by using custom-server.
        <br />
        <Link href="https://nextjs.org/docs/advanced-features/custom-server" >Custom Server - next.js</Link>
      </p>
      <p>
        Custom servers have hot reload disabled and must be hot reloaded using nodemon.
        <br />
        <Link href="https://github.com/remy/nodemon">nodemon</Link>
      </p>
      <p>
        <Link href="/">To Top</Link>
      </p>
    </div>
  );
}

export default About;
