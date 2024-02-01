import { GithubSVG, NextSVG, TistorySVG } from '@/public/svgs'
import { ReactNode } from 'react'

export interface ShortcutProps {
  svg: ReactNode
  platform: string
  url: string
  isManaged: boolean
}

export const SHORTCUT = [
  {
    svg: <GithubSVG className="h-full w-full" />,
    platform: 'Github',
    url: 'https://github.com/SWARVY',
    isManaged: true,
  },
  {
    svg: <NextSVG className="h-full w-full" />,
    platform: 'Blog',
    url: 'https://caffhheiene.vercel.app',
    isManaged: true,
  },
  {
    svg: <TistorySVG className="h-full w-full" />,
    platform: 'Tistory',
    url: 'https://swarvy.tistory.com/',
    isManaged: false,
  },
]
