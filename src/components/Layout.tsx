import { useState } from 'react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
  Clock,
  ClipboardList,
  CheckCircle2,
  FolderOpen,
  Lock,
  LogOut,
  Menu,
  X,
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
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const onLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const currentLabel =
    NAV.find((n) => location.pathname.startsWith(n.to))?.label ?? 'Painel'

  return (
    <div className="lg:grid lg:grid-cols-[240px_1fr] min-h-screen">
      {/* Sidebar desktop */}
      <aside className="hidden lg:flex bg-ink-1 text-paper-0 py-6 sticky top-0 h-screen flex-col w-60 shrink-0">
        <SidebarContent onLogout={onLogout} closeDrawer={() => {}} />
      </aside>

      {/* Topbar mobile (hamburguer) */}
      <header className="lg:hidden bg-ink-1 text-paper-0 sticky top-0 z-20 flex items-center justify-between px-4 py-3 border-b border-white/10">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="p-2 -ml-2 rounded-4 hover:bg-white/5"
          aria-label="Abrir menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <img
          src="/logo-nerau.png"
          alt="Nerau CX"
          className="h-6 w-auto object-contain"
        />
        <div className="w-9" /> {/* placeholder pra centralizar o logo */}
      </header>

      {/* Drawer mobile */}
      {drawerOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-ink-1/60 backdrop-blur-sm z-30"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <aside className="lg:hidden fixed inset-y-0 left-0 w-[min(280px,85vw)] bg-ink-1 text-paper-0 py-6 z-40 flex flex-col animate-fade-in">
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-4 text-slate-3 hover:text-paper-0 hover:bg-white/5"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
            <SidebarContent
              onLogout={onLogout}
              closeDrawer={() => setDrawerOpen(false)}
            />
          </aside>
        </>
      )}

      <main className="overflow-x-hidden">
        <header className="hidden lg:flex px-8 py-4 border-b border-paper-3 bg-paper-0 sticky top-0 z-10 items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-[12px] text-slate-2 font-mono">
            <span>{PROJECT.client}</span>
            <span className="opacity-40">›</span>
            <span className="text-ink-1 font-medium">Painel do cliente</span>
            <span className="font-mono text-[10px] px-2.5 py-1 rounded-pill tracking-[0.12em] uppercase font-semibold bg-both text-white ml-2.5">
              Modo Cliente
            </span>
          </div>
        </header>

        {/* Breadcrumb mobile */}
        <div className="lg:hidden px-4 py-2.5 bg-paper-1 border-b border-paper-3 font-mono text-[11px] text-slate-2 tracking-wide">
          <span className="text-ink-1 font-medium">{currentLabel}</span>
        </div>

        <Outlet />
      </main>
    </div>
  )
}

function SidebarContent({
  onLogout,
  closeDrawer,
}: {
  onLogout: () => void
  closeDrawer: () => void
}) {
  return (
    <>
      <div className="px-5 pt-1 pb-[18px] border-b border-white/10 mb-4">
        <img
          src="/logo-nerau.png"
          alt="Nerau CX"
          className="h-9 sm:h-10 w-auto max-w-full object-contain object-left block"
        />
        <div className="text-[10px] uppercase tracking-[0.15em] text-slate-3 mt-2 font-mono">
          Acompanhamento · Cliente
        </div>
      </div>

      <div className="mx-4 mb-5 px-3 py-3 bg-white/5 rounded-8 border border-white/10">
        <div className="font-semibold text-[13px]">{PROJECT.name}</div>
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
                onClick={closeDrawer}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-2.5 px-6 py-3 text-[14px] text-paper-3 border-l-[3px] border-transparent transition-all',
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
    </>
  )
}
