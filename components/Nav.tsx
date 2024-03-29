'use client'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLink = {
  label: string,
  href: string,
}

type Props = {
  navLinks: NavLink[],
}

export default function Nav({navLinks}: Props) {
  const pathname = usePathname()
  const session = useSession()

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'active' : ''}
          >
            {link.label}
          </Link>
        )
      })}
      {session?.data ? (
        <>
          <Link href="/profile">Profile</Link>
          <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>Sign out</Link>
        </>
      ) : (
        <Link href="/signin">Sign in</Link>
      )}
    </>
  )
}
