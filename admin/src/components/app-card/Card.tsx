import {  ReactNode } from 'react';

interface CardProps  {
    children: ReactNode
}

export const Card = ({children}:CardProps) => {
  return (
    <div className='bg-white rounded-lg '>
        {children}
    </div>
  )
}
