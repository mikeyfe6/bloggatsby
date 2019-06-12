import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import blogStyles from '../styles/modules/blog.module.scss'

// import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost (
    sort: {
      fields: publishedDate,
      order: DESC
    }
  ){
    edges {
      node {
        title
        slug
        publishedDate(
          formatString: "MMMM Do, YYYY"
        )
      }
    }
  }
 }
`)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Laatste Posts</h1>
      <ol className={blogStyles.posts}>     {data.allContentfulBlogPost.edges.map((edge) => {
        return (
          <li className={blogStyles.post}>
            <h2>{edge.node.title}</h2>
            <p>Posted on {edge.node.publishedDate}</p>
            <hr />
            <Link to={`/blog/${edge.node.slug}`}  >Read More</Link>
          </li>
        )
      })}
        <Link to="/">Ga terug naar Home</Link>
      </ol>
    </Layout>
  )
}

export default BlogPage

