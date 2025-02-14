import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Portfolio | Contact',
  description: '...',
}
const ContactPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold mt-5">Contact</h1>
        <h1 className="text-center text-xl font-semibold mt-1">Feel free to reach out to me for any questions or opportunities!</h1>
        <section className="py-6">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 gap-4 md:gap-0">
            <div className="bg-black text-white py-8 px-4  md:px-6 dark:bg-[#111928d4] rounded-xl border border-[#ffffff20] md:border-r-0 md:rounded-r-none">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Syedpur R/A, Mejortila, Islampur, Sylhet, Bangladesh
                  </span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>01780306163</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>shahedcse14@gmail.com</span>
                </p>
                <div className="flex items-center text-2xl gap-10 px-10">
                  <Link
                    href="https://www.facebook.com/kazi.m.shahed.3"
                    target="_blank"
                  >
                    <FaFacebook />
                  </Link>
                  <Link href="https://x.com/KaziMohamm1908" target="_blank">
                    <FaTwitter />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/kazimdshahed/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="https://www.instagram.com/kazimd.shahed/?hl=en"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <ContactForm></ContactForm>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
