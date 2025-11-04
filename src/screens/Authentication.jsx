
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../context/useUser"

export const AuthenticationMode = Object.freeze({
  SignIn: 'Login',
  SignUp: 'SignUp'
})

export default function Authentication({ authenticationMode }) {
  const { user, setUser, signUp, signIn } = useUser()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const signFunction = authenticationMode === AuthenticationMode.SignUp ? signUp : signIn

    try {
      await signFunction(user)
      navigate(authenticationMode === AuthenticationMode.SignUp ? '/signin' : '/')
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.response?.data?.message || error.message || 'An error occurred'
      alert(errorMessage)
    }
  }
  
 return (
  <div className="auth-container">
    <div className="auth-box">
      <h3 className="auth-title">
        {authenticationMode === AuthenticationMode.SignIn ? 'Sign in' : 'Sign up'}
      </h3>

      <form onSubmit={handleSubmit} className="auth-form">
        <label className="auth-label">Email</label>
        <input 
          className="auth-input"
          placeholder="Email"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />

        <label className="auth-label">Password</label>
        <input 
          className="auth-input"
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />

        <button type="submit" className="auth-button">
          {authenticationMode === AuthenticationMode.SignIn ? 'Login' : 'Submit'}
        </button>

        <Link
          to={authenticationMode === AuthenticationMode.SignIn ? '/signup' : '/signin'}
          className="auth-link"
        >
          {authenticationMode === AuthenticationMode.SignIn 
            ? 'No account? Sign up' 
            : 'Already signed up? Sign in'}
        </Link>
      </form>
    </div>
  </div>
)
}