'use client'

import dynamic from 'next/dynamic'

const Sketch13 = dynamic(() => import('./Sketch13'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch13 />
}