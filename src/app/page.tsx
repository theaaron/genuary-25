import Link from "next/link";
import '@/app/globals.css';

export default function Home() {
  return (
    <div>
      <div className="title-area">
        <h1 className="main-title">GENUARY 2025</h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto p-4">
        <Link href="/01" className="grid-item aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link>
        <Link href="/02" className="grid-item aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">02</Link>
        <Link href="/03" className="grid-item aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">03</Link>
        <Link href="/04" className="grid-item aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">04</Link>
        <Link href="/05" className="grid-item aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">05</Link>
        <Link href="/06" className="grid-item aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">06</Link>
        <Link href="/07" className="grid-item aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">07</Link>
      </div>
    </div>
  );
};