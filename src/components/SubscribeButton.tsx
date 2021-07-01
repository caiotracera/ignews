import { signIn, useSession } from 'next-auth/client'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'

import { getStripeJs } from '../services/stripe/public-stripe'
import { api } from '../services/api'
import styles from '../styles/components/subscribeButton.module.scss'

export interface SessionProps extends Session {
  activeSubscription?: {
    data: {
      id: string
      status: string
      price_id: string
    }
  }
}

export function SubscribeButton() {
  const [session]: [SessionProps, boolean] = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    /* istanbul ignore else */
    if (session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data
      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}
