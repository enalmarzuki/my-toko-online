import React from "react";
// import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Hero from "../../parts/Hero";
// import Button from "../../components/Button";

import { images } from "../../assets/images";

import Category from "../../parts/Category";
import Banner from "../../parts/Banner";

const dataCategory = [
  {
    id: "asd31123",
    title: "Semua Kategori",
    description: "Silahkan Pilih Kategori Yang Tersedia Di Toko Kami",
    isAllCategory: true,
    items: [
      {
        id: "asd31123",
        title: "Sepatu Pria",
        imgUrl: images.sepatuPria,
      },

      {
        id: "asd31123",
        title: "Sepatu Wanita",
        imgUrl: images.sepatuWanita,
      },

      {
        id: "asd31123",
        title: "Tas Pria",
        imgUrl: images.tasPria,
      },
      {
        id: "asd31123",
        title: "Tas Wanita",
        imgUrl: images.tasWanita,
      },

      {
        id: "asd31123",
        title: "Pakaian Pria",
        imgUrl: images.pakaianPria,
      },

      {
        id: "asd31123",
        title: "Pakaian Wanita",
        imgUrl: images.pakaianWanita,
      },
      {
        id: "asd31123",
        title: "Jam Tangan",
        imgUrl: images.jamTangan,
      },

      {
        id: "asd31123",
        title: "Laptop",
        imgUrl: images.laptop,
      },

      {
        id: "asd31123",
        title: "Elektronik",
        imgUrl: images.elektronik,
      },
    ],
  },
  {
    id: "asd311231",
    title: "Produk Terlaris",
    description: "Beberapa Produk Paling Laris Yang Ada Di Toko Kami",
    isAllCategory: false,
    items: [
      {
        id: "asd31123",
        title: "Guess Clock V2",
        price: "Rp. 450.000",
        imgUrl: images.jam,
      },

      {
        id: "asd31123",
        title: "Adidas Ultraboost",
        price: "Rp. 1.350.000",
        imgUrl: images.sepatu,
      },

      {
        id: "asd31123",
        title: "Iphone X 64GB",
        price: "Rp. 10.550.000",
        imgUrl: images.hp,
      },
      {
        id: "asd31123",
        title: "Sony DSLR V12",
        price: "Rp. 5.650.000",
        imgUrl: images.camera,
      },

      {
        id: "asd31123",
        title: "Nike Jordan",
        price: "Rp. 1.450.000",
        imgUrl: images.nike,
      },

      {
        id: "asd31123",
        title: "Ipad Pro",
        price: "Rp. 6.450.000",
        imgUrl: images.ipad,
      },
      {
        id: "asd31123",
        title: "Macbook Pro 2020",
        price: "Rp. 23.450.000",
        imgUrl: images.macbook,
      },

      {
        id: "asd31123",
        title: "Airpods",
        price: "Rp. 1.250.000",
        imgUrl: images.airpods,
      },
    ],
  },
  {
    id: "asd31123112",
    title: "Produk Terbaru",
    description: "Beberapa Produk Terbaru Yang Ada Di Toko Kami",
    isAllCategory: false,
    items: [
      {
        id: "asd31123",
        title: "Iphone 12 Pro Max",
        price: "Rp. 20.499.000",
        imgUrl: images.terbaru1,
      },

      {
        id: "asd31123",
        title: "Apple Watch Series 5",
        price: "Rp. 7.299.000",
        imgUrl: images.terbaru2,
      },

      {
        id: "asd31123",
        title: "iMac 27 inci",
        price: "Rp. 20.550.000",
        imgUrl: images.terbaru3,
      },
      {
        id: "asd31123",
        title: "Kacamata Anti Radiasi",
        price: "Rp. 750.000",
        imgUrl: images.terbaru4,
      },

      {
        id: "asd31123",
        title: "Tanaman Sintetis",
        price: "Rp. 350.000",
        imgUrl: images.terbaru5,
      },

      {
        id: "asd31123",
        title: "Kalung Emas 999",
        price: "Rp. 3.450.000",
        imgUrl: images.terbaru7,
      },
      {
        id: "asd31123",
        title: "Kacamata Eliza S",
        price: "Rp. 450.000",
        imgUrl: images.terbaru6,
      },

      {
        id: "asd31123",
        title: "Harman / Kardon",
        price: "Rp. 4.250.000",
        imgUrl: images.terbaru8,
      },
    ],
  },
];

const featureds = {
  id: "asfzxc123",
  feature: [
    {
      id: "asfzxc123",
      title: "Pembayaran Online",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, neque. Ad minima voluptas? Cupiditate beatae veniam consectetur animi nihil.",
      imgUrl: images.payOnline,
    },

    {
      id: "asfzxc123",
      title: "Pengirim Cepat",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, neque. Ad minima voluptas? Cupiditate beatae veniam consectetur animi nihil.",
      imgUrl: images.pengiriman,
    },
    {
      id: "asfzxc123",
      title: "Keamanan",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, neque. Ad minima voluptas? Cupiditate beatae veniam consectetur animi nihil.",
      imgUrl: images.security,
    },
  ],
};

export default function Home(props) {
  return (
    <Layout title="Learn Tailwind CSS 2" {...props}>
      <Hero />
      <Category data={dataCategory} />
      <Banner data={featureds} />
    </Layout>
  );
}
