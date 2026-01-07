import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import AddDoubt from './AddDoubt';
import DoubtList from './DoubtList';
import { MessageSquare, BookOpen, TrendingUp } from 'lucide-react';

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Navbar role="student" />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        overflowX: 'hidden'
      }}>
        {/* Welcome Section */}
        <div style={{
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          borderRadius: '15px',
          padding: '30px',
          color: 'white',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>
            Welcome to EchoClass
          </h1>
          <p style={{ margin: '0', fontSize: '1.2rem', opacity: '0.9' }}>
            Ask doubts, learn together, and get instant help from your faculty!
          </p>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
          }}>
            <BookOpen size={40} style={{ color: '#667eea', marginBottom: '10px', transition: 'transform 0.3s ease' }} />
            <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>Ask a Doubt</h3>
            <p style={{ margin: '0', color: '#666' }}>Submit your questions and get help</p>
          </div>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <MessageSquare size={40} style={{ color: '#4CAF50', marginBottom: '10px' }} />
            <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>Classroom Doubts</h3>
            <p style={{ margin: '0', color: '#666' }}>See what others are asking</p>
          </div>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <TrendingUp size={40} style={{ color: '#ff6b6b', marginBottom: '10px' }} />
            <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>Vote & Help</h3>
            <p style={{ margin: '0', color: '#666' }}>Upvote helpful questions</p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px'
        }}>
          {/* Ask a Doubt Section */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <AddDoubt />
          </div>

          {/* All Classroom Doubts */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <h2 style={{
              margin: '0 0 20px 0',
              color: '#333',
              fontSize: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <MessageSquare size={24} />
              All Classroom Doubts
            </h2>
            <DoubtList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
