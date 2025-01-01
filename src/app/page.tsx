import Link from "next/link";
import '@/app/globals.css';

export default function Home() {
  return (
    <div>
      <div className="main-title source-code-pro-800">
        <h1>GENUARY</h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto p-4">
        <Link href="/01" className="aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link>
        {/* <Link href="/01" className="aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link>
        <Link href="/01" className="aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link>
        <Link href="/01" className="aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link>
        <Link href="/01" className="aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link>
        <Link href="/01" className="aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link>
        <Link href="/01" className="aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link>
        <Link href="/01" className="aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link>
        <Link href="/01" className="aspect-square w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">01</Link> */}
      </div>
    </div>
  );
};