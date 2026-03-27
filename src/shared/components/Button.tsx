import React, { JSX } from 'react'
import { FaTwitter } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
interface I_ButtonProps {
  text?: string;
  icon?: 'google' | 'facebook' | 'twitter';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}
const iconMap: Record<string, JSX.Element> = {
  google: <FcGoogle />,
  facebook: <FaSquareFacebook />,
  twitter: <FaTwitter />,
}
const Button = ({ text = 'button', icon = undefined, type = 'button', className = '', onClick }: I_ButtonProps) => {
  return (
    <>
      <button type={type} className={`${className} py-3.5`} onClick={onClick}>
        <span className='flex items-center justify-center gap-2 font-medium'>
          {icon && iconMap[icon]}
          {text}
        </span>
      </button>
    </>
  )
}

export default Button;
