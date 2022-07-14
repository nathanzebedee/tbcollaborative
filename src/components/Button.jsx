import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, className, ...props }) {
  className = clsx(
    'transition-all duration-200 inline-flex justify-center rounded-2xl bg-pink-600 py-3 px-4 text-base font-semibold text-white hover:bg-indigo-50 hover:text-pink-600 border-2 border-transparent hover:border-pink-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 active:text-white/70',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
