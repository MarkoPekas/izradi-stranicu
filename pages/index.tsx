import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import NavBar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <div className="flex h-screen w-full">
          <div className="p-24 flex-1 h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl ">Profeisonalna Izrada <span className="font-medium">Web Stranica</span></h1>
            <p className="py-5 text-xl">Profesionalne web stranice, izrađene sa najnovijim tehnologijama i najnovijim dizajnerskim trendovima.</p>
            <button className="text-white bg-118AB2 rounded p-5 px-14 text-xl mr-auto">Cijene</button>
          </div>
          <div className="flex-1 h-full">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
