import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Laatste Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}  >Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div> */}<Link to="/">Ga terug naar Home</Link>
  </Layout>
)

export const pageQuery = graphql`
query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
                id
              frontmatter{
                path
                title
                date
                author
              }
            }
          }
        }
}`

export default BlogPage

