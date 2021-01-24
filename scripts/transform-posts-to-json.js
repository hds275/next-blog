const fs = require('fs')
const path = require('path')
const marked = require('marked')
const matter = require('gray-matter')

const DIR = 'posts'
const posts = {}

fs.readdirSync(DIR)
  .filter((fileName) => {
    return /\.md$/.test(fileName)
  })
  .forEach((fileName) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join(DIR, fileName))
      .toString()
    const parsedMarkdown = matter(markdownWithMetadata)
    const __html = marked(parsedMarkdown.content)
    const slug = fileName.replace('.md', '')
    const data = {
      slug,
      __html,
      data: parsedMarkdown.data,
    }
    posts[slug] = data
  })

fs.writeFileSync(path.join(DIR, 'POSTS.json'), JSON.stringify(posts))
