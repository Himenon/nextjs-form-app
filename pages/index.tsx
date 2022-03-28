import Link from "next/link";

function About() {
  return (
    <div>
      <h1>Top Page</h1>
      <ul>
        <li>
          <Link href="/about">About Page</Link>
        </li>
        <li>
          <Link href="/register">Regsiter Form</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
