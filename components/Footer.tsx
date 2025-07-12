'use client'
import Image from 'next/image'
import { personalTrainerConfig, generateWhatsAppUrl } from '@/config/personal-trainer'
import { 
  Flame, 
  Dumbbell, 
  Smartphone, 
  Star, 
  Heart, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Calendar,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 sm:py-16 border-t border-primary-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mensagem de missão / propósito */}
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Transformando vidas através do fitness com metodologia científica e dedicação.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo e Descrição */}
          <div className="order-4 md:order-1 md:col-span-2 lg:col-span-1 mb-6 md:mb-0">
            <div className="mb-4">
              <Image
                src={personalTrainerConfig.logos.complete}
                alt={`${personalTrainerConfig.fullName} ${personalTrainerConfig.title} Logo`}
                width={150}
                height={37.5}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Especialidades */}
          <div className="order-1 md:order-2">
            <h4 className="font-semibold mb-4 text-primary-400 text-base">
              Especialidades
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              {personalTrainerConfig.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center gap-2 hover:text-white transition-colors">
                  <CheckCircle className="w-4 h-4 text-primary-400" />
                  {specialty}
                </div>
              ))}
            </div>
          </div>
          
          {/* Contato */}
          <div className="order-2 md:order-3">
            <h4 className="font-semibold mb-4 text-primary-700 text-base">
              Contato
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-700" />
                <span>{personalTrainerConfig.phone}</span>
              </div>
              <a 
                href={generateWhatsAppUrl('general')}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary-700" />
                <span>WhatsApp</span>
              </a>
              <a 
                href={`https://instagram.com/${personalTrainerConfig.instagram}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary-700" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Horários */}
          <div className="order-3 md:order-4">
            <h4 className="font-semibold mb-4 text-primary-400 text-base">
              Horários
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary-400" />
                <span>{personalTrainerConfig.schedule.weekdays}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-400" />
                <span>{personalTrainerConfig.schedule.responseTime}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 pb-8 text-center text-gray-500">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {personalTrainerConfig.fullName} {personalTrainerConfig.title}. Todos os direitos reservados.
            <br className="sm:hidden" />
            <a href="https://instagram.com/richardgmsz" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-400 transition-colors ml-1">
              Desenvolvido por Richard G.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
} 