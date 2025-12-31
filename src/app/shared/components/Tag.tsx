import React from 'react'

interface TagProps {
    label?: string
}

const Tag = (props: TagProps) => {
  return (
    <div className="border-l-20 border-[#DB4444] p-2 text-[#DB4444]">{props.label}</div>
  )
}

export default Tag
