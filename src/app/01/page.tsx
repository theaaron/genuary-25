import ClientP5Wrapper from './ClientP5Wrapper'
import '@/app/globals.css';

export default function Page() {
  return (
    <div>
      <div className="main-title">
        <h1>GENUARY</h1>
        <h2 className='date-title'>25.01.01</h2>
      </div>

      <ClientP5Wrapper />
    </div>
  )
}