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
      <section className="relative overflow-hidden pt-16 lg:pt-24">
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
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => window.open('https://wa.me/250788000000', '_blank')}
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
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105"></div>
              {/* Image showing products + machines background */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                <img
                  src="/tofu.jpg"
                  alt="Modern Processing"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] space-y-4">
                  <img
                    src="/milk.jpg"
                    alt="Nutrisoya Products"
                    className="w-full rounded-xl shadow-2xl border-2 border-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">{t.production.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t.production.text}</p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            {productionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-6 hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto border border-gray-100">
                  <step.icon className="h-10 w-10 text-primary/80" />
                </div>
                <h3 className="font-bold text-gray-900 tracking-tight">{step.title}</h3>
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
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary/5 py-24">
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
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Short Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">{t.about.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nutrisoya is dedicated to improving food diet and cost effectiveness through soya products promotion. 
              We combine modern processing technology with natural ingredients to deliver healthy and affordable nutrition.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-2 text-primary font-bold hover:underline">
              <span>{language === 'en' ? 'Learn more about us' : 'Soma byinshi kuri twe'}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/tea.jpg" className="rounded-2xl shadow-sm" alt="Healthy" />
            <img src="/baga.jpg" className="rounded-2xl shadow-sm mt-8" alt="Soya" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img 
                src="/sambusa.jpg" 
                className="rounded-[2rem] shadow-2xl grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]" 
                alt="Modern Machines"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{language === 'en' ? 'Certified Quality' : 'Ubuziranenge bwemejwe'}</p>
                    <p className="text-xl font-bold text-gray-900">100% Safe</p>
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
                    className="flex items-center space-x-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 group/item"
                  >
                    <div className="bg-primary/10 rounded-full p-2 group-hover/item:bg-primary/20 transition-colors duration-300">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold text-gray-800 group-hover/item:text-gray-900">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              {t.cta.title}
            </h2>
            <p className="text-lg text-white/80">
              {language === 'en' 
                ? 'Join thousands of families enjoying our nutritious soya products.' 
                : 'Sanga imiryango ibihumbi wishimira ibicuruzwa byacu bya soya bifite intungamubiri.'}
            </p>
            <button
              onClick={() => window.open('https://wa.me/250788000000', '_blank')}
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all flex items-center justify-center space-x-3 mx-auto shadow-xl group"
            >
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>{t.cta.button}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
