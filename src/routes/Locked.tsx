import { Lock } from 'lucide-react'

export default function Locked({ title }: { title: string }) {
  return (
    <div className="px-8 py-7">
      <header className="mb-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-500 mb-2 font-medium">
          Em breve
        </div>
        <h1 className="font-display text-[32px] font-bold tracking-[-0.02em] text-ink-1 leading-[1.1]">
          {title}
        </h1>
      </header>
      <div className="panel">
        <div className="p-12 text-center">
          <div className="w-14 h-14 rounded-full bg-paper-2 text-slate-3 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <p className="text-[14px] text-slate-2 max-w-md mx-auto leading-relaxed">
            Esta seção ainda está sendo preparada. A Nerau libera aqui assim que o
            conteúdo estiver pronto. Por enquanto, acompanhe a{' '}
            <strong>Timeline do projeto</strong> pra ver os próximos passos.
          </p>
        </div>
      </div>
    </div>
  )
}
