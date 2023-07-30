import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import NotFound from './pages/not_found/NotFound'
import Fav from './pages/fav/Fav'
import Registration from './pages/reg/Registration'
import Category from './pages/category/category'
import ProtectedRoute from './components/protected-route/protected-route'
import Main from './pages/main/Main'

function AppRoutes({
  loading,
  token,
  list,
  tracklistError,
  selectedTrack,
  setSelectedTrack
}) {
  // console.log(token)
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
        <Route
          path="/"
          element={
            <Main
              loading={loading}
              list={list}
              tracklistError={tracklistError}
              selectedTrack= {selectedTrack}
              setSelectedTrack={setSelectedTrack}
            />
          }
        />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/fav" element={<Fav />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/reg" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
