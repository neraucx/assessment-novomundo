import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Login from '@/routes/Login'
import Timeline from '@/routes/Timeline'
import Pendencias from '@/routes/Pendencias'
import Locked from '@/routes/Locked'
import { isAuthenticated } from '@/lib/auth'

function Guard({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return <>{children}</>
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        element={
          <Guard>
            <Layout />
          </Guard>
        }
      >
        <Route path="/" element={<Navigate to="/timeline" replace />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/pendencias" element={<Pendencias />} />
        <Route path="/aprovacoes" element={<Locked title="Aprovações" />} />
        <Route path="/documentos" element={<Locked title="Documentos" />} />
      </Route>

      <Route path="*" element={<Navigate to="/timeline" replace />} />
    </Routes>
  )
}

export default App
