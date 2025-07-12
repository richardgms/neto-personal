export interface PersonalTrainerConfig {
  // Informações pessoais
  name: string
  lastName: string
  fullName: string
  title: string
  cref: string
  
  // Contato
  phone: string
  whatsappUrl: string
  website: string
  instagram: string
  location: string
  locationDetail: string
  
  // Experiência
  yearsOfExperience: string
  clientsTransformed: string
  satisfactionRate: string
  
  // Biografias
  shortBio: string
  longBio: string
  
  // Imagens
  profileImage: string
  heroImage: string
  
  // Especialidades
  specialties: string[]
  
  // Planos Online
  onlinePlans: {
    monthly: string
    quarterly: string
    semiannual: string
    annual: string
  }
  
  // Planos Presenciais
  presencialPlans: {
    hybrid: string
    presencial4x: string
    presencial5x: string
  }
  
  // Horários
  schedule: {
    weekdays: string
    saturday: string
    sunday: string
    responseTime: string
  }
  
  // Logos
  logos: {
    monogram: string
    complete: string
    alt: string
  }
  
  // Mensagens WhatsApp
  whatsappMessages: {
    start: string
    online: string
    presencial: string
    methodology: string
    general: string
  }
}

export const personalTrainerConfig: PersonalTrainerConfig = {
  // Informações pessoais
  name: "Joelma",
  lastName: "Costa",
  fullName: "Joelma Costa",
  title: "Personal Trainer",
  cref: "009852-G/PB",
  
  // Contato
  phone: "(83) 98807-3784",
  whatsappUrl: "https://wa.me/5583988073784",
  website: "https://www.mfitpersonal.com.br",
  instagram: "joelmacosta_personal",
  location: "Santa Rita - PB",
  locationDetail: "Instrutora na i9fit e consultoria online",
  
  // Experiência
  yearsOfExperience: "4+",
  clientsTransformed: "700+",
  satisfactionRate: "99%",
  
  // Biografias
  shortBio: "Especialista em emagrecimento e hipertrofia. Mais de 700 alunas com resultados reais e rotinas transformadas.",
  longBio: "Sou Joelma Costa, Personal Trainer (CREF: 009852-G/PB) apaixonada por transformar vidas através do movimento. Com especialização em emagrecimento e hipertrofia, já ajudei mais de 700 alunas a alcançarem seus objetivos e a construírem rotinas mais saudáveis e felizes. Como coach e instrutora na i9fit, acredito que 'o corpo alcança o que a mente acredita', e aplico essa filosofia em cada treino. Minha jornada como mãe e esposa me ensinou a importância do equilíbrio e da dedicação, e uso essa experiência para criar programas de treinamento realistas e eficazes, que se adaptam à sua vida e te levam a resultados extraordinários.",
  
  // Imagens
  profileImage: "/imagens/3.png",
  heroImage: "/imagens/2.png",
  
  // Especialidades
  specialties: [
    "Emagrecimento",
    "Hipertrofia",
    "Consultoria Online",
    "Coach",
    "Treinamento para Mães"
  ],
  
  // Planos Online
  onlinePlans: {
    monthly: "R$ 99,90",
    quarterly: "R$ 270,00",
    semiannual: "R$ 480,00",
    annual: "R$ 840,00"
  },
  
  // Planos Presenciais
  presencialPlans: {
    hybrid: "R$ 350,00",
    presencial4x: "R$ 450,00",
    presencial5x: "R$ 550,00"
  },
  
  // Horários
  schedule: {
    weekdays: "Segunda a Sexta: 6h às 21h",
    saturday: "Sábado: 8h às 14h",
    sunday: "Domingo: Descanso",
    responseTime: "Resposta rápida no WhatsApp"
  },
  
  // Logos
  logos: {
    monogram: "/logo/monogram.png",
    complete: "/logo/logocompleta.png",
    alt: "Joelma Costa Logo"
  },
  
  // Mensagens WhatsApp
  whatsappMessages: {
    start: "Olá Joelma! Quero começar minha transformação!",
    online: "Olá Joelma! Quero o plano ONLINE!",
    presencial: "Olá Joelma! Quero saber mais sobre os planos presenciais!",
    methodology: "Olá Joelma! Quero conhecer sua metodologia!",
    general: "Olá Joelma! Vim pelo site e quero saber sobre os planos."
  }
}

// Função helper para gerar URLs do WhatsApp
export function generateWhatsAppUrl(messageType: keyof PersonalTrainerConfig['whatsappMessages']): string {
  const message = personalTrainerConfig.whatsappMessages[messageType].replace(/Joelma/g, personalTrainerConfig.name);
  return `${personalTrainerConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
} 