import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold">{children}</h2>
      <div className="mt-2 h-[3px] w-[100px] rounded-full bg-blue-green-background"></div>
    </div>
  )
}
