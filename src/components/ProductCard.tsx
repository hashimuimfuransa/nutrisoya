import React from 'react';
import { Product } from '../types';
import { useLanguage } from '../LanguageContext';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language } = useLanguage();
  const name = product.name[language];
  const description = product.description[language];
  const benefits = product.benefits[language];

  const handleWhatsApp = () => {
    const message = `Hello JENICE-Nutrisoya, I would like to order ${name}.`;
    window.open(`https://wa.me/250788503005?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full group relative"
    >
      {/* Image Section with Gradient Overlay */}
      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg border border-gray-100">
          <span className="text-primary font-bold text-[10px] sm:text-xs tracking-wider uppercase">Premium Quality</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow space-y-3 sm:space-y-4 bg-white">
        {/* Title and Description */}
        <div className="space-y-1.5 sm:space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight group-hover:text-primary transition-colors duration-300">{name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2">{description}</p>
        </div>

        {/* Benefits List */}
        <div className="space-y-2 sm:space-y-3 flex-grow">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-600 font-medium group/benefit"
            >
              <div className="bg-primary/10 rounded-full p-0.5 sm:p-1 group-hover/benefit:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
              </div>
              <span className="group-hover/benefit:text-gray-900 transition-colors duration-300 line-clamp-1">{benefit}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-300 shadow-lg shadow-primary/20 active:scale-95 group/btn mt-2 sm:mt-4"
        >
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:scale-110 transition-transform duration-300" />
          <span>{language === 'en' ? 'Order Now' : 'Tumiza Ubu'}</span>
        </button>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute -top-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:from-primary/20 transition-all duration-500"></div>
    </motion.div>
  );
};

export default ProductCard;
