import Head from 'next/head'
import { GetStaticProps } from 'next'

import Avatar from '../assets/images/avatar.svg'

import { stripe } from '@/services/stripe'
import { SubscribeButton } from '@/components/SubscribeButton'
import styles from '@/styles/pages/home.module.scss'

type HomeProps = {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br /> the <span>React</span> world
          </h1>
          <p>
            Get access to all the publications <br />{' '}
            <span>for {product.amount}/month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Avatar />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IXpEAJ7bUeBFYVCf1lx7haZ')

  return {
    props: {
      product: {
        priceId: price.id,
        amount: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(price.unit_amount / 100)
      }
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
