import { useState } from 'react'
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Flag,
} from 'lucide-react'
import { RESPONSIBLE_BADGE, RESPONSIBLE_LABEL, WEEKS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function WeeklyBreakdown() {
  const [openWeek, setOpenWeek] = useState<number | null>(1)
  const toggle = (w: number) =>
    setOpenWeek((curr: number | null) => (curr === w ? null : w))

  return (
    <div className="space-y-2">
      {WEEKS.map((wb) => {
        const isOpen = openWeek === wb.week
        const hasMarcos = wb.milestonesAtEnd.length > 0
        return (
          <section key={wb.week} className="panel !mb-0">
            <button
              type="button"
              onClick={() => toggle(wb.week)}
              className="panel-header w-full hover:bg-paper-2 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <h3>Semana {wb.week}</h3>
                {hasMarcos && (
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-red-500 text-white px-1.5 py-0.5 rounded-pill">
                    {wb.milestonesAtEnd.length} {wb.milestonesAtEnd.length === 1 ? 'marco' : 'marcos'}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="meta inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {wb.tasks.length} {wb.tasks.length === 1 ? 'atividade' : 'atividades'}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-2" />
                )}
              </div>
            </button>

            {isOpen && (
              <div className="animate-fade-in p-5 space-y-5">
                {wb.phasesActive.length > 0 && (
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-2 font-semibold mb-2">
                      Fases ativas
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {wb.phasesActive.map((p) => (
                        <span
                          key={p}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-4 bg-paper-2 text-slate-1"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {wb.tasks.length > 0 && (
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-2 font-semibold mb-2">
                      O que acontece
                    </div>
                    <ul className="space-y-2">
                      {wb.tasks.map((t, i) => (
                        <li key={i} className="flex items-start gap-3 py-1">
                          <Circle className="w-4 h-4 text-slate-3 shrink-0 mt-1" />
                          <div className="flex-1 min-w-0">
                            <div className="text-[13px] text-ink-1 font-medium leading-snug">
                              {t.title}
                            </div>
                            {t.observation && (
                              <p className="text-[12px] text-slate-2 mt-1 leading-relaxed">
                                {t.observation}
                              </p>
                            )}
                            <div className="mt-1.5 flex flex-wrap gap-1.5">
                              <span
                                className={cn(
                                  'inline-flex items-center gap-1.5 text-[11px] bg-paper-1 border border-paper-3 rounded-4 px-2 py-0.5'
                                )}
                              >
                                <span className={cn('badge !py-0 !px-1.5 !text-[10px]', RESPONSIBLE_BADGE[t.responsible])}>
                                  {RESPONSIBLE_LABEL[t.responsible]}
                                </span>
                                {t.responsibility && (
                                  <span className="text-slate-2 font-mono tracking-normal normal-case">
                                    {t.responsibility}
                                  </span>
                                )}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {wb.milestonesAtEnd.length > 0 && (
                  <div className="pt-2 border-t border-paper-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-red-500 font-semibold mb-2 flex items-center gap-1.5">
                      <Flag className="w-3 h-3" />
                      Marco{wb.milestonesAtEnd.length > 1 ? 's' : ''} no fim da semana
                    </div>
                    <ul className="space-y-1.5">
                      {wb.milestonesAtEnd.map((ms) => (
                        <li key={ms.label} className="flex items-start gap-2 text-[12px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-ink-1">{ms.label}</strong>{' '}
                            <span className="text-slate-2">— {ms.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
