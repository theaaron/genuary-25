'use client'

import dynamic from 'next/dynamic'

const Sketch06 = dynamic(() => import('./Sketch06'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch06 />
}