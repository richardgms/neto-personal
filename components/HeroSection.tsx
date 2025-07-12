'use client'

import Image from 'next/image'
import { personalTrainerConfig, generateWhatsAppUrl } from '@/config/personal-trainer'

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-16 sm:pt-20 min-h-screen bg-black flex relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left mt-6 lg:mt-0">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-black/40 backdrop-blur-md rounded-full text-primary-500 text-xs sm:text-sm font-bold border border-primary-500/30 shadow-lg">
                ⭐ Transformação em 30 dias
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-none text-white tracking-tight">
                TRANSFORME
                <br />
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent drop-shadow-md">SEU CORPO</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {personalTrainerConfig.shortBio}
              </p>
            </div>
            
            <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start gap-5">
              <a 
                href={generateWhatsAppUrl('start')}
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20 flex items-center justify-center"
              >
                Começar Agora
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#resultados" 
                className="bg-black/40 border border-primary-500/30 hover:border-primary-500/70 backdrop-blur-sm text-white hover:bg-black/60 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                Ver Transformações
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10">
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl py-3 sm:py-4 px-1 sm:px-2 border border-primary-500/10">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-500">{personalTrainerConfig.clientsTransformed}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1 leading-tight">Corpos<br className="sm:hidden" /> Transformados</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl py-3 sm:py-4 px-1 sm:px-2 border border-primary-500/10">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{personalTrainerConfig.yearsOfExperience}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1 leading-tight">Anos de<br className="sm:hidden" /> Experiência</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl py-3 sm:py-4 px-1 sm:px-2 border border-primary-500/10">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-500">{personalTrainerConfig.satisfactionRate}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-12 group mx-4 sm:mx-8 lg:mx-0 mb-6 lg:mb-0 lg:mt-16">
            <div className="relative transform transition-all duration-700 group-hover:scale-[1.02]">
              {/* Moldura da imagem */}
              <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden mx-auto max-w-md sm:max-w-lg lg:max-w-none border-2 border-primary-500/50 shadow-2xl shadow-primary-500/20">
                {/* Badge/Tag dentro da foto */}
                <div className="absolute top-4 left-4 z-20 bg-primary-500 text-white rounded-lg shadow-lg px-[clamp(0.5rem,2.5vw,1rem)] py-[clamp(0.25rem,1.25vw,0.5rem)]">
                  <span className="font-bold flex items-center gap-1.5 text-[clamp(0.75rem,2.5vw,1rem)]">
                    <span className="text-[clamp(1rem,3.125vw,1.25rem)] mr-1">🏆</span>
                    <span>CREF: 009852-G/PB</span>
                  </span>
                </div>
                
                {/* Gradiente overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                
                <Image
                  src={personalTrainerConfig.heroImage}
                  alt={`${personalTrainerConfig.fullName} demonstrando exercício`}
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Nome/Especialidade no canto inferior da imagem */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-xl">
                      {personalTrainerConfig.fullName}
              </div>
                    <div className="text-primary-400 text-sm">
                      {personalTrainerConfig.title} • Expert em Transformação
                </div>
              </div>
                  
                  <div className="flex items-center bg-primary-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white font-bold flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>Pro</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 