import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative border-t bg-[#06122e] border-[#0a745662] text-white">
      <div className="mx-auto px-4 sm:px-8 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-4 lg:py-6">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Portfolio by <Link target="_blank" href="https://github.com/sksmagr23" className="text-[#24d7f6]">Saksham Agrawal</Link>
          </p>
          <div className="flex items-center justify-center">
            <span className='text-sm mr-2'>Made with Next.js & Tailwind</span>
            <Link
              target="_blank"
              href="https://github.com/sksmagr23/my-portfolio"
              className="uppercase hover:text-[#64ffb9]"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;