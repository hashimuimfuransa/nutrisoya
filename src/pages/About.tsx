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
      <section className="bg-gradient-to-br from-primary/10 via-white to-accent/10 py-32 relative overflow-hidden animate-gradient">
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-6 py-2 rounded-full text-sm font-bold mb-6 tracking-wider uppercase border border-primary/20 shadow-lg animate-bounce-subtle">
              {language === 'en' ? 'Our Story' : 'Inkuru Yacu'}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent animate-gradient">
              {t.about.title}
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full animate-shimmer"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 transform duration-500">
                <Target className="h-24 w-24 text-primary" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3 tracking-tight">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">Mission</span>
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
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 transform duration-500">
                <Eye className="h-24 w-24 text-primary" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3 tracking-tight">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <span className="bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">Vision</span>
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
            className="flex items-center relative z-10"
          >
            <div className="relative w-full group perspective-1000">
              <motion.div
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500 animate-pulse-glow"></div>
                <img
                  src="/tofu.jpg"
                  alt="Healthy Food"
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary/5 py-24 relative overflow-hidden">
        {/* Floating animated orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
              {t.about.whyChoose}
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full animate-shimmer"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-primary/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <value.icon className="h-10 w-10 text-primary group-hover:text-primary/80 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-primary transition-colors duration-300 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
