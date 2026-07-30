import { useState, FormEvent } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const mailto = `mailto:errachidalaaeddine@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Demande via le site'
    )}&body=${encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`
    )}`;

    setTimeout(() => {
      window.location.href = mailto;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0B1F3A] dark:bg-[#070F1F] text-white relative overflow-hidden transition-colors duration-500">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B4922E]/10 blur-3xl pointer-events-none rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Direct Contact Info */}
        <div>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#D4B968]">
            Réf. CTC-01 · Contact
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-white tracking-tight">
            Parlons gouvernance, risques & conformité.
          </h2>
          <p className="mt-4 text-[#CBD3DD]/80 text-sm sm:text-base leading-relaxed max-w-md">
            Ouvert aux stages, postes de consultant junior et missions GRC / QHSE. Écrivez-moi, je réponds sous un à deux jours ouvrés.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:errachidalaaeddine@gmail.com"
              className="flex items-center gap-4 group focus-ring rounded-xl p-2.5 -ml-2.5 hover:bg-white/5 transition-colors"
            >
              <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#D4B968] group-hover:border-[#B4922E] group-hover:bg-[#B4922E]/10 transition-colors shrink-0">
                <Mail className="w-5 h-5 stroke-[1.5]" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase text-[#CBD3DD]/60">Email</p>
                <p className="text-white text-sm sm:text-base group-hover:text-[#D4B968] transition-colors font-medium">
                  errachidalaaeddine@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+21650903206"
              className="flex items-center gap-4 group focus-ring rounded-xl p-2.5 -ml-2.5 hover:bg-white/5 transition-colors"
            >
              <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#D4B968] group-hover:border-[#B4922E] group-hover:bg-[#B4922E]/10 transition-colors shrink-0">
                <Phone className="w-5 h-5 stroke-[1.5]" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase text-[#CBD3DD]/60">Téléphone</p>
                <p className="text-white text-sm sm:text-base group-hover:text-[#D4B968] transition-colors font-medium">
                  +216 50 903 206
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/alaeddine-errachid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group focus-ring rounded-xl p-2.5 -ml-2.5 hover:bg-white/5 transition-colors"
            >
              <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#D4B968] group-hover:border-[#B4922E] group-hover:bg-[#B4922E]/10 transition-colors shrink-0">
                <Linkedin className="w-5 h-5 stroke-[1.5]" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase text-[#CBD3DD]/60">LinkedIn</p>
                <p className="text-white text-sm sm:text-base group-hover:text-[#D4B968] transition-colors font-medium">
                  linkedin.com/in/alaeddine-errachid
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-2.5 -ml-2.5">
              <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#D4B968] shrink-0">
                <MapPin className="w-5 h-5 stroke-[1.5]" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase text-[#CBD3DD]/60">Localisation</p>
                <p className="text-white text-sm sm:text-base font-medium">
                  Tunis, Tunisie
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 shadow-2xl text-[#0B1F3A] dark:text-white">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-mono text-[10px] tracking-widest uppercase text-[#64748B] dark:text-[#CBD3DD] mb-2">
                  Nom
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="focus-ring w-full rounded-xl border border-[#0B1F3A]/15 dark:border-white/15 bg-transparent px-4 py-3 text-sm text-[#0B1F3A] dark:text-white placeholder:text-[#64748B]/50"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-[10px] tracking-widest uppercase text-[#64748B] dark:text-[#CBD3DD] mb-2">
                  Email
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="focus-ring w-full rounded-xl border border-[#0B1F3A]/15 dark:border-white/15 bg-transparent px-4 py-3 text-sm text-[#0B1F3A] dark:text-white placeholder:text-[#64748B]/50"
                  placeholder="vous@entreprise.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-mono text-[10px] tracking-widest uppercase text-[#64748B] dark:text-[#CBD3DD] mb-2">
                Objet
              </label>
              <input
                required
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="focus-ring w-full rounded-xl border border-[#0B1F3A]/15 dark:border-white/15 bg-transparent px-4 py-3 text-sm text-[#0B1F3A] dark:text-white placeholder:text-[#64748B]/50"
                placeholder="En quoi puis-je vous aider ?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[10px] tracking-widest uppercase text-[#64748B] dark:text-[#CBD3DD] mb-2">
                Message
              </label>
              <textarea
                required
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="focus-ring w-full rounded-xl border border-[#0B1F3A]/15 dark:border-white/15 bg-transparent px-4 py-3 text-sm text-[#0B1F3A] dark:text-white placeholder:text-[#64748B]/50 resize-none"
                placeholder="Parlez-moi un peu de votre projet ou de votre opportunité..."
              />
            </div>

            <button
              type="submit"
              className="focus-ring w-full bg-[#0B1F3A] dark:bg-[#B4922E] text-white dark:text-[#070F1F] font-medium px-7 py-3.5 rounded-full hover:bg-[#14294C] dark:hover:bg-[#D4B968] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Envoyer le message</span>
              <Send className="w-4 h-4" />
            </button>

            {formSubmitted && (
              <div className="flex items-center justify-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message prêt — ouverture de votre client de messagerie...</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
