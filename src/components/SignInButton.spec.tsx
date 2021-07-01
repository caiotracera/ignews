import { fireEvent, render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useSession, signOut, signIn } from 'next-auth/client'

import { SignInButton } from './SignInButton'
import { SessionProps } from './SubscribeButton'

jest.mock('next-auth/client')

describe('SignInButton Component Test Suite', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])
    render(<SignInButton />)

    expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument()
  })

  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: 'John Doe', email: 'john.doe@example.com' },
        expires: 'fake-expires'
      },
      false
    ])

    render(<SignInButton />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('sign out user when click button', () => {
    const useSessionMocked = mocked(useSession)

    const signOutMocked = mocked(signOut)
    useSessionMocked.mockReturnValueOnce(([
      {
        user: { name: 'John Doe', email: 'john.doe@example.com' },
        activeSubscription: 'fake-subscription',
        expires: 'fake-expires'
      },
      false
    ] as unknown) as [SessionProps, boolean])

    render(<SignInButton />)
    const signInButton = screen.getByText('John Doe')

    fireEvent.click(signInButton)
    expect(signOutMocked).toHaveBeenCalled()
  })

  it('sign in user when click button', () => {
    const useSessionMocked = mocked(useSession)

    const signInMocked = mocked(signIn)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SignInButton />)
    const signInButton = screen.getByText('Sign in with GitHub')

    fireEvent.click(signInButton)
    expect(signInMocked).toHaveBeenCalled()
  })
})
