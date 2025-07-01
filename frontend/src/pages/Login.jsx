import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'}}>
      <div className="form">
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <h1 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Welcome Back</h1>
          <p style={{color: '#6b7280'}}>Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div style={{position: 'relative'}}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Enter your password"
                required
                style={{paddingRight: '2.5rem'}}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#6b7280'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{margin: 0}}
              />
              <span style={{fontSize: '0.875rem', color: '#374151'}}>Remember me</span>
            </label>
            <Link to="/forgot-password" style={{fontSize: '0.875rem', color: '#3b82f6', textDecoration: 'none'}}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary" style={{width: '100%', marginBottom: '1rem'}}>
            Sign In
          </button>

          <p style={{textAlign: 'center', fontSize: '0.875rem', color: '#6b7280'}}>
            Don't have an account?{" "}
            <Link to="/register" style={{color: '#3b82f6', textDecoration: 'none', fontWeight: '500'}}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;