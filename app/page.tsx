import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <aside className="ascii-container flex justify-center my-8">
        <pre className="asciiart font-mono whitespace-pre text-[0.2em] sm:text-[0.33em] md:text-[0.5em] lg:text-[1em]">
          {`
▀█████████▄   ▄█     ▄████████ ███▄▄▄▄    ▄█    █▄     ▄████████ ███▄▄▄▄   ███    █▄     ▄████████ 
  ███    ███ ███    ███    ███ ███▀▀▀██▄ ███    ███   ███    ███ ███▀▀▀██▄ ███    ███   ███    ███ 
  ███    ███ ███▌   ███    █▀  ███   ███ ███    ███   ███    █▀  ███   ███ ███    ███   ███    █▀  
 ▄███▄▄▄██▀  ███▌  ▄███▄▄▄     ███   ███ ███    ███  ▄███▄▄▄     ███   ███ ███    ███  ▄███▄▄▄     
▀▀███▀▀▀██▄  ███▌ ▀▀███▀▀▀     ███   ███ ███    ███ ▀▀███▀▀▀     ███   ███ ███    ███ ▀▀███▀▀▀     
  ███    ██▄ ███    ███    █▄  ███   ███ ███    ███   ███    █▄  ███   ███ ███    ███   ███    █▄  
  ███    ███ ███    ███    ███ ███   ███ ███    ███   ███    ███ ███   ███ ███    ███   ███    ███ 
▄█████████▀  █▀     ██████████  ▀█   █▀   ▀██████▀    ██████████  ▀█   █▀  ████████▀    ██████████ 
`}
        </pre>
      </aside>
      <aside className="ascii-container flex justify-center my-8">
        <pre className="asciiart font-mono whitespace-pre text-[0.2em] sm:text-[0.33em] md:text-[0.5em] lg:text-[1em] text-454545">
          {`
          .                                                      .
        .n                   .                 .                  n.
  .   .dP                  dP                   9b                 9b.    .
 4    qXb         .       dX                     Xb       .        dXp     t
dX.    9Xb      .dXb    __                         __    dXb.     dXP     .Xb
9XXb._       _.dXXXXb dXXXXbo.                 .odXXXXb dXXXXb._       _.dXXP
 9XXXXXXXXXXXXXXXXXXXVXXXXXXXXOo.           .oOXXXXXXXXVXXXXXXXXXXXXXXXXXXXP
  \`9XXXXXXXXXXXXXXXXXXXXX'~   ~\`OOO8b   d8OOO'~   ~\`XXXXXXXXXXXXXXXXXXXXXP'
    \`9XXXXXXXXXXXP' \`9XX'          \`98v8P'          \`XXP' \`9XXXXXXXXXXXP'
        ~~~~~~~       9X.          .db|db.          .XP       ~~~~~~~
                        )b.  .dbo.dP'v'9b.odb.  .dX(
                      ,dXXXXXXXXXXXb     dXXXXXXXXXXXb.
                     dXXXXXXXXXXXP'   .   \`9XXXXXXXXXXXb
                    dXXXXXXXXXXXXb   d|b   dXXXXXXXXXXXXb
                    9XXb'   \`XXXXXb.dX|Xb.dXXXXX'   \`dXXP
                     \`'      9XXXXXX(   )XXXXXXP      \`'
                              XXXX X.\`v'.X XXXX
                              XP^X'\`b   d'\`X^XX
                              X. 9  \`   '  P )X
                              \`b  \`       '  d'
                               \`             \`
`}
        </pre>
      </aside>
      <div>
        <h2 className="title">Yo-ho</h2>
        <p>Bienvenue sur notre portail de la piraterie éthique !</p>
        <p>
          Nous sommes une communauté de cracks passionnés par la cyber-sécurité
          et l&apos;ensemble des disciplines de l&apos;informatique.
        </p>
        <p>
          <Link href="/about">En savoir plus &gt;</Link>
        </p>
      </div>
      <div>
        <h2 className="title">Services</h2>
        <p>
          Notre société propose des services tech de qualité pro depuis plus de
          10 ans:
        </p>
        <ul className="customList">
          <li>
            <Link href="/services">Solutions web &amp; game dev</Link>
          </li>
          <li>
            <Link href="/services">Consultance Cyber-Sécurité</Link>
          </li>
          <li>
            <Link href="/services">Développement d&apos;applications</Link>
          </li>
        </ul>
        <div className="flex flex-row justify-center">
          <Link
            href="/contact"
            className="button flex flex-row px-4 py-2 rounded-md mx-auto border-2 border-[#0F0] bg-[#0F0] !text-black hover:bg-black hover:!text-[#0F0] my-4"
          >
            <div className="flex flex-col justify-center">Contactez-nous</div>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="title">Notre communauté</h2>
        <p>
          Inscrivez-vous sur notre{" "}
          <a
            href="https://anda.ninja/discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            serveur Discord
          </a>{" "}
          pour rejoindre léquipage&nbsp;!
        </p>
      </div>
    </>
  );
};

export default LandingPage;
