import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { ReactElement, cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className =
    asPath === rest.href ||
    (asPath.includes('/posts') && rest.href.toString().includes('/posts'))
      ? activeClassName
      : ''

  return <Link {...rest}>{cloneElement(children, { className })}</Link>
}
