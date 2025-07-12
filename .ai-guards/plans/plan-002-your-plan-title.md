---
id: plan-002
title: Revisão e Correção da Identidade Visual - Cores
createdAt: 2025-07-12
author: Richard
status: completed
---

## 🧩 Scope

Revisão completa de todos os componentes, backgrounds e cores do projeto para garantir consistência da identidade visual, seguindo o padrão de cores preto, branco e variações do vermelho. Identificação e correção de todas as ocorrências de cores azuis que estavam fora do padrão.

## ✅ Functional Requirements

- ✅ Auditoria completa de cores em todos os componentes
- ✅ Identificação de cores azuis fora do padrão
- ✅ Correção de todas as cores azuis para o padrão vermelho
- ✅ Verificação da consistência visual em todo o projeto
- ✅ Documentação das correções realizadas

## ⚙️ Non-Functional Requirements

- Manutenção da performance dos componentes
- Consistência visual em todas as telas
- Compatibilidade com diferentes navegadores

## 📚 Guidelines & Packages

- Padrão de cores do projeto: 
  - Preto (#000000)
  - Branco (#FFFFFF)
  - Vermelho primary-400 (#F87171)
  - Vermelho primary-500 (#EF4444)
  - Vermelho primary-600 (#DC2626)
  - Vermelho primary-700 (#B91C1C)
- Tailwind CSS para classes utilitárias
- Gradientes personalizados com cores da identidade

## 🔐 Threat Model (Stub)

- Inconsistência visual que pode prejudicar a marca
- Cores fora do padrão que podem confundir usuários

## 🔢 Execution Plan

1. ✅ **Auditoria completa de cores** - Verificação de todos os componentes
2. ✅ **Identificação de problemas** - Encontradas cores azuis em:
   - ProfileCard.tsx: gradientes com cores azuis/cyan
   - PlansSection.tsx: background com #0a0d1a (azul escuro)
   - ResultsSection.tsx: background com #0a0d1a (azul escuro)
   - CTASection.tsx: gradiente com rgba(0,240,255,0.1) (cyan)
3. ✅ **Correções implementadas**:
   - ProfileCard.tsx: Substituído gradiente azul por gradiente vermelho
   - PlansSection.tsx: Substituído #0a0d1a por black
   - ResultsSection.tsx: Substituído #0a0d1a por black
   - CTASection.tsx: Substituído rgba(0,240,255,0.1) por rgba(248,113,113,0.1)
4. ✅ **Verificação final** - Confirmado que não há mais cores azuis no projeto

## 📋 Correções Realizadas

### 1. ProfileCard.tsx
- **Problema**: Gradiente com cores azuis/cyan no DEFAULT_BEHIND_GRADIENT
- **Solução**: Substituído por gradiente com cores vermelhas do padrão
- **Cores antigas**: #00ffaac4, #073aff00, #00c1ffff, #c137ffff, #07c6ffff
- **Cores novas**: #F87171C4, #B91C1C00, #EF4444FF, #DC2626FF, #F87171FF

### 2. PlansSection.tsx
- **Problema**: Background com cor azul escura (#0a0d1a)
- **Solução**: Substituído por black para manter neutralidade

### 3. ResultsSection.tsx
- **Problema**: Background com cor azul escura (#0a0d1a)
- **Solução**: Substituído por black para manter neutralidade

### 4. CTASection.tsx
- **Problema**: Gradiente radial com cor cyan (rgba(0,240,255,0.1))
- **Solução**: Substituído por cor vermelha do padrão (rgba(248,113,113,0.1))

## ✅ Status: Concluído

Todas as cores azuis foram identificadas e corrigidas. O projeto agora mantém consistência visual com o padrão de cores estabelecido (preto, branco e variações do vermelho).
