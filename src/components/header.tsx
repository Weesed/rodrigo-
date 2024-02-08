import { Logo } from '@/assets/logo'
import { Sidebar } from './sidebar'

export function Header() {
  return (
    <div className="fixed z-50 flex w-full justify-between bg-blue-background p-5 md:w-[1280px] md:md:rounded-b-lg">
      <Logo />
      <Sidebar />
    </div>
  )
}
