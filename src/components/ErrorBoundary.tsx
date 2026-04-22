import { Component, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { error: Error | null }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Loga no console pra debug via F12
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-paper-1 flex items-center justify-center p-8">
          <div className="max-w-[560px] bg-paper-0 border border-paper-3 rounded-8 shadow-xl p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-red-500 font-semibold mb-2">
              Erro ao carregar
            </div>
            <h1 className="font-display text-[20px] font-bold text-ink-1 mb-3">
              Algo quebrou no carregamento da página
            </h1>
            <p className="text-[13px] text-slate-2 leading-relaxed mb-4">
              {this.state.error.message}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-8 text-[13px] font-semibold bg-red-500 text-white hover:bg-red-900 transition-colors"
            >
              Tentar de novo
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
