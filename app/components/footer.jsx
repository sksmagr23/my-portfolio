import Link from 'next/link';
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#071022] border-[#4f5a99] text-white">
      <div className="mx-auto px-4 sm:px-8 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-4 lg:py-6">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Tech Portfolio by <Link target="_blank" href="https://github.com/sksmagr23" className="text-[#fca311]">Saksham Agrawal</Link>
          </p>
          <div className="flex items-center">
            <Link
              target="_blank"
              href="https://github.com/sksmagr23/my-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#fca311]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;