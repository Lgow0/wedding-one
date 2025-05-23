import Head from 'next/head'
import Image from 'next/image'
// import Resepsi from '../public/assets/icons/resepsi.svg'
import Ring from '../public/assets/icons/ring.svg'

import Location from '../public/assets/icons/location.svg'
import Layout from '@/component/layout/Layout'
import { Fade } from 'react-reveal'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Fade bottom duration={2500}>
      <Layout>
        {/* Header Mobile */}
        <Fade bottom duration={2500}>
        <section
          id="beranda"
          className="flex lg:hidden bg-cover bg-center  w-full h-screen  items-start py-14"
          style={{ backgroundImage: 'url(/assets/ring.png)' }}
          objectFit="cover"
        >
          <div className="flex flex-col  w-full relative">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10">
              <p className="font-habibi ">Pernikahan dari</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Bambang & Partini
              </h4>
              <p className="font-habibi ">01 Januari 2021</p>
            </div>
          </div>
        </section>
        </Fade>
        {/* End Header Mobile */}
        <Fade bottom duration={2500}>
        <section
          id="beranda-dekstop"
          className="hidden lg:grid bg-slate-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 h-screen"
        >
          {/* dekstop */}
          <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
            <div className="flex flex-col text-center my-auto">
              <p>
                “Dan dari tanda-tanda-Nya adalah bahwa Dia 
                menciptakan bagimu dari pasangan kamu sendiri sehingga kamu dapat 
                menemukan ketenangan di dalam mereka dan Dia menempatkan di antara Anda kasih 
                sayang dan belas kasihan. Sesungguhnya dalam hal itu ada tanda-tanda bagi 
                kaum yang berpikir.”
              </p>
              <p>( QS. Ar- Rum 21 )</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-habibi">Pernikahan dari</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Bambang & Partini
              </h4>
              <p className="font-habibi ml-auto">01 Januari 2021</p>
            </div>
          </div>
          <div className="flex w-full relative">
            <Image
              src="/assets/ring.png"
              alt="Picture of the author"
              layout="fill"
              style={{ objectFit: "cover" }}
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
        </Fade>
        {/* End Header Dekstop */}
        <Fade bottom duration={2500}>
        <section
          id="resepsi"
          className="bg-dark-500 py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col  w-full relative lg:h-full">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px lg:hidden"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
              <p className="font-habibi lg:hidden">Pernikahan dari</p>
              <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
                Bambang & Partini
              </h4>
              <p className="lg:hidden font-habibi ">01 Januari 2021</p>
            </div>
          </div>
          <div className="flex w-full px-8 text-white font-habibi text-sm md:text-base lg:text-xl">
            <div className="flex flex-col w-1/2 text-center px-2 break-words">
              <p>Putra dari</p>
              <p>Bapak Badril Munir</p>
              <p>Ibu Sartinah</p>
            </div>
            <div className="flex flex-col w-1/2 text-center px-2 break-words ">
              <p>Putra dari</p>
              <p>Bapak Badril Munir</p>
              <p>Ibu Sartinah</p>
            </div>
          </div>
          <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
                <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" />
                <div className="flex flex-col text-white font-habibi justify-between h-full">
                  <p className="text-base md:text-lg lg:text-3xl">
                    Akad pernikahan{' '}
                  </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    Pukul 08.00 s.d 10.00 WIB
                  </p>
                </div>
              </div>

              <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
                <img
                  src="/assets/icons/resepsi.svg"
                  className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
                />
                <div className="flex flex-col text-white font-habibi justify-between h-full">
                  <p className="text-base md:text-lg lg:text-3xl">Resepsi </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    Pukul 10.00 s.d Selesai
                  </p>
                </div>
              </div>
            </div>
            <p className="hidden md:block mt-12 lg:mt-auto mx-auto text-lg text-white font-habibi">
              Bertempat di mempelai wanita, Perum permata hijau Blok F no 45
            </p>
          </div>
          <div className="flex mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8">
            <button className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base">
              <Location className="h-8 md:h-10 w-8 md:w-10 mr-4" />
              Cek Lokasi
            </button>
          </div>
        </section>
        </Fade>
        <Fade bottom duration={2500}>
        <section
          id="gallery"
          className="bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 h-screen px-4 lg:px-8"
        >
          <h1 className="col-span-2  text-5xl font-great-vibes my-auto mx-auto text-white lg:hidden">
            Gallery
          </h1>
          <div className="flex row-span-3 ">
            {/* Mobile: homepage.jpg */}
            <Image
              src="/assets/homepage.jpg"
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
              quality={100}
              loading="lazy"
              className="block lg:hidden"
            />
            {/* Desktop: homeTest.png */}
            <Image
              src="/assets/homeTest.png"
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
              quality={100}
              loading="lazy"
              className="hidden lg:block"
            />
          </div>
          <div className="flex  row-start-3 col-start-2 row-span-3 lg:row-span-5 bg-white">
            <Image
              src="/assets/homepage3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2  lg:row-span-2">
            <Image
              src="/assets/gallery-mobile/photo-3.png"
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 lg:row-span-3">
            <Image
              src="/assets/homepage4.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-2 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
            <Image
              src="/assets/gallery-mobile/photo-5.png"
              alt="Picture of the author"
              layout="fill"
              style={{ objectFit: "cover" }}
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
        </Fade>
      </Layout>
      </Fade>
    </div>
  )
}
