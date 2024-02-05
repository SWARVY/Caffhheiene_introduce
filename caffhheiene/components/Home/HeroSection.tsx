import INFO from '@/constants/Info'

export default function HeroSection() {
  return (
    <div className="grid h-full justify-items-center items-center text-white font-bold">
      <ul className="text-4xl space-y-3 lg:text-5xl ">
        {INFO.descriptions.map((description) => (
          <li>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
