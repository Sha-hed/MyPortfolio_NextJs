import Link from "next/link";
import Image from "next/image";

import facebook from "../assets/SocioIcons/facebook.svg";
import instagram from "../assets/SocioIcons/instagram.svg";
import linkedin from "../assets/SocioIcons/linkedin.svg";
import twitter from "../assets/SocioIcons/twitter.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white dark:bg-gray-900">
      <div>
        <div className="flex flex-col justify-center items-center py-5 px-3 space-y-3">
          <h1 className="text-xl">Kazi Mohammad Shahed</h1>
          <div className="flex text-2xl gap-10">
            <div className="flex gap-10">
              <Link
                href="https://www.facebook.com/kazi.m.shahed.3"
                target="_blank"
              >
                <Image src={facebook} alt="f" width={30} height={30} />
              </Link>
              <Link
                href="https://www.instagram.com/kazimd.shahed/?hl=en"
                target="_blank"
              >
                <Image src={instagram} alt="f" width={30} height={30} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kazimdshahed/"
                target="_blank"
              >
                <Image src={linkedin} alt="f" width={30} height={30} />
              </Link>
              <Link href="https://x.com/KaziMohamm1908" target="_blank">
                <Image src={twitter} alt="f" width={30} height={30} />
              </Link>
            </div>
            {/* <Link href="https://www.facebook.com/kazi.m.shahed.3" target="_blank"><FaFacebook/></Link>
                        <Link href="https://x.com/KaziMohamm1908" target="_blank"><FaTwitter/></Link>
                        <Link href="https://www.linkedin.com/in/kazimdshahed/" target="_blank"><FaLinkedin/></Link>
                        <Link href="https://www.instagram.com/kazimd.shahed/?hl=en" target="_blank"><FaInstagram/></Link> */}
          </div>
          <hr />
          <p className="text-xl text-center ">
            &copy; 2024 Kazi Mohammad Shahed. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
