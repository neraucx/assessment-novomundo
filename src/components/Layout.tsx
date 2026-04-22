import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  Clock,
  ClipboardList,
  CheckCircle2,
  FolderOpen,
  Lock,
  LogOut,
} from 'lucide-react'
import { PROJECT } from '@/lib/data'
import { logout } from '@/lib/auth'
import { cn } from '@/lib/utils'

const NAV = [
  { to: '/timeline', label: 'Timeline do Projeto', Icon: Clock, locked: false },
  { to: '/pendencias', label: 'Suas Pendências', Icon: ClipboardList, locked: false },
  { to: '/aprovacoes', label: 'Aprovações', Icon: CheckCircle2, locked: true },
  { to: '/documentos', label: 'Documentos', Icon: FolderOpen, locked: true },
]

export function Layout() {
  const navigate = useNavigate()

  const onLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="grid grid-cols-[240px_1fr] min-h-screen">
      <aside className="bg-ink-1 text-paper-0 py-6 sticky top-0 h-screen flex flex-col w-60 shrink-0">
        <div className="px-5 pt-1 pb-[18px] border-b border-white/10 mb-4">
          <img
            src="/logo-nerau.png"
            alt="Nerau CX"
            className="h-10 w-auto max-w-full object-contain object-left block"
          />
          <div className="text-[10px] uppercase tracking-[0.15em] text-slate-3 mt-2 font-mono">
            Acompanhamento · Cliente
          </div>
        </div>

        <div className="mx-4 mb-5 px-3 py-3 bg-white/5 rounded-8 border border-white/10">
          <div className="font-semibold text-[13px] truncate">{PROJECT.name}</div>
          <div className="text-[10px] text-slate-3 font-mono uppercase tracking-wider mt-0.5">
            {PROJECT.client}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <div className="px-6 pt-3 pb-1 text-[10px] tracking-[0.15em] uppercase text-slate-3 font-mono">
            Painel do cliente
          </div>
          <ul>
            {NAV.map(({ to, label, Icon, locked }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-2.5 px-6 py-2.5 text-[14px] text-paper-3 border-l-[3px] border-transparent transition-all',
                      isActive && !locked && 'bg-red-500/10 border-l-red-500 text-paper-0',
                      !isActive && 'hover:bg-white/5 hover:text-paper-0',
                      locked && 'opacity-60'
                    )
                  }
                >
                  <Icon className="w-4 h-4 opacity-70" />
                  <span className="flex-1">{label}</span>
                  {locked && <Lock className="w-3 h-3 opacity-70" />}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-4 border-t border-white/10">
          <button
            type="button"
            onClick={onLogout}
            className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-slate-3 hover:text-paper-0 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" /> Sair
          </button>
        </div>
      </aside>

      <main className="overflow-x-hidden">
        <header className="px-8 py-4 border-b border-paper-3 bg-paper-0 sticky top-0 z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-[12px] text-slate-2 font-mono">
            <span>{PROJECT.client}</span>
            <span className="opacity-40">›</span>
            <span className="text-ink-1 font-medium">Painel do cliente</span>
            <span className="font-mono text-[10px] px-2.5 py-1 rounded-pill tracking-[0.12em] uppercase font-semibold bg-both text-white ml-2.5">
              Modo Cliente
            </span>
          </div>
        </header>
        <Outlet />
      </main>
    </div>
  )
}
