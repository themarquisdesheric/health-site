import React from 'react';
import { graphql } from 'gatsby';

export default ({
  data: { 
    markdownRemark: { 
      frontmatter = {}, 
      html = {}
    } = {} 
  } = {}
}) =>  (
  <div className="blog-post-container">
    <div className="blog-post">
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
