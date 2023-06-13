import Link from "next/link";
import styles from'../../styles/page.module.css'
export default function About() {
    return (
        <main className={styles.main}>
            <h1>About page</h1>
            <Link href="/">Home</Link>
        </main>
    )
}