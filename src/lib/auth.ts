// Login simples pra versão paliativa. NÃO é seguro de verdade (credenciais
// viajam pelo JS bundle). Está ok pro uso temporário com link compartilhado
// com o cliente único até a versão completa ficar pronta.

const USER = 'novomundo'
const PASS = 'dk2!%0s0#Sh1239'
const STORAGE_KEY = 'nm_client_session'

function safeStorage(): Storage | null {
  try {
    if (typeof window === 'undefined') return null
    return window.sessionStorage
  } catch {
    return null
  }
}

export function login(username: string, password: string): boolean {
  if (username.trim() === USER && password === PASS) {
    safeStorage()?.setItem(STORAGE_KEY, 'ok')
    return true
  }
  return false
}

export function logout() {
  safeStorage()?.removeItem(STORAGE_KEY)
}

export function isAuthenticated(): boolean {
  return safeStorage()?.getItem(STORAGE_KEY) === 'ok'
}
