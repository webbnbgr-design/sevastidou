/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Globe, 
  Scale, 
  Users, 
  Clock, 
  CheckCircle2
} from 'lucide-react';
import { translations, Language } from './translations';

const NavItem = ({ section, label }: { section: string, label: string, key?: string }) => (
  <a 
    href={`#${section}`}
    className="text-xs font-mono font-medium text-slate-500 hover:text-brand-gold transition-colors uppercase tracking-[0.1em]"
  >
    {label}
  </a>
);

export default function App() {
  const [lang, setLang] = useState<Language>('el');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations;

  return (
    <div className="min-h-screen bg-brand-dark text-brand-paper selection:bg-brand-gold selection:text-brand-dark font-sans overflow-x-hidden">
      {/* Background Blobs for Modern Feel */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="modern-blob w-[500px] h-[500px] bg-brand-gold top-[-10%] left-[-10%]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="modern-blob w-[600px] h-[600px] bg-blue-900 bottom-[-20%] right-[-10%] opacity-10" 
        />
      </div>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <span className="text-xl font-serif font-bold tracking-tight text-white">
              SEVASTIDOU <span className="text-brand-gold">LAW</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-mono">
              {lang === 'el' ? 'ΜΑΡΙΑ Κ. ΣΕΒΑΣΤΙΔΟΥ' : 'MARIA K. SEVASTIDOU'}
            </span>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-10">
            {['home', 'team', 'services', 'immigration', 'blog', 'contact'].map((item) => (
              <NavItem key={item} section={item} label={t.nav[item as keyof typeof t.nav][lang] as string} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
              <span 
                onClick={() => setLang('el')}
                className={`text-[9px] font-mono px-3 py-1 rounded-full transition-all cursor-pointer ${lang === 'el' ? 'bg-brand-gold text-brand-dark' : 'text-slate-500 hover:text-slate-300'}`}
              >
                ΕΛ
              </span>
              <span 
                onClick={() => setLang('en')}
                className={`text-[9px] font-mono px-3 py-1 rounded-full transition-all cursor-pointer ${lang === 'en' ? 'bg-brand-gold text-brand-dark' : 'text-slate-500 hover:text-slate-300'}`}
              >
                EN
              </span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-44 pb-32 overflow-hidden">
          <div className="absolute top-20 right-0 w-1/3 h-full bg-brand-gold/5 -z-10 rounded-l-[100px]" />
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 text-brand-gold font-mono tracking-[0.4em] text-[10px] uppercase mb-8">
                  <span className="w-12 h-px bg-brand-gold" />
                  <span>Est. 2009</span>
                </div>
                <h1 className="text-6xl lg:text-[100px] font-serif font-medium leading-[0.9] text-brand-paper mb-10 max-w-4xl tracking-tighter">
                  {t.hero.title[lang]}
                </h1>
                <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-light">
                  {t.hero.subtitle[lang]}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                </div>
              </motion.div>
            </div>
            
            {/* Visual Element (since no photos) */}
            <div className="lg:w-1/3 mt-20 lg:mt-0 relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="aspect-[4/5] bg-brand-surface rounded-[60px] relative overflow-hidden shadow-2xl border border-white/5"
               >
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                    <Scale className="w-16 h-16 mb-6 text-brand-gold opacity-50" />
                    <div className="text-4xl font-serif italic mb-4 opacity-70 italic relative">
                      <span className="absolute -left-6 top-0 text-6xl opacity-20 font-serif text-brand-gold">"</span>
                      {lang === 'el' ? 'Δικαιοσύνη σημαίνει αλήθεια.' : 'Justice means truth.'}
                    </div>
                    <div className="w-12 h-0.5 bg-brand-gold mb-4" />
                    <p className="text-sm font-bold tracking-widest uppercase opacity-60">Athens | Thessaloniki</p>
                  </div>
               </motion.div>
               <div className="absolute -bottom-10 -left-10 bg-brand-surface p-8 rounded-3xl shadow-xl border border-white/5 hidden xl:block">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-gold/10 p-3 rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-white">5/5 Google Rating</p>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Excellent Verified Reviews</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-brand-surface py-24 overflow-hidden relative border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "16K+", label: t.social.followers[lang] },
                { val: "15+", label: lang === 'el' ? 'Έτη' : 'Years' },
                { val: "5.0", label: t.social.reviews[lang] },
                { val: "100%", label: lang === 'el' ? 'Αφοσίωση' : 'Commitment' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start p-6 border-l border-white/5">
                  <span className="text-xs font-mono text-brand-gold uppercase tracking-[0.3em] mb-4">Stat_{i+1}</span>
                  <span className="text-5xl font-serif text-white mb-2 leading-none">{stat.val}</span>
                  <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services / Expertise */}
        <section id="services" className="py-32 bg-brand-dark">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">
                What we do
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6">
                {lang === 'el' ? 'Τομείς Εξειδίκευσης' : 'Areas of Expertise'}
              </h2>
              <p className="text-slate-400">
                {lang === 'el' ? 'Ολοκληρωμένη νομική κάλυψη προσαρμοσμένη στις ανάγκες σας με συνέπεια και επαγγελματισμό.' : 'Comprehensive legal coverage tailored to your needs with consistency and professionalism.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: Scale, label: t.services.civil[lang], desc: lang === 'el' ? 'Οικογενειακές διαφορές, εμπράγματο δίκαιο, συμβάσεις και αποζημιώσεις.' : 'Family disputes, property law, contracts, and compensations.' },
                { icon: Globe, label: t.services.immigration[lang], desc: lang === 'el' ? 'Golden Visa, άδειες διαμονής, πολιτογραφήσεις και υποθέσεις Visa.' : 'Golden Visa, residence permits, citizenship, and visa cases.' },
                { icon: Users, label: t.services.criminal[lang], desc: lang === 'el' ? 'Υπεράσπιση, ποινική δίωξη και παράσταση προς υποστήριξη κατηγορίας.' : 'Defense, criminal prosecution, and legal representation.' },
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-brand-surface p-10 rounded-[40px] border border-white/5 hover:border-brand-gold/30 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-brand-dark shadow-xl border border-white/5 rounded-full flex items-center justify-center mb-10 group-hover:bg-brand-gold transition-all duration-700">
                    <service.icon className="w-7 h-7 text-brand-gold group-hover:text-brand-dark transition-all duration-700" />
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-6 leading-tight">{service.label}</h3>
                  <p className="text-slate-400 leading-relaxed italic opacity-80">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Added Details Section */}
            <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <h3 className="text-3xl font-serif text-brand-gold">
                     {lang === 'el' ? 'Η Δέσμευσή μας για την Αριστεία' : 'Our Commitment to Excellence'}
                  </h3>
                  <div className="space-y-6">
                     {[
                        { title: lang === 'el' ? 'Εμπειρία & Εξειδίκευση' : 'Experience & Expertise', desc: lang === 'el' ? 'Πάνω από 15 χρόνια εμπειρίας στα ελληνικά δικαστήρια.' : 'Over 15 years of experience in Greek courts.' },
                        { title: lang === 'el' ? 'Προσωποποιημένη Προσέγγιση' : 'Personalized Approach', desc: lang === 'el' ? 'Κάθε πελάτης είναι μοναδικός, κάθε λύση είναι προσαρμοσμένη.' : 'Every client is unique, every solution is tailored.' },
                        { title: lang === 'el' ? 'Ταχύτητα & Αποτελεσματικότητα' : 'Speed & Efficiency', desc: lang === 'el' ? 'Στόχος μας είναι η ταχεία διεκπεραίωση των υποθέσεων.' : 'Our goal is the swift processing of cases.' },
                     ].map((item, i) => (
                  <div className="flex gap-6">
                           <div className="w-1.5 h-12 bg-white/5 rounded-full shrink-0 overflow-hidden relative">
                              <motion.div 
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 bg-brand-gold" 
                              />
                           </div>
                           <div>
                              <p className="font-mono text-brand-gold uppercase tracking-[0.2em] text-[9px] mb-2">{item.title}</p>
                              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="bg-brand-surface p-12 rounded-[50px] border border-white/5">
                  <p className="text-slate-300 leading-relaxed italic text-lg mb-8">
                     {lang === 'el' ? '«Η νομική επιστήμη δεν είναι μόνο κανόνες. Είναι η τέχνη της προστασίας των ανθρώπινων δικαιωμάτων στην πράξη.»' : '"Legal science is not just rules. It is the art of protecting human rights in practice."'}
                  </p>
                  <p className="font-serif text-xl border-l-4 border-brand-gold pl-6">— Μαρία Κ. Σεβαστίδου</p>
               </div>
            </div>
          </div>
        </section>

        {/* Immigration Detail Section (Requested) */}
        <section id="immigration" className="py-32 bg-brand-surface border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                <div className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">
                  Foreigners Law Specialist
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-8">
                  {t.immigration.title[lang]}
                </h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>{t.immigration.desc[lang]}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                    {['Golden Visa', 'Residence Permits', 'Citizenship', 'Schengen Visa', 'Investment Law', 'Deportation Defense'].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                        <span className="font-semibold text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 grid grid-cols-2 gap-6">
                  <div className="space-y-6 pt-12">
                    <div className="aspect-square bg-slate-800 rounded-[30px] flex items-center justify-center border border-white/5">
                      <Globe className="w-16 h-16 text-brand-gold opacity-50" />
                    </div>
                    <div className="bg-brand-dark p-8 rounded-[30px] shadow-lg border border-white/5">
                      <p className="text-3xl font-serif mb-2 text-brand-gold">98%</p>
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Success Rate</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-brand-dark text-brand-paper p-8 rounded-[30px] shadow-lg h-full flex flex-col justify-center border border-brand-gold/20">
                      <Users className="w-10 h-10 text-brand-gold mb-6" />
                      <p className="text-lg font-serif mb-2">{lang === 'el' ? 'Εμπιστοσύνη' : 'Trust'}</p>
                      <p className="text-sm opacity-60 leading-relaxed text-slate-400">
                        {lang === 'el' ? 'Κάθε περίπτωση αλλοδαπού είναι μοναδική για εμάς.' : 'Every foreign national case is unique to us.'}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative Pattern Component */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-gold/10 rounded-full opacity-20 -z-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section (Modern Bento) */}
        <section className="py-40 bg-brand-dark container mx-auto px-6 overflow-hidden">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
              <div className="max-w-xl">
                <div className="text-brand-gold font-mono uppercase tracking-[0.4em] text-[10px] mb-6">Testimonials</div>
                <h2 className="text-5xl lg:text-7xl font-serif font-medium mb-6 text-brand-paper">
                  {t.social.title[lang]}
                </h2>
                <p className="text-slate-400 font-light">
                  {lang === 'el' ? 'Η εμπιστοσύνη σας είναι η μεγαλύτερη ανταμοιβή μας. Δείτε τι λένε οι πελάτες μας.' : 'Your trust is our greatest reward. See what our clients say.'}
                </p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[250px] gap-4">
              {[
                { col: "lg:col-span-4 md:col-span-3", text: lang === 'el' ? 'Εξαιρετική επαγγελματίας, μας βοήθησε άμεσα στη Golden Visa!' : 'Excellent professional, helped us immediately with the Golden Visa!' },
                { col: "lg:col-span-8 md:col-span-3", text: lang === 'el' ? 'Πολύ καλή γνώση του αντικειμένου και επικοινωνία. Η καθοδήγηση ήταν πολύτιμη για την επιχείρησή μας.' : 'Great knowledge of the subject and communication. The guidance was invaluable for our business.' },
                { col: "lg:col-span-7 md:col-span-3", text: lang === 'el' ? 'Η καλύτερη επιλογή στη Θεσσαλονίκη για υποθέσεις αλλοδαπών. Άριστο περιβάλλον και εξυπηρέτηση.' : 'The best choice in Thessaloniki for foreigner cases. Excellent environment and service.' },
                { col: "lg:col-span-5 md:col-span-3", text: lang === 'el' ? 'Σας ευχαριστούμε για την πολύτιμη καθοδήγηση καθ’ όλη τη διάρκεια της διαδικασίας!' : 'Thank you for the valuable guidance throughout the process!' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-brand-surface rounded-[30px] border border-white/5 p-10 flex flex-col justify-between group hover:border-brand-gold/20 transition-all duration-500 ${item.col}`}
                >
                  <div className="flex items-center space-x-2">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-brand-gold text-[8px]">●</span>)}
                  </div>
                  <p className="text-brand-paper font-serif italic text-lg leading-relaxed line-clamp-3">
                    "{item.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-slate-500">Verified_Cli_{i+1}</span>
                    <span className="text-[8px] font-mono text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity underline decoration-brand-gold/30 underline-offset-4">READ FULL CASE</span>
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Strategic Approach Section (Replaces Blog) */}
        <section id="blog" className="py-40 bg-brand-dark relative overflow-hidden">
           <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row gap-24 mb-32 items-center">
                 <div className="lg:w-1/2">
                    <div className="text-brand-gold font-mono uppercase tracking-[0.4em] text-[10px] mb-8">Outperform_Strategic</div>
                    <h2 className="text-5xl lg:text-7xl font-serif font-medium mb-10 text-brand-paper leading-[1.1] tracking-tighter">
                       {t.strategicApproach.title[lang]}
                    </h2>
                 </div>
                 <div className="lg:w-1/2">
                    <p className="text-xl text-slate-400 font-light leading-relaxed italic border-l-2 border-brand-gold/30 pl-8">
                       {t.strategicApproach.subtitle[lang]}
                    </p>
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                 {t.strategicApproach.methods.map((method: any, idx: number) => (
                    <motion.div 
                       key={idx}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: idx * 0.1 }}
                       className="bg-brand-surface p-12 lg:p-16 rounded-[50px] border border-white/5 hover:border-brand-gold/20 transition-all duration-700 group"
                    >
                       <div className="text-[10px] font-mono text-brand-gold uppercase tracking-[0.3em] mb-8 flex items-center space-x-4">
                          <span className="w-8 h-px bg-brand-gold/30" />
                          <span>Methodology_0{idx + 1}</span>
                       </div>
                       <h3 className="text-3xl lg:text-4xl font-serif text-brand-paper mb-8 group-hover:text-brand-gold transition-colors duration-500">
                          {method.title[lang]}
                       </h3>
                       <p className="text-slate-400 leading-relaxed text-lg font-light">
                          {method.desc[lang]}
                       </p>
                       <div className="mt-12 flex items-center space-x-4">
                          <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                          <span className="text-[9px] font-mono uppercase tracking-widest text-slate-600">Active Strategic Guard</span>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Team / Human Element Placeholders */}
        <section id="team" className="py-32 bg-brand-dark">
          <div className="container mx-auto px-6">
             <div className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/3">
                  <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-8 text-brand-gold">
                    {t.nav.team[lang]}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-8 italic">
                    {lang === 'el' ? 'Η ομάδα μας αποτελείται από έμπειρους νομικούς που μοιράζονται το ίδιο πάθος για την προάσπιση των δικαιωμάτων σας.' : 'Our team consists of experienced lawyers who share the same passion for defending your rights.'}
                  </p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
                   {[
                     { name: lang === 'el' ? 'Μαρία Κ. Σεβαστίδου' : 'Maria K. Sevastidou', role: lang === 'el' ? 'Δικηγόρος - Ιδρυτής' : 'Lawyer - Founder' },
                     { name: lang === 'el' ? 'Συνεργάτες' : 'Associates', role: 'Legal Experts' }
                   ].map((member, i) => (
                     <div key={i} className="group">
                        <div className="aspect-[3/4] bg-brand-surface rounded-[50px] mb-8 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-brand-gold/30 transition-colors">
                           <Users className="w-20 h-20 text-slate-800" />
                        </div>
                        <h4 className="text-2xl font-serif mb-2 text-white">{member.name}</h4>
                        <p className="text-brand-gold font-bold uppercase tracking-widest text-xs">{member.role}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 bg-brand-dark relative overflow-hidden">
           <div className="container mx-auto px-6 relative z-10">
              <div className="bg-brand-surface rounded-[60px] p-12 lg:p-32 text-white flex flex-col lg:flex-row justify-between gap-24 border border-white/5 relative overflow-hidden">
                 {/* Glass Blur Background Inside Card */}
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] -z-10 rounded-full" />
                 
                 <div className="lg:w-1/2">
                    <div className="text-brand-gold font-mono uppercase tracking-[0.4em] text-[10px] mb-8">Get in touch</div>
                    <h2 className="text-5xl lg:text-[80px] font-serif font-medium mb-12 text-brand-paper leading-[0.9] tracking-tighter">
                       {lang === 'el' ? 'Ας μιλήσουμε για την απαίτησή σας' : 'Let\'s discuss your claim'}
                    </h2>
                    
                    <div className="space-y-12">
                       {[
                         { icon: Phone, label: "Direct Line", val: t.footer.phone },
                         { icon: MapPin, label: "Principal Office", val: t.footer.address[lang] },
                         { icon: Mail, label: "Digital Mail", val: t.footer.email }
                       ].map((item, i) => (
                         <div key={i} className="flex items-start space-x-8 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-brand-gold transition-all duration-500 group-hover:text-brand-dark">
                               <item.icon className="w-5 h-5 shrink-0" />
                            </div>
                            <div>
                               <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500 mb-2">{item.label}</p>
                               <p className="text-2xl font-serif text-brand-paper group-hover:text-brand-gold transition-colors">{item.val}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="lg:w-1/2 flex flex-col justify-end">
                    <div className="p-12 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10">
                       <h3 className="text-2xl font-serif mb-8 text-brand-gold">
                          {lang === 'el' ? 'Η Φιλοσοφία μας' : 'Our Philosophy'}
                       </h3>
                       <p className="text-slate-400 leading-relaxed italic text-lg font-light mb-10">
                          {lang === 'el' ? '«Πιστεύουμε στη διαφάνεια, την ειλικρίνεια και τη σκληρή δουλειά. Κάθε υπόθεση αντιμετωπίζεται με τη δέουσα προσοχή και ατομική προσέγγιση.»' : '"We believe in transparency, honesty, and hard work. Every case is treated with due care and a personalized approach."'}
                       </p>
                       <div className="flex items-center space-x-6 pt-6 border-t border-white/5">
                          <div className="bg-brand-gold/10 p-3 rounded-full">
                            <Scale className="w-6 h-6 text-brand-gold" />
                          </div>
                          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Integrity_First_Standard</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-24 bg-brand-dark border-t border-white/5">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-16">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="text-3xl font-serif font-bold tracking-tight text-white mb-4">
                    SEVASTIDOU <span className="text-brand-gold">LAW</span>
                  </span>
                  <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em] leading-relaxed">
                     © 2024 SEVASTIDOU_LAW_FIRM<br className="md:hidden" /> ALL_RIGHTS_RESERVED
                  </p>
               </div>
               
               <div className="flex flex-col items-center md:items-end">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gold mb-4 underline decoration-brand-gold/30 underline-offset-8">Designed for Excellence</p>
                  <p className="text-[9px] text-slate-600 uppercase tracking-[0.4em] font-mono italic">THESSALONIKI_ATHENS_GREECE</p>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
