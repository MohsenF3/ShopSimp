import { useRef } from "react";
import Input from "../Input";

export default function ContactForm() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8" ref={formRef}>
      <div className="flex gap-16">
        <div data-aos="fade-right" data-aos-delay="400">
          <Input id="firstName" label="First name" style />
        </div>

        <div data-aos="fade-right" data-aos-delay="600">
          <Input id="lastName" label="Last name" style />
        </div>
      </div>

      <div data-aos="fade-right" data-aos-delay="800">
        <Input id="email" label="Email" type="email" />
      </div>

      <div className="relative" data-aos="fade-right" data-aos-delay="1000">
        <textarea
          id="message"
          required
          name="message"
          type="text"
          className="peer max-h-[250px] min-h-[110px] w-full border-b border-gray-400 bg-inherit py-1 transition-colors focus:border-b-2 focus:border-brandGreen focus:outline-none"
        />
        <label
          htmlFor="message"
          className="absolute left-0 top-0 cursor-text font-medium transition-all peer-valid:-top-4 peer-valid:text-xs peer-valid:text-brandGreen peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brandGreen"
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
  );
}
