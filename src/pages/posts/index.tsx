import styles from '@/styles/pages/posts.module.scss'
import Head from 'next/head'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              tenetur eos molestiae laborum quis quia aliquam, nihil
              voluptatibus voluptatem dolorem praesentium, veritatis nisi facere
              hic maiores ullam ab deserunt perferendis!
            </p>
          </a>

          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              tenetur eos molestiae laborum quis quia aliquam, nihil
              voluptatibus voluptatem dolorem praesentium, veritatis nisi facere
              hic maiores ullam ab deserunt perferendis!
            </p>
          </a>

          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              tenetur eos molestiae laborum quis quia aliquam, nihil
              voluptatibus voluptatem dolorem praesentium, veritatis nisi facere
              hic maiores ullam ab deserunt perferendis!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
