import paymentIcon from "../assets/payment-icon.svg";
import bookmarkIcon from "../assets/bookmark-icon.svg";
import userIcon from "../assets/user-icon.svg";
import chatIcon from "../assets/chat-icon.svg";

import { ServiceCard } from "../components";

const Services = () => {
  return (
    <div className="bg-white mt-36">
      <div className="py-30 bg-lightest-gray">
        <div className="wrapper flex flex-col lg:flex-row justify-start lg:justify-between
        items-start lg:items-center gap-6 lg:gap-12 mb-9">
          <h1 className="head_text flex-1 text-center lg:text-start">
            See <span className="green_text"> best services</span> for your solution

          </h1>
           <p className="text-subtitle-gray flex-1 text-center">
           At CabChase, we are dedicated to providing you with a seamless and stress-free transportation experience.
            Our fleet of modern and well-maintained vehicles, coupled with our team of professional and courteous drivers,
             ensures that you'll reach your destination safely and on time. Whether you need a quick ride across town or a reliable
              airport transfer, we've got you covered. We offer a range of services to suit your needs,
               including point-to-point rides, airport transfers, and city tours. With our easy-to-use booking platform,
                you can effortlessly reserve your ride, track your driver in real-time, and enjoy the convenience of cashless payments.
             Your comfort, safety, and satisfaction are our top priorities, making us your trusted choice for all your transportation needs.
           </p>
        </div>
      </div>
      <div className="wrapper">
        <div className="mt-5 mg:-mt-[110px] flex flex-col lg:flex-row items-center lg:items-start gap-5">

          <div className="flex flex-col sm:flex-row gap-5 self-auto lg:self-stretch">
            <ServiceCard iconSrc={paymentIcon} title="SECURED PAYMENT" />
            <ServiceCard  iconSrc={bookmarkIcon} title="Any class vehicle"/>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 self-auto lg:self-stretch">
            <ServiceCard  iconSrc={userIcon} title="Cab sharing option"/>
            <ServiceCard iconSrc={chatIcon} title="Help center and support" />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Services;
