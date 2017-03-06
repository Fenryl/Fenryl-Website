import React from 'react'

const Icon = ({
  name = 'warning',
    size = '1em',
    fill = 'currentColor',
    viewBox = '24',
    width,
    height,
    path,
    ...props
}) => (
    <svg {...props}
        width={width || size}
        height={height || size}
        fill={fill}
        viewBox={`0 0 ${viewBox} ${viewBox}`}>
        <path d={path} />
    </svg>
)

export default Icon