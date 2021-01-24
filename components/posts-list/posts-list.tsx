import Link from 'next/link'
import s from './posts-list.module.css'
import cn from 'classnames'

const PostsList = ({ posts }) => {
  return (
    <main className={cn('list-reset', s.list)}>
      {posts.map(({ slug, data }) => {
        const href = '/blog/' + slug
        return (
          <article key={slug} className={s.listItem}>
            <Link href={href}>
              <a>
                <header>
                  <h2>{data.title}</h2>
                </header>
              </a>
            </Link>
            <p>{data.description}</p>
            <Link href={href}>
              <a>Continue...</a>
            </Link>
          </article>
        )
      })}
    </main>
  )
}

export default PostsList
