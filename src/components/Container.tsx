import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='xl:w-[1350px] w-[100%] h-[100vh] flex flex-col'>
      {children}
    </div>
  )
}

export default Container
