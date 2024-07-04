import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      {" "}
      <aside className="ascii-container flex justify-center my-8">
        <pre className="asciiart font-mono whitespace-pre text-[0.2em] sm:text-[0.33em] md:text-[0.5em] lg:text-[1em]">
          {`
  ▄████████    ▄████████    ▄████████  ▄█    █▄   ▄█   ▄████████    ▄████████    ▄████████ 
  ███    ███   ███    ███   ███    ███ ███    ███ ███  ███    ███   ███    ███   ███    ███ 
  ███    █▀    ███    █▀    ███    ███ ███    ███ ███▌ ███    █▀    ███    █▀    ███    █▀  
  ███         ▄███▄▄▄      ▄███▄▄▄▄██▀ ███    ███ ███▌ ███         ▄███▄▄▄       ███        
▀███████████ ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ███    ███ ███▌ ███        ▀▀███▀▀▀     ▀███████████ 
         ███   ███    █▄  ▀███████████ ███    ███ ███  ███    █▄    ███    █▄           ███ 
   ▄█    ███   ███    ███   ███    ███ ███    ███ ███  ███    ███   ███    ███    ▄█    ███ 
 ▄████████▀    ██████████   ███    ███  ▀██████▀  █▀   ████████▀    ██████████  ▄████████▀  
                            ███    ███
`}
        </pre>
      </aside>
      <aside className="ascii-container flex justify-center my-8">
        <pre className="asciiart font-mono whitespace-pre text-[0.2em] sm:text-[0.33em] md:text-[0.5em] lg:text-[1em] text-[#454545]">
          {`
            ..ooo@@@XXX%%%xx..
          .oo@@XXX%x%xxx..     \` .
        .o@XX%%xx..               \` .
      o@X%..                  ..ooooooo
    .@X%x.                 ..o@@^^   ^^@@o
  .ooo@@@@@@ooo..      ..o@@^          @X%
  o@@^^^     ^^^@@@ooo.oo@@^             %
 xzI    -*--      ^^^o^^        --*-     %
 @@@o     ooooooo^@@^o^@X^@oooooo     .X%x
I@@@@@@@@@XX%%xx  ( o@o )X%x@ROMBASED@@@X%x
I@@@@XX%%xx  oo@@@@X% @@X%x   ^^^@@@@@@@X%x
 @X%xx     o@@@@@@@X% @@XX%%x  )    ^^@X%x
  ^   xx o@@@@@@@@Xx  ^ @XX%%x    xxx
        o@@^^^ooo I^^ I^o ooo   .  x
        oo @^ IX      I   ^X  @^ oo
        IX     U  .        V     IX
         V     .           .     V
`}
        </pre>
      </aside>
      <div id="dev" className="max-w-[480px]">
        <h2 className="title">Solutions web &amp; game dev</h2>
        <ul>
          <li>
            <div className="flex flex-col">
              <h3>
                Développement <strong>FullStack Web</strong>
              </h3>
            </div>
            <div className="flex flex-col">
              <h3>
                Création de &amp; pour <strong>jeux vidéos</strong>
              </h3>
            </div>
            <div className="flex flex-col">
              <h3>
                Gestion de projets <strong>Agile</strong> &amp;{" "}
                <strong>DevOps</strong>
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div id="cybersec" className="max-w-[480px]">
        <h2 className="title">Consultance Cyber-Sécurité</h2>
        <ul>
          <li>
            <div className="flex flex-col">
              <h3>
                Investigation, <strong>OSint</strong> &amp; Lookups
              </h3>
            </div>
            <div className="flex flex-col">
              <h3>
                <strong>Pentesting</strong> &amp; audit sécurité
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div id="software" className="max-w-[480px]">
        <h2 className="title">Développement d&apos;applications</h2>
        <ul>
          <li>
            <div className="flex flex-col">
              <h3>Applications PC/Linux/Mac &amp; mobile</h3>
            </div>
            <div className="flex flex-col">
              <h3>
                Gestion d&apos;<strong>infrastructures</strong>
              </h3>
            </div>
            <div className="flex flex-col">
              <h3>
                <strong>Data</strong> Intelligency &amp;{" "}
                <strong>Analytics</strong>
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div id="contact" className="max-w-[480px]">
        <h2>Contactez les dev</h2>
        <p>
          Les plus grands acteurs de la société ont fait confiance à notre
          équipe.
        </p>
        <p>Nous proposons des services impeccables de très haute finition.</p>
        <div className="flex flex-row justify-center">
          <a
            className="button flex flex-row px-4 py-2 rounded-md mx-auto border-2 border-[#0F0] bg-[#0F0] !text-black hover:bg-black hover:!text-[#0F0] my-4"
            href="https://calendly.com/axel-andaroth/30min"
            target="_blank"
          >
            <div className="flex flex-col justify-center">Contactez-nous</div>
          </a>
        </div>
        <p className="text-center">
          Découvrez <a href="https://anda.ninja/#work">notre&nbsp;portfolio</a>{" "}
          et <br />
          rejoignez notre{" "}
          <a href="https://anda.ninja/discord" target="_blank">
            serveur Discord
          </a>
          &nbsp;!
        </p>
      </div>
    </>
  );
};

export default Services;
