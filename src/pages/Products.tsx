import React from 'react';
import { useLanguage } from '../LanguageContext';
import { products } from '../translations';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

const Products = () => {
  const { language } = useLanguage();

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary/10 py-32 border-b border-gray-100 relative overflow-hidden animate-gradient">
        {/* Decorative elements with animations */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-6 py-2 rounded-full text-sm font-bold mb-6 tracking-wider uppercase border border-primary/20 shadow-lg animate-bounce-subtle">
              {language === 'en' ? 'Premium Collection' : 'Urusobe rw\'Ibyiza'}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent animate-gradient">
              {language === 'en' ? 'Our Soya Products' : 'Ibicuruzwa byacu bya Soya'}
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8 animate-shimmer"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Discover our range of premium, nutritious, and affordable soya-based foods.' 
                : 'Sura urutonde rw\'ibiribwa byacu bya soya byiza, bifite intungamubiri kandi bihendutse.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Background decorative pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 relative z-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
