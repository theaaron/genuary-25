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
        <h2 className='date-title'>25.01.07</h2>
        <h4 className='prompt-desc'>Prompt: Use software that is not intended to create art or images.</h4>
      </div>
      <ClientP5Wrapper />
    </div>
  )
}