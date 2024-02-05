import { ProjectInfo } from '@/constants/Projects'
import { CalendarDaysIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

export default function ProjectItem({
  name,
  url,
  date,
  //   descriptions,
  //   links,
  //   techStacks,
}: ProjectInfo) {
  return (
    <li className="flex-col space-y-2">
      <h3 className="text-4xl underline underline-offset-8">
        <Link href={url.href}>{name}</Link>
      </h3>
      <div className="flex items-center gap-x-2">
        <CalendarDaysIcon className="h-4 w-4" />
        <span>{date}</span>
      </div>
    </li>
  )
}
