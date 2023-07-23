import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import NotFound from './pages/not_found/NotFound'
import Fav from './pages/fav/Fav'
import Registration from './pages/reg/Registration'
import Category from './pages/category/category'
import ProtectedRoute from './components/protected-route/protected-route'
import Main from './pages/main/Main'

function AppRoutes({ loading, token }) {
  console.log(token)
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={Boolean(token)}>
            <Main loading={loading} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/category/:id"
        element={
          <ProtectedRoute isAllowed={Boolean(token)}>
            <Category />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
      <Route
        path="/fav"
        element={
          <ProtectedRoute isAllowed={Boolean(token)}>
            <Fav />
          </ProtectedRoute>
        }
      />
      <Route path="/reg" element={<Registration />} />
    </Routes>
  )
}

export default AppRoutes
