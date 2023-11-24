const Register = () => {
  return (
    <div className="bg-register my-10">
      <div className="grid max-md:gap-y-10 grid-cols-1 md:grid-cols-3 items-center h-full px-5 py-16 max-w-7xl mx-auto">
        <div className=" capitalize col-span-2">
          <h6 className="text-yellow-400 text-lg tracking-widest font-medium">
            save the day
          </h6>
          <h2 className="text-3xl max-sm:text-2xl max-w-lg text-white my-4 leading-[3rem] font-bold">
            join on day long free workshop for advance
            <span className="text-yellow-400">mastering</span> on sales
          </h2>
          <h6 className="text-gray-200 font-medium">
            limited time offer! hurry up
          </h6>
        </div>
        <form className=" text-center bg-gradient-to-b from-white p-5 rounded-md">
          <h3 className="text-2xl font-bold mb-10 text-gray-700">
            Register Now
          </h3>
          <input
            className="register-form"
            type="text"
            id="name"
            name="name"
            placeholder="username"
          />
          <input
            className="register-form my-5"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="register-form mb-10"
            type="tel"
            id="tel"
            name="tel"
            placeholder="Phone"
          />
          <button className="btn">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
