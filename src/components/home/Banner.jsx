const Banner = ({ data }) => {
  return (
    <div className="flex min-h-[550px] items-center justify-center pt-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 items-center gap-6 rounded-3xl text-white md:grid-cols-3"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="text-4xl font-bold uppercase lg:text-7xl"
            >
              {data.title}
            </h1>
            <p data-aos="fade-up" className="text-sm">
              {data.date}
            </p>
          </div>
          {/* second col */}
          <div data-aos="zoom-in" className="flex h-full items-center">
            <img
              src={data.image}
              alt="product image"
              className="mx-auto w-[250px] scale-125 object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] md:w-[340px]"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="text-xl font-bold">
              {data.title2}
            </p>
            <p data-aos="fade-up" className="text-3xl font-bold sm:text-5xl">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="text-sm leading-5 tracking-wide">
              {data.title4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
