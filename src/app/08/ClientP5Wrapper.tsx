'use client'

import dynamic from 'next/dynamic'

const Sketch08 = dynamic(() => import('./Sketch08'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch08 />
}