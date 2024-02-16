interface HeaderAnchorLinkProps {
  href: string
  text: string
}
export function HeaderAnchorLink({ href, text }: HeaderAnchorLinkProps) {
  return (
    <a
      href={href}
      className="h-6 border-b-blue-green-background pb-1 text-sm font-semibold text-white hover:border-b hover:text-blue-green-background"
    >
      {text}
    </a>
  )
}
