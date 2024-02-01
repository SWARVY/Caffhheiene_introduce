import HeroSection from '@/components/Home/HeroSection'
import SideNaviagtor from '@/components/Home/SideNavigator'
import SETTINGS from '@/constants/Settings'

export default function Home() {
  return (
    <div className="flex-col font-Pretendard_Rg">
      <div className="grid grid-cols-3">
        <SideNaviagtor />
        <div
          className="col-span-2 bg-contain bg-right bg-fixed bg-no-repeat brightness-75"
          style={{
            backgroundImage: `url(${SETTINGS.mainBackgroundImage})`,
          }}
        >
          <HeroSection />
        </div>
      </div>
    </div>
  )
}
