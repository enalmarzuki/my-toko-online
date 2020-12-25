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
import jam from "../../assets/image/jam-tangan.jpg";
import hp from "../../assets/image/hp.jpg";
import camera from "../../assets/image/camera.jpg";
import nike from "../../assets/image/nike-jordan.jpg";
import ipad from "../../assets/image/ipad-pro.jpg";
import macbook from "../../assets/image/macbook.jpg";
import airpods from "../../assets/image/airpods.jpg";

import TitleSection from "../../parts/TitleSection";
import Card from "../../components/Card";
import Slider from "../../parts/Slider";

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
    id: "asd311231",
    title: "Produk Terlaris",
    description: "Beberapa Produk Paling Laris Yang Ada Di Toko Kami",
    products: [
      {
        id: "asd31123",
        title: "Guess Clock V2",
        price: "Rp. 450.000",
        imgUrl: jam,
      },

      {
        id: "asd31123",
        title: "Adidas Ultraboost",
        price: "Rp. 1.350.000",
        imgUrl: sepatu,
      },

      {
        id: "asd31123",
        title: "Iphone X 64GB",
        price: "Rp. 10.550.000",
        imgUrl: hp,
      },
      {
        id: "asd31123",
        title: "Sony DSLR V12",
        price: "Rp. 5.650.000",
        imgUrl: camera,
      },

      {
        id: "asd31123",
        title: "Nike Jordan",
        price: "Rp. 1.450.000",
        imgUrl: nike,
      },

      {
        id: "asd31123",
        title: "Ipad Pro",
        price: "Rp. 6.450.000",
        imgUrl: ipad,
      },
      {
        id: "asd31123",
        title: "Macbook Pro 2020",
        price: "Rp. 23.450.000",
        imgUrl: macbook,
      },

      {
        id: "asd31123",
        title: "Airpods",
        price: "Rp. 1.250.000",
        imgUrl: airpods,
      },
    ],
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
      <Slider
        idSlide={dataCategory.allCategorys.id}
        data={dataCategory.allCategorys.category}
        isAllCategory
      />

      <TitleSection
        title={dataCategory.produkTerlaris.title}
        desc={dataCategory.produkTerlaris.description}
      />
      <Slider
        idSlide={dataCategory.produkTerlaris.id}
        data={dataCategory.produkTerlaris.products}
      />
    </Layout>
  );
}
