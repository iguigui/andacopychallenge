import React from "react";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <aside className="ascii-container flex justify-center my-8">
        <pre className="asciiart font-mono whitespace-pre text-[0.2em] sm:text-[0.33em] md:text-[0.5em] lg:text-[1em]">
          {`
  ▄████████         ▄███████▄    ▄████████  ▄██████▄     ▄███████▄  ▄██████▄     ▄████████ 
  ███    ███        ███    ███   ███    ███ ███    ███   ███    ███ ███    ███   ███    ███ 
  ███    ███        ███    ███   ███    ███ ███    ███   ███    ███ ███    ███   ███    █▀  
  ███    ███        ███    ███  ▄███▄▄▄▄██▀ ███    ███   ███    ███ ███    ███   ███        
▀███████████      ▀█████████▀  ▀▀███▀▀▀▀▀   ███    ███ ▀█████████▀  ███    ███ ▀███████████ 
  ███    ███        ███        ▀███████████ ███    ███   ███        ███    ███          ███ 
  ███    ███        ███          ███    ███ ███    ███   ███        ███    ███    ▄█    ███ 
  ███    █▀        ▄████▀        ███    ███  ▀██████▀   ▄████▀       ▀██████▀   ▄████████▀  
                                 ███    ███
`}
        </pre>
      </aside>

      <div>
        <h2 className="title">À propos</h2>
        <p>
          Notre communauté compte près d&apos;un millier de membres et est
          composée de passionnés d&apos;informatique.
          <br />
          Le hacking est notre moyen d&apos;expression et nous faisons preuve
          d&apos;éthique.
        </p>
        <p>
          Notre société propose des services tech de qualité pro depuis plus de
          10 ans.
        </p>
        <p>
          <Link href="/services">En savoir plus &gt;</Link>
        </p>
      </div>
      <div>
        <h2>Rejoignez-nous&nbsp;!</h2>
        <p>
          Découvrez <a href="https://anda.ninja/#work">notre&nbsp;portfolio</a>{" "}
          et rejoignez notre{" "}
          <a
            href="https://anda.ninja/discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            serveur Discord
          </a>
          &nbsp;!
        </p>
      </div>

      <aside className="ascii-container flex justify-center my-8">
        <pre className="asciiart font-mono whitespace-pre text-[0.2em] sm:text-[0.33em] md:text-[0.5em] lg:text-[1em] text-[#454545]">
          {`
                 uuuuuuu
             uu$$$$$$$$$$$uu
          uu$$$$$$$$$$$$$$$$$uu
         u$$$$$$$$$$$$$$$$$$$$$u
        u$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$"   "$$$"   "$$$$$$u
       "$$$$"      u$u       $$$$"
        $$$u       u$u       u$$$
        $$$u      u$$$u      u$$$
         "$$$$uu$$$   $$$uu$$$$"
          "$$$$$$$"   "$$$$$$$"
            u$$$$$$$u$$$$$$$u
             u$"$"$"$"$"$"$u
  uuu        $$u$ $ $ $ $u$$       uuu
 u$$$$        $$$$$u$u$u$$$       u$$$$
  $$$$$uu      "$$$$$$$$$"     uu$$$$$$
u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$
$$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"
 """      ""$$$$$$$$$$$uu ""$"""
           uuuu ""$$$$$$$$$$uuu
  u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$
  $$$$$$$$$$""""           ""$$$$$$$$$$$"
   "$$$$$"                      ""$$$$""
     $$$"                         $$$$
`}
        </pre>
      </aside>
    </>
  );
};

export default About;
