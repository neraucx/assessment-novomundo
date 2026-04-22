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
    <div className="min-h-screen bg-paper-1 flex items-center justify-center p-8">
      <div className="w-full max-w-[440px] bg-paper-0 border border-paper-3 rounded-8 shadow-xl p-8">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-8 bg-ink-1 flex items-center justify-center">
            <img
              src="/logo-nerau.png"
              alt="Nerau CX"
              className="h-6 w-auto object-contain"
            />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-red-500 font-semibold">
              Nerau CX
            </div>
            <div className="font-display text-[17px] font-bold text-ink-1 leading-tight">
              Acompanhamento do projeto
            </div>
          </div>
        </div>
        <p className="text-[13px] text-slate-2 mb-6 mt-2 leading-relaxed">
          Entre com o login e a senha que a Nerau enviou pra acompanhar o andamento da migração.
        </p>

        <div className="space-y-4">
          <label className="block">
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-2 mb-1.5 font-medium">
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
              className="w-full px-3 py-2 border border-paper-3 rounded-4 text-[13px] bg-paper-1 focus:outline-none focus:border-red-500 focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-2 mb-1.5 font-medium">
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
              className="w-full px-3 py-2 border border-paper-3 rounded-4 text-[13px] font-mono tracking-wider bg-paper-1 focus:outline-none focus:border-red-500 focus:bg-white"
            />
          </label>

          {error && (
            <div className="text-[12px] text-red-500 font-mono flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={submit}
            disabled={!username.trim() || !password}
            className={cn(
              'w-full px-4 py-2.5 rounded-8 text-[13px] font-semibold bg-red-500 text-white hover:bg-red-900 transition-colors inline-flex items-center justify-center gap-1.5',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            Entrar <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
