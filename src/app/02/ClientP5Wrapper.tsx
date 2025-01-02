'use client'

import dynamic from 'next/dynamic'

const Sketch01 = dynamic(() => import('./Sketch02'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch01 />
}