import Link from "next/link"

export default async function Projects() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // throw Error("HAHA")
    return (
        <div className='center-top'>
            <h1>Projects</h1>
            {/* <Link href="/">Home</Link> */}
        </div>
    )
}
