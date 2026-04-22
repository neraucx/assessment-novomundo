import type { Milestone } from '@/lib/data'
import { cn } from '@/lib/utils'

export function MilestonesTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="bg-paper-0 border border-paper-3 rounded-8 p-6 overflow-x-auto">
      <div className="relative min-w-[640px]" style={{ minHeight: '168px' }}>
        <div className="absolute left-[36px] right-[36px] h-0.5 bg-paper-3" style={{ top: '24px' }} />
        <div
          className="relative grid gap-3 items-start"
          style={{ gridTemplateColumns: `repeat(${milestones.length}, minmax(0, 1fr))` }}
        >
          {milestones.map((m) => {
            const { Icon } = m
            const tone = {
              start: 'bg-nerau text-ink-1 border-paper-0',
              approval: 'bg-red-500 text-white border-paper-0',
              go_live: 'bg-both text-white border-paper-0',
            }[m.tone]
            return (
              <div key={`${m.label}-${m.week}`} className="flex flex-col items-center text-center px-1">
                <div className={cn('w-12 h-12 rounded-full flex items-center justify-center border-[4px] relative z-10 shadow-sm', tone)}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-red-500 font-semibold mt-3">
                  Semana {m.week}
                </div>
                <div className="font-display text-[13px] font-bold text-ink-1 leading-tight mt-1">
                  {m.label}
                </div>
                <div className="text-[11px] text-slate-2 leading-snug mt-1 max-w-[160px]">
                  {m.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
