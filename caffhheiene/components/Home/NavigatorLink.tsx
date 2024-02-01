import { ShortcutProps } from '@/constants/Shortcut'
import Link from 'next/link'

export default function NavigatorLink({
  svg,
  platform,
  url,
  isManaged,
}: ShortcutProps) {
  return (
    <Link className="group flex" href={url} target="_blank" rel="norefferer">
      <li className="flex p-1 w-0 gap-x-4 text-4xl justify-between items-center bg-yellow-400 group-hover:w-full group-hover:transition-all group-hover:duration-300">
        <div className="flex transition ease-in-out duration-[100ms] opacity-0 group-hover:opacity-100">
          <div className="w-7 h-7 ml-2 fill-white">{svg}</div>
          <div className="relative flex">
            <div
              className={`animate-ping absolute ${isManaged ? 'bg-green-400' : 'bg-red-500'} rounded-full h-2 w-2`}
            />
            <div
              className={`relative ${isManaged ? 'bg-green-400' : 'bg-red-500'} rounded-full h-2 w-2`}
            />
          </div>
        </div>
        <span className="flex justify-start text-white font-Magnolia">
          {platform}
        </span>
      </li>
    </Link>
  )
}
