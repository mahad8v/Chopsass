import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className='ml-72 mt-20 min-h-[100vh]'>
      {children}
    </div>
  );
};
