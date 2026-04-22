// Dados fixos do projeto Novo Mundo — sem banco.
// Toda edição real acontece no app principal (nm-tracker). Este aqui é só a
// versão paliativa pra compartilhar com o cliente enquanto a versão completa
// está em desenvolvimento.

import {
  Flag,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

export const PROJECT = {
  name: 'Novo Mundo · Migração VTEX → Increazy + Magento',
  client: 'Novo Mundo S.A.',
  weeks: 9,
}

export type Milestone = {
  week: number
  label: string
  description: string
  Icon: LucideIcon
  tone: 'start' | 'approval' | 'go_live'
}

export const MILESTONES: Milestone[] = [
  {
    week: 1,
    label: 'Kickoff',
    description: 'Início oficial do projeto, com a contagem do prazo de 60 dias.',
    Icon: Flag,
    tone: 'start',
  },
  {
    week: 1,
    label: 'Aprovação de Personas',
    description: 'Validação da pesquisa de público e personas pela Novo Mundo.',
    Icon: PenTool,
    tone: 'approval',
  },
  {
    week: 4,
    label: 'Aprovação de Design',
    description: 'Aprovação do design final antes do início do desenvolvimento.',
    Icon: Sparkles,
    tone: 'approval',
  },
  {
    week: 8,
    label: 'Homologação (UAT)',
    description: 'Testes formais realizados pela equipe da Novo Mundo.',
    Icon: ShieldCheck,
    tone: 'approval',
  },
  {
    week: 9,
    label: 'Go-live',
    description: 'Publicação em produção com acompanhamento intensivo.',
    Icon: Rocket,
    tone: 'go_live',
  },
]

export type Phase = {
  name: string
  weekStart: number
  weekEnd: number
  color: string
}

export const PHASES: Phase[] = [
  { name: 'Backend Magento',                 weekStart: 1, weekEnd: 4, color: '#3A506B' },
  { name: 'Análise de Público & Persona',    weekStart: 1, weekEnd: 1, color: '#C8553D' },
  { name: 'UX/UI Design',                    weekStart: 1, weekEnd: 4, color: '#D4A548' },
  { name: 'Desenvolvimento Frontend',        weekStart: 4, weekEnd: 6, color: '#EA0000' },
  { name: 'Validações & Integrações',        weekStart: 6, weekEnd: 8, color: '#2E5339' },
  { name: 'QA',                              weekStart: 8, weekEnd: 9, color: '#820000' },
  { name: 'Go-live + War Room',              weekStart: 9, weekEnd: 9, color: '#171717' },
]

export type WeekTask = {
  title: string
  area?: string
  observation?: string
  responsible: 'mageshop' | 'nerau' | 'both' | 'client'
  responsibility?: string
}

export type WeekBlock = {
  week: number
  phasesActive: string[]
  tasks: WeekTask[]
  milestonesAtEnd: { label: string; description: string }[]
}

export const WEEKS: WeekBlock[] = [
  {
    week: 1,
    phasesActive: ['Backend Magento', 'Análise de Público & Persona', 'UX/UI Design'],
    tasks: [
      { title: 'Instalação do Magento', area: 'Backend', responsible: 'mageshop', observation: 'Configuração do Magento 2 Adobe Commerce no ambiente de produção.' },
      { title: 'Criação dos acessos administrativos e de API', area: 'Backend', responsible: 'mageshop' },
      { title: 'Liberação da conexão headless com o PWA', area: 'Backend', responsible: 'mageshop', observation: 'Habilitação das APIs GraphQL e REST para consumo pelo frontend.' },
      { title: 'Liberação de chave API + documentação para integração com ERP', area: 'Backend', responsible: 'mageshop' },
      { title: 'Liberação de chave API para SAC (WhatsApp)', area: 'Backend', responsible: 'mageshop' },
      { title: 'Liberação de chave API para BI', area: 'Backend', responsible: 'mageshop' },
      { title: 'Brief e entrevistas com stakeholders', area: 'UX · Discovery', responsible: 'nerau' },
      { title: 'Pesquisa de concorrência', area: 'UX · Discovery', responsible: 'nerau' },
      { title: 'Definição de personas', area: 'UX · Discovery', responsible: 'nerau' },
      { title: 'Ambiente de staging com SSL', area: 'Infra', responsible: 'mageshop' },
      { title: 'Configuração de CDN', area: 'Infra', responsible: 'mageshop', observation: 'Configuração integrada à instalação inicial, garantindo cache de imagens e assets desde o primeiro dia.' },
    ],
    milestonesAtEnd: [
      { label: 'Kickoff', description: 'Início oficial do projeto.' },
      { label: 'Aprovação de Personas', description: 'Validação da pesquisa de público e personas.' },
    ],
  },
  {
    week: 2,
    phasesActive: ['Backend Magento', 'UX/UI Design'],
    tasks: [
      { title: 'Alinhamento com o time do ERP', area: 'Backend · Integração ERP', responsible: 'both', responsibility: 'Parceiro técnico conduz a integração; Novo Mundo disponibiliza o time do ERP e valida as URLs atuais.', observation: 'Definição do contrato de API: formato dos dados de produto, frequência de sincronização (completa ou incremental) e bases para a matriz de redirects 301.' },
      { title: 'Decisão sobre políticas de preço', area: 'Backend · Precificação', responsible: 'both', responsibility: 'Parceiro técnico apresenta os cenários e implementa a escolha; Nerau facilita a decisão.', observation: 'Definição entre estratégia por grupos de clientes ou por website (multi-store).' },
      { title: 'Arquitetura de informação e sitemap', area: 'UX', responsible: 'nerau' },
      { title: 'User flows principais', area: 'UX', responsible: 'nerau', observation: 'Home, listagem, produto, carrinho, checkout e área do cliente.' },
      { title: 'Wireframes desktop e mobile', area: 'UX', responsible: 'nerau' },
      { title: 'Políticas: Privacidade, Termos, Troca, Frete', area: 'Conteúdo · Legal', responsible: 'both' },
      { title: 'Exportação de clientes da base atual', area: 'Migração', responsible: 'client', observation: 'Exportação somente dos dados essenciais: CPF, nome, sobrenome e e-mail. Histórico de pedidos não é migrado.' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 3,
    phasesActive: ['Backend Magento', 'UX/UI Design'],
    tasks: [
      { title: 'Parametrização de atributos de cliente para aceite LGPD', area: 'Backend · Compliance', responsible: 'mageshop' },
      { title: 'Design System · tokens e componentes', area: 'UI', responsible: 'nerau' },
      { title: 'Contrato de integração ERP → Magento', area: 'Migração', responsible: 'both', responsibility: 'ERP do cliente envia via API; parceiro técnico recebe e importa.', observation: 'Cadastro e carga de produtos realizados via API direta do ERP, mantendo os SKUs originais. Essa abordagem garante consistência dos dados e elimina dependência de exports intermediários.' },
      { title: 'Importação de produtos e variantes via API do ERP', area: 'Migração', responsible: 'mageshop', observation: 'Importação dos 19 mil SKUs utilizando Configurable Products nativos do Magento, mantendo os códigos conforme o ERP.' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 4,
    phasesActive: ['Backend Magento', 'UX/UI Design', 'Desenvolvimento Frontend'],
    tasks: [
      { title: 'Customização visual dos e-mails transacionais', area: 'Backend · Marketing', responsible: 'mageshop' },
      { title: 'UI · Home', area: 'UI', responsible: 'nerau' },
      { title: 'UI · Página de listagem (categoria + filtros)', area: 'UI', responsible: 'nerau' },
      { title: 'UI · Página de produto (variantes e galeria)', area: 'UI', responsible: 'nerau' },
      { title: 'UI · Carrinho, Minha Conta e Busca', area: 'UI', responsible: 'nerau' },
      { title: 'UI · Checkout completo', area: 'UI', responsible: 'nerau' },
      { title: 'Protótipo navegável', area: 'UI', responsible: 'nerau' },
      { title: 'Handoff de design para desenvolvimento', area: 'UI', responsible: 'nerau' },
      { title: 'Setup do PWA, ambiente e pipelines', area: 'Frontend', responsible: 'nerau' },
      { title: 'Integração GraphQL/REST com o Magento', area: 'Frontend', responsible: 'nerau' },
      { title: 'Importação de imagens de produto', area: 'Migração', responsible: 'mageshop', observation: 'Imagens integradas via API do ERP, junto com os demais dados do catálogo.' },
      { title: 'Descrições das categorias principais (SEO copy)', area: 'Conteúdo', responsible: 'client' },
      { title: 'FAQ inicial (15 a 20 perguntas mais comuns)', area: 'Conteúdo', responsible: 'client' },
    ],
    milestonesAtEnd: [
      { label: 'Aprovação de Design', description: 'Aprovação do design final antes do desenvolvimento.' },
    ],
  },
  {
    week: 5,
    phasesActive: ['Desenvolvimento Frontend'],
    tasks: [
      { title: 'Componentes base (header, footer, menu, busca)', area: 'Frontend', responsible: 'nerau' },
      { title: 'Implementação da Home', area: 'Frontend', responsible: 'nerau' },
      { title: 'Implementação da Página de Listagem (listagem, filtros, ordenação)', area: 'Frontend', responsible: 'nerau' },
      { title: 'Implementação da Página de Produto (variantes e galeria)', area: 'Frontend', responsible: 'nerau' },
      { title: 'Implementação do Carrinho', area: 'Frontend', responsible: 'nerau' },
      { title: 'Importação da base de clientes', area: 'Migração', responsible: 'mageshop', observation: 'Importação dos dados essenciais (CPF, nome, sobrenome e e-mail). Autenticação na nova loja via código único por e-mail ou SMS, sem migração de senhas.' },
      { title: 'Configuração do Gateway de Pagamento', area: 'Integração', responsible: 'both' },
      { title: 'Configuração de Antifraude', area: 'Integração', responsible: 'both' },
      { title: 'Configuração de Frete', area: 'Integração', responsible: 'both' },
      { title: 'Banners e criativos de marketing de lançamento', area: 'Conteúdo', responsible: 'both' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 6,
    phasesActive: ['Desenvolvimento Frontend', 'Validações & Integrações'],
    tasks: [
      { title: 'Implementação do Checkout completo', area: 'Frontend', responsible: 'nerau' },
      { title: 'Implementação de Minha Conta (login, cadastro, histórico)', area: 'Frontend', responsible: 'nerau' },
      { title: 'Busca interna com autocomplete', area: 'Frontend', responsible: 'nerau' },
      { title: 'CMS (páginas estáticas e blog)', area: 'Frontend', responsible: 'nerau' },
      { title: 'Banner de cookies com consentimento granular (LGPD)', area: 'Frontend', responsible: 'nerau' },
      { title: 'Integração com Analytics (GA4, GTM, Meta Pixel)', area: 'Frontend', responsible: 'nerau' },
      { title: 'Integração com CRM (eventos e réguas de comunicação)', area: 'Integração', responsible: 'both' },
      { title: 'Integração com plataforma de E-mail Marketing', area: 'Integração', responsible: 'both' },
      { title: 'Sitemap XML e submissão ao Google', area: 'SEO', responsible: 'nerau', observation: 'Gerado e servido pelo frontend, com submissão ao Google Search Console.' },
      { title: 'Configuração de robots.txt', area: 'SEO', responsible: 'nerau', observation: 'Bloqueio de ambientes de staging e áreas administrativas, liberando a indexação do catálogo.' },
      { title: 'Meta tags por tipo de página', area: 'SEO', responsible: 'nerau' },
      { title: 'Open Graph e dados estruturados (Schema.org)', area: 'SEO', responsible: 'nerau' },
      { title: 'Canonical tags e URLs amigáveis', area: 'SEO', responsible: 'nerau' },
      { title: 'Matriz de redirects 301', area: 'SEO', responsible: 'both' },
      { title: 'Validação da integridade dos dados migrados', area: 'Migração', responsible: 'both' },
      { title: 'Monitoramento (APM, logs e alertas)', area: 'Infra', responsible: 'mageshop' },
      { title: 'Política de backup e plano de rollback', area: 'Infra', responsible: 'mageshop' },
      { title: 'Plano de testes documentado', area: 'QA', responsible: 'nerau' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 7,
    phasesActive: ['Validações & Integrações'],
    tasks: [
      { title: 'Testes funcionais completos', area: 'QA', responsible: 'both' },
      { title: 'Testes automatizados ponta a ponta', area: 'QA', responsible: 'both' },
      { title: 'Testes cross-browser e cross-device', area: 'QA', responsible: 'both' },
      { title: 'Validação de acessibilidade (WCAG 2.1 AA)', area: 'QA', responsible: 'nerau' },
      { title: 'Testes de carga', area: 'QA', responsible: 'nerau', observation: 'Validação de performance sob picos de tráfego, com meta de sustentar no mínimo 88 pedidos por minuto (volume esperado em Black Friday e Natal).' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 8,
    phasesActive: ['Validações & Integrações', 'QA'],
    tasks: [
      { title: 'Homologação formal com Novo Mundo', area: 'QA', responsible: 'both' },
      { title: 'Correções de bugs e retestes', area: 'QA', responsible: 'both' },
      { title: 'Performance final e Core Web Vitals', area: 'QA', responsible: 'both' },
      { title: 'Validação pós-deploy no Google Search Console', area: 'SEO', responsible: 'nerau' },
      { title: 'Revisão do checklist de go-live', area: 'Go-live', responsible: 'both' },
      { title: 'Treinamento do time administrativo', area: 'Go-live', responsible: 'nerau' },
    ],
    milestonesAtEnd: [
      { label: 'Homologação (UAT)', description: 'Testes formais com a equipe da Novo Mundo.' },
    ],
  },
  {
    week: 9,
    phasesActive: ['QA', 'Go-live + War Room'],
    tasks: [
      { title: 'Troca de DNS e propagação', area: 'Go-live', responsible: 'nerau', observation: 'Apontamento do domínio para o novo ambiente, com janela de cutover coordenada entre Nerau, parceiro técnico e Novo Mundo.' },
      { title: 'Monitoramento intensivo das primeiras 120h', area: 'Go-live', responsible: 'both', observation: 'Equipe em regime de war room para garantir estabilidade e resposta rápida a qualquer evento crítico.' },
      { title: 'Correções pós-live prioritárias', area: 'Go-live', responsible: 'both' },
      { title: 'Relatório final e transferência de conhecimento', area: 'Go-live', responsible: 'nerau' },
    ],
    milestonesAtEnd: [
      { label: 'Go-live', description: 'Publicação em produção com acompanhamento intensivo.' },
    ],
  },
]

export type Pendency = {
  id: string
  title: string
  description: string
  status: 'pending' | 'awaiting_action'
}

export const PENDENCIES: Pendency[] = [
  {
    id: 'contract',
    title: 'Assinatura do contrato',
    description:
      'Contrato formal entre Novo Mundo e Nerau CX. Pré-requisito pra iniciar o projeto. Em breve enviamos o link do documento aqui.',
    status: 'awaiting_action',
  },
  {
    id: 'assessment',
    title: 'Preenchimento do checklist / assessment',
    description:
      'Questionário de discovery sobre sua operação (ERP, plataforma, pagamentos, frete, integrações). Em breve liberamos o link pra vocês preencherem.',
    status: 'awaiting_action',
  },
]

export const RESPONSIBLE_LABEL: Record<WeekTask['responsible'], string> = {
  mageshop: 'Mageshop',
  nerau: 'Nerau',
  both: 'Compartilhado',
  client: 'Cliente',
}

export const RESPONSIBLE_BADGE: Record<WeekTask['responsible'], string> = {
  mageshop: 'badge-mage',
  nerau: 'badge-nerau',
  both: 'badge-both',
  client: 'badge-client',
}
