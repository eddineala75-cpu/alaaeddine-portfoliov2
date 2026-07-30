import { useState } from 'react';
import { CheckCircle2, MapPin, GraduationCap, Globe2, Clock, Building2 } from 'lucide-react';

export default function AboutSection() {
  const [photoError, setPhotoError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-[#0F1C33]/40 transition-colors duration-500 border-t border-[#0B1F3A]/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.85fr,1.15fr] gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Picture, Quick Facts, Qualipro Logo */}
        <div className="space-y-6">
          {/* Professional Photo Frame */}
          <div className="card-hover relative w-full max-w-sm mx-auto lg:mx-0 aspect-[4/5] rounded-3xl bg-white dark:bg-[#0F1C33] shadow-xl overflow-hidden border border-[#0B1F3A]/15 dark:border-white/10">
            {!photoError ? (
              <img
                src="assets/pdp_01.jpg"
                alt="Alaaeddine Errachid"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                onError={() => setPhotoError(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#0B1F3A] text-white p-6">
                <span className="font-display text-6xl font-bold tracking-tight text-[#B4922E]">AE</span>
                <p className="mt-2 text-xs font-mono text-[#CBD3DD]">Alaaeddine Errachid</p>
              </div>
            )}

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#070F1F]/80 backdrop-blur-md border border-white/20 px-5 py-3.5 text-white shadow-lg">
              <p className="font-mono text-[10px] tracking-widest uppercase text-[#D4B968]">Profil professionnel</p>
              <p className="text-sm font-medium mt-0.5">Consultant Junior — GRC / QHSE · Tunis</p>
            </div>
          </div>

          {/* Quick Facts Grid */}
          <dl className="max-w-sm mx-auto lg:mx-0 grid grid-cols-2 gap-3.5">
            <div className="rounded-xl glass-card p-3.5">
              <div className="flex items-center gap-2 text-[#B4922E] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <dt className="font-mono text-[9px] tracking-widest uppercase text-[#0B1F3A]/60 dark:text-[#CBD3DD]">Localisation</dt>
              </div>
              <dd className="font-display font-semibold text-[#0B1F3A] dark:text-white text-xs sm:text-sm">Tunis, Tunisie</dd>
            </div>

            <div className="rounded-xl glass-card p-3.5">
              <div className="flex items-center gap-2 text-[#B4922E] mb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <dt className="font-mono text-[9px] tracking-widest uppercase text-[#0B1F3A]/60 dark:text-[#CBD3DD]">Diplôme</dt>
              </div>
              <dd className="font-display font-semibold text-[#0B1F3A] dark:text-white text-xs sm:text-sm">Mastère Pro QHSE</dd>
            </div>

            <div className="rounded-xl glass-card p-3.5">
              <div className="flex items-center gap-2 text-[#B4922E] mb-1">
                <Globe2 className="w-3.5 h-3.5" />
                <dt className="font-mono text-[9px] tracking-widest uppercase text-[#0B1F3A]/60 dark:text-[#CBD3DD]">Langues</dt>
              </div>
              <dd className="font-display font-semibold text-[#0B1F3A] dark:text-white text-xs sm:text-sm">FR · AR · EN</dd>
            </div>

            <div className="rounded-xl glass-card p-3.5">
              <div className="flex items-center gap-2 text-[#B4922E] mb-1">
                <Clock className="w-3.5 h-3.5" />
                <dt className="font-mono text-[9px] tracking-widest uppercase text-[#0B1F3A]/60 dark:text-[#CBD3DD]">Disponibilité</dt>
              </div>
              <dd className="font-display font-semibold text-[#0B1F3A] dark:text-white text-xs sm:text-sm">Immédiate</dd>
            </div>
          </dl>

          {/* Qualipro Logo Banner */}
          <div className="max-w-sm mx-auto lg:mx-0 flex items-center gap-3.5 rounded-xl glass-card p-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#0B1F3A]/12 flex items-center justify-center shrink-0 overflow-hidden p-1 shadow-sm">
              {!logoError ? (
                <img
                  src="assets/logo_1.png"
                  alt="Qualipro Logo"
                  className="w-full h-full object-contain"
                  onError={() => setLogoError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <Building2 className="w-5 h-5 text-[#0B1F3A]" />
              )}
            </div>
            <div className="leading-tight">
              <p className="font-mono text-[9px] tracking-widest uppercase text-[#0B1F3A]/60 dark:text-[#CBD3DD]/70">
                Stage réalisé chez
              </p>
              <p className="font-display font-semibold text-sm text-[#0B1F3A] dark:text-white">
                Qualipro By Imagine Human
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Full Original Bio Text */}
        <div>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#B4922E]">
            Réf. ABT-01 · À propos
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-[#0B1F3A] dark:text-white tracking-tight">
            Début de carrière, expérience concrète, rigueur méthodique.
          </h2>

          <div className="mt-6 space-y-4 text-[#0B1F3A]/80 dark:text-[#CBD3DD] leading-relaxed text-base">
            <p>
              Jeune diplômé d'un Mastère Professionnel en Management QHSE (Mention Très Bien), Alaaeddine Errachid se spécialise dans la gouvernance, la gestion des risques, la conformité et les systèmes de management. Il aborde chaque mission comme un système de management : de façon méthodique, fondée sur des preuves, et structurée pour être auditée.
            </p>
            <p>
              Lors de son stage de fin d'études (février–juin 2026) chez Qualipro By Imagine Human à Tunis, il a réalisé un diagnostic documentaire du Système de Management Intégré selon ISO 9001:2015 et ISO/IEC 27001:2022, contribué à la préparation des audits internes, analysé et mis à jour le registre des risques et opportunités, participé à la cartographie des risques liés à la sécurité de l'information, et conçu une taxonomie des risques cyber basée sur les contrôles ISO/IEC 27002:2022 et le référentiel de menaces de l'ANSSI. Il a également mené une veille réglementaire couvrant le RGPD, la NIS2, la DORA et la réglementation tunisienne relative à la protection des données.
            </p>
            <p>
              Cette expérience s'appuie sur un stage d'été (juillet–août 2025), centré sur la gestion des risques dans le cadre d'un SMSI conforme à ISO/IEC 27001, ainsi que sur des stages hospitaliers menés entre 2022 et 2024 au CHU Habib Bourguiba et au CHU Hedi Chaker de Sfax, où il a participé aux contrôles qualité, à l'application des procédures de stérilisation et à la rédaction de documents qualité.
            </p>
            <p>
              Il reste honnête sur son positionnement : un consultant junior ambitieux, avec une solide préparation académique et une expérience pratique acquise en stage, motivé à accompagner les organisations dans leurs démarches de gouvernance, de conformité et de maîtrise des risques.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-3.5">
            <div className="flex items-start gap-3 bg-white dark:bg-[#0F1C33]/60 border border-[#0B1F3A]/12 dark:border-white/10 rounded-xl p-4 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#B4922E] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#0B1F3A] dark:text-[#CBD3DD] font-medium">
                Mastère Professionnel en Management QHSE — Mention Très Bien
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-[#0F1C33]/60 border border-[#0B1F3A]/12 dark:border-white/10 rounded-xl p-4 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#B4922E] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#0B1F3A] dark:text-[#CBD3DD] font-medium">
                Stages chez Qualipro By Imagine Human (Tunis)
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-[#0F1C33]/60 border border-[#0B1F3A]/12 dark:border-white/10 rounded-xl p-4 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#B4922E] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#0B1F3A] dark:text-[#CBD3DD] font-medium">
                Pratique d'ISO 9001, ISO/IEC 27001 & ISO/IEC 27002
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-[#0F1C33]/60 border border-[#0B1F3A]/12 dark:border-white/10 rounded-xl p-4 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#B4922E] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#0B1F3A] dark:text-[#CBD3DD] font-medium">
                Veille réglementaire : RGPD, NIS2 & DORA
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
