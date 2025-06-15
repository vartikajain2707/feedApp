import { useState } from 'react'
import { useAuth } from '../context/AuthProvider.tsx'

type AuthModalProps = {
  onClose: () => void
}

const AuthModal = ({ onClose }: AuthModalProps) => {
  const { login } = useAuth()
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      if (!password || (activeTab === 'signup' && (!username || !confirmPassword))) {
        throw new Error('Please fill in all fields')
      }

      if (activeTab === 'signup' && password !== confirmPassword) {
        throw new Error('Passwords do not match')
      }

      if (activeTab === 'signup' && password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }
      await new Promise(resolve => setTimeout(resolve, 1000))


      const defaultUsers = [
        { id: "demo@example.com", username: "demo@example.com", password: "password123" },
        { id: "test@user.com", username: "test@user.com", password: "testpass" }
      ];
      const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const existingUsers = [...storedUsers, ...defaultUsers];

      // const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')

      if (activeTab === 'signup') {
        if (existingUsers.some((user: { username: string }) => user.username === username)) {
          throw new Error('Username already exists')
        }

        const userId = Date.now().toString()
        const userData = {
          id: userId,
          username,
          password
        }

        existingUsers.push(userData)
        localStorage.setItem('registeredUsers', JSON.stringify(existingUsers))

        login({
          id: userId,
          username
        })
      } else {
        const user = existingUsers.find((user: { username: string }) => user.username === username)

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
      }

      onClose()
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 relative">
          <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
              aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-3 rounded-full">
              {activeTab === 'signup' ?
                  <svg className='cursor-pointer' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 2C10.2386 2 8 4.23858 8 7C8 7.55228 8.44772 8 9 8C9.55228 8 10 7.55228 10 7C10 5.34315 11.3431 4 13 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H13C11.3431 20 10 18.6569 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 19.7614 10.2386 22 13 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H13Z" fill="#000000"></path> <path d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11.2821C11.1931 13.1098 11.1078 13.2163 11.0271 13.318C10.7816 13.6277 10.5738 13.8996 10.427 14.0945C10.3536 14.1921 10.2952 14.2705 10.255 14.3251L10.2084 14.3884L10.1959 14.4055L10.1915 14.4115C10.1914 14.4116 10.191 14.4122 11 15L10.1915 14.4115C9.86687 14.8583 9.96541 15.4844 10.4122 15.809C10.859 16.1336 11.4843 16.0346 11.809 15.5879L11.8118 15.584L11.822 15.57L11.8638 15.5132C11.9007 15.4632 11.9553 15.3897 12.0247 15.2975C12.1637 15.113 12.3612 14.8546 12.5942 14.5606C13.0655 13.9663 13.6623 13.2519 14.2071 12.7071L14.9142 12L14.2071 11.2929C13.6623 10.7481 13.0655 10.0337 12.5942 9.43937C12.3612 9.14542 12.1637 8.88702 12.0247 8.7025C11.9553 8.61033 11.9007 8.53682 11.8638 8.48679L11.822 8.43002L11.8118 8.41602L11.8095 8.41281C11.4848 7.96606 10.859 7.86637 10.4122 8.19098C9.96541 8.51561 9.86636 9.14098 10.191 9.58778L11 9C10.191 9.58778 10.1909 9.58773 10.191 9.58778L10.1925 9.58985L10.1959 9.59454L10.2084 9.61162L10.255 9.67492C10.2952 9.72946 10.3536 9.80795 10.427 9.90549C10.5738 10.1004 10.7816 10.3723 11.0271 10.682C11.1078 10.7837 11.1931 10.8902 11.2821 11H3Z" fill="#000000"></path> </g></svg> :
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534Z" fill="#1C274C"></path> <path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill="#1C274C"></path> <path d="M10 10.5C10 11.3284 9.55229 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55229 9 10 9.67157 10 10.5Z" fill="#1C274C"></path> </g></svg>}
            </div>
          </div>

          <h2 className="text-center text-lg font-semibold text-gray-900">
            {activeTab === 'signup' ? 'Create an account to continue' : 'Welcome back'}
          </h2>
          <p className="text-center text-xs text-gray-500 mb-6">
            {activeTab === 'signup'
                ? 'Create an account to access all the features on this app'
                : 'Sign in to access all features'}
          </p>

          {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded-md text-center">
                {error}
              </div>
          )}

          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email or username</label>
            <input
                    type="text"
                    placeholder="Enter your username or email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 mb-3 py-2 rounded-md bg-gray-100 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mb-3 rounded-md bg-gray-100 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            {activeTab === 'signup' && (
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Repeat Password</label>
              <input
                    type="password"
                    placeholder="Repeat your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 mb-3 rounded-md bg-gray-100 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>
            )}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-md transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading
                  ? activeTab === 'login'
                      ? 'loging in...'
                      : 'Creating account...'
                  : activeTab === 'login'
                      ? 'Login'
                      : 'Sign Up'}
            </button>
          </form>

          <div className="text-xs text-center text-gray-500 mt-5">
            {activeTab === 'signup'
                ? 'Already have an account?'
                : "Don't have an account?"}
            <button
                type="button"
                onClick={() => setActiveTab(activeTab === 'signup' ? 'login' : 'signup')}
                className="text-blue-600 font-bold hover:underline ml-1"
            >
              {activeTab === 'signup' ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
  )
}

export default AuthModal
