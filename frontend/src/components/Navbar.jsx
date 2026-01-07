import { useNavigate } from 'react-router-dom';
import { LogOut, User, Home } from 'lucide-react';

function Navbar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav style={{
      background: 'white',
      borderBottom: '1px solid #e0e0e0',
      padding: '0',
      position: 'sticky',
      top: '0',
      zIndex: '100',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        {/* Logo and App Name */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          cursor: 'pointer'
        }} onClick={() => navigate('/')}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '8px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <Home size={20} />
          </div>
          <div>
            <h1 style={{
              margin: '0',
              fontSize: '1.5rem',
              color: '#333',
              fontWeight: 'bold'
            }}>
              EchoClass
            </h1>
          </div>
        </div>

        {/* Right Side */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          {/* Role Indicator */}
          <div style={{
            background: role === 'student' ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)' : 'linear-gradient(45deg, #4ecdc4, #44a08d)',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <User size={16} />
            {role === 'student' ? 'Student' : 'Faculty'}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            style={{
              background: '#f44336',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#d32f2f'}
            onMouseOut={(e) => e.target.style.background = '#f44336'}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
