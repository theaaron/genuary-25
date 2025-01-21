'use client'

import dynamic from 'next/dynamic'

const Sketch10 = dynamic(() => import('./Sketch10'), { ssr: false })

export default function ClientP5Wrapper() {
  return <Sketch10 />
}