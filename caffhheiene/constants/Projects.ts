export interface ProjectInfo {
  name: string
  url: URL
  date: string
  descriptions: string[]
  links: string[]
  techStacks: string[]
}

export const PROJECT_LIST: ProjectInfo[] = [
  {
    name: 'KUBS',
    url: new URL('https://github.com/SWARVY/KUBS'),
    date: '2022. 11. ~ 2022. 12.',
    descriptions: [],
    links: [],
    techStacks: ['react', 'redux', 'javascript'],
  },
  {
    name: '이집내집',
    url: new URL('https://github.com/SWARVY/Ezipnaezip_web'),
    date: '2023. 04. ~ 2022. 05.',
    descriptions: [],
    links: [],
    techStacks: ['react', 'recoil', 'react-query', 'tailwindcss', 'javascript'],
  },
  {
    name: '개인 기술블로그',
    url: new URL('https://github.com/SWARVY/Caffhheiene_web'),
    date: '2023. 10. ~ 개발중',
    descriptions: [],
    links: [],
    techStacks: ['nextjs', 'recoil', 'tailwindcss', 'typescript'],
  },
  {
    name: '우테코 프리코스 커뮤니티 채널 관리 봇',
    url: new URL('https://github.com/woowacourse-bot'),
    date: '2023. 11. ~ 2023. 12.',
    descriptions: [],
    links: [],
    techStacks: ['discord', 'javascript'],
  },
  {
    name: '새싹콘 2024 랜딩 페이지',
    url: new URL('https://github.com/saessakconcert2024/sskcon2024-client'),
    date: '2023. 12. ~ 2023. 12.',
    descriptions: [],
    links: [],
    techStacks: ['nextjs', 'typescript'],
  },
]
