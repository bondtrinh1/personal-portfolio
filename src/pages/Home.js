import { useEffect } from "react";
import { ExternalLink } from "../components/ExternalLink";
import { GitHub } from "../icons/GitHub";
import { LinkedIn } from "../icons/LinkedIn";
import { ReactSVG as React } from "../icons/React";
import { TailWindSVG as TailWind } from "../icons/Tailwind";
import { TypeScriptSVG as TypeScript } from "../icons/TypeScript";
import { Wave } from "../icons/Wave";
import Me from "../me.jpg";

function Home() {
  useEffect(() => {
    document.title = "Home | Bond Trinh";
  }, []);

  return (
    <main className="animate max-w-3xl max-[600px]:py-5 py-10 px-5 max-[600px]:px-6 m-auto text-white overflow-x-hidden">
      <div className="flex flex-col justify-center align-center gap-16 text-lg max-[600px]:text-base">
        <div className="top">
          <p className="mb-6">
            Hey, my name is <br />
            <span className="text-4xl font-bold">Bond Trinh.</span>
          </p>
          <p>
            I am an aspiring{" "}
            <span className="text-green-300">software engineer</span> who enjoys
            front-end development and all things UX/UI. I graduated from AUT
            with a Bachelor of Computer and Information Sciences, majoring in
            Software Development. I am currently focused on learning front-end
            development using modern technologies.
          </p>
        </div>
        <img src={Me} className="w-1/3 m-auto rounded-full" alt="Idiot" />
        <div className="middle flex flex-col gap-2 self-center">
          <ExternalLink
            icon={<Wave />}
            href="mailto:bond.nicktrinh@gmail.com"
            className="hover:underline hover:text-green-300"
          >
            Email me
          </ExternalLink>
          <ExternalLink
            icon={<GitHub />}
            href="https://www.github.com/trinhbond"
            className="hover:underline hover:text-green-300"
          >
            Check out my repository
          </ExternalLink>
          <ExternalLink
            icon={<LinkedIn />}
            href="https://www.linkedin.com/in/bondnicktrinh/"
            className="hover:underline hover:text-green-300"
          >
            Connect with me
          </ExternalLink>
        </div>
        <div className="bottom self-center">
          <ul className="flex flex-row gap-8 max-[330px]:flex-col">
            {[<React />, <TypeScript />, <TailWind />].map((tool, index) => (
              <li className="m-auto" key={index}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;
