import { Link } from 'react-router-dom';
import { FaShieldAlt, FaSearch, FaArrowRight } from 'react-icons/fa';
import heroCards from '../assets/hero-cards.png';
import heroCircle from '../assets/hero-circle.png';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 min-h-[85vh] flex items-center">
      <div className="max-w-7xl lg:flex mx-auto px-6 lg:px-8 w-full">
        <div className=" flex-1 max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-slate-600/50 text-gray-200 px-4 py-2 rounded-full text-sm mb-8"
            role="status"
          >
            <FaShieldAlt
              className="text-orange-400 text-xs"
              aria-hidden="true"
            />
            <span>Apply with confidence</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Find real jobs.
            <br />
            Avoid the scam.
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-300 leading-8 max-w-xl">
            VerifyHire helps you check if an employer is verified, read reviews
            from other applicants, and report suspicious job postings — all in
            one place.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/jobs"
              className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition duration-300"
            >
              <FaSearch />
              Browse Jobs
            </Link>

            <Link
              to="/signup"
              className="flex items-center justify-center gap-3 border border-gray-400 hover:border-white hover:bg-white hover:text-slate-900 text-white font-semibold px-8 py-4 rounded-xl transition duration-300"
            >
              Create Account
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center gap-4 relative  ">
          <img
            src={heroCards}
            alt="Hero Cards"
            className=" w-[200px] md:w-[350px] lg:w-[400px] z-10"
          />

          <img
            src={heroCircle}
            alt="Hero Circle"
            className="absolute -right-10 top-0 w-[250px] md:w-[300px] lg:w-[350px] opacity-80 -z-10"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* <div className="relative hidden lg:flex justify-center">
        <img
          src={heroCards}
          alt="Hero Cards"
          className="absolute right-50 top-1/2 -translate-y-1/2 w-[50%] max-w-[600px]"
        />

        <img
          src={heroCircle}
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 -right-48 w-[500px] opacity-90"
        />
      </div> */}
    </section>
  );
};

export default Hero;
