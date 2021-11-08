import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Bar, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import Intro from '../components/intro'
import intro from '../components/intro'
import Navelem from '../components/mini/Navelem'
import NavBar from '../components/navbar'
import Icon from '../components/svg/Icon'
import { FireIcon, PlayIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
  

  return (
    <div className="w-full min-h-screen font-body">
      <Head>
        <title>Sneaky Coin</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
      </Head>
      <div className="w-full items-center px-8 h-16 flex">
        <div className="flex-1">
          <p></p>
        </div>
        <div className="h-full flex justify-center items-center">
          <Icon h={54} w={54} />
          <p className="text-2xl font-medium">SNKY</p>
        </div>
        <div className="flex-1">

        </div>
      </div>
      <div className="flex w-full flex-col items-center">
        <p className="text-xl md:mt-20 mt-5">スニーキー</p>
        <p className="md:text-5xl text-3xl pt-0 md:max-w-3xl text-center p-10 font-body leading-relaxed">Sneaky is a payment platform custom made for anonymity.</p>
        <div className="flex max-w-2xl w-full flex-col md:flex-row px-10 pb-20 md:pb-0">
          <button className="flex-1 p-4 m-2 bg-06D6A0 text-white rounded font-bold">Invest</button>
          <button className="flex-1 p-4 m-2 border-06D6A0 text-06D6A0 rounded border">Learn</button>
          <button className="flex-1 p-4 m-2 border-06D6A0 text-06D6A0 rounded border">Wallet</button>
        </div>
        <div className="md:flex items-center p-20 hidden">
          <PlayIcon className="w-14 h-14 text-black" />
          <p>What is Sneaky?</p>
        </div>
      </div>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
            document.getElementById('howDoesItWork')!.scrollIntoView({ behavior: 'smooth' })
          }} viewBox="0 0 1440 320"><path fill="#6666ff" fill-opacity="1" d="M0,32L20,74.7C40,117,80,203,120,213.3C160,224,200,160,240,144C280,128,320,160,360,149.3C400,139,440,85,480,74.7C520,64,560,96,600,133.3C640,171,680,213,720,213.3C760,213,800,171,840,170.7C880,171,920,213,960,202.7C1000,192,1040,128,1080,101.3C1120,75,1160,85,1200,122.7C1240,160,1280,224,1320,224C1360,224,1400,160,1420,128L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
        <div className="bg-sexy pb-10 h-screen md:h-auto -mt-1" id="howDoesItWork">
          <p className="md:text-4xl font-bold text-2xl text-center text-white md:-mt-10 p-5" onClick={() => {
            document.getElementById('howDoesItWork')!.scrollIntoView({ behavior: 'smooth' })
          }}>How Does it Work?</p>
          <div className="flex flex-col md:flex-row max-w-5xl h-full md:mx-auto">
            <div className="flex-1 relative">
              <Image src="/g.png" layout="fill" className="object-contain" />
            </div>
            <div className="flex-1 md:p-20 p-5 text-lg text-white" >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam id ad libero ullam fuga quos quas provident autem. Voluptates officiis dignissimos soluta, dolores praesentium facilis aspernatur tempore vel. Veritatis.</p>
            </div>
          </div>
        </div>
        <div className="h-screen"></div>
    </div>
  )
}

export default Home
