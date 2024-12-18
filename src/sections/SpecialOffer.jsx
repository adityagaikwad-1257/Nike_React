import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Special offer"
          width={773} height={683} 
          className="object-contain w-full"
          />
      </div>
      
      <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
              Special <span className="text-coral-red">Offer</span>
            </h2>
            <p className='mt-4 info-text'>
              Embark on a shopping journey that redefines your experience with
              unbeatable deals. From premier selections to incredible savings, we
              offer unparalleled value that sets us apart.
            </p>
            <p className='mt-6 info-text'>
              Navigate a realm of possibilities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with us is
              nothing short of exceptional.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <Button label="View details" iconUrl={arrowRight}/>
              <Button label="Learn more"
                  bgColor="bg-white"
                  borderColor="border-slate-gray"
                  textColor="text-slate-gray"/>
            </div>
        </div>
    </section>
  )
}

export default SpecialOffer