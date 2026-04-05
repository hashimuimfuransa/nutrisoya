import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Shield, FileText, CheckCircle2 } from 'lucide-react';

const TermsOfUse = () => {
  const { language } = useLanguage();

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
              {language === 'en' ? 'Legal' : 'Amategeko'}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              {language === 'en' ? 'Terms of Use' : 'Amabwiriza yo Gukoresha'}
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100"
        >
          <div className="space-y-8 text-gray-600 leading-relaxed">
            {language === 'en' ? (
              <>
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                    <p>
                      By accessing and using the JENICE-Nutrisoya website, you accept and agree to be bound by the terms 
                      and provision of this agreement. If you do not agree to abide by these terms, please do not use 
                      this service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                    <p className="mb-4">
                      Permission is granted to temporarily download one copy of the materials on JENICE-Nutrisoya's 
                      website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                      not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Modify or copy the materials</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Use the materials for any commercial purpose or public display</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Attempt to decompile or reverse engineer any software contained on the website</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Remove any copyright or other proprietary notations from the materials</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
                    <p>
                      The materials on JENICE-Nutrisoya's website are provided on an 'as is' basis. JENICE-Nutrisoya 
                      makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                      including, without limitation, implied warranties or conditions of merchantability, fitness for 
                      a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
                    <p>
                      In no event shall JENICE-Nutrisoya or its suppliers be liable for any damages (including, without 
                      limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                      the use or inability to use the materials on JENICE-Nutrisoya's website.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Product Information</h2>
                    <p>
                      We strive to provide accurate product information, including descriptions, pricing, and availability. 
                      However, we do not warrant that product descriptions or other content is accurate, complete, reliable, 
                      current, or error-free. All products are subject to availability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Orders and Payments</h2>
                    <p>
                      By placing an order through our website or via WhatsApp, you agree to purchase the selected products 
                      at the listed price. We reserve the right to refuse or cancel any order for any reason. Payment terms 
                      will be communicated at the time of order confirmation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                    <p>
                      All content on this website, including but not limited to text, graphics, logos, images, and software, 
                      is the property of JENICE-Nutrisoya and is protected by international copyright and trademark laws.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
                    <p>
                      JENICE-Nutrisoya reserves the right to revise these terms of use at any time without notice. By using 
                      this website, you are agreeing to be bound by the then-current version of these terms of service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                    <p>
                      If you have any questions about these Terms of Use, please contact us at:
                    </p>
                    <div className="mt-4 bg-gray-50 p-6 rounded-2xl">
                      <p className="font-semibold text-gray-900">JENICE-Nutrisoya</p>
                      <p>Email: mukejudi@gmail.com</p>
                      <p>Phone: +250 788 503 005 / +250 788 483 846</p>
                      <p>Location: Kimisagara - Nyarugenge, Kigali, Rwanda</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Kwakira Amabwiriza</h2>
                    <p>
                      Mu gukoresha urubuga rwa JENICE-Nutrisoya, wemeye kandi wiyemeje kubahiriza amabwiriza n'amategeko 
                      y'iri sezerano. Niba utemeye kubahiriza aya mabwiriza, nyamusa ntukoreshe iyi serivisi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uruhushya rwo Gukoresha</h2>
                    <p className="mb-4">
                      Uruhushya ruhari rwo gusoma ibiri kuri uru rubuga inshuro imwe gusa, ku mpamvu z'umwihariko, 
                      zitari iz'ubucuruzi. Ibi ni uruhushya, si uguhererekanya uburenganzira, kandi ntushobora:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Guhindura cyangwa gukoporora ibiriho</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Gukoresha ibyo bintu mu bucuruzi cyangwa kubigaragaza mu ruhame</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kugerageza gusesengura porogaramu iri kuri uru rubuga</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Gukuraho uburenganzira bw'umwimerere</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Itegeko</h2>
                    <p>
                      Ibiri kuri uru rubuga rwa JENICE-Nutrisoya bitangwa uko biri. JENICE-Nutrisoya nta guarantee iyo 
                      ari yo yose itanga, kandi ihakana izindi guarantee zose harimo n'iz'ubucuruzi, gukwiye intego 
                      runaka, cyangwa kutarenza uburenganzira bw'umwimerere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Imipaka</h2>
                    <p>
                      Nta na rimwe JENICE-Nutrisoya cyangwa abafatanyabikorwa bayo bazishyura indishyi z'ibyangiritse 
                      (harimo no gutakaza amakuru cyangwa inyungu) biterwa no gukoresha cyangwa kutabasha gukoresha 
                      ibiri kuri uru rubuga.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Amakuru y'Ibicuruzwa</h2>
                    <p>
                      Dushishikajwe no gutanga amakuru y'ukuri y'ibicuruzwa, harimo ibisobanuro, ibiciro, niba bihari. 
                      Ariko, ntitwizeza ko ibisobanuro by'ibicuruzwa ari ukuri, birangiye, bizewe, bihuye n'igihe, cyangwa 
                      bidafite amakosa. Ibicuruzwa byose biterwa n'uko bihari.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kutumiza no Kwishyura</h2>
                    <p>
                      Mu gutumiza ibicuruzwa kuri uru rubuga cyangwa unyuze kuri WhatsApp, wemeye kugura ibicuruzwa 
                      wahisemo ku giciro cyanditsweho. Dufite uburenganzira bwo kwanga cyangwa gukuraho order iyo ari yo 
                      yose. Amabwiriza yo kwishyura azatangazwa igihe order yemejwe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Umutungo w'Umwimerere</h2>
                    <p>
                      Ibiri kuri uru rubuga, harimo inyandiko, amashusho, logo, na porogaramu, ni umutungo wa 
                      JENICE-Nutrisoya kandi birinzwe n'amategeko mpuzamahanga y'uburenganzira bw'umwanditsi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Impinduka mu Mabwiriza</h2>
                    <p>
                      JENICE-Nutrisoya ifite uburenganzira bwo guhindura aya mabwiriza icyo ari cyo cyose utanamenyeshejwe. 
                      Mu gukoresha uru rubuga, wemeye kubahiriza verisiyo iheruka y'aya mabwiriza.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Amakuru yo Guhuza</h2>
                    <p>
                      Niba ufite ibibazo ku bijyanye n'aya Mabwiriza yo Gukoresha, nyamusa duhamagare kuri:
                    </p>
                    <div className="mt-4 bg-gray-50 p-6 rounded-2xl">
                      <p className="font-semibold text-gray-900">JENICE-Nutrisoya</p>
                      <p>Imeyili: mukejudi@gmail.com</p>
                      <p>Terefone: +250 788 503 005 / +250 788 483 846</p>
                      <p>Aho turerereye: Kimisagara - Nyarugenge, Kigali, u Rwanda</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Byahinduwe bwa nyuma: {new Date().toLocaleDateString('rw-RW', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsOfUse;
