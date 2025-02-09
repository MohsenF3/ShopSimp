import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";

const Contact = () => {
  return (
    <div className="container flex h-[calc(100vh-6rem)] items-center md:mb-10 md:items-stretch">
      <div className="flex-1">
        <div className="max-w-md">
          <div className="mb-10">
            <h3
              data-aos="fade-right"
              className="mb-5 text-4xl font-bold tracking-widest text-primary"
            >
              Get in touch with us
            </h3>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="font-medium text-slate-700"
            >
              Get in touch for a quick response from our team. We're here to
              help you with any questions or concerns you may have, so don't
              hesitate to reach out.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
      <div className="hidden flex-1 pl-5 md:block lg:px-0" data-aos="fade-left">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
