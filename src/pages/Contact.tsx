import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const contactInfo = [
    { icon: Phone, title: language === 'en' ? 'Phone' : 'Terefone', value: '+250 788 503 005 / +250 788 483 846' },
    { icon: Mail, title: 'Email', value: 'mukejudi@gmail.com' },
    { icon: MapPin, title: language === 'en' ? 'Location' : 'Aho turerereye', value: 'Kimisagara - Nyarugenge, Kigali, Rwanda' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              {language === 'en' ? 'Get in Touch' : 'Twandikire'}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              {t.contact.title}
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'en' ? 'Get in Touch' : 'Twandikire'}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {language === 'en' 
                  ? 'Have questions about our products or want to place a bulk order? We are here to help!' 
                  : 'Ufite ibibazo ku bicuruzwa byacu cyangwa urashaka gutumiza byinshi? Turi hano kugira ngo tugufashe!'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{info.title}</h3>
                    <p className="text-gray-500 text-sm">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => window.open('https://wa.me/250788503005', '_blank')}
              className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="h-7 w-7" />
              <span>{t.contact.whatsapp}</span>
            </button>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl h-64 w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
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
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-2xl border border-gray-50"
          >
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              
              const subject = encodeURIComponent(`Message from ${name} - JENICE-Nutrisoya Website`);
              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
              );
              
              window.open(`mailto:mukejudi@gmail.com?subject=${subject}&body=${body}`, '_blank');
            }}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.formName}</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none hover:bg-gray-100 focus:hover:bg-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.formEmail}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none hover:bg-gray-100 focus:hover:bg-white"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t.contact.formMessage}</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none resize-none hover:bg-gray-100 focus:hover:bg-white"
                  placeholder={language === 'en' ? 'How can we help you?' : 'Twagufasha ute?'}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-primary/20 active:scale-95 group/btn"
              >
                <Send className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                <span>{t.contact.send}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
