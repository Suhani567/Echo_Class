import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Users, Mail, Lock, Eye, EyeOff } from 'lucide-react';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || 'student';

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Mock authentication - simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simple mock validation
      if (role === 'student' && formData.email === 'student@echo.com' && formData.password === 'student123') {
        localStorage.setItem('role', role);
        localStorage.setItem('user', JSON.stringify({ email: formData.email, role }));
        navigate('/student');
      } else if (role === 'faculty' && formData.email === 'faculty@echo.com' && formData.password === 'faculty123') {
        localStorage.setItem('role', role);
        localStorage.setItem('user', JSON.stringify({ email: formData.email, role }));
        navigate('/faculty');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');

    try {
      // Mock Google login - simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock successful Google login
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify({ email: 'google@example.com', role, provider: 'google' }));
      navigate(role === 'student' ? '/student' : '/faculty');
    } catch (error) {
      console.error('Google login error:', error);
      setError('Google sign-in failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '32px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            background: role === 'student' ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)' : 'linear-gradient(45deg, #4ecdc4, #44a08d)',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'white'
          }}>
            {role === 'student' ? <BookOpen size={40} /> : <Users size={40} />}
          </div>
          <h1 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '2rem' }}>
            EchoClass
          </h1>
          <p style={{ margin: '0', color: '#666', fontSize: '1.1rem' }}>
            Login as {role === 'student' ? 'Student' : 'Faculty'}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#ffebee',
            border: '1px solid #f44336',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '20px',
            color: '#c62828',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleEmailLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: '500'
            }}>
              Email
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                disabled={isLoading}
              />
              <Mail size={20} style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#999'
              }} />
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: '500'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#999'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '14px',
              background: isLoading ? '#ccc' : role === 'student' ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)' : 'linear-gradient(45deg, #4ecdc4, #44a08d)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              marginBottom: '20px',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => !isLoading && (e.target.style.transform = 'scale(1.02)')}
            onMouseOut={(e) => !isLoading && (e.target.style.transform = 'scale(1)')}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          margin: '20px 0',
          color: '#666'
        }}>
          <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
          <span style={{ padding: '0 10px', fontSize: '0.9rem' }}>or</span>
          <div style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '12px',
            background: 'white',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            color: '#333',
            fontSize: '1rem',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => !isLoading && (e.target.style.borderColor = '#ccc', e.target.style.background = '#f9f9f9')}
          onMouseOut={(e) => !isLoading && (e.target.style.borderColor = '#e0e0e0', e.target.style.background = 'white')}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            style={{ width: '20px', height: '20px' }}
          />
          Continue with Google
        </button>

        {/* Signup Link */}
        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #e0e0e0'
        }}>
          <span style={{ color: '#666', fontSize: '0.9rem' }}>
            New to EchoClass?{' '}
            <button
              onClick={() => navigate('/signup', { state: { role } })}
              style={{
                background: 'none',
                border: 'none',
                color: '#667eea',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                textDecoration: 'underline'
              }}
            >
              Create Account
            </button>
          </span>
        </div>

        {/* Back to Home */}
        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%',
            padding: '12px',
            background: 'transparent',
            border: 'none',
            color: '#667eea',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '15px',
            textDecoration: 'underline'
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;
