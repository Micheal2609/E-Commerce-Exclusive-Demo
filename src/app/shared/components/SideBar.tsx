'use client'
import React, { useState } from 'react'

type Item = {
  id: string
  label: string
  children?: Item[]
}

const items: Item[] = [
  {
    id: '1', label: 'Woman’s Fashion', children: [
      { id: '1-1', label: 'Phones' },
      { id: '1-2', label: 'Laptops' }
    ]
  },
  {
    id: '2', label: 'Men’s Fashion', children: [
      { id: '2-1', label: 'Men' },
      { id: '2-2', label: 'Women' }
    ]
  },
  { id: '3', label: 'Electronics' },
  { id: '4', label: 'Home & Lifestyle' },
  { id: '5', label: 'Medicine' },
  { id: '6', label: 'Sports & Outdoor' },
  { id: '7', label: 'Baby’s & Toys' },
  { id: '8', label: 'Groceries & Pets' },
  { id: '9', label: 'Health & Beauty' }
]

const SideBar = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({})

  const toggle = (id: string) => {
    setOpen(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <aside className="col-span-1 border-r border-gray-200">
        <ul className="list-none">
          {items.map(parent => (
            <li key={parent.id} className="py-2 hover:cursor-pointer" onClick={() => toggle(parent.id)}>
              <div className="flex items-center justify-between">
                <span className="pr-5">{parent.label}</span>
                {parent.children ? (
                  <button
                    onClick={() => toggle(parent.id)}
                    aria-expanded={!!open[parent.id]}
                    className="bg-transparent border-0 p-0 cursor-pointer focus:outline-none"
                  >
                    {open[parent.id] ? '▾' : '▸'}
                  </button>
                ) : null}
              </div>

              {parent.children && open[parent.id] && (
                <ul className="list-none pl-3">
                  {parent.children.map(child => (
                    <li key={child.id} className="py-2 pr-5">
                      <a href={`#${child.id}`} className="text-gray-900 no-underline">{child.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
    </aside>
  )
}

export default SideBar
