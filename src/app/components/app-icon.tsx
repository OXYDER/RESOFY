import { cn } from '@/lib/utils'

type AppIconProps = {
  size?: number
  className?: string
}

export function AppIcon({ size = 48, className }: AppIconProps) {
  return (
    <img
      src="/icon.svg"
      width={size}
      height={size}
      className={cn(className)}
      alt="Resofy"
    />
  )
}