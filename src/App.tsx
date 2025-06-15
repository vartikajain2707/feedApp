import { Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import {AuthProvider} from "./context/AuthProvider.tsx";



const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App