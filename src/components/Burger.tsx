"use client"

const Burger:React.FC = () => {
  return (
    <div className="2xl:hidden xl:hidden lg:hidden md:hidden flex flex-col gap-1">
    <span className="h-1 w-9 block bg-slate-600 rounded-md cursor-pointer"></span>
    <span className="h-1 w-9 block bg-slate-600 rounded-md cursor-pointer"></span>
    <span className="h-1 w-9 block bg-slate-600 rounded-md cursor-pointer"></span>
  </div>
  )
}

export default Burger
