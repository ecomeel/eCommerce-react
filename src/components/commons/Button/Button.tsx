import React from 'react'

import './button.scss'

interface IButtonProps {
  title: string
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  return (
    <button className='button'>{props.title}</button>
  )
}
