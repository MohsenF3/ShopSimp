import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";

const Contact = () => {
  return (
    <div className="container h-[calc(100vh-6rem)] md:mb-10 flex items-center md:items-stretch">
      <div className="flex-1">
        <ContactForm />
      </div>
      <div className="flex-1 hidden md:block lg:px-0 pl-5" data-aos="fade-left">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
