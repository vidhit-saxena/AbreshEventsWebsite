'use client';

import ModelViewer from '@/Sections/ModelViewer';
import { Banner } from "@/Sections/Banner";
import { Navbar } from "@/Sections/Navbar";
import {Hero} from "@/Sections/Hero"
import LogoTicker from "@/Sections/LogoTicker";
import Introduction  from "@/Sections/Introduction";
import AllEvents from "@/Sections/AllEvents"



export default function Home() {
  return (
    <>
      <Banner/>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <ModelViewer/>
      <Introduction/>
      <AllEvents/>
    </>
  );
}
