import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations, products } from '../translations';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Zap, 
  MessageCircle, 
  Settings, 
  Package, 
  Factory, 
  CheckCircle2,
  Quote,
  Leaf
} from 'lucide-react';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Show all 5 products as requested
  const featuredProducts = products;

  const benefits = [
    { icon: Zap, title: t.benefits.highProtein, desc: language === 'en' ? 'Essential for muscle growth and repair.' : 'Ingenzi mu gukura no gusana imikaya.' },
    { icon: Heart, title: t.benefits.heartHealthy, desc: language === 'en' ? 'Lowers cholesterol and supports heart health.' : 'Igabanya kolesiteroli kandi ifasha umutima.' },
    { icon: ShieldCheck, title: t.benefits.costEffective, desc: language === 'en' ? 'Affordable nutrition for the whole family.' : 'Intungamubiri zihendutse ku muryango wose.' },
    { icon: Leaf, title: t.benefits.naturalSafe, desc: language === 'en' ? '100% natural ingredients, no harmful additives.' : 'Ibirungo 100% by\'umwimerere, nta bindi bintu bibi.' },
  ];

  const productionSteps = [
    { icon: Leaf, title: t.production.steps.selection },
    { icon: Settings, title: t.production.steps.cleaning },
    { icon: Factory, title: t.production.steps.production },
    { icon: Package, title: t.production.steps.packaging },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 lg:pt-24 bg-gradient-to-br from-primary/5 via-white to-accent/10 animate-gradient">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>{language === 'en' ? 'Modern Soya Processing Company' : 'Isosiyete igezweho itunganya Soya'}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent animate-gradient">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => window.open('https://wa.me/250788503005', '_blank')}
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center space-x-2 group"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{t.hero.orderNow}</span>
                </button>
                <Link
                  to="/products"
                  className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  {t.hero.viewProducts}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative animate-float"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -rotate-3 scale-105 animate-pulse-glow"></div>
              {/* Image showing products + machines background */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] bg-gray-100 group">
                <img
                  src="/tofu.jpg"
                  alt="Modern Processing"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] space-y-4">
                  <motion.img
                    src="/milk.jpg"
                    alt="Nutrisoya Products"
                    className="w-full rounded-xl shadow-2xl border-2 border-white/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white via-primary/5 to-accent/5 relative overflow-hidden">
        {/* Decorative waves */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-accent/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">{t.production.title}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">{t.production.text}</p>
            <div className="h-1.5 w-20 sm:w-24 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>
            
            {productionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-lg text-center space-y-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
                  {index + 1}
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto border border-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 tracking-tight group-hover:text-primary transition-colors duration-300 text-base sm:text-lg">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12 lg:mb-16 gap-4 sm:gap-0">
          <div className="w-full sm:w-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              {language === 'en' ? 'Our Main Products' : 'Ibicuruzwa byacu by\'ingenzi'}
            </h2>
            <div className="h-1.5 w-20 sm:w-24 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
          </div>
          <Link to="/products" className="text-primary font-bold hover:underline flex items-center space-x-2 group w-full sm:w-auto justify-center sm:justify-start">
            <span>{language === 'en' ? 'See all' : 'Reba byose'}</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary/5 py-24 relative overflow-hidden">
        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">{t.benefits.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <benefit.icon className="h-7 w-7 text-primary group-hover:text-primary/80 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Short Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-white via-primary/5 to-accent/5 rounded-[3rem] p-12 border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          {/* Decorative gradient orbs */}
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors duration-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/15 transition-colors duration-500"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">{t.about.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              JENICE-Nutrisoya is dedicated to improving food diet and cost effectiveness through soya products promotion. 
              We combine modern processing technology with natural ingredients to deliver healthy and affordable nutrition.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-2 text-primary font-bold hover:underline">
              <span>{language === 'en' ? 'Learn more about us' : 'Soma byinshi kuri twe'}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <motion.img 
              src="/tea.jpg" 
              className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105" 
              alt="Healthy" 
              whileHover={{ rotate: 2, scale: 1.05 }}
            />
            <motion.img 
              src="/baga.jpg" 
              className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 mt-8" 
              alt="Soya" 
              whileHover={{ rotate: -2, scale: 1.05 }}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(22,163,74,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.1),transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group perspective-1000">
              <motion.div
                className="relative"
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/sambusa.jpg" 
                  className="rounded-[2rem] shadow-2xl grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" 
                  alt="Modern Machines"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
              </motion.div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-gray-100 group-hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-bounce-subtle">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-xl">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{language === 'en' ? 'Certified Quality' : 'Ubuziranenge bwemejwe'}</p>
                    <p className="text-xl font-bold text-gray-900 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">100% Safe</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">{t.whyChoose.title}</h2>
              <div className="space-y-4">
                {t.whyChoose.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 bg-white p-5 rounded-2xl shadow-md border border-gray-100 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/item relative overflow-hidden"
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full p-2 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                      <CheckCircle2 className="h-5 w-5 text-primary group-hover/item:text-primary/80 transition-colors" />
                    </div>
                    <span className="relative z-10 font-semibold text-gray-800 group-hover/item:text-gray-900 group-hover/item:text-primary transition-colors duration-300">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-white via-primary/5 to-accent/5 rounded-[3rem] p-12 border border-gray-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          {/* Animated corner decorations */}
          <motion.div 
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
              {language === 'en' ? 'Visit Us' : 'Tusura'}
            </h2>
            <p className="text-gray-600">
              {language === 'en' 
                ? 'Location: Kimisagara - Nyarugenge, Kigali, Rwanda' 
                : 'Aho turerereye: Kimisagara - Nyarugenge, Kigali, u Rwanda'}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] group/map hover:shadow-2xl transition-all duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover/map:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5038!2d30.0587!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7b5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sKimisagara%2C%20Nyarugenge%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JENICE-Nutrisoya Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden group">
          {/* Animated background effects */}
          <motion.div 
            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"
            animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
          {/* Additional animated circles */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white to-accent/80 bg-clip-text text-transparent">
              {t.cta.title}
            </h2>
            <p className="text-lg text-white/80">
              {language === 'en' 
                ? 'Join thousands of families enjoying our nutritious soya products.' 
                : 'Sanga imiryango ibihumbi wishimira ibicuruzwa byacu bya soya bifite intungamubiri.'}
            </p>
            <button
              onClick={() => window.open('https://wa.me/250788503005', '_blank')}
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all flex items-center justify-center space-x-3 mx-auto shadow-2xl group/btn hover:scale-105 active:scale-95 relative overflow-hidden"
            >
              {/* Button shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
              <MessageCircle className="h-6 w-6 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">{t.cta.button}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
