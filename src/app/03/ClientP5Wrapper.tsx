'use client'

import dynamic from 'next/dynamic'

const Sketch03 = dynamic(() => import('./Sketch03'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch03 />
}