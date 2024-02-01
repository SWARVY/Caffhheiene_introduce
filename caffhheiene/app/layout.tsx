import type { Metadata } from 'next'
import './globals.css'
import '@/public/fonts/font.css'

export const metadata: Metadata = {
  title: '신현호 포트폴리오',
  description: '신현호의 작업물들입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
