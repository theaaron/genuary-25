'use client'

import dynamic from 'next/dynamic'

const Sketch04 = dynamic(() => import('./Sketch04'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch04 />
}