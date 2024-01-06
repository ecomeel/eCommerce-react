import React from 'react'
import loaderImg from '../../../assets/img/loader.png'
import './loader.scss'

export const Loader: React.FC = () => {
  return (
    <div className='loader'>
        <img className='loader__spinner' src={loaderImg} alt="" />
    </div>
  )
}
