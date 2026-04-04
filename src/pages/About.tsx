import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const values = [
    { icon: ShieldCheck, title: language === 'en' ? 'Quality' : 'Ubuziranenge', desc: language === 'en' ? 'We maintain the highest standards in all our products.' : 'Tugumana urwego rwo hejuru mu bicuruzwa byacu byose.' },
    { icon: Users, title: language === 'en' ? 'Community' : 'Umuryango', desc: language === 'en' ? 'Supporting local farmers and improving community health.' : 'Gushyigikira abahinzi bacu no kuvugurura ubuzima bw\'umuryango.' },
    { icon: Target, title: language === 'en' ? 'Accessibility' : 'Kugerwaho na bose', desc: language === 'en' ? 'Making healthy food affordable for everyone.' : 'Gutuma ibiribwa bifite intungamubiri bigera kuri bose.' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              {language === 'en' ? 'Our Story' : 'Inkuru Yacu'}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              {t.about.title}
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="h-24 w-24 text-primary" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3 tracking-tight">
                  <div className="bg-primary/10 p-2 rounded-xl">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <span>Mission</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t.about.mission}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye className="h-24 w-24 text-primary" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3 tracking-tight">
                  <div className="bg-primary/10 p-2 rounded-xl">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <span>Vision</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t.about.vision}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="relative w-full group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="/tofu.jpg"
                alt="Healthy Food"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">{t.about.whyChoose}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-primary/10 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
