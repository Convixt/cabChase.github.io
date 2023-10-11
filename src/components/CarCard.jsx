import PrimaryButton from "./PrimaryButton";

const CarCard = ({carName, imageSrc}) => {
  return (
    <div className="mx-auto">
      <img src = {imageSrc} alt="" className="mx-auto" />
        <div className="PX-5">
          <h3 className="text-dark-gray text-[27px] font-bold mb-[18px] mt-6 text-center md:text-start">
            {carName}
          </h3>

          <div className="flex gap-3  mx-auto flex-wrap justify-center md:justify-start">

            <div className="flex gap-3 items-center">
              <div className="h-[5px] w-[5px] bg-accent-gray rounded-full" />
              <p className="text-dark-gray">Cab</p>
            </div>
            
            <div className="flex gap-3 items-center">
              <div className="h-[5px] w-[5px] bg-accent-gray rounded-full" />
              <p className="text-dark-gray">Driver Charges</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="h-[5px] w-[5px] bg-accent-gray rounded-full" />
              <p className="text-dark-gray">Night Charge</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="h-[5px] w-[5px] bg-accent-gray rounded-full" />
              <p className="text-dark-gray">Toll tax</p>
            </div>

            <div className="my-7 h-[1px] bg-accent-gray w-full" />

            <div className="flex flex-col xl:flex-row justify-start xl:justify-between items-center gap-5">
              <h2 className="font-kalam font-bold text-4xl text-primary-black">
              ₹10{""}
              <span className="font-raleway text-dark-gray text-xl font-normal">
                /kilometer
              </span>
              </h2>

              <PrimaryButton classname="w-full xl:w-fit">Book Now</PrimaryButton>

              
            </div>
           
          </div>
        </div>

    </div>
  )
};

export default CarCard;
