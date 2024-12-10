import { useState } from "react"

import Button from "../components/Button"
import {arrowRight} from "../assets/icons"
import {shoes, statistics} from "../constants/index"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
    const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

    return (
      <section id="home"
        className="w-full 
        flex xl:flex-row flex-col
        justify-center min-h-screen
        gap-10 max-container"
      >
        <div className="relative 
        xl:w-2/5 flex flex-col
        justify-center items-start
        w-full max-xl:padding-x pt-28">
          <p className="text-xl max-sm:text-lg font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-6 font-palanquin text-8xl max-sm:text-[48px] max-sm:leading-[62px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
            <br/>
            <span className="text-coral-red inline-block mt-1">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg max-md:text-sm leading-8 mt-4 mb-7 w-60 sm:max-w-sm">Discover stylish Nike
            arrivals, quality comfort and innovation
            for your active life.
          </p>
          <Button label="Shop now"
                  iconUrl={arrowRight}/>

          <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-12">
            {
              statistics.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-4xl font-palanquin font-bold">{stat.value}</p>
                  <p className="leading-5 font-montserrat text-slate-gray">{stat.label}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div className="h-[93vh] relative flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-cover bg-center">
          <img
            src={bigShoeImg}
            alt="Shoe 1"
            width={610}
            height={500}
            className="bject-contain relative z-10"
          />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] left-[10%] max-sm:px-6">
            {
              shoes.map((shoe) => (
                <div key={shoe}>
                  <ShoeCard shoeData={shoe} 
                            changeBigShoeImage=
                            {(shoe) => setbigShoeImg(shoe)}
                            bigShoeImg={bigShoeImg}
                            />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
}

export default Hero