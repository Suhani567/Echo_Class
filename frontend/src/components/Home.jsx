import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, GraduationCap, MessageCircle } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    navigate('/login', { state: { role: 'student' } });
  };

  const handleFacultyLogin = () => {
    navigate('/login', { state: { role: 'faculty' } });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }

          .feature-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }

          .feature-icon {
            transition: transform 0.3s ease;
          }

          .feature-card:hover .feature-icon {
            transform: scale(1.1);
          }
        `}
      </style>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'white',
        padding: '15px 20px',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e9ecef',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        flexWrap: 'wrap'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#007bff',
          animation: 'fadeIn 1s ease-in'
        }}>
          <BookOpen size={30} style={{ marginRight: '10px' }} />
          EchoClassroom
        </div>
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              color: '#333',
              cursor: 'pointer',
              fontSize: '1rem',
              padding: '10px 15px',
              borderRadius: '5px',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#f8f9fa'}
            onMouseOut={(e) => e.target.style.background = 'none'}
          >
            Home
          </button>
          <button
            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              color: '#333',
              cursor: 'pointer',
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              fontSize: '1rem',
              padding: '10px 15px',
              borderRadius: '5px',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#f8f9fa'}
            onMouseOut={(e) => e.target.style.background = 'none'}
          >
            Features
          </button>
          <button
            onClick={handleStudentLogin}
            style={{
              background: '#007bff',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 15px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: 'white',
              cursor: 'pointer',
              transition: 'background 0.3s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => e.target.style.background = '#0056b3'}
            onMouseOut={(e) => e.target.style.background = '#007bff'}
          >
            Student Login
          </button>
          <button
            onClick={handleFacultyLogin}
            style={{
              background: '#28a745',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 15px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: 'white',
              cursor: 'pointer',
              transition: 'background 0.3s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => e.target.style.background = '#1e7e34'}
            onMouseOut={(e) => e.target.style.background = '#28a745'}
          >
            Faculty Login
          </button>
        </div>
      </nav>

      {/* Header */}
      <header style={{
        padding: '100px 20px 60px',
        textAlign: 'center',
        background: 'white'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px'
        }}>
          <div style={{
            background: '#007bff',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '20px'
          }}>
            <BookOpen size={40} color="white" />
          </div>
          <div>
            <h1 style={{
              fontSize: '3rem',
              margin: '0',
              color: '#333'
            }}>
              EchoClassroom
            </h1>
            <div style={{
              height: '4px',
              background: '#007bff',
              borderRadius: '2px',
              marginTop: '10px',
              width: '200px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}></div>
          </div>
        </div>
        <p style={{
          fontSize: '1.3rem',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          Revolutionizing Real-Life Classroom Learning with AI-Powered Doubt Resolution
        </p>

        {/* Simple Animation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            animation: 'bounce 2s infinite'
          }}>
            <GraduationCap size={50} color="#007bff" />
            <MessageCircle size={30} color="#28a745" style={{ animation: 'pulse 1s infinite' }} />
            <Users size={50} color="#28a745" />
          </div>
        </div>
        <p style={{ fontSize: '1rem', color: '#666' }}>Students ask doubts, teachers respond instantly</p>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* How It Works Section */}
        <section style={{
          background: 'white',
          borderRadius: '10px',
          padding: '40px 30px',
          marginBottom: '40px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#333'
          }}>
            How EchoClassroom Works
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                background: '#007bff',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white'
              }}>1</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>Student Asks Doubt</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#666' }}>
                During live class, students instantly submit their doubts through our intuitive interface. No need to raise hands or wait for breaks - just type your question and hit submit. Our system ensures your doubt reaches the teacher immediately without disrupting the flow of the lecture.
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                background: '#28a745',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white'
              }}>2</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>AI Processes Instantly</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#666' }}>
                Our advanced AI analyzes and prioritizes doubts based on relevance and urgency. Using natural language processing, it categorizes questions by topic, difficulty level, and importance. The system learns from teacher responses to improve future prioritization, ensuring the most critical doubts get attention first.
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                background: '#ffc107',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white'
              }}>3</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>Teacher Responds</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#666' }}>
                Faculty members receive prioritized doubts and address them seamlessly during class. Teachers can view doubts on their dashboard, respond directly, and mark them as resolved. The system tracks response times and provides analytics to help improve teaching effectiveness and student engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{
          background: 'white',
          borderRadius: '10px',
          padding: '40px 30px',
          marginBottom: '40px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#333'
          }}>
            Powerful Features for Modern Classrooms
          </h2>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            <div className="feature-card" style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e9ecef'
            }}>
              <BookOpen className="feature-icon" size={40} style={{ marginBottom: '15px', color: '#007bff' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>AI-Powered Processing</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#666' }}>
                Advanced machine learning algorithms instantly categorize and prioritize student doubts. Our AI understands context, identifies patterns in questions, and ensures that complex or frequently asked doubts get immediate attention from teachers.
              </p>
            </div>
            <div className="feature-card" style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e9ecef'
            }}>
              <Users className="feature-icon" size={40} style={{ marginBottom: '15px', color: '#28a745' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>Peer Voting System</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#666' }}>
                Students can upvote important doubts, helping teachers prioritize effectively. This democratic approach ensures that questions affecting multiple students get higher visibility and faster responses, creating a collaborative learning environment.
              </p>
            </div>
            <div className="feature-card" style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e9ecef'
            }}>
              <MessageCircle className="feature-icon" size={40} style={{ marginBottom: '15px', color: '#ffc107' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>Real-Time Communication</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#666' }}>
                Instant doubt submission and response system for seamless classroom interaction. Students get immediate feedback without interrupting the lecture flow, while teachers can respond at optimal moments during class.
              </p>
            </div>
            <div className="feature-card" style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e9ecef'
            }}>
              <GraduationCap className="feature-icon" size={40} style={{ marginBottom: '15px', color: '#007bff' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>Real-Life Classroom Integration</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#666' }}>
                Designed specifically for physical classrooms with seamless teacher-student interaction. Works alongside traditional teaching methods without requiring changes to existing classroom setups or workflows.
              </p>
            </div>
            <div className="feature-card" style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e9ecef'
            }}>
              <BookOpen className="feature-icon" size={40} style={{ marginBottom: '15px', color: '#28a745' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>Smart Prioritization</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#666' }}>
                AI-driven doubt ranking based on relevance and student votes. Combines multiple factors including question complexity, topic importance, and peer validation to ensure teachers address the most impactful questions first, maximizing learning outcomes for the entire class.
              </p>
            </div>
            <div className="feature-card" style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e9ecef'
            }}>
              <Users className="feature-icon" size={40} style={{ marginBottom: '15px', color: '#ffc107' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>Multi-Classroom Support</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#666' }}>
                Scalable solution that works across multiple classrooms and teaching environments. Supports large institutions with hundreds of concurrent classes, maintaining consistent performance and user experience across all deployments.
              </p>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section style={{
          textAlign: 'center',
          padding: '40px 20px',
          background: 'white',
          borderRadius: '10px',
          marginBottom: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '20px',
            color: '#333'
          }}>
            Start Your Journey Today
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '30px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Whether you're a student seeking answers or a teacher guiding minds,
            EchoClassroom is your gateway to enhanced learning experiences.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={handleStudentLogin}
              style={{
                background: '#007bff',
                border: 'none',
                borderRadius: '5px',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: 'white',
                cursor: 'pointer',
                transition: 'background 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseOver={(e) => e.target.style.background = '#0056b3'}
              onMouseOut={(e) => e.target.style.background = '#007bff'}
            >
              <BookOpen size={20} />
              Login as Student
            </button>
            <button
              onClick={handleFacultyLogin}
              style={{
                background: '#28a745',
                border: 'none',
                borderRadius: '5px',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: 'white',
                cursor: 'pointer',
                transition: 'background 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseOver={(e) => e.target.style.background = '#1e7e34'}
              onMouseOut={(e) => e.target.style.background = '#28a745'}
            >
              <Users size={20} />
              Login as Faculty
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        background: '#f8f9fa',
        borderTop: '1px solid #e9ecef',
        marginTop: '20px'
      }}>
        <p style={{ color: '#666' }}>&copy; 2025 EchoClass - Transforming Education Through Technology</p>
      </footer>
    </div>
  );
}

export default Home;
