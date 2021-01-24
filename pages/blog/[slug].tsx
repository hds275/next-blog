import fs from 'fs'
import Head from 'next/head'
import POSTS from '../../posts'

const Post = ({ __html, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html }} />
      </div>
    </>
  )
}

export default Post

export const getStaticPaths = async () => {
  const paths = Object.keys(POSTS).map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const post = POSTS[slug]
  return {
    props: {
      __html: post.__html,
      data: post.data,
    },
  }
}
