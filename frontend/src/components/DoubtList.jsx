import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Volume2, VolumeX, Clock, CheckCircle, AlertCircle } from 'lucide-react';

function DoubtList({ userId = null, isFaculty = false }) {
  const [muted, setMuted] = useState(false);

  // Load doubts from localStorage
  const [doubts] = useState(() => {
    try {
      const stored = localStorage.getItem('doubts');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert createdAt back to Date objects
        return parsed.map(doubt => ({
          ...doubt,
          createdAt: new Date(doubt.createdAt)
        }));
      }
    } catch (error) {
      console.error('Error loading doubts from localStorage:', error);
    }
    return [];
  });

  const handleVote = (doubtId, voteType) => {
    try {
      const stored = localStorage.getItem('doubts');
      if (stored) {
        const doubts = JSON.parse(stored);
        const doubtIndex = doubts.findIndex(d => d.id === doubtId);
        if (doubtIndex !== -1) {
          if (voteType === 'up') {
            doubts[doubtIndex].upVotes = (doubts[doubtIndex].upVotes || 0) + 1;
            doubts[doubtIndex].votes = (doubts[doubtIndex].votes || 0) + 1;
          } else if (voteType === 'down') {
            doubts[doubtIndex].downVotes = (doubts[doubtIndex].downVotes || 0) + 1;
            doubts[doubtIndex].votes = (doubts[doubtIndex].votes || 0) - 1;
          }
          localStorage.setItem('doubts', JSON.stringify(doubts));
          // Force re-render by updating state
          window.location.reload(); // Simple way to refresh the component
        }
      }
    } catch (error) {
      console.error('Error updating vote:', error);
    }
  };

  const handleDoubtCleared = (doubtId) => {
    try {
      const stored = localStorage.getItem('doubts');
      if (stored) {
        const doubts = JSON.parse(stored);
        const updatedDoubts = doubts.filter(d => d.id !== doubtId);
        localStorage.setItem('doubts', JSON.stringify(updatedDoubts));
        // Force re-render by updating state
        window.location.reload(); // Simple way to refresh the component
      }
    } catch (error) {
      console.error('Error clearing doubt:', error);
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const readAloud = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1;
      utterance.volume = 1;

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock size={16} color="#ffa500" />;
      case 'processed':
        return <CheckCircle size={16} color="#4CAF50" />;
      case 'error':
        return <AlertCircle size={16} color="#f44336" />;
      default:
        return <Clock size={16} color="#ffa500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#ffa500';
      case 'processed':
        return '#4CAF50';
      case 'error':
        return '#f44336';
      default:
        return '#ffa500';
    }
  };

  // Sort doubts by votes for faculty view (highest first)
  const sortedDoubts = isFaculty
    ? [...doubts].sort((a, b) => (b.votes || 0) - (a.votes || 0))
    : doubts;

  return (
    <div style={{ width: '100%' }}>
      {/* Header with Audio Control for Faculty */}
      {isFaculty && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          padding: '15px',
          background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
          borderRadius: '10px',
          color: 'white'
        }}>
          <h2 style={{ margin: '0', fontSize: '1.5rem' }}>Classroom Doubts (Sorted by Votes)</h2>
          <button
            onClick={toggleMute}
            style={{
              background: muted ? '#f44336' : '#4CAF50',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 15px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.9rem'
            }}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            {muted ? 'Unmute' : 'Mute'} Notifications
          </button>
        </div>
      )}

      {!isFaculty && (
        <h2 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '20px',
          fontSize: '1.5rem'
        }}>
          Your Submitted Doubts
        </h2>
      )}

      {sortedDoubts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 40px',
          background: 'white',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          border: '1px solid #e0e0e0',
          color: '#666'
        }}>
          {isFaculty ? (
            <div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px',
                opacity: '0.3'
              }}>
                📚
              </div>
              <h3 style={{
                margin: '0 0 15px 0',
                color: '#333',
                fontSize: '1.5rem'
              }}>
                No Student Doubts Yet
              </h3>
              <p style={{
                margin: '0 0 20px 0',
                fontSize: '1rem',
                lineHeight: '1.5'
              }}>
                Students haven't submitted any doubts during this session.
                Once they start asking questions, they'll appear here sorted by vote count.
              </p>
              <div style={{
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                padding: '15px',
                borderRadius: '10px',
                fontSize: '0.9rem'
              }}>
                💡 <strong>Pro Tip:</strong> Use the mute/unmute button above to control doubt notifications during your lecture.
              </div>
            </div>
          ) : (
            <div>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px',
                opacity: '0.3'
              }}>
                ❓
              </div>
              <h3 style={{
                margin: '0 0 15px 0',
                color: '#333',
                fontSize: '1.5rem'
              }}>
                No Doubts Submitted Yet
              </h3>
              <p style={{
                margin: '0',
                fontSize: '1rem',
                lineHeight: '1.5'
              }}>
                You haven't asked any questions yet. Be the first to submit a doubt and get help from your instructor and classmates!
              </p>
            </div>
          )}
        </div>
      ) : (
        sortedDoubts.map((doubt) => (
          <div key={doubt.id} style={{
            background: 'white',
            borderRadius: '15px',
            padding: '20px',
            marginBottom: '15px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
            position: 'relative'
          }}>
            {/* Status Badge */}
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: getStatusColor(doubt.aiStatus),
              color: 'white',
              padding: '5px 10px',
              borderRadius: '15px',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              {getStatusIcon(doubt.aiStatus)}
              {doubt.aiStatus?.toUpperCase()}
            </div>

            {/* Doubt Text */}
            <div style={{ marginBottom: '15px', marginRight: '100px' }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.5',
                color: '#333',
                margin: '0'
              }}>
                {doubt.text}
              </p>
            </div>



            {/* Voting Section (for non-own doubts) */}
            {!userId && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '10px'
              }}>
                <button
                  onClick={() => handleVote(doubt.id, 'up')}
                  style={{
                    background: '#4CAF50',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '8px 15px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.9rem'
                  }}
                >
                  <ThumbsUp size={14} />
                  Helpful ({doubt.upVotes || 0})
                </button>
                <button
                  onClick={() => handleVote(doubt.id, 'down')}
                  style={{
                    background: '#f44336',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '8px 15px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.9rem'
                  }}
                >
                  <ThumbsDown size={14} />
                  Not Helpful ({doubt.downVotes || 0})
                </button>
                <span style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: doubt.votes > 0 ? '#4CAF50' : doubt.votes < 0 ? '#f44336' : '#666'
                }}>
                  Score: {doubt.votes || 0}
                </span>
              </div>
            )}

            {/* Metadata */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.8rem',
              color: '#666',
              borderTop: '1px solid #eee',
              paddingTop: '10px'
            }}>
              <span>
                {doubt.createdAt?.toLocaleString()}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {isFaculty && (
                  <>
                    <button
                      onClick={() => readAloud(doubt.text)}
                      style={{
                        background: '#667eea',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                      }}
                      title="Read Aloud"
                    >
                      <Volume2 size={16} />
                      Read Aloud
                    </button>
                    <button
                      onClick={() => handleDoubtCleared(doubt.id)}
                      style={{
                        background: '#28a745',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(40, 167, 69, 0.3)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 2px 8px rgba(40, 167, 69, 0.3)';
                      }}
                      title="Mark as Cleared"
                    >
                      <CheckCircle size={16} />
                      Doubt Cleared
                    </button>
                  </>
                )}
                {doubt.blocked && (
                  <span style={{ color: '#f44336', fontWeight: 'bold' }}>
                    ⚠️ BLOCKED
                  </span>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default DoubtList;
