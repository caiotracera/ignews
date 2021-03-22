import styles from '@/styles/components/subscribeButton.module.scss'

type SubscribeButtonProps = {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}
