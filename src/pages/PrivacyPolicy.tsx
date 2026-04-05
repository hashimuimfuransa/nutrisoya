import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, UserCheck, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
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
              {language === 'en' ? 'Privacy Policy' : "Politiki y'Ibanga"}
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
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                    <p>
                      JENICE-Nutrisoya ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
                      Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                      our website or use our services. Please read this privacy policy carefully. If you do not agree 
                      with the terms of this privacy policy, please do not access the site.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">We may collect information about you in a variety of ways:</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Data</h3>
                    <p className="mb-3">
                      Personally identifiable information, such as your name, email address, telephone number, and 
                      delivery address that you voluntarily give to us when you place an order, contact us, or 
                      register on our website.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Derivative Data</h3>
                    <p>
                      Information our servers automatically collect when you access our website, such as your IP 
                      address, browser type, operating system, access times, and the pages you have viewed directly 
                      before and after accessing our website.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Order Information</h3>
                    <p>
                      Details about products you order, including product selection, quantity, payment information, 
                      and delivery preferences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                    <p className="mb-4">We use the information we collect to:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Process and fulfill your orders</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Communicate with you about your orders, products, and services</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Send you promotional materials and updates (with your consent)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Improve our website, products, and customer service</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Respond to your comments, questions, and requests</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Monitor and analyze trends, usage, and activities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Detect, prevent, and address technical issues and fraud</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Eye className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
                    <p className="mb-4">We may share information we have collected about you in certain situations:</p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">By Law or to Protect Rights</h3>
                    <p className="mb-3">
                      If we believe the release of information about you is necessary to respond to legal process, 
                      to investigate or remedy potential violations of our policies, or to protect the rights, 
                      property, and safety of others, we may share your information as permitted or required by 
                      any applicable law, rule, or regulation.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Third-Party Service Providers</h3>
                    <p>
                      We may share your information with third parties that perform services for us or on our behalf, 
                      including payment processing, data analysis, email delivery, hosting services, customer service, 
                      and marketing assistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Security of Your Information</h2>
                    <p>
                      We use administrative, technical, and physical security measures to help protect your personal 
                      information. While we have taken reasonable steps to secure the personal information you provide 
                      to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, 
                      and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Bell className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                    <p className="mb-4">You have certain rights regarding your personal information:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Access:</strong> You can request copies of your personal data</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Correction:</strong> You can request that we correct any information you believe is inaccurate</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Deletion:</strong> You can request that we erase your personal data under certain conditions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Opt-out:</strong> You can opt out of receiving marketing communications at any time</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                    <p>
                      We may use cookies and similar tracking technologies to track activity on our website and hold 
                      certain information. Cookies are files with small amount of data which may include an anonymous 
                      unique identifier. You can instruct your browser to refuse all cookies or to indicate when a 
                      cookie is being sent. However, if you do not accept cookies, you may not be able to use some 
                      portions of our website.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                    <p>
                      Our services are not directed to individuals under the age of 13. We do not knowingly collect 
                      personally identifiable information from children under 13. If we become aware that we have 
                      collected personal information from a child under 13 without verification of parental consent, 
                      we take steps to remove that information from our servers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                      the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review 
                      this Privacy Policy periodically for any changes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                    <p>
                      If you have questions or comments about this Privacy Policy, please contact us at:
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
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Intangiriro</h2>
                    <p>
                      JENICE-Nutrisoya ("twe", "yacu") yiyemeje kurinda ibanga ryawe. Iyi Politiki y'Ibanga isobanura 
                      uko dukusanya, dukoresha, dutangaza, kandi tukarinda amakuru yawe iyo usuye urubuga rwacu cyangwa 
                      ukoresha serivisi zacu. Nyamusa soma iyi politiki y'ibanga witonze. Niba utemeye ibikubiye muri 
                      iyi politiki y'ibanga, nyamusa ntwinjire kuri uru rubuga.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Amakuru Dukusanya</h2>
                    <p className="mb-4">Dushobora gukusanya amakuru yawe mu buryo butandukanye:</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Amakuru Y'Umuntu Ku Giti Cye</h3>
                    <p className="mb-3">
                      Amakuru aranga umuntu ku giti cye, nka izina ryawe, aderesi ya imeyili, nimero ya terefone, na 
                      aderesi yo gutanga ibicuruzwa utanga ubwawe iyo utumije ibicuruzwa, utwandikiye, cyangwa wiyandikishije 
                      kuri uru rubuga.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Amakuru Yakusanyijwe Na Server</h3>
                    <p>
                      Amakuru server zacu zikusanya zikoresheje ubwazo iyo winjiye kuri uru rubuga, harimo aderesi ya IP, 
                      ubwoko bwa browser, sisitemu ukoramo, amasaha winjiyeho, n'impapuro wabonye mbere na nyuma yo 
                      kwinjira kuri uru rubuga.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Amakuru y'Order</h3>
                    <p>
                      Ibikurikirana ibicuruzwa watumiye, harimo ibicuruzwa wahisemo, ingano, amakuru yo kwishyura, 
                      n'amahitamo yo gutanga.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Uko Dukoresha Amakuru Yawe</h2>
                    <p className="mb-4">Dukoresha amakuru dukusanya kugira ngo:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Gutunganya no gutanga order zawe</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kuvugana nawe ku bijyanye na order, ibicuruzwa, na serivisi</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kuguhererekanya ibikoresho byamamaza n'amakuru (ufite uruhushya)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kunoza urubuga, ibicuruzwa, na serivisi y'abakiriya</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Gusubiza ibitekerezo, ibibazo, n'ibyo wasabye</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kurugurura no gusesengura imiterere, ikoreshwa, n'ibikorwa</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kumenya, kwirinda, no gukemura ibibazo bya tekiniki n'uburiganya</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Eye className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Gutangaza Amakuru Yawe</h2>
                    <p className="mb-4">Dushobora gusangira amakuru twakusanyije ku bwawe mu bihe runaka:</p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Nk'uko Amategeko Abiteganya cyangwa Kurinda Uburenganzira</h3>
                    <p className="mb-3">
                      Niba twizeye ko gutangaza amakuru ku bwawe ari ngombwa kugira ngo dusubize ibibazo by'amategeko, 
                      gusuzuma cyangwa gukemura ibinyuranyije n'amabwiriza yacu, cyangwa kurinda uburenganzira, umutungo, 
                      n'umutekano w'abandi, dushobora gusangira amakuru yawe nk'uko amategeko abiteganya.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Abafatanyabikorwa ba Gatatu</h3>
                    <p>
                      Dushobora gusangira amakuru yawe n'abantu ba gatatu bakora serivisi zitugenerwa cyangwa badukorera, 
                      harimo gutunganya kwishyura, gusesengura amakuru, kohereza imeyili, serivisi zo kubika amakuru, 
                      serivisi y'abakiriya, n'ubufasha bwo kwamamaza.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Umutekano w'Amakuru Yawe</h2>
                    <p>
                      Dukoresha ingamba z'ubuyobozi, za tekiniki, n'iz'umubiri kugira ngo dufashe kurinda amakuru 
                      yawe y'umwihariko. Nubwo twafashe intambwe zikwiye zo kurinda amakuru y'umwihariko utanga, 
                      nyamusa menya ko nubwo twagerageje, nta ngamba z'umutekano zirangije cyangwa zidashobora 
                      kwinjirwamo, kandi nta buryo bwo kohereza amakuru bushobora kwizezwa ko butazafatwa cyangwa 
                      bukoreshwa nabi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Bell className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Uburenganzira Bwawe</h2>
                    <p className="mb-4">Ufite uburenganzira bumwe na bumwe ku bijyanye n'amakuru yawe y'umwihariko:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Kugeraho:</strong> Ushobora gusaba kopi z'amakuru yawe y'umwihariko</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Kosora:</strong> Ushobora gusaba ko dukosora amakuru iyo ari yo yose wizeye ko atari ukuri</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Gusiba:</strong> Ushobora gusaba ko dusiba amakuru yawe y'umwihariko mu bihe runaka</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <UserCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Kwanga:</strong> Ushobora kwanga kwakira ubutumwa bwo kwamamaza icyo ari cyo cyose</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies n'Ikoranabuhanga ryo Kurugurura</h2>
                    <p>
                      Dushobora gukoresha cookies n'ikoranabuhanga risa kugira ngo turugurure ibikorwa kuri uru rubuga 
                      kandi tubike amakuru runaka. Cookies ni dosiye zifite amakuru make ashobora kuba arimo indango 
                      yihariye itagaragaza umuntu. Ushobora kubwira browser yawe kutakira cookies zose cyangwa kerekana 
                      iyo cookie iri koherezwa. Ariko, niba utakira cookies, ushobora kutabasha gukoresha ibice bimwe 
                      by'uru rubuga.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Ibanga ry'Abana</h2>
                    <p>
                      Serivisi zacu ntizigenewe abantu bafite imyaka iri munsi ya 13. Ntidukusanya amakuru aranga 
                      umuntu ku giti cye ava ku bana bafite imyaka iri munsi ya 13. Niba tumenye ko twakusanyije 
                      amakuru y'umwihariko ava ku mwana ufite imyaka iri munsi ya 13 tudafite uruhushya rwa babyeyi, 
                      dufata intambwe zo gukuraho ayo makuru kuri server zacu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Impinduka muri iyi Politiki y'Ibanga</h2>
                    <p>
                      Dushobora kuvugurura Politiki y'Ibanga rimwe na rimwe. Tuzakumenyesha impinduka zose tushyize 
                      Politiki y'Ibanga nshya kuri iyi paji kandi tuvugurure itariki ya "Byahinduwe bwa nyuma". 
                      Ugiriwe inama yo gusubiramo iyi Politiki y'Ibanga kenshi kugira ngo urebe niba hari impinduka.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Twanduikire</h2>
                    <p>
                      Niba ufite ibibazo cyangwa ibitekerezo ku bijyanye n'iyi Politiki y'Ibanga, nyamusa duhamagare kuri:
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

export default PrivacyPolicy;
