/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Navbar />

      <div className="bg-white w-screen flex justify-center">
        <div className="w-full max-w-[55rem] overflow-visible shadow-sm">
          <img
            className="aspect-auto object-scale-down"
            src="https://images.pexels.com/photos/1340925/pexels-photo-1340925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="main-img"
          />
        </div>
      </div>
      <div className="ig-grid grid grid-cols-2 md:grid-cols-4 py-4 sm:py-7 px-4 gap-4">
        <img
          className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          src="/images/homepage/ig1.png"
          alt=""
        />
        <img
          className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          src="/images/homepage/ig2.png"
          alt=""
        />
        <img
          className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          src="/images/homepage/ig6.png"
          alt=""
        />
        <img
          className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          src="/images/homepage/ig4.png"
          alt=""
        />
      </div>
      <ParallaxBanner
        layers={[
          {
            image: "/images/homepage/riela.png",
            speed: -8,
          },
        ]}
        className="hidden sm:block sm:aspect-[2/1] lg:aspect-[3/1] py-7 object-fit"
      >
        <div className="absolute inset-4 hidden flex-col items-start justify-start md:flex">
          <h1 className="text-sm text-white font-light">Riela - no soy yo</h1>
          <h1 className="text-sm text-white font-light">
            Makeup by @cylvanna_mua
          </h1>
        </div>
      </ParallaxBanner>
      <div className="ig-grid grid grid-cols-2 md:grid-cols-4 sm:py-7 px-4 gap-4">
        <img
          className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          src="/images/homepage/ig5.png"
          alt=""
        />
        <img
          className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          src="/images/homepage/ig3.png"
          alt=""
        />
        <img
          className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          src="/images/homepage/ig7.png"
          alt=""
        />
        <img
          className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          src="/images/homepage/ig8.png"
          alt=""
        />
      </div>
    </div>
  );
}
