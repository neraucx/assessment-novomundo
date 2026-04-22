// Login simples pra versão paliativa. NÃO é seguro de verdade (credenciais
// viajam pelo JS bundle). Está ok pro uso temporário com link compartilhado
// com o cliente único até a versão completa ficar pronta.

const USER = 'novomundo'
const PASS = 'dk2!%0s0#Sh1239'
const STORAGE_KEY = 'nm_client_session'

export function login(username: string, password: string): boolean {
  if (username.trim() === USER && password === PASS) {
    sessionStorage.setItem(STORAGE_KEY, 'ok')
    return true
  }
  return false
}

export function logout() {
  sessionStorage.removeItem(STORAGE_KEY)
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(STORAGE_KEY) === 'ok'
}
