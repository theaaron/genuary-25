'use client'

import dynamic from 'next/dynamic'

const Sketch07 = dynamic(() => import('./Sketch07'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch07 />
}