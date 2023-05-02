import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

interface IBlogPostProps {
    data: Queries.PostDetailQuery,
    children: any,
}

export default function BlogPost({ data, children }: IBlogPostProps) {
    return (
        <Layout title="">
            <div>{children}</div>
        </Layout>
    )
}

export const query = graphql`
    query PostDetail($frontmatter__slug: String) {
        mdx(frontmatter: { slug: { eq: $frontmatter__slug}}){
            body
            frontmatter {
                author
                category
                date
                title
                slug
            }
        }
    }
`;