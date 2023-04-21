import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { PageProps, graphql } from "gatsby"

const BlogPage = ({ data }: PageProps<Queries.BlogTitlesQuery>) => {
    return (
        <Layout title="Blog">
            <ul>
                {data.allFile.nodes.map((file, index) => (
                    <li key={index}>{file.name}</li>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql`
query BlogTitles {
    allFile {
      nodes{
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />

export default BlogPage