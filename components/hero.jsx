"use client";

import React from 'react'
import Link from "next/link";
import { Button } from './ui/button';
import Image from 'next/image';
import {useRef} from "react";
import { useEffect } from 'react';
const HeroSection = () => {
  const imageRef=useRef(null);
  useEffect(()=>{
    const imageElement=imageRef.current;
    if(!imageElement)return;
    const handleScroll=()=>{
    const scrollPosition=window.scrollY;
    const scrollThershold=100;
  
    if(scrollPosition>scrollThershold){
      imageElement.classList.add("scrolled");
   }else{
    imageElement.classList.remove("scrolled");
   }
  };
  window.addEventListener("scroll",handleScroll);
  return()=>window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
    <div className='space-y-6 text-center'>
      <div className='space-y-6 mx-auto'>
        <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>
          TRICK YOUR CAREERE WITH PREPTICK
          <br/>
          Professional Success
        </h1>
        <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
          Advance your careere with preptick guidance,interview prep and AI-powered tools for job success.
        </p>
      </div>
      <div className='flex justify-center space-x-4'>
         <Link href="/dashboard"> 
          <Button size="lg" className="px-8">Get Started</Button>
         </Link>
         <Link href="https://design-dev-showcase.lovable.app"> 
          <Button size="lg" className="px-8" variant="outline">Demo Video</Button>
         </Link>
      </div>
    <div className='hero-image-wrapper mt-5 md:mt=0'>
      <div ref={imageRef} className = "hero-image">
        <Image src={"/eee.jpeg"}
        width={1200}
        height={720}
        alt="Banner Preptick"
        className='rounded-lg shadow-2xl boarder mx-auto'
        priority
        />
      </div>
      </div>
    </div>
    </section>

  )
}
export default HeroSection;