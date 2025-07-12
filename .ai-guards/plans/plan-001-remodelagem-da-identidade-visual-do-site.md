---
id: plan-001
title: Remodelagem da Identidade Visual do Site para Neto Oliveira
createdAt: 2024-07-26
author: Allan da Fonseca Dias de Araújo
status: draft
---

## 🧩 Scope

Este plano detalha a remodelação completa da identidade visual do site, alinhando-a com a marca do personal trainer Neto Oliveira. O objetivo é substituir a paleta de cores atual, baseada em azul/ciano, por um novo esquema de cores centrado em **preto e vermelho vivo**, conforme a identidade visual presente nos logotipos fornecidos. A mudança visa criar uma experiência de usuário mais impactante e coesa com a marca.

## ✅ Functional Requirements

- **Alteração da Paleta de Cores:** Substituir todas as instâncias da cor primária (atualmente azul/ciano) por um tom de vermelho vivo e energetico. A cor secundária será o preto, já predominante no tema escuro.
- **Consistência Visual:** Garantir que todos os componentes interativos (botões, links, ícones) e elementos gráficos (gradientes, bordas, sombras) sigam a nova paleta de cores.
- **Manutenção da Legibilidade:** Assegurar que o texto sobre os novos fundos vermelhos ou pretos tenha contraste suficiente para ser facilmente legível.
- **Inspiração na Logo:** A escolha do tom de vermelho e o estilo geral devem se inspirar nos arquivos `logocompleta.png` e `monogram.png`.

## ⚙️ Non-Functional Requirements

- **Performance:** A alteração de cores não deve impactar negativamente o tempo de carregamento do site.
- **Acessibilidade:** A nova combinação de cores (vermelho sobre preto/branco) deve atender às diretrizes de acessibilidade (WCAG), garantindo um contraste mínimo de 4.5:1 para textos normais.
- **Manutenibilidade:** A mudança deve ser implementada de forma centralizada, prioritariamente através do `tailwind.config.js`, para facilitar futuras manutenções.

## 📚 Guidelines & Packages

- **Arquivo de Configuração Principal:** As cores devem ser alteradas no `tailwind.config.js`.
- **Busca por Cores Fixas:** Será necessário fazer uma busca global por cores fixas (hardcoded) em arquivos `.tsx` e `.css`.
- **Nenhum pacote novo** é necessário para esta tarefa.

## 🔐 Threat Model (Stub)

- Nenhum risco de segurança foi identificado para esta tarefa de remodelação visual.

## 🔢 Execution Plan

1.  **Definição da Cor Vermelha:** Analisar as logos para escolher um tom de vermelho principal (ex: `#FF1E1E`). Definir também variações mais claras e mais escuras para uso em gradientes e estados de hover/focus.
2.  **Atualização do `tailwind.config.js`:** Substituir a paleta de cores `primary` atual pelas novas tonalidades de vermelho.
3.  **Busca e Substituição de Cores Fixas:** Realizar uma busca por todas as ocorrências de classes e códigos hexadecimais de cor azul/ciano (ex: `text-primary-400`, `border-primary-700`, `#0ec9d6`) nos arquivos do projeto.
4.  **Ajuste Fino dos Componentes:**
    - Revisar cada componente (`Navigation`, `HeroSection`, `AboutSection`, `PlansSection`, `ResultsSection`, `Footer`) para garantir que a nova paleta de cores foi aplicada corretamente.
    - Ajustar gradientes, sombras e outros efeitos visuais para que harmonizem com o novo tema vermelho e preto.
5.  **Atualização de Metadados:** Alterar a `theme-color` no arquivo `app/layout.tsx` para o novo tom de vermelho principal.
6.  **Revisão Final:** Realizar uma revisão completa do site em diferentes dispositivos para garantir a consistência visual, a legibilidade e a harmonia da nova identidade visual.
