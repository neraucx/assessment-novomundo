import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { MILESTONES, PHASES, PROJECT } from '@/lib/data'
import { DeliveryConditionNotice } from '@/components/DeliveryConditionNotice'
import { MilestonesTimeline } from '@/components/MilestonesTimeline'
import { WeeklyBreakdown } from '@/components/WeeklyBreakdown'
import { cn } from '@/lib/utils'

const TOTAL_WEEKS = PROJECT.weeks

export default function Timeline() {
  const [detailedOpen, setDetailedOpen] = useState(false)

  return (
    <div className="px-8 py-7">
      <header className="mb-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-500 mb-2 font-medium">
          Cronograma
        </div>
        <h1 className="font-display text-[32px] font-bold tracking-[-0.02em] text-ink-1 leading-[1.1]">
          Timeline <span className="text-red-500 italic font-medium">do projeto</span>
        </h1>
        <p className="text-[14px] text-slate-2 mt-2 max-w-[720px] leading-relaxed">
          As {TOTAL_WEEKS} semanas do projeto, com as fases de trabalho e os
          marcos onde a equipe da Novo Mundo participa com aprovação.
        </p>
      </header>

      <DeliveryConditionNotice />

      <section className="mb-8">
        <h2 className="font-display text-[20px] font-semibold text-ink-1 mb-4">
          Marcos onde vocês participam
        </h2>
        <MilestonesTimeline milestones={MILESTONES} />
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Fases</h3>
          <span className="meta">W1 → W{TOTAL_WEEKS} · {TOTAL_WEEKS * 7} dias</span>
        </div>
        <div className="p-5">
          <WeekAxis />
          <div className="mt-3 space-y-2">
            {PHASES.map((phase) => (
              <PhaseRow key={phase.name} phase={phase} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <button
          type="button"
          onClick={() => setDetailedOpen((v: boolean) => !v)}
          className="w-full flex items-center justify-between gap-3 p-4 bg-paper-0 border border-paper-3 rounded-8 hover:border-red-500 transition-colors group"
        >
          <div className="text-left">
            <h2 className="font-display text-[18px] font-semibold text-ink-1 group-hover:text-red-500">
              Plano detalhado · semana a semana
            </h2>
            <p className="text-[12px] text-slate-2 mt-0.5">
              O que acontece em cada uma das {TOTAL_WEEKS} semanas.{' '}
              {detailedOpen ? 'Clique pra recolher.' : 'Clique pra expandir.'}
            </p>
          </div>
          {detailedOpen ? (
            <ChevronUp className="w-5 h-5 text-slate-2 shrink-0 group-hover:text-red-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-2 shrink-0 group-hover:text-red-500" />
          )}
        </button>
        {detailedOpen && (
          <div className="mt-3 animate-fade-in">
            <WeeklyBreakdown />
          </div>
        )}
      </section>
    </div>
  )
}

function WeekAxis() {
  return (
    <div
      className="grid gap-0.5"
      style={{ gridTemplateColumns: `260px repeat(${TOTAL_WEEKS}, 1fr)` }}
    >
      <div />
      {Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1).map((w) => (
        <div
          key={w}
          className="font-mono text-[10px] text-center text-slate-2 uppercase tracking-wider py-1.5 border-b border-paper-3"
        >
          W{w}
        </div>
      ))}
    </div>
  )
}

function PhaseRow({ phase }: { phase: (typeof PHASES)[number] }) {
  const start = phase.weekStart
  const end = phase.weekEnd
  const span = end - start + 1

  return (
    <div
      className="grid gap-0.5 items-center py-1.5"
      style={{ gridTemplateColumns: `260px repeat(${TOTAL_WEEKS}, 1fr)` }}
    >
      <div className="text-[12px] font-medium text-ink-1 pr-3 leading-tight">
        {phase.name}
        <span className="block font-mono text-[10px] text-slate-3 uppercase tracking-wider mt-0.5">
          {span} semana{span === 1 ? '' : 's'} · W{start}
          {end !== start ? `–W${end}` : ''}
        </span>
      </div>
      {Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1).map((w) => {
        const active = w >= start && w <= end
        const first = w === start
        const last = w === end
        return (
          <div
            key={w}
            className={cn(
              'h-7 transition-colors',
              first && 'rounded-l-[6px]',
              last && 'rounded-r-[6px]',
              !active && 'bg-paper-1'
            )}
            style={active ? { backgroundColor: phase.color } : undefined}
          />
        )
      })}
    </div>
  )
}
