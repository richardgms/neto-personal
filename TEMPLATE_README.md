# Template de Landing Page para Personal Trainers

Este é um template completo de landing page para personal trainers baseado no projeto original do Michael Martins.

## 🚀 Como Usar o Template

### Personalização Rápida

Todas as informações personalizáveis estão centralizadas no arquivo `config/personal-trainer.ts`. Para personalizar completamente o template, você só precisa editar esse arquivo.

### Arquivo de Configuração

O arquivo `config/personal-trainer.ts` contém todas as informações que precisam ser personalizadas:

- **Informações Pessoais**: Nome, sobrenome, título
- **Contato**: Telefone, WhatsApp, localização
- **Experiência**: Anos de experiência, clientes transformados, taxa de satisfação
- **Biografias**: Descrição curta e longa
- **Imagens**: Fotos de perfil e hero
- **Especialidades**: Lista de especialidades
- **Planos**: Preços online e presenciais
- **Horários**: Horários de atendimento
- **Logos**: Logotipo e monograma
- **Mensagens WhatsApp**: Textos personalizados para diferentes situações

### Estrutura do Projeto

```
├── config/
│   └── personal-trainer.ts    # 🔧 ARQUIVO PRINCIPAL PARA PERSONALIZAÇÃO
├── components/
│   ├── Navigation.tsx         # ✅ Templateado
│   ├── HeroSection.tsx        # ✅ Templateado
│   ├── AboutSection.tsx       # ✅ Templateado
│   ├── PlansSection.tsx       # ✅ Templateado
│   ├── Footer.tsx             # ✅ Templateado
│   ├── WhatsAppButton.tsx     # ✅ Templateado
│   └── CTASection.tsx         # ✅ Templateado
├── public/
│   ├── imagens/               # 🖼️ Substitua pelas fotos do novo personal
│   │   ├── 1.png             # Foto de perfil
│   │   └── 2.png             # Foto hero
│   └── logo/                  # 🎨 Substitua pelos logos do novo personal
│       ├── logocompleta.png   # Logo completo
│       └── monogram.png       # Monograma
```

## 📋 Alterações Feitas para Criar o Template

### 1. Arquivo de Configuração Criado
- `config/personal-trainer.ts` - Centraliza todas as informações personalizáveis

### 2. Componentes Modificados
Todos os componentes foram modificados para usar o arquivo de configuração:

#### Navigation.tsx
- Nome do personal trainer
- Logo/monograma
- URLs do WhatsApp

#### HeroSection.tsx
- Biografia curta
- Estatísticas (clientes transformados, anos de experiência, satisfação)
- Imagem hero
- URLs do WhatsApp

#### AboutSection.tsx
- Nome e sobrenome
- Biografia longa
- Imagem de perfil
- URLs do WhatsApp

#### PlansSection.tsx
- Preços dos planos online
- Preços dos planos presenciais
- URLs do WhatsApp

#### Footer.tsx
- Logo completo
- Especialidades
- Informações de contato
- Horários de atendimento
- Nome do personal trainer

#### WhatsAppButton.tsx
- URL do WhatsApp com mensagem personalizada

#### CTASection.tsx
- URL do WhatsApp

### 3. Função Helper
- `generateWhatsAppUrl()` - Gera URLs do WhatsApp com mensagens personalizadas

## 🎯 Arquivos que Precisam ser Substituídos

### Imagens
- `public/imagens/1.png` - Foto de perfil do personal trainer
- `public/imagens/2.png` - Foto para a seção hero
- `public/logo/logocompleta.png` - Logo completo
- `public/logo/monogram.png` - Monograma/logo reduzido

### Configuração
- `config/personal-trainer.ts` - Todas as informações pessoais

## 🔧 Como Instalar e Usar

1. **Clone o projeto**
2. **Instale as dependências**: `npm install`
3. **Substitua as imagens** na pasta `public/`
4. **Edite o arquivo** `config/personal-trainer.ts` com as informações do novo personal trainer
5. **Execute o projeto**: `npm run dev`

## 📱 Funcionalidades Incluídas

- Design responsivo (mobile-first)
- Integração com WhatsApp
- Seções completas: Hero, Sobre, Planos, Resultados, CTA, Footer
- Animações e efeitos visuais
- Configuração centralizada
- Pronto para deploy

## 🎨 Personalização Avançada

Para personalizar cores, estilos ou adicionar novas seções, edite:
- `tailwind.config.js` - Cores do tema
- `app/globals.css` - Estilos globais
- Componentes individuais para modificações específicas

## 🚀 Deploy

O projeto está pronto para deploy em plataformas como:
- Vercel
- Netlify  
- GitHub Pages
- Outros hosts de Next.js

---

**Criado por:** Template baseado no projeto original do Michael Martins Personal Trainer
**Versão:** 1.0.0
**Tecnologias:** Next.js, TypeScript, Tailwind CSS 