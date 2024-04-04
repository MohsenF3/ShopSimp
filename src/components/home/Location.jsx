import bg from "/images/shape-img/01.png";

const Location = () => {
  return (
    <div className="container mt-10 mb-16">
      {/* title section */}
      <div className=" text-center mb-20">
        <h1 className="font-bold text-4xl mb-5">More than 60,000 customers</h1>
        <p className="max-w-lg mx-auto text-gray-500 font-medium">
          Buy products on your any device with our app & enjoy your time what
          you want. Just download & install & start to shopping
        </p>
      </div>

      {/* map section */}
      <div className=" w-3/4 max-md:w-full mx-auto relative">
        <img
          src={bg}
          alt=""
          className="w-full brightness-75 invert"
          data-aos="fade-up"
        />

        {/* green circle */}
        <div
          className="location-circle top-0 md:top-[10%] left-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="border-brandGreen title">Join to us</div>

          {/* pulse circle */}
          <div className="circle bg-brandGreen">
            <div className="-left-1 -top-1 bg-brandGreen"></div>
          </div>
        </div>

        {/* red circle */}
        <div
          className="location-circle top-[8%] right-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="border-primary title">Join to us</div>

          {/* pulse circle */}
          <div className="circle bg-primary">
            <div className="-left-1 -top-1 bg-primary"></div>
          </div>
        </div>

        {/* yellow circle */}
        <div
          className="location-circle top-0 left-[30%]"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="border-brandYellow title">Join to us</div>

          {/* pulse circle */}
          <div className="circle bg-brandYellow">
            <div className="-left-1 -top-1 bg-brandYellow"></div>
          </div>
        </div>

        {/* blue circle */}
        <div
          className="location-circle bottom-[30%] right-[35%] md:bottom-[45%] md:right-[45%]"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="border-brandBlue title">Join to us</div>

          {/* pulse circle */}
          <div className="circle bg-brandBlue">
            <div className="-left-1 -top-1 bg-brandBlue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
