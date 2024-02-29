"use client";

import React , { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Jumbotron = (props) => {


    const [imageURL, setImageURL] = useState(props.imageURL) ;
    const [price, setPrice] = useState(props.price);
    const [name, setProdName] = useState(props.name);
    const [descr, setVisible] = useState(props.descr);
    const [prodID, setprodID] = useState(props.prodID);
    console.log(imageURL)

  return (
    <div >
        <div className="relative overflow-hidden  text-center"
            style={{height:'500px'}}>
          <Image src={imageURL}  layout="fill" style={{objectFit: "contain"}} ></Image>
  
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-semibold">{name}</h2>
        <h4 className="mb-6 text-xl font-semibold">{descr}</h4>

        <Link href="/pages/product/{prodID}"
         className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
         data-te-ripple-init
         data-te-ripple-color="light">
            Shop Now</Link>

        
      </div>
    </div>
  </div>


</div>
        
    </div>
  )
}

export default Jumbotron