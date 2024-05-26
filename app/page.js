import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home Page</h1>
        <Link href={"/Posts"}>
          <button>
            Go To Post Page
          </button>
        </Link>
      </div>
    </main>
  );
}
