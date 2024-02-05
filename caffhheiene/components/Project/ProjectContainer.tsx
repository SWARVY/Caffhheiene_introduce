import { PROJECT_LIST } from '@/constants/Projects'
import ProjectItem from './ProjectItem'
import Title from '../Title'

export default function ProjectContainer() {
  return (
    <section className="grid gap-y-6 p-4">
      <Title name="Project" />
      <ul className="grid gap-y-10">
        {PROJECT_LIST.map(
          ({ name, url, date, descriptions, links, techStacks }) => (
            <ProjectItem
              name={name}
              url={url}
              date={date}
              descriptions={descriptions}
              links={links}
              techStacks={techStacks}
            />
          ),
        )}
      </ul>
    </section>
  )
}
