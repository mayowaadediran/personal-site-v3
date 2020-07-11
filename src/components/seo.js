import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname, article, author }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          defaultAuthor,
          siteUrl,
          defaultImage,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || defaultImage,
        url: `${siteUrl}${pathname || "/"}`,
        article: article,
        author: author || defaultAuthor
      }
      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:type" content="wesbite" />
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (<meta property="og:description" content={seo.description} />)} 
            {seo.article && <meta property="og:type" content="article" />}
            {seo.url && <meta property="og:url" content={seo.url} />}
            <meta name="twitter:creator" content={seo.author} />
            <meta name="twitter:card" content="summary_large_image" />
            {seo.image && <meta property="og:image" content={seo.image} />}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
      }
    }
  }
`