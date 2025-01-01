import Link from "next/link";
import '@/app/globals.css';  // If in app directory

export default function Home() {
  return (
    <div className="">
      <div className="main-title source-code-pro-800">
        <h1>GENUARY</h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        <Link href="/01" className="grid-item" >01</Link>
        <Link href="/01" className="grid-item" >01</Link>
        <Link href="/01" className="grid-item" >01</Link>
        <Link href="/01" className="grid-item" >01</Link>
        <Link href="/01" className="grid-item" >01</Link>
        <Link href="/01" className="grid-item" >01</Link>
        <Link href="/01" className="grid-item" >01</Link>
        <Link href="/01" className="grid-item" >01</Link>
        <Link href="/01" className="grid-item" >01</Link>
        </div>
    </div>
  );
}
