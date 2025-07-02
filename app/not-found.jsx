import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-teal-400">404</h1>
      <p className="mt-4 text-lg text-gray-200">Page Not Found</p>
      <p className="mt-2 text-gray-300">Sorry, the page you are looking for does not exist.</p>
      <Link className="mt-5 flex items-center rounded-full bg-gradient-to-r from-blue-700 to-teal-700 px-3 md:px-6 py-3 text-center hover:bg-blue-800 text-xs md:text-sm uppercase text-white md:font-semibold" 
        href="/"
      >
        Back
      </Link>
    </div>
  );
};

export default page;