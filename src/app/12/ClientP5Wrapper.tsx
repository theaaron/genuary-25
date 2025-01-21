'use client'

import dynamic from 'next/dynamic'

const Sketch12 = dynamic(() => import('./Sketch12'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch12 />
}