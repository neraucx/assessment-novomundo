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
    description: 'D-0 · contagem dos 60 dias começa.',
    Icon: Flag,
    tone: 'start',
  },
  {
    week: 1,
    label: 'Aprovação Personas',
    description: 'Cliente valida pesquisa de público e personas.',
    Icon: PenTool,
    tone: 'approval',
  },
  {
    week: 4,
    label: 'Aprovação Design',
    description: 'Cliente aprova UI/UX final antes do Dev.',
    Icon: Sparkles,
    tone: 'approval',
  },
  {
    week: 8,
    label: 'UAT (Homologação)',
    description: 'Testes formais com o time da Novo Mundo.',
    Icon: ShieldCheck,
    tone: 'approval',
  },
  {
    week: 9,
    label: 'Go-live',
    description: 'Produção + war room de estabilização.',
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
  { name: 'Backend Magento (Mageshop)',     weekStart: 1, weekEnd: 4, color: '#3A506B' },
  { name: 'Análise de Público & Persona',    weekStart: 1, weekEnd: 1, color: '#C8553D' },
  { name: 'UX/UI Design',                    weekStart: 1, weekEnd: 4, color: '#D4A548' },
  { name: 'Dev Increazy (front PWA)',        weekStart: 4, weekEnd: 6, color: '#EA0000' },
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
    phasesActive: ['Backend Magento (Mageshop)', 'Análise de Público & Persona', 'UX/UI Design'],
    tasks: [
      { title: 'Instalação do Magento', area: 'Backend', responsible: 'mageshop', observation: 'Magento 2 Adobe Commerce no ambiente Mageshop.' },
      { title: 'Criação dos acessos administrativos e de API', area: 'Backend', responsible: 'mageshop' },
      { title: 'Liberação para conexão com o PWA', area: 'Backend', responsible: 'mageshop', observation: 'Headless commerce GraphQL + REST.' },
      { title: 'Liberação de chave API para o ERP + docs + grupo de suporte', area: 'Backend', responsible: 'mageshop' },
      { title: 'Liberação de chave API para Voll (SAC WhatsApp)', area: 'Backend', responsible: 'mageshop' },
      { title: 'Liberação de chave API para Tableau (BI)', area: 'Backend', responsible: 'mageshop' },
      { title: 'Brief + entrevistas com stakeholders', area: 'UX · Discovery', responsible: 'nerau' },
      { title: 'Pesquisa de concorrência', area: 'UX · Discovery', responsible: 'nerau' },
      { title: 'Definição de personas', area: 'UX · Discovery', responsible: 'nerau' },
      { title: 'Staging environment + SSL', area: 'Infra', responsible: 'mageshop' },
    ],
    milestonesAtEnd: [
      { label: 'Kickoff', description: 'D-0 · contagem começa.' },
      { label: 'Aprovação Personas', description: 'Cliente valida pesquisa de público e personas.' },
    ],
  },
  {
    week: 2,
    phasesActive: ['Backend Magento (Mageshop)', 'UX/UI Design'],
    tasks: [
      { title: 'Alinhamento com o time do ERP', area: 'Backend · Integração ERP', responsible: 'both', responsibility: 'Mageshop conduz. Cliente disponibiliza time do ERP e valida URLs.', observation: 'Define: como ERP envia produtos (full/delta), formato, frequência.' },
      { title: 'Decisão sobre políticas de preço', area: 'Backend · Precificação', responsible: 'both', responsibility: 'Mageshop implementa. Nerau facilita decisão.', observation: 'Customer Groups vs Multi-Website.' },
      { title: 'Arquitetura de informação + Sitemap', area: 'UX', responsible: 'nerau' },
      { title: 'User flows principais', area: 'UX', responsible: 'nerau', observation: 'Home, PLP, PDP, carrinho, checkout, conta.' },
      { title: 'Wireframes · desktop + mobile', area: 'UX', responsible: 'nerau' },
      { title: 'Políticas · Privacidade, Termos, Troca, Frete', area: 'Conteúdo · Legal', responsible: 'both' },
      { title: 'Export de dados da VTEX', area: 'Migração', responsible: 'client', observation: 'Clientes + pedidos + produtos dos últimos 24 meses.' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 3,
    phasesActive: ['Backend Magento (Mageshop)', 'UX/UI Design'],
    tasks: [
      { title: 'Parametrização de atributos de cliente para aceite LGPD', area: 'Backend · Compliance', responsible: 'mageshop' },
      { title: 'Design System · tokens + componentes', area: 'UI', responsible: 'nerau' },
      { title: 'Mapping de atributos VTEX → Magento', area: 'Migração', responsible: 'mageshop' },
      { title: 'Import de produtos + variantes no Magento', area: 'Migração', responsible: 'mageshop', observation: '19k SKUs com Configurable Products nativos.' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 4,
    phasesActive: ['Backend Magento (Mageshop)', 'UX/UI Design', 'Dev Increazy'],
    tasks: [
      { title: 'Customização visual dos e-mails transacionais', area: 'Backend · Marketing', responsible: 'mageshop' },
      { title: 'UI · Home page', area: 'UI', responsible: 'nerau' },
      { title: 'UI · PLP (listagem + filtros)', area: 'UI', responsible: 'nerau' },
      { title: 'UI · PDP (produto + variantes)', area: 'UI', responsible: 'nerau' },
      { title: 'UI · Carrinho + Minha conta + Busca', area: 'UI', responsible: 'nerau' },
      { title: 'UI · Checkout completo', area: 'UI', responsible: 'nerau' },
      { title: 'Protótipo navegável no Figma', area: 'UI', responsible: 'nerau' },
      { title: 'Handoff de design pro time de Dev', area: 'UI', responsible: 'nerau' },
      { title: 'Setup do PWA + ambiente + CI/CD', area: 'Frontend', responsible: 'nerau', observation: 'Implementado na plataforma Increazy PWA.' },
      { title: 'Integração GraphQL/REST com Magento', area: 'Frontend', responsible: 'nerau' },
      { title: 'CDN setup', area: 'Infra', responsible: 'mageshop' },
      { title: 'Import de imagens de produto', area: 'Migração', responsible: 'mageshop' },
      { title: 'Descrições de categorias principais (SEO copy)', area: 'Conteúdo', responsible: 'client' },
      { title: 'FAQ inicial · 15-20 perguntas comuns', area: 'Conteúdo', responsible: 'client' },
    ],
    milestonesAtEnd: [
      { label: 'Aprovação Design', description: 'Cliente aprova UI/UX final antes do Dev.' },
    ],
  },
  {
    week: 5,
    phasesActive: ['Dev Increazy'],
    tasks: [
      { title: 'Componentes base (header, footer, menu, search)', area: 'Frontend', responsible: 'nerau' },
      { title: 'Home page implementada', area: 'Frontend', responsible: 'nerau' },
      { title: 'PLP · listagem + filtros + ordenação', area: 'Frontend', responsible: 'nerau' },
      { title: 'PDP · produto + variantes + galeria', area: 'Frontend', responsible: 'nerau' },
      { title: 'Carrinho · sidebar + página dedicada', area: 'Frontend', responsible: 'nerau' },
      { title: 'Import de base de clientes', area: 'Migração', responsible: 'mageshop' },
      { title: 'Import de histórico de pedidos', area: 'Migração', responsible: 'mageshop' },
      { title: 'Configuração do Gateway de Pagamento', area: 'Integração', responsible: 'both' },
      { title: 'Configuração de Antifraude', area: 'Integração', responsible: 'both' },
      { title: 'Configuração de Frete', area: 'Integração', responsible: 'both' },
      { title: 'Banners + criativos de marketing de lançamento', area: 'Conteúdo', responsible: 'both' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 6,
    phasesActive: ['Dev Increazy', 'Validações & Integrações'],
    tasks: [
      { title: 'Checkout completo', area: 'Frontend', responsible: 'nerau' },
      { title: 'Minha conta · login + cadastro + histórico', area: 'Frontend', responsible: 'nerau' },
      { title: 'Busca interna com autocomplete', area: 'Frontend', responsible: 'nerau' },
      { title: 'CMS · páginas estáticas + blog', area: 'Frontend', responsible: 'nerau' },
      { title: 'Cookie banner LGPD + consentimento granular', area: 'Frontend', responsible: 'nerau' },
      { title: 'Analytics · GA4 + GTM + Meta Pixel', area: 'Frontend', responsible: 'nerau' },
      { title: 'Integração Wake CRM (eventos + réguas)', area: 'Integração', responsible: 'both' },
      { title: 'Integração E-mail Marketing', area: 'Integração', responsible: 'both' },
      { title: 'Sitemap XML + submissão ao Google', area: 'SEO', responsible: 'mageshop' },
      { title: 'Robots.txt configurado', area: 'SEO', responsible: 'mageshop' },
      { title: 'Meta tags · PDP / PLP / Home / CMS', area: 'SEO', responsible: 'nerau' },
      { title: 'Open Graph + Schema.org', area: 'SEO', responsible: 'nerau' },
      { title: 'Canonical tags + URLs amigáveis', area: 'SEO', responsible: 'nerau' },
      { title: 'Matriz de redirects 301', area: 'SEO', responsible: 'both' },
      { title: 'Validação de integridade dos dados migrados', area: 'Migração', responsible: 'both' },
      { title: 'Monitoring · APM + logs + alertas', area: 'Infra', responsible: 'mageshop' },
      { title: 'Backup policy + rollback plan', area: 'Infra', responsible: 'mageshop' },
      { title: 'Test plan documentado', area: 'QA', responsible: 'nerau' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 7,
    phasesActive: ['Validações & Integrações'],
    tasks: [
      { title: 'Testes funcionais completos', area: 'QA', responsible: 'both' },
      { title: 'Testes E2E automatizados', area: 'QA', responsible: 'both' },
      { title: 'Cross-browser + cross-device', area: 'QA', responsible: 'both' },
      { title: 'Acessibilidade (WCAG 2.1 AA)', area: 'QA', responsible: 'nerau' },
      { title: 'Testes de carga', area: 'QA', responsible: 'mageshop', observation: 'BF/Natal ≥88 pedidos/min.' },
    ],
    milestonesAtEnd: [],
  },
  {
    week: 8,
    phasesActive: ['Validações & Integrações', 'QA'],
    tasks: [
      { title: 'UAT formal com Novo Mundo', area: 'QA', responsible: 'both' },
      { title: 'Bug fixes + retestes', area: 'QA', responsible: 'both' },
      { title: 'Performance final · Core Web Vitals', area: 'QA', responsible: 'both' },
      { title: 'Validação pós-deploy no Google Search Console', area: 'SEO', responsible: 'nerau' },
      { title: 'Go-live checklist revisado', area: 'Go-live', responsible: 'both' },
      { title: 'Treinamento admin Novo Mundo', area: 'Go-live', responsible: 'nerau' },
    ],
    milestonesAtEnd: [
      { label: 'UAT (Homologação)', description: 'Testes formais com o time da Novo Mundo.' },
    ],
  },
  {
    week: 9,
    phasesActive: ['QA', 'Go-live + War Room'],
    tasks: [
      { title: 'DNS switch + propagação', area: 'Go-live', responsible: 'mageshop' },
      { title: 'Monitoramento intensivo primeiras 120h', area: 'Go-live', responsible: 'both', observation: 'War room ativo com Nerau + Mageshop + Increazy + cliente.' },
      { title: 'Correções pós-live prioritárias', area: 'Go-live', responsible: 'both' },
      { title: 'Relatório final + handover', area: 'Go-live', responsible: 'nerau' },
    ],
    milestonesAtEnd: [
      { label: 'Go-live', description: 'Produção no ar com war room de estabilização.' },
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
