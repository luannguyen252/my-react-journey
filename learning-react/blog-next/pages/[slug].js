import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Post({ post }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{post.Title}</h1>
        <p className={styles.description}>{post.Description}</p>
        <div style={{ maxWidth: "50%" }}>{post.Content}</div>
        <div style={{ paddingTop: 24, color: "" }}>
          <Link href="/">
            <a style={{ textDecoration: "underline" }}>Back to Home</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>{" "}
          <span style={{ paddingLeft: 8, paddingRight: 8 }}>and</span>
          <span className={[styles.logo, { paddingBottom: 4 }]}>
            <Image
              src="/strapi-dark.svg"
              alt="Strapi Logo"
              width={80}
              height={24}
            />
          </span>
        </a>
      </footer>

      <div className="bg" />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { slug: post.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`);
  const data = await res.json();
  const post = data[0];

  return {
    props: {
      post,
    },
  };
}
