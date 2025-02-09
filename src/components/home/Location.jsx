import MapImage from "/images/shape-img/01.webp";

const Location = () => {
  return (
    <div className="container mb-16 mt-10">
      {/* title section */}
      <div className="mb-20 text-center">
        <h1 className="mb-5 text-4xl font-bold">More than 60,000 customers</h1>
        <p className="mx-auto max-w-lg font-medium text-gray-500">
          Buy products on your any device with our app & enjoy your time what
          you want. Just download & install & start to shopping
        </p>
      </div>

      {/* map section */}
      <div className="relative mx-auto w-3/4 max-md:w-full">
        <img
          src={MapImage}
          alt="map image"
          className="w-full brightness-75 invert"
          data-aos="fade-up"
        />

        {/* green circle */}
        <div
          className="location-circle left-0 top-0 md:top-[10%]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="title border-brandGreen">Join to us</div>

          {/* pulse circle */}
          <div className="circle bg-brandGreen">
            <div className="-left-1 -top-1 bg-brandGreen"></div>
          </div>
        </div>

        {/* red circle */}
        <div
          className="location-circle right-2 top-[8%]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="title border-primary">Join to us</div>

          {/* pulse circle */}
          <div className="circle bg-primary">
            <div className="-left-1 -top-1 bg-primary"></div>
          </div>
        </div>

        {/* yellow circle */}
        <div
          className="location-circle left-[30%] top-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="title border-brandYellow">Join to us</div>

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
          <div className="title border-brandBlue">Join to us</div>

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
