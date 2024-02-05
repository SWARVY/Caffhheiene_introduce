import HeroSection from '@/components/Home/HeroSection'
import SideNaviagtor from '@/components/Home/SideNavigator'
import InfoContainer from '@/components/Info/InfoContainer'
import ProjectContainer from '@/components/Project/ProjectContainer'
import SidebarToc from '@/components/SidebarToc'
import SETTINGS from '@/constants/Settings'

export default function Home() {
  return (
    <div className="grid gap-y-10 font-Pretendard_Rg">
      <div className="grid lg:grid-cols-4">
        <SideNaviagtor />
        <div
          className="bg-cover bg-bottom bg-local bg-no-repeat backdrop-brightness-75 md:bg-fixed lg:col-span-3 "
          style={{
            backgroundImage: `url(${SETTINGS.mainBackgroundImage})`,
          }}
        >
          <HeroSection />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 font-Gyeonggi_Rg">
        <div className="invisible lg:visible">
          <SidebarToc />
        </div>
        <div className="grid gap-y-10 lg:col-span-3">
          <InfoContainer />
          <ProjectContainer />
        </div>
      </div>
    </div>
  )
}
