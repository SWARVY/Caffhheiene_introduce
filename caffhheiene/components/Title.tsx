interface TitleProps {
  name: string
}

export default function Title({ name }: TitleProps) {
  return (
    <div className="pb-8 text-6xl border-b-8 border-black font-Magnolia font-semibold">
      <h2 className="">{name}</h2>
    </div>
  )
}
