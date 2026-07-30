import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070F1F]/90 text-white/70 py-16 border-t border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[#B4922E]/60 text-[#B4922E] font-display font-semibold text-xs">
                AE
              </span>
              <span className="font-display font-semibold text-white text-base">
                Alaaeddine Errachid
              </span>
            </div>

            <p className="mt-4 text-sm max-w-sm leading-relaxed text-[#CBD3DD]/80">
              Accompagner les organisations dans leurs démarches de gouvernance, de conformité et de maîtrise des risques.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/alaeddine-errachid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="focus-ring w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[#B4922E] hover:text-[#B4922E] transition-colors"
              >
                <Linkedin className="w-4 h-4 stroke-[1.5]" />
              </a>
              <a
                href="mailto:errachidalaaeddine@gmail.com"
                aria-label="Email"
                className="focus-ring w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[#B4922E] hover:text-[#B4922E] transition-colors"
              >
                <Mail className="w-4 h-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-[#B4922E] transition-colors">À propos</a></li>
              <li><a href="#expertise" className="hover:text-[#B4922E] transition-colors">Expertise</a></li>
              <li><a href="#portfolio" className="hover:text-[#B4922E] transition-colors">Réalisations</a></li>
              <li><a href="#skills" className="hover:text-[#B4922E] transition-colors">Compétences</a></li>
              <li><a href="#samples" className="hover:text-[#B4922E] transition-colors">Échantillons</a></li>
              <li><a href="#insights" className="hover:text-[#B4922E] transition-colors">Publications</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4 font-semibold">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-white/80">errachidalaaeddine@gmail.com</li>
              <li className="text-white/80">+216 50 903 206</li>
              <li className="text-white/80">linkedin.com/in/alaeddine-errachid</li>
              <li className="text-white/80">Tunis, Tunisie</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} Alaaeddine Errachid. Tous droits réservés.</p>
          <p className="font-mono">Réf. Doc: SITE-AE-01 · Rev. 1.0</p>
        </div>
      </div>
    </footer>
  );
}
