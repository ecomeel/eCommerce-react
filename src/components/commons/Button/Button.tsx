import React from 'react'

import './button.scss'

interface IButtonProps {
  title: string;
  handleClick: () => void
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  return (
    <button onClick={props.handleClick} className='button'>{props.title}</button>
  )
}
