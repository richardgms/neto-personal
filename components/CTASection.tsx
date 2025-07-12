'use client'

import { generateWhatsAppUrl } from '@/config/personal-trainer'
import { Zap, Smartphone, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary-400" />,
      title: 'Contato Direto',
      description: 'Acesso direto para tirar dúvidas.',
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-400" />,
      title: 'Resultados Rápidos',
      description: 'Metodologia focada na sua evolução.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary-400" />,
      title: 'Acompanhamento Real',
      description: 'Suporte contínuo para seus objetivos.',
    },
  ];

  return (
    <section id="cta" className="py-20 sm:py-28 lg:py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          Pronto para sua <span className="text-primary-400">Transformação</span>?
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Não espere mais. Sua jornada de transformação começa hoje!
        </p>
        
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:bg-gray-800/50 hover:border-primary-500/40 hover:-translate-y-2">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <a 
            href={generateWhatsAppUrl('general')}
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
          >
            Começar Agora
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 