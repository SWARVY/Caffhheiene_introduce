'use client'

import { useEffect, useState } from 'react'

export default function SidebarToc() {
  const [headingElements, setHeadingElements] = useState<
    {
      index: string
      size: number
    }[]
  >([])

  useEffect(() => {
    const targetHeadings = Array.from(document.querySelectorAll('h2, h3'))

    setHeadingElements(
      targetHeadings.map((header) => ({
        index: header.textContent as string,
        size: (+header.nodeName[1] - 1) * 20,
      })),
    )
  }, [])

  return (
    <aside className="grid justify-items-center">
      <ul className="space-y-2">
        {headingElements.map(({ index, size }) => (
          <li
            style={{
              paddingLeft: `${size}px`,
              fontSize: `${17 - size / 15}px`,
            }}
          >
            {index}
          </li>
        ))}
      </ul>
    </aside>
  )
}
