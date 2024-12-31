'use client'

import dynamic from 'next/dynamic'

const Sketch01 = dynamic(() => import('./Sketch01'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch01 />
}