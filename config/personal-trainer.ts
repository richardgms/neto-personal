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
  name: "Neto",
  lastName: "Oliveira",
  fullName: "Neto Oliveira",
  title: "Personal Trainer",
  cref: "", // TODO: Preencher com o CREF de Neto Oliveira

  // Contato
  phone: "(83) 98711-3897",
  whatsappUrl: "https://wa.me/5583987113897",
  website: "https://instabio.cc/NetoOliveiraPersonal",
  instagram: "netooliveirapersonal",
  location: "", // TODO: Preencher com a localização
  locationDetail: "Consultoria online e Acompanhamento presencial",

  // Experiência
  yearsOfExperience: "X+", // TODO: Preencher com os anos de experiência
  clientsTransformed: "Y+", // TODO: Preencher com o número de clientes transformados
  satisfactionRate: "Z%", // TODO: Preencher com a taxa de satisfação

  // Biografias
  shortBio:
    "Consultoria online e Acompanhamento presencial. Vamos construir um futuro com mais qualidade de vida?",
  longBio:
    "Sou Neto Oliveira, Personal Trainer apaixonado por transformar vidas através do movimento. Com especialização em emagrecimento e hipertrofia, ajudo meus alunos a alcançarem seus objetivos e a construírem rotinas mais saudáveis e felizes. Acredito que o corpo alcança o que a mente acredita e aplico essa filosofia em cada treino, criando programas realistas e eficazes que se adaptam à sua vida para resultados extraordinários.",

  // Imagens
  profileImage: "/imagens/1.png",
  heroImage: "/imagens/2.png",

  // Especialidades
  specialties: [
    "Consultoria Online",
    "Acompanhamento Presencial",
    "Emagrecimento",
    "Hipertrofia",
    "Qualidade de Vida",
  ],

  // Planos Online
  onlinePlans: {
    monthly: "R$ 99,90",
    quarterly: "R$ 270,00",
    semiannual: "R$ 480,00",
    annual: "R$ 840,00",
  },

  // Planos Presenciais
  presencialPlans: {
    hybrid: "R$ 350,00",
    presencial4x: "R$ 450,00",
    presencial5x: "R$ 550,00",
  },

  // Horários
  schedule: {
    weekdays: "Segunda a Sexta: 6h às 21h",
    saturday: "Sábado: 8h às 14h",
    sunday: "Domingo: Descanso",
    responseTime: "Resposta rápida no WhatsApp",
  },

  // Logos
  logos: {
    monogram: "/logo/monogram.png",
    complete: "/logo/logocompleta.png",
    alt: "Neto Oliveira Logo",
  },

  // Mensagens WhatsApp
  whatsappMessages: {
    start: "Olá Neto! Quero começar minha transformação!",
    online: "Olá Neto! Quero o plano ONLINE!",
    presencial: "Olá Neto! Quero saber mais sobre os planos presenciais!",
    methodology: "Olá Neto! Quero conhecer sua metodologia!",
    general: "Olá Neto! Vim pelo site e quero saber sobre os planos.",
  },
}

// Função helper para gerar URLs do WhatsApp
export function generateWhatsAppUrl(
  messageType: keyof PersonalTrainerConfig["whatsappMessages"],
): string {
  const message =
    personalTrainerConfig.whatsappMessages[messageType]
  return `${personalTrainerConfig.whatsappUrl}?text=${encodeURIComponent(
    message,
  )}`
} 