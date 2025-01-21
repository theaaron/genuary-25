'use client'

import dynamic from 'next/dynamic'

const Sketch09 = dynamic(() => import('./Sketch09'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch09 />
}