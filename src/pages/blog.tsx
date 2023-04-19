import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const BlogPage = () => {
    return (
        <Layout title="Blog">
            <p>Blog</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Blog" />

export default BlogPage