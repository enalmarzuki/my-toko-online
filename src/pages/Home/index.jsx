import React from "react";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Hero from "../../parts/Hero";

export default function Home(props) {
  return (
    <Layout title="Learn Tailwind CSS 2" {...props}>
      <Hero />

      <Container className="mt-40">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold font-body mb-4 text-center">
              Semua Kategori
            </h1>
            <p className="text-gray-500 text-sm xl:text-xl mb-5 font-body text-center">
              Silahkan Pilih Kategori Yang Tersedia Di
              <br />
              Toko Kami
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
