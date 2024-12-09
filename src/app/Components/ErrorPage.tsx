import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Section */}
      <header className="bg-cover bg-center h-52 flex flex-col text-center" style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}>
                <h1 className="text-5xl font-bold text-white tracking-wide mt-16">Error Page</h1>
                <div className="flex items-center justify-center text-[28px]">
                <h1 className="text-white">Home</h1><MdKeyboardArrowRight className="text-white"/><h1 className="text-[#ff9f0d]"><u>Error 404</u></h1>
                </div>      
      </header>
      {/* Signup Form Section */}
      <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
        <div className="w-[630px] text-center">
          <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="font-bold text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[18px] mb-4">
            Page cannot be found! We&apos;ll have it figured out in no time.
          </p>
          <p className="text-[18px] mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}