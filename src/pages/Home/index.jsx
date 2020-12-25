import React from "react";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Hero from "../../parts/Hero";
import Button from "../../components/Button";

import sepatuPria from "../../assets/image/sepatu-pria.png";
import sepatuWanita from "../../assets/image/sepatu-wanita.png";
import tasPria from "../../assets/image/tas-pria.png";
import tasWanita from "../../assets/image/tas-wanita.png";
import pakaianPria from "../../assets/image/pakaian-pria.png";
import pakaianWanita from "../../assets/image/pakaian-wanita.png";
import jamTangan from "../../assets/image/jam-tangan.png";
import elektronik from "../../assets/image/elektronik.png";
import laptop from "../../assets/image/laptop.png";
import sepatu from "../../assets/image/sepatu.jpg";

import TitleSection from "../../parts/TitleSection";
import Card from "../../components/Card";
import Slider from "../../parts/Slider";
import { postcssPlugin } from "autoprefixer";

const dataCategory = {
  allCategorys: {
    id: "asd31123",
    title: "Semua Kategori",
    description: "Silahkan Pilih Kategori Yang Tersedia Di Toko Kami",
    category: [
      {
        id: "asd31123",
        title: "Sepatu Pria",
        imgUrl: sepatuPria,
      },

      {
        id: "asd31123",
        title: "Sepatu Wanita",
        imgUrl: sepatuWanita,
      },

      {
        id: "asd31123",
        title: "Tas Pria",
        imgUrl: tasPria,
      },
      {
        id: "asd31123",
        title: "Tas Wanita",
        imgUrl: tasWanita,
      },

      {
        id: "asd31123",
        title: "Pakaian Pria",
        imgUrl: pakaianPria,
      },

      {
        id: "asd31123",
        title: "Pakaian Wanita",
        imgUrl: pakaianWanita,
      },
      {
        id: "asd31123",
        title: "Jam Tangan",
        imgUrl: jamTangan,
      },

      {
        id: "asd31123",
        title: "Laptop",
        imgUrl: laptop,
      },

      {
        id: "asd31123",
        title: "Elektronik",
        imgUrl: elektronik,
      },
    ],
  },
  produkTerlaris: {
    id: "asd31123",
    title: "Produk Terlaris",
    description: "Beberapa Produk Paling Laris Yang Ada Di Toko Kami",
  },
};

export default function Home(props) {
  return (
    <Layout title="Learn Tailwind CSS 2" {...props}>
      <Hero />
      <TitleSection
        title={dataCategory.allCategorys.title}
        desc={dataCategory.allCategorys.description}
      />
      <Slider data={dataCategory.allCategorys} />

      <TitleSection
        title={dataCategory.produkTerlaris.title}
        desc={dataCategory.produkTerlaris.description}
      />

      <Container className="pb-36">
        <div className="flex flex-wrap -mx-4 md:items-center">
          <div className="w-3/12 lg:w-3/12 xl:w-4/12 px-4 inline-flex">
            <div className="box-border w-full shadow-2xl rounded-3xl overflow-hidden h-auto ">
              <div className="overflow-hidden  h-sixPercent">
                <img src={sepatu} alt="Terlaris" className="w-full h-full" />
              </div>
              <div className="box-border py-7 px-6 h-full">
                <p className="font-semibold text-2xl mb-3">Adidas Ultraboost</p>
                <p className="text-2xl font-semibold">Rp. 1.350.000</p>
              </div>
            </div>
          </div>

          <div className="w-3/12 lg:w-3/12 xl:w-4/12 px-4 inline-flex">
            <div className="box-border w-full shadow-2xl rounded-3xl overflow-hidden h-auto ">
              <div className="overflow-hidden  h-sixPercent">
                <img src={sepatu} alt="Terlaris" className="w-full h-full" />
              </div>
              <div className="box-border py-7 px-6 h-full">
                <p className="font-semibold text-2xl mb-3">Adidas Ultraboost</p>
                <p className="text-2xl font-semibold">Rp. 1.350.000</p>
              </div>
            </div>
          </div>

          <div className="w-3/12 lg:w-3/12 xl:w-4/12 px-4 inline-flex">
            <div className="box-border w-full shadow-2xl rounded-3xl overflow-hidden h-auto ">
              <div className="overflow-hidden  h-sixPercent">
                <img src={sepatu} alt="Terlaris" className="w-full h-full" />
              </div>
              <div className="box-border py-7 px-6 h-full">
                <p className="font-semibold text-2xl mb-3">Adidas Ultraboost</p>
                <p className="text-2xl font-semibold">Rp. 1.350.000</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
