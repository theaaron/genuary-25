'use client'

import dynamic from 'next/dynamic'

const Sketch11 = dynamic(() => import('./Sketch11'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch11 />
}