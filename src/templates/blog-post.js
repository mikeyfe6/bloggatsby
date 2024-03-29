import React from 'react'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SEO from "../components/seo"

import Layout from '../components/layout';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body{
            json
        }
        }
    }`

const BlogPost = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['nl']
                const url = node.data.target.fields.file['nl'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout>
            <SEO title={props.data.contentfulBlogPost.title} />
            <h1> {props.data.contentfulBlogPost.title} </h1>
            <p> Posted on {props.data.contentfulBlogPost.publishedDate} </p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}

export default BlogPost