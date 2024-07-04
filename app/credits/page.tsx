import React from "react";

type Props = {};

const Credit = (props: Props) => {
  return (
    <>
      <aside className="ascii-container flex justify-center my-8">
        <pre className="asciiart font-mono whitespace-pre text-[0.2em] sm:text-[0.33em] md:text-[0.5em] lg:text-[1em]">
          {`
  ▄████████    ▄████████    ▄████████ ████████▄   ▄█      ███        ▄████████ 
  ███    ███   ███    ███   ███    ███ ███   ▀███ ███  ▀█████████▄   ███    ███ 
  ███    █▀    ███    ███   ███    █▀  ███    ███ ███▌    ▀███▀▀██   ███    █▀  
  ███         ▄███▄▄▄▄██▀  ▄███▄▄▄     ███    ███ ███▌     ███   ▀   ███        
  ███        ▀▀███▀▀▀▀▀   ▀▀███▀▀▀     ███    ███ ███▌     ███     ▀███████████ 
  ███    █▄  ▀███████████   ███    █▄  ███    ███ ███      ███              ███ 
  ███    ███   ███    ███   ███    ███ ███   ▄███ ███      ███        ▄█    ███ 
  ████████▀    ███    ███   ██████████ ████████▀  █▀      ▄████▀    ▄████████▀  
             ███    ███
`}
        </pre>
      </aside>
      <div>
        <h2 className="title">Auteur</h2>
        <p>
          Ce site est entièrement développé par{" "}
          <a
            href="https://anda.ninja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Axel Andaroth
          </a>
          .
        </p>
      </div>
      <div>
        <h2 className="title">Stack</h2>
        <p>
          <a
            href="https://nextjs.org/learn-pages-router/basics/create-nextjs-app/setup"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS
          </a>
          ,{" "}
          <a
            href="https://create-react-app.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          et{" "}
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </a>{" "}
          ont été utilisés pour le développement.
        </p>
        <p>
          La codebase est automatiquement déployée à l&apos;aide de{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          .
        </p>
      </div>
      <div>
        <h2 className="title">Crédits</h2>
        <p>
          Les textes stylisés ont été générés via{" "}
          <a
            href="https://patorjk.com/software/taag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            un générateur ASCII
          </a>
          .
        </p>
        <p>
          Les images sous forme de texte viennent de{" "}
          <a
            href="http://www.ascii-art.de/ascii/s/skull.txt"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASCII-Art
          </a>{" "}
          et leur auteurs sont anonymes sauf si le nom est indiqué.
        </p>
      </div>
      <aside className="ascii-container flex justify-center my-8">
        <pre className="asciiart font-mono whitespace-pre text-[0.2em] sm:text-[0.33em] md:text-[0.5em] lg:text-[1em] text-[#454545]">
          {`
--=[SKULL]=-- by Daniel Au (dcau)
              ___           _,.---,---.,_
              |         ,;~'             '~;,
              |       ,;                     ;,
     Frontal  |      ;                         ; ,--- Supraorbital Foramen
      Bone    |     ,'                         /'
              |    ,;                        /' ;,
              |    ; ;      .           . &lt;-'  ; |
              |__  | ;   ______       ______   ;&lt;----- Coronal Suture
             ___   |  '/~"     ~" . "~     "~\\'  |
             |     |  ~  ,-~~~^~, | ,~^~~~-,  ~  |
   Maxilla,  |      |   |        }:{        | &lt;------ Orbit
  Nasal and  |      |   l       / | \\       !   |
  Zygomatic  |      .~  (__,.--" .^. "--.,__)  ~.
    Bones    |      |    ----;' / | \\ \`;-&lt;--------- Infraorbital Foramen
             |__     \\__.       \\/^\\/       .__/
                ___   V| \\                 / |V &lt;--- Mastoid Process
                |      | |T~\\___!___!___/~T| |
                |      | |\`IIII_I_I_I_IIII'| |
       Mandible |      |  \\ ,III I I I III,/  |
                |       \\   \`~~~~~~~~~~'    /
                |         \\   .       . &lt;-x---- Mental Foramen
                |__         \\.    ^    ./
                              ^~~~^~~~^       -dcau (4/15/95)
`}
        </pre>
      </aside>
    </>
  );
};

export default Credit;
