import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

const Writings = () => {
  return (
    <Layout>
      <SEO 
        title="Writings" 
        description = "Essays on my thoughts, ideas and experiences in my progression as software developer"
        />
      <div>
        <h1>writings</h1>
        <p>Essays on my thoughts, ideas and experiences as a software developer</p>
      </div>
    </Layout>
  );
}

export default Writings;


