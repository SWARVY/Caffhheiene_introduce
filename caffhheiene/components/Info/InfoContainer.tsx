import INFO from '@/constants/Info'
import Title from '../Title'

export default function InfoContainer() {
  return (
    <section className="grid gap-y-6 p-4">
      <Title name="Info" />
      <div className="grid gap-y-4">
        <span className="text-4xl">{INFO.name}</span>
        <ul className="pl-4">
          {INFO.carrer.map(({ date, detail }) => (
            <li className="grid grid-cols-2">
              <p>{date}</p>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
