'use client'

import dynamic from 'next/dynamic'

const Sketch05 = dynamic(() => import('./Sketch05'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch05 />
}