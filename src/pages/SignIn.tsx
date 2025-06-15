import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider.tsx'

const SignIn = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      if (!username || !password) {
        throw new Error('Please fill in all fields')
      }
      const defaultUsers = [
        { id: "demo@example.com", username: "demo@example.com", password: "password123" },
        { id: "test@user.com", username: "test@user.com", password: "testpass" }
      ];
      const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const registeredUsers = [...storedUsers, ...defaultUsers];

      console.log({registeredUsers})

      const user = registeredUsers.find((user: { username: string }) => user.username === username)

      if (!user) {
        throw new Error('User not found. Please sign up first.')
      }

      if (user.password !== password) {
        throw new Error('Incorrect password')
      }

      login({
        id: user.id,
        username: user.username
      })

      navigate('/')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Sign In</h1>
            <p className="mt-2 text-gray-600">Welcome back! Sign in to your account</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md animate-slide-up">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                UserName
              </label>
              <input
                id="username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input text-gray-900"
                placeholder="Enter Email or Username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input text-gray-900"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className={`w-full btn btn-primary ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="font-medium text-primary-600 hover:text-primary-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
