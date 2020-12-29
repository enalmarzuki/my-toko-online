import React from "react";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

export default function DetailPage(props) {
  return (
    <Layout title="Detail Page" {...props}>
      <div className="bg-gray-100 py-8 px-4">
        <Container>
          <h1>Breadcrumbs</h1>
        </Container>
      </div>

      <Container>
        <div className="flex flex-wrap my-4 md:my-12">
          <div className="flex-1">
            <div className="slider">
              <div className="thumbnail"></div>
              <div className="preview"></div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
