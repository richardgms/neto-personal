'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { personalTrainerConfig, generateWhatsAppUrl } from '@/config/personal-trainer'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black/90 backdrop-blur-md fixed w-full top-0 z-40 border-b border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <Image
                src={personalTrainerConfig.logos.monogram}
                alt={`${personalTrainerConfig.fullName} Logo Monogram`}
                fill
                className="object-contain"
                sizes="(min-width: 640px) 48px, 40px"
              />
            </div>
            <div className="ml-3 sm:ml-4">
              <h1 className="text-lg sm:text-xl font-bold text-white">{personalTrainerConfig.fullName}</h1>
              <p className="text-xs sm:text-sm text-primary-500">{personalTrainerConfig.title}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#inicio" 
              className="text-white hover:text-primary-500 font-medium transition-colors"
            >
              Início
            </Link>
            <Link 
              href="#planos" 
              className="text-gray-300 hover:text-primary-500 font-medium transition-colors"
            >
              Planos
            </Link>
            <Link 
              href="#resultados" 
              className="text-gray-300 hover:text-primary-500 font-medium transition-colors"
            >
              Resultados
            </Link>
            <Link 
              href="#sobre" 
              className="text-gray-300 hover:text-primary-500 font-medium transition-colors"
            >
              Sobre
            </Link>
            <a 
              href={generateWhatsAppUrl('start')}
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center"
            >
              Começar Agora
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-500 transition-colors p-2 -mr-2 touch-manipulation"
              aria-label="Abrir menu de navegação"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2 mb-4 border border-primary-500/10">
              <Link 
                href="#inicio" 
                className="block px-4 py-3 text-white hover:text-primary-500 hover:bg-primary-500/10 font-medium transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="#planos" 
                className="block px-4 py-3 text-gray-300 hover:text-primary-500 hover:bg-primary-500/10 font-medium transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </Link>
              <Link 
                href="#resultados" 
                className="block px-4 py-3 text-gray-300 hover:text-primary-500 hover:bg-primary-500/10 font-medium transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Resultados
              </Link>
              <Link 
                href="#sobre" 
                className="block px-4 py-3 text-gray-300 hover:text-primary-500 hover:bg-primary-500/10 font-medium transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <a 
                href={generateWhatsAppUrl('start')}
                target="_blank" 
                rel="noopener noreferrer"
                className="group block mx-2 mt-3 bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 touch-manipulation flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar Agora
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 