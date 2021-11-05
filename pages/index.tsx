import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import NavBar from '../components/navbar'
import Icon from '../components/svg/Icon'

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <div className="flex h-screen w-full flex-col-reverse md:flex-row">
          <div className="md:p-24 p-4 flex-1 h-full flex flex-col justify-center">
            <h1 className="text-5xl ">Profeisonalna Izrada <span className="font-medium">Web Stranica</span></h1>
            <p className="py-5 text-xl">Potpuna fleksibilnost, besplatna podrška, moderan dizajn</p>
            <div className="w-full flex">
              <button className="min-w-135px p-3 bg-06D6A0 rounded text-white font-medium">
                Cijenik
              </button>
              <button className="min-w-135px p-3 border-06D6A0 border rounded ml-4 text-06D6A0 font-medium">
                Saznaj Više
              </button>
            </div>
          </div>
          <div className="flex-1 h-full">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
