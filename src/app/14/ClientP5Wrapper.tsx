'use client'

import dynamic from 'next/dynamic'

const Sketch14 = dynamic(() => import('./Sketch14'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch14 />
}