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
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary/5 py-32 border-b border-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              {language === 'en' ? 'Premium Collection' : 'Urusobe rw\'Ibyiza'}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              {language === 'en' ? 'Our Soya Products' : 'Ibicuruzwa byacu bya Soya'}
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Discover our range of premium, nutritious, and affordable soya-based foods.' 
                : 'Sura urutonde rw\'ibiribwa byacu bya soya byiza, bifite intungamubiri kandi bihendutse.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
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
