'use client'

import Image from 'next/image'
import { personalTrainerConfig, generateWhatsAppUrl } from '@/config/personal-trainer'
import { Star, ArrowRight, Award, Users, Heart, Target, Clock, CheckCircle } from 'lucide-react'
import JoelmaProfileCard from './JoelmaProfileCard'

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Header */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-400 to-primary-700 rounded-full text-white text-xs sm:text-sm font-bold mb-8">
                <Star className="w-4 h-4 mr-2" />
                Bacharelado em Educação Física
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
                Conheça a
                <br />
                <span className="bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">{personalTrainerConfig.fullName}</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Especialista em transformação corporal feminina. Mais de {personalTrainerConfig.clientsTransformed.replace('+', '')} mulheres já alcançaram seus objetivos comigo.
              </p>
            </div>

            {/* Credenciais e Conquistas */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-900/50 p-4 sm:p-6 rounded-xl border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-primary-400" />
                  <span className="font-bold text-white text-sm sm:text-base">CREF Ativo</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">{personalTrainerConfig.cref}</p>
              </div>
              
              <div className="bg-gray-900/50 p-4 sm:p-6 rounded-xl border border-primary-700/30 hover:border-primary-700/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-primary-700" />
                  <span className="font-bold text-white text-sm sm:text-base">Instrutora i9fit</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Santa Rita - PB</p>
              </div>
            </div>

            {/* Especializações */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center lg:text-left">
                Minhas Especializações
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {personalTrainerConfig.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg border border-gray-700/30 hover:border-primary-400/30 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-white font-medium text-sm sm:text-base">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais */}
            <div className="bg-gradient-to-r from-primary-400/10 to-primary-700/10 rounded-xl p-6 border border-primary-400/20">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-primary-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Por que escolher a Joelma?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300 text-sm">Foco em resultados reais</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300 text-sm">Acompanhamento 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300 text-sm">Experiência com mães</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300 text-sm">{personalTrainerConfig.satisfactionRate} satisfação</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href={generateWhatsAppUrl('methodology')}
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-primary-400 to-primary-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 text-center inline-flex items-center justify-center gap-2"
              >
                Quero Conhecer a Metodologia
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#planos" 
                className="border-2 border-gray-600 hover:border-primary-400 text-white hover:text-primary-400 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 text-center"
              >
                Ver Planos
              </a>
            </div>
          </div>

          {/* Card 3D da Joelma */}
          <div className="relative mx-auto lg:mx-0 lg:ml-12 order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-none">
            <JoelmaProfileCard />
          </div>
        </div>
      </div>
    </section>
  )
} 