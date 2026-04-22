import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertCircle, ArrowRight, Lock, User } from 'lucide-react'
import { login } from '@/lib/auth'
import { cn } from '@/lib/utils'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const submit = () => {
    if (login(username, password)) {
      navigate('/timeline', { replace: true })
    } else {
      setError('Usuário ou senha incorretos.')
    }
  }

  return (
    <div className="min-h-screen bg-ink-1 text-paper-0 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Kanji decorativo de fundo */}
      <span
        aria-hidden
        className="absolute pointer-events-none select-none text-red-500 opacity-[0.05]"
        style={{
          fontSize: 'min(90vw, 560px)',
          lineHeight: 1,
          fontFamily: 'serif',
          right: '-8%',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        狙
      </span>

      {/* Logo em destaque no topo */}
      <div className="relative z-10 mb-10 sm:mb-14 flex flex-col items-center">
        <img
          src="/logo-nerau.png"
          alt="Nerau CX"
          className="h-12 sm:h-14 w-auto object-contain"
        />
        <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-slate-3 mt-4">
          Central de Projetos
        </div>
      </div>

      {/* Card transparente — tema escuro */}
      <div className="relative z-10 w-full max-w-[420px]">
        <div className="mb-6 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-500 font-semibold mb-2">
            Novo Mundo
          </div>
          <h1 className="font-display text-[22px] sm:text-[26px] font-bold leading-tight">
            Acompanhamento <span className="text-red-500 italic font-medium">do projeto</span>
          </h1>
          <p className="text-[13px] text-slate-3 mt-3 leading-relaxed px-4 sm:px-0">
            Entre com as credenciais enviadas pela Nerau CX para acompanhar o andamento da migração.
          </p>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-3 mb-2 font-medium">
              <User className="w-3 h-3" /> Login
            </span>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setError(null)
              }}
              autoFocus
              autoComplete="username"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-8 text-[14px] text-paper-0 placeholder:text-slate-3 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-colors"
            />
          </label>

          <label className="block">
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-3 mb-2 font-medium">
              <Lock className="w-3 h-3" /> Senha
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(null)
              }}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              autoComplete="current-password"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-8 text-[14px] font-mono tracking-wider text-paper-0 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-colors"
            />
          </label>

          {error && (
            <div className="text-[12px] text-red-500 font-mono flex items-center gap-1.5 px-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={submit}
            disabled={!username.trim() || !password}
            className={cn(
              'w-full px-4 py-3 rounded-8 text-[14px] font-semibold bg-red-500 text-white hover:bg-red-900 transition-colors inline-flex items-center justify-center gap-2',
              'disabled:opacity-40 disabled:cursor-not-allowed'
            )}
          >
            Entrar <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Rodapé Nerau */}
      <footer className="relative z-10 mt-10 sm:mt-14 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-3">
          Conduzido por
        </div>
        <div className="font-display text-[13px] font-bold text-paper-0 mt-1">
          Nerau CX · CRO · Implementação · Marketing
        </div>
      </footer>
    </div>
  )
}
