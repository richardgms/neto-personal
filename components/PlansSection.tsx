'use client'

import { personalTrainerConfig, generateWhatsAppUrl } from '@/config/personal-trainer'
import { Smartphone, Dumbbell, ArrowRight, Heart, Star, Medal } from 'lucide-react'

export default function PlansSection() {
  return (
    <section id="planos" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-[#0a0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            ESCOLHA SEU
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">PLANO</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Treinamentos personalizados para seus objetivos. Resultados reais com acompanhamento exclusivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {/* Online Plan */}
          <div className="flex">
            <div className="bg-gray-800/70 backdrop-blur-sm border-2 border-primary-400/30 rounded-2xl sm:rounded-3xl overflow-hidden relative h-full flex flex-col w-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary-400/30 hover:border-primary-400/70 group">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-400/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-400/20 rounded-full translate-y-16 -translate-x-16"></div>
              </div>
              
                              {/* Header with image */}
                <div className="relative h-32 sm:h-40 bg-gradient-to-r from-primary-400/90 to-primary-600/90 overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-12 h-12 sm:w-16 sm:h-16 mr-6 mb-4">
                    <Smartphone className="w-full h-full text-white/30" />
                  </div>
                <div className="absolute inset-0 flex items-center justify-between p-6 sm:p-8">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2">
                      <Heart className="w-3 h-3 mr-1 fill-white" />
                      MAIS ESCOLHIDO
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center">
                      CONSULTORIA ONLINE
                    </h3>
                  </div>
                </div>
              </div>
                
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <p className="text-gray-300 text-sm sm:text-base">
                    Treinamento personalizado para seu objetivo, com acompanhamento direto da Joelma através do WhatsApp.
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-8 flex-1">
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/30 hover:border-primary-400/30">
                    <span className="font-semibold text-white text-sm sm:text-base">Mensal</span>
                    <span className="text-xl sm:text-2xl font-bold text-primary-400">{personalTrainerConfig.onlinePlans.monthly}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/30 hover:border-primary-400/30">
                    <span className="font-semibold text-white text-sm sm:text-base">Trimestral</span>
                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold text-primary-400">{personalTrainerConfig.onlinePlans.quarterly}</span>
                      <p className="text-xs text-gray-400">3x no cartão</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/30 hover:border-primary-400/30">
                    <span className="font-semibold text-white text-sm sm:text-base">Semestral</span>
                     <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold text-primary-400">{personalTrainerConfig.onlinePlans.semiannual}</span>
                      <p className="text-xs text-gray-400">6x no cartão</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/30 hover:border-primary-400/30">
                    <span className="font-semibold text-white text-sm sm:text-base">Anual</span>
                     <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold text-primary-400">{personalTrainerConfig.onlinePlans.annual}</span>
                      <p className="text-xs text-gray-400">12x no cartão</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4 text-gray-300 text-sm">
                    <Medal className="w-4 h-4 text-primary-400" />
                    <span>Ideal para quem tem rotina corrida</span>
                  </div>
                <a 
                    href={generateWhatsAppUrl('online')}
                  target="_blank" 
                  rel="noopener noreferrer"
                    className="group block w-full bg-gradient-to-r from-primary-400 to-primary-700 text-white text-center py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-400/30 inline-flex items-center justify-center gap-2"
                >
                    <Smartphone className="w-5 h-5" />
                    Quero Começar Online
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                </div>
              </div>
            </div>
          </div>

          {/* Presencial Plan */}
          <div className="flex">
            <div className="bg-gray-800/70 backdrop-blur-sm border-2 border-primary-700/30 rounded-2xl sm:rounded-3xl overflow-hidden relative h-full flex flex-col w-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary-700/30 hover:border-primary-700/70 group">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-700/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-700/20 rounded-full translate-y-16 -translate-x-16"></div>
              </div>
              
                              {/* Header with image */}
                <div className="relative h-32 sm:h-40 bg-gradient-to-r from-primary-700/90 to-primary-500/90 overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-12 h-12 sm:w-16 sm:h-16 mr-6 mb-4">
                    <Dumbbell className="w-full h-full text-white/30" />
                  </div>
                <div className="absolute inset-0 flex items-center justify-between p-6 sm:p-8">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2">
                      <Star className="w-3 h-3 mr-1 fill-white" />
                      RESULTADOS ACELERADOS
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center">
                      TREINO PRESENCIAL
                    </h3>
                  </div>
                </div>
              </div>
                
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <p className="text-gray-300 text-sm sm:text-base">
                    Acompanhamento exclusivo com a Joelma em Santa Rita, com treinos personalizados e orientação direta.
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-8 flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/30 hover:border-primary-700/30">
                    <div>
                      <span className="font-semibold text-white text-sm sm:text-base">Plano Híbrido</span>
                      <p className="text-xs text-gray-400">3x Presencial + 2x Online</p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-xl sm:text-2xl font-bold text-primary-600">{personalTrainerConfig.presencialPlans.hybrid}</span>
                      <p className="text-xs text-gray-400">mensal</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/30 hover:border-primary-700/30">
                    <div>
                      <span className="font-semibold text-white text-sm sm:text-base">Plano 4x</span>
                      <p className="text-xs text-gray-400">4x por semana</p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-xl sm:text-2xl font-bold text-primary-600">{personalTrainerConfig.presencialPlans.presencial4x}</span>
                      <p className="text-xs text-gray-400">mensal</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/30 hover:border-primary-700/30">
                    <div>
                      <span className="font-semibold text-white text-sm sm:text-base">Plano 5x</span>
                        <p className="text-xs text-gray-400">5x por semana</p>
                      </div>
                      <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-xl sm:text-2xl font-bold text-primary-600">{personalTrainerConfig.presencialPlans.presencial5x}</span>
                        <p className="text-xs text-gray-400">mensal</p>
                      </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4 text-gray-300 text-sm">
                    <Medal className="w-4 h-4 text-primary-700" />
                    <span>Treinos na i9fit em Santa Rita</span>
                  </div>
                <a 
                    href={generateWhatsAppUrl('presencial')}
                  target="_blank" 
                  rel="noopener noreferrer"
                    className="group block w-full bg-gradient-to-r from-primary-700 to-primary-400 text-white text-center py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-700/30 inline-flex items-center justify-center gap-2"
                >
                    <Dumbbell className="w-5 h-5" />
                    Quero Treinar Presencial
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 