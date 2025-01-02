import Link from 'next/link';
import ClientP5Wrapper from './ClientP5Wrapper'
import '@/app/globals.css';

export default function Page() {
  return (
    <div>
      <div className="title-area">
        <Link href="/" >
          <h1 className='main-title' >GENUARY</h1>
        </Link>
        <h2 className='date-title'>25.01.03</h2>
        <h4 className='prompt-desc'>Prompt: Exactly 42 lines of code.</h4>
      </div>

      <ClientP5Wrapper />
    </div>
  )
}