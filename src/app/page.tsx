import Image from 'next/image'
import styles from '../styles/page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js tutorial for beginners</h1>
      <Image
        src="/images/profile.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
        style={{borderRadius:'50%'}}
      />
      <Link href="/about">About</Link>
    </main>
  )
}
