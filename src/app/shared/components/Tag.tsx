import React from 'react'

interface TagProps {
    label?: string
}

const Tag = (props: TagProps) => {
  return (
    <div className="border-l-4 border-red-500 pl-2">{props.label}</div>
  )
}

export default Tag
