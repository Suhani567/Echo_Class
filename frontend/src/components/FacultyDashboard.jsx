import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import DoubtList from './DoubtList';
import { Users, TrendingUp, MessageSquare, BookOpen } from 'lucide-react';

function FacultyDashboard() {
  const navigate = useNavigate();

  // Calculate stats from localStorage doubts
  const [stats] = useState(() => {
    try {
      const stored = localStorage.getItem('doubts');
      if (stored) {
        const doubts = JSON.parse(stored);
        const totalDoubts = doubts.length;
        const pendingDoubts = doubts.filter(d => d.aiStatus === 'pending').length;
        const processedDoubts = doubts.filter(d => d.aiStatus === 'processed').length;
        return { totalDoubts, pendingDoubts, processedDoubts };
      }
    } catch (error) {
      console.error('Error loading doubts for stats:', error);
    }
    return { totalDoubts: 0, pendingDoubts: 0, processedDoubts: 0 };
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Navbar role="faculty" />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        overflowX: 'hidden'
      }}>
        {/* Welcome Section */}
        <div style={{
          background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
          borderRadius: '15px',
          padding: '30px',
          color: 'white',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>
            Faculty Control Center
          </h1>
          <p style={{ margin: '0', fontSize: '1.2rem', opacity: '0.9' }}>
            Monitor and manage classroom doubts in real-time
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
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
          }}>
            <MessageSquare size={40} style={{ color: '#667eea', marginBottom: '10px', transition: 'transform 0.3s ease' }} />
            <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>Total Doubts</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea', margin: '0' }}>
              {stats.totalDoubts}
            </p>
          </div>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
          }}>
            <TrendingUp size={40} style={{ color: '#ffa500', marginBottom: '10px', transition: 'transform 0.3s ease' }} />
            <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>Pending</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffa500', margin: '0' }}>
              {stats.pendingDoubts}
            </p>
          </div>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
          }}>
            <BookOpen size={40} style={{ color: '#4CAF50', marginBottom: '10px', transition: 'transform 0.3s ease' }} />
            <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>Processed</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4CAF50', margin: '0' }}>
              {stats.processedDoubts}
            </p>
          </div>
        </div>

        {/* Main Content */}
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
            All Student Doubts
          </h2>
          <DoubtList isFaculty={true} />
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;
