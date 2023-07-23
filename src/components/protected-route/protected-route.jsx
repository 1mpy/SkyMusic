import { Navigate } from 'react-router-dom'

function ProtectedRoute({ redirectPath = '/login', isAllowed, children }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={Boolean} />
  }

  return children
}

export default ProtectedRoute
