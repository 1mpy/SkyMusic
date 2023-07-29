import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ redirectPath = '/login', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={Boolean} />
  }

  return <Outlet/>
}

export default ProtectedRoute
