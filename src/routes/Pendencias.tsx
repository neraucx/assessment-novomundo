import { ClipboardList, Clock } from 'lucide-react'
import { PENDENCIES } from '@/lib/data'

export default function Pendencias() {
  const open = PENDENCIES
  return (
    <div className="px-8 py-7">
      <header className="mb-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-500 mb-2 font-medium">
          Aguardamos vocês · {open.length} {open.length === 1 ? 'item' : 'itens'}
        </div>
        <h1 className="font-display text-[32px] font-bold tracking-[-0.02em] text-ink-1 leading-[1.1]">
          Suas <span className="text-red-500 italic font-medium">pendências</span>
        </h1>
        <p className="text-[14px] text-slate-2 mt-2 max-w-[720px] leading-relaxed">
          Para o projeto avançar, estes pontos dependem da equipe da Novo Mundo.
          Assim que a Nerau liberar os links e materiais, eles aparecem aqui
          junto com o botão de ação.
        </p>
      </header>

      <div className="space-y-3">
        {open.map((p) => (
          <div key={p.id} className="panel !mb-0">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-8 bg-nerau/15 text-nerau flex items-center justify-center shrink-0">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-nerau/15 text-nerau rounded-4 uppercase tracking-wider font-semibold inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Aguardando liberação
                    </span>
                  </div>
                  <h3 className="font-display text-[16px] font-semibold text-ink-1 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-slate-2 mt-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
