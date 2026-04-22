import { AlertCircle } from 'lucide-react'

export function DeliveryConditionNotice() {
  return (
    <div className="border border-nerau/40 bg-nerau/10 rounded-8 p-4 mb-6 flex gap-3">
      <AlertCircle className="w-5 h-5 text-nerau shrink-0 mt-0.5" />
      <div className="flex-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-nerau font-semibold mb-1">
          Condição de prazo
        </div>
        <p className="text-[13px] text-ink-1 leading-relaxed">
          A estimativa de entrega em <strong>60 dias corridos</strong> assume
          aprovações do time da Novo Mundo em até{' '}
          <strong>24 horas por marco</strong>. Cada aprovação que passar
          desse prazo adiciona <strong>+3 dias ao prazo final</strong>.
        </p>
      </div>
    </div>
  )
}
