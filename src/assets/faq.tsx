import React from 'react'
import type { SVGProps } from 'react'

export function FAQ(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 15H6l-4 4V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m5-6v14l-4-4H8a1 1 0 0 1-1-1v-1h14V8h1a1 1 0 0 1 1 1M8.19 4c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91C7.11 9.08 7 9.5 7 10h2c0-.31.04-.56.13-.74c.09-.18.26-.36.51-.52c.45-.24.82-.53 1.11-.93c.29-.4.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82C9.85 4.23 9.12 4 8.19 4M7 11v2h2v-2zm6 2h2v-2h-2zm0-9v6h2V4z"
      ></path>
    </svg>
  )
}