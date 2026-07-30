import { useState } from 'react';
import { ArrowRight, Download, ShieldCheck, Lock, Award, FileSpreadsheet, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [photoError, setPhotoError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [pfeError, setPfeError] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden bg-white dark:bg-[#070F1F] pt-36 pb-24 lg:pt-44 lg:pb-32 transition-colors duration-500">
      {/* Background Soft Ambient Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/20 dark:bg-sky-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-slate-100/30 dark:bg-slate-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[#B4922E] border border-[#B4922E]/40 rounded-full px-4 py-1.5 mb-8 bg-[#B4922E]/5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B4922E] animate-pulse" />
            Réf. GRC-01 · Gouvernance · Risques · Conformité
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0B1F3A] dark:text-white leading-[1.08]">
            Alaaeddine<br />
            <span className="text-[#0B1F3A] dark:text-[#B4922E]">Errachid</span>
          </h1>

          <p className="mt-6 font-display text-lg sm:text-xl text-[#0B1F3A]/90 dark:text-[#CBD3DD] max-w-xl font-medium leading-snug">
            Consultant Junior GRC / QHSE — Gestion des Risques, Conformité, Audit Interne, ISO 9001 & ISO/IEC 27001.
          </p>

          <p className="mt-4 text-[#0B1F3A]/75 dark:text-[#CBD3DD]/80 max-w-xl leading-relaxed text-sm sm:text-base">
            Jeune diplômé d'un Mastère Professionnel en Management QHSE (Mention Très Bien), j'accompagne les organisations dans leurs démarches de gouvernance, de conformité et de maîtrise des risques — avec une approche méthodique et fondée sur les référentiels ISO.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="focus-ring inline-flex items-center gap-2 bg-[#0B1F3A] dark:bg-[#B4922E] text-white dark:text-[#070F1F] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#14294C] dark:hover:bg-[#D4B968] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Voir mes projets
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="assets/CV-Alaaeddine-Errachid.pdf"
              download
              className="focus-ring inline-flex items-center gap-2 border border-[#0B1F3A]/20 dark:border-white/20 text-[#0B1F3A] dark:text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:border-[#B4922E] hover:text-[#B4922E] dark:hover:text-[#B4922E] transition-all duration-200 bg-white dark:bg-transparent shadow-sm hover:shadow-md"
            >
              Télécharger le CV
              <Download className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 text-[#0B1F3A] dark:text-white font-semibold text-sm px-3 py-3.5 hover:text-[#B4922E] transition-colors"
            >
              Me contacter
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-[#0B1F3A]/12 dark:border-white/10 pt-8">
            <div>
              <dt className="font-mono text-[10px] tracking-widest uppercase text-[#0B1F3A]/60 dark:text-[#CBD3DD]/70">Diplôme</dt>
              <dd className="mt-1 font-display font-semibold text-[#0B1F3A] dark:text-white text-xs sm:text-sm">
                Mastère Pro QHSE — Très Bien
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-widest uppercase text-[#0B1F3A]/60 dark:text-[#CBD3DD]/70">Référentiels</dt>
              <dd className="mt-1 font-display font-semibold text-[#0B1F3A] dark:text-white text-xs sm:text-sm">
                ISO 9001 · 27001 · 27002
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-widest uppercase text-[#0B1F3A]/60 dark:text-[#CBD3DD]/70">Réglementaire</dt>
              <dd className="mt-1 font-display font-semibold text-[#0B1F3A] dark:text-white text-xs sm:text-sm">
                RGPD · NIS2 · DORA
              </dd>
            </div>
          </dl>
        </div>

        {/* Right Column: Premium Visual Composition */}
        <div className="relative mt-8 lg:mt-0">
          <div className="relative max-w-sm mx-auto lg:max-w-none">
            {/* Subtle decorative governance vector motifs */}
            <div className="absolute -top-12 -right-8 text-[#0B1F3A]/5 dark:text-white/5 pointer-events-none hidden lg:block" aria-hidden="true">
              <ShieldCheck className="w-32 h-32 stroke-[1]" />
            </div>
            <div className="absolute -bottom-8 -left-10 text-[#B4922E]/10 pointer-events-none hidden lg:block" aria-hidden="true">
              <Lock className="w-24 h-24 stroke-[1]" />
            </div>

            {/* Main Portrait Card */}
            <div className="hero-photo-frame relative rounded-3xl overflow-hidden bg-white dark:bg-[#0F1C33] shadow-xl aspect-[4/5] max-w-[19.5rem] mx-auto lg:mx-0 border border-[#0B1F3A]/15 dark:border-white/10 group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
              {!photoError ? (
                <img
                  src="assets/pdp_01.jpg"
                  alt="Alaaeddine Errachid — Consultant GRC / QHSE"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={() => setPhotoError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#0B1F3A] text-white p-6">
                  <span className="font-display text-5xl font-bold tracking-tight text-[#B4922E]">AE</span>
                  <p className="mt-2 text-xs font-mono text-[#CBD3DD]">Alaaeddine Errachid</p>
                </div>
              )}

              {/* Status bar badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#070F1F]/80 backdrop-blur-md border border-white/20 p-3.5 flex items-center justify-between shadow-lg">
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#D4B968]">Alaaeddine Errachid</p>
                  <p className="text-white text-xs mt-0.5 font-medium">Consultant Junior GRC / QHSE</p>
                </div>
                <span className="relative flex h-2.5 w-2.5 shrink-0" title="Disponible pour missions">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
              </div>
            </div>

            {/* Floating Card 1: PFE Cover Preview Card */}
            <div className="animate-float-slow absolute -left-4 sm:-left-12 top-6 w-44 sm:w-48 z-10 hidden sm:block">
              <div className="card-hover glass-card rounded-2xl p-3.5 overflow-hidden">
                {!pfeError ? (
                  <img
                    src="assets/pfe-cover.jpg"
                    alt="Couverture du rapport PFE"
                    className="w-full h-24 object-cover rounded-lg mb-2.5 shadow-sm border border-white/50"
                    onError={() => setPfeError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-20 rounded-lg bg-[#0B1F3A]/5 dark:bg-white/5 flex items-center justify-center mb-2.5">
                    <FileSpreadsheet className="w-8 h-8 text-[#B4922E]" />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-widest uppercase text-[#B4922E] border border-[#B4922E]/30 rounded-full px-2 py-0.5 bg-[#B4922E]/5">
                    PFE · 2026
                  </span>
                  <Sparkles className="w-3 h-3 text-[#B4922E]" />
                </div>
                <p className="mt-2 font-display font-semibold text-[12px] leading-snug text-[#0B1F3A] dark:text-white">
                  Diagnostic du SMI
                </p>
                <p className="mt-0.5 text-[10px] text-[#64748B] dark:text-[#CBD3DD]/70">
                  ISO 9001 · ISO 27001
                </p>
              </div>
            </div>

            {/* Floating Card 2: QUALIPRO Logo Badge */}
            <div className="animate-float-delayed absolute -right-2 sm:-right-10 top-8 z-10 hidden sm:block">
              <div className="card-hover flex items-center gap-3 glass-card rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-[#0B1F3A]/10 overflow-hidden shrink-0 p-0.5">
                  {!logoError ? (
                    <img
                      src="assets/logo_1.png"
                      alt="Qualipro Logo"
                      className="w-full h-full object-contain"
                      onError={() => setLogoError(true)}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="font-display font-bold text-sm text-[#0B1F3A]">Q</span>
                  )}
                </div>
                <div className="leading-tight">
                  <p className="font-display font-semibold text-xs text-[#0B1F3A] dark:text-white">QUALIPRO</p>
                  <p className="font-mono text-[9px] tracking-wide text-[#64748B] dark:text-[#CBD3DD]/70">By Imagine Human</p>
                </div>
              </div>
            </div>

            {/* Floating Card 3: ISO 27001 Security Badge */}
            <div className="animate-float-slow absolute left-2 sm:-left-8 -bottom-6 z-10 hidden sm:block">
              <div className="card-hover flex items-center gap-3 rounded-2xl bg-[#0B1F3A] dark:bg-[#0F1C33] border border-white/15 shadow-2xl px-4 py-3">
                <div className="w-8 h-8 rounded-lg bg-[#B4922E]/20 flex items-center justify-center text-[#B4922E] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white text-xs font-medium">ISO/IEC 27001:2022</p>
                  <p className="text-[10px] text-[#CBD3DD] font-mono">Contrôles ISO 27002 & ANSSI</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
