import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin, FaBehance,FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { href: "https://github.com/Akshara112003", Icon: AiFillGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/akshara-t-174103313/", Icon: FaLinkedin, label: "X (LinkedIn)" },
  { href: "https://api.whatsapp.com/send/?phone=%2B919787617194&text&type=phone_number&app_absent=0", Icon: FaWhatsapp, label: "Whatsapp" },
  { href: "https://www.instagram.com/aksh.ra_/profilecard/?igsh=amttdHJldDBwZ2Vu", Icon: AiFillInstagram, label: "Instagram" },
  { href: "https://www.behance.net/aksharat1", Icon: FaBehance, label: "Telegram" }
];

export const Footer = () => {

  return (
    <footer className="py-8 max-w-[1200px] mx-auto px-4">
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">
          © 2024. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a 
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};