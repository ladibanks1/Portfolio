import { useState } from "react";
import image from "../assets/Ola-image.jpg";
const bio =
  "I’m a full-stack developer based in Nigeria, passionate about building scalable, high-performance web, mobile, and backend applications that truly impact users. I enjoy turning complex problems into elegant, maintainable solutions and constantly push myself to learn and apply the latest technologies. With a strong focus on collaboration, innovation, and delivering real value, I’m driven to contribute to teams that are shaping the future with impactful software.";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <section className="sm:flex sm:flex-row-reverse lg:px-14 ">
        <div>
          <img
            src={image}
            alt="Ola Image"
            className="w-2/3 sm:w-full  sm:h-full  object-cover rounded-md mx-auto"
          />
        </div>
        <div className="p-5 !text-center sm:!text-left sm:w-3/4  my-auto">
          <article className="mb-5">
            <h1 className="text-3xl lg:text-5xl sm:tracking-widest font-bold">
              Nice to meet you! I'm{" "}
              <span className="border-b-[3px] border-green-400 animate-pulse">
                Oladipupo Bankole.
              </span>
            </h1>
          </article>
          <article className="mb-5 ">
            {window.innerWidth > 640 ? (
              <p className="text-sm text-left md:text-sm lg:text-xl text-slate-300 leading-7">
                {bio}
              </p>
            ) : (
              <p className="text-sm text-left  md:text-sm lg:text-xl text-slate-300 leading-7">
                {showMore ? bio : `${bio.substring(0, 150)}...`}
                <button
                  className="inline text-green-400"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? " Show Less" : " Show More"}
                </button>
              </p>
            )}
          </article>
          <div className="flex  items-center lg:flex-row justify-between">
            <a
              href="mailto:oladipupobankole24@gmail.com"
              className="border-b-[3px] border-green-400 animate-pulse text-xl lg:text-2xl"
            >
              Contact Me
            </a>
            <a
              href="/OladipupoCv.pdf"
              className="border-b-[3px] border-green-400 animate-pulse text-xl lg:text-2xl"
              download={true}
            >
              Download Cv
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
