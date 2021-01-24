import Header from '../components/header/header'
import PostsList from '../components/posts-list'
import POSTS from '../posts'

export default function Home({ posts }) {
  return (
    <>
      <main>
        <div className="container">
          <PostsList posts={posts} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = Object.values(POSTS).map(({ slug, data }) => ({
    slug,
    data,
  }))

  return {
    props: {
      posts: posts,
    },
  }
}
