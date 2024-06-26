import { useRef } from "react";

export default function ContactForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    inputRef.current.reset();
  };

  return (
    <div className="max-w-md">
      <div className=" mb-10">
        <h3
          data-aos="fade-right"
          className="text-primary text-4xl tracking-widest font-bold mb-5"
        >
          Get in touch with us
        </h3>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="font-medium text-slate-700"
        >
          Get in touch for a quick response from our team. We're here to help
          you with any questions or concerns you may have, so don't hesitate to
          reach out.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8" ref={inputRef}>
        <div className="flex gap-16">
          {/* first name */}
          <div data-aos="fade-right" data-aos-delay="400">
            <CustomInput id="firstName" label="First name" style />
          </div>

          {/* last name */}
          <div data-aos="fade-right" data-aos-delay="600">
            <CustomInput id="lastName" label="Last name" style />
          </div>
        </div>

        {/* email */}
        <div data-aos="fade-right" data-aos-delay="800">
          <CustomInput id="email" label="Email" type="email" />
        </div>

        {/* message */}
        <div className="relative" data-aos="fade-right" data-aos-delay="1000">
          <textarea
            id="message"
            required
            name="message"
            type="text"
            className="border-b border-gray-400 min-h-[110px] max-h-[250px] w-full py-1 focus:border-b-2 focus:border-brandGreen transition-colors focus:outline-none peer bg-inherit"
          />
          <label
            for="message"
            className="absolute font-medium left-0 top-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-brandGreen peer-valid:text-xs peer-valid:-top-4 peer-valid:text-brandGreen"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          data-aos="fade-up"
          data-aos-delay="1200"
          className="btn w-full"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

function CustomInput({ id, label, style, type = "text" }) {
  return (
    <div className="relative">
      <input
        required
        id={id}
        name={id}
        type={type}
        className={`border-b border-gray-400 ${
          style ? "w-full md:w-[110%]" : "w-full"
        } py-1 focus:border-b-2 focus:border-brandGreen transition-colors focus:outline-none peer bg-inherit`}
      />
      <label
        for={id}
        className="absolute font-medium left-0 top-0 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-brandGreen peer-valid:text-xs peer-valid:-top-4 peer-valid:text-brandGreen transition-all "
      >
        {label}
      </label>
    </div>
  );
}
