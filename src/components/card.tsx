import { ReactNode } from 'react'

interface CardProps {
  icon?: ReactNode
  title?: string
  children: ReactNode
  padding?: number
}

export function Card({ padding = 5, icon, title, children }: CardProps) {
  return (
    <div
      className={`text-pretty rounded-md bg-blue-light-background p-${padding} md:p-${padding * 2}`}
    >
      {icon && (
        <div className="mb-4 flex items-center gap-1">
          <div className="rounded-md bg-blue-green-background p-1">{icon}</div>
          <h3 className="font-semibold">{title}</h3>
        </div>
      )}
      <div className="flex h-full flex-col justify-between">{children}</div>
    </div>
  )
}
