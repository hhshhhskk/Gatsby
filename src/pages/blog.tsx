import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { PageProps, graphql } from "gatsby"

const BlogPage = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <h3>{file.frontmatter?.title}</h3>
            <h5>{file.frontmatter?.author} in {file.frontmatter?.category}</h5>
            <h6>{file.frontmatter?.date}</h6>
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
query BlogPosts {
  allMdx {
    nodes {
      frontmatter {
        category
        date(formatString: "YYYY.MM.DD")
        title
        author
      }
      excerpt(pruneLength: 50)
    }
  }
}
`;

export const Head = () => <Seo title="Blog" />

export default BlogPage