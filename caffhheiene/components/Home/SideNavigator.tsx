import { SHORTCUT } from '@/constants/Shortcut'
import { LogoSVG } from '@/public/svgs'
import NavigatorLink from './NavigatorLink'

export default function SideNaviagtor() {
  return (
    <nav className="grid h-screen w-full z-50 justify-items-center items-center gap-10 p-4 bg-background_dark ">
      <div className="flex-col h-fit items-center justify-center">
        <LogoSVG className="w-full fill-white shadow-md" />
        <ul className="p-4 space-y-10">
          {SHORTCUT.map(({ svg, platform, url, isManaged }) => (
            <NavigatorLink
              svg={svg}
              platform={platform}
              url={url}
              isManaged={isManaged}
            />
          ))}
        </ul>
        <div className="grid justify-items-center text-white font-Magnolia gap-y-10 mt-10">
          <div className="flex-col justify-center items-center">
            <div className="flex items-center gap-x-2">
              <div className="rounded-full h-3 w-3 bg-green-400" />
              <p>Currently Managed</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="rounded-full h-3 w-3 bg-red-500" />
              <p>Currently Not Managed</p>
            </div>
          </div>
          <p className="">swarvy0826@naver.com</p>
        </div>
      </div>
    </nav>
  )
}
