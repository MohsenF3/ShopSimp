import PageHeader from "../components/PageHeader";
import ContactForm from "../components/contact/ContactForm";

import { contactList } from "../utilis/data";

const Contact = () => {
  return (
    <div>
      <div>
        <PageHeader title="Get In Touch With Us" curPage="Contact Us" />
      </div>

      {/* map and deatils */}
      <div className="bg-pink-100">
        <div className="px-5 mx-auto max-w-7xl py-20">
          <div className="text-center mb-10">
            <h3 className="text-red-600 text-xl tracking-widest font-medium mb-5">
              Get in touch with us
            </h3>
            <h1 className="text-3xl font-bold">
              We're Always Eager To Hear From You!
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {/* map */}
            <div className="flex-[2] p-2  bg-white rounded-sm shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9695.14524039768!2d4.888113607861895!3d52.36282009850982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sNetherlands!5e0!3m2!1sen!2s!4v1701074631017!5m2!1sen!2s"
                className="w-full h-64 md:h-full"
              ></iframe>
            </div>
            {/* deatils */}
            <div className="flex-1">
              {contactList.map(({ id, imgUrl, title, desc }) => (
                <div
                  key={id}
                  className="flex items-center gap-5 bg-white hover:bg-slate-200 transition rounded-sm p-5 mb-2"
                >
                  <div>
                    <img src={imgUrl} alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="bg-white">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
