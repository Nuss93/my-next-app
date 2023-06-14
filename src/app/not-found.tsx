import Link from "next/link";

export default function NotFound() {
  return (
    <div className="center-page">
        <h1>Page Not Found</h1>
        <Link href="/">Back to safety</Link>
    </div>
  )
}
