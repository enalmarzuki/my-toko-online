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

      <Container className="mt-12">
        <div className="flex items-center -mx-4 pb-28">
          <div className="inline-block whitespace-nowrap overflow-x-scroll scroll">
            <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
              <div className="box-border bg-blueSecondary rounded-3xl px-2 py-4">
                <div className="h-28 overflow-hidden flex items-center justify-center">
                  <img src={sepatuPria} alt="Sepatu Pria" />
                </div>
                <p className="font-semibold text-xl text-center">Sepatu Pria</p>
              </div>
            </div>

            <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
              <div className="box-border bg-blueSecondary rounded-3xl px-2 py-4">
                <div className="h-28 overflow-hidden flex items-center justify-center">
                  <img src={sepatuWanita} alt="Sepatu Wanita" />
                </div>
                <p className="font-semibold text-xl text-center">
                  Sepatu Wanita
                </p>
              </div>
            </div>

            <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
              <div className="box-border bg-blueSecondary rounded-3xl px-2 py-4">
                <div className="h-28 overflow-hidden flex items-center justify-center">
                  <img src={tasPria} alt="Tas Pria" />
                </div>
                <p className="font-semibold text-xl text-center">Tas Pria</p>
              </div>
            </div>

            <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
              <div className="box-border bg-blueSecondary rounded-3xl px-2 py-4">
                <div className="h-28 overflow-hidden flex items-center justify-center">
                  <img src={tasWanita} alt="Tas Wanita" />
                </div>
                <p className="font-semibold text-xl text-center">Tas Wanita</p>
              </div>
            </div>

            <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
              <div className="box-border bg-blueSecondary rounded-3xl px-2 py-4">
                <div className="h-28 overflow-hidden flex items-center justify-center">
                  <img src={pakaianPria} alt="Pakaian Pria" />
                </div>
                <p className="font-semibold text-xl text-center">
                  Pakaian Pria
                </p>
              </div>
            </div>

            <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
              <div className="box-border bg-blueSecondary rounded-3xl px-2 py-4">
                <div className="h-28 overflow-hidden flex items-center justify-center">
                  <img src={pakaianWanita} alt="Pakaian Wanita" />
                </div>
                <p className="font-semibold text-xl text-center">
                  Pakaian Wanita
                </p>
              </div>
            </div>

            <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
              <div className="box-border bg-blueSecondary rounded-3xl px-2 py-4">
                <div className="h-28 overflow-hidden flex items-center justify-center">
                  <img src={jamTangan} alt="Jam Tangan" />
                </div>
                <p className="font-semibold text-xl text-center">Jam Tangan</p>
              </div>
            </div>

            <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
              <div className="box-border bg-blueSecondary rounded-3xl px-2 py-4">
                <div className="h-28 overflow-hidden flex items-center justify-center">
                  <img src={laptop} alt="Laptop" />
                </div>
                <p className="font-semibold text-xl text-center">Laptop</p>
              </div>
            </div>

            <div className="w-1/1 lg:w-3/12 xl:w-2/12 px-4 inline-flex">
              <div className="box-border bg-blueSecondary rounded-3xl px-2 py-4">
                <div className="h-28 overflow-hidden flex items-center justify-center">
                  <img src={elektronik} alt="Elektronik" />
                </div>
                <p className="font-semibold text-xl text-center">Elektronik</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
