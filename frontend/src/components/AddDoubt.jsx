import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function AddDoubt() {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const submitDoubt = async () => {
    if (!text.trim()) {
      setMessage("Please enter a doubt before submitting.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      // Mock submission - simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Save doubt to localStorage
      const existingDoubts = JSON.parse(localStorage.getItem('doubts') || '[]');
      const newDoubt = {
        id: Date.now().toString(),
        text: text.trim(),
        votes: 0,
        upVotes: 0,
        downVotes: 0,
        aiStatus: 'pending',
        aiResponse: null,
        createdAt: new Date(),
        blocked: false
      };
      existingDoubts.push(newDoubt);
      localStorage.setItem('doubts', JSON.stringify(existingDoubts));

      setText("");
      setMessage("✅ Doubt submitted successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Error adding doubt:", err);
      setMessage("❌ Failed to submit doubt. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isSubmitting) {
        submitDoubt();
      }
    }
  };

  return (
    <div>
      <h3 style={{
        margin: '0 0 20px 0',
        color: '#333',
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Send size={24} />
        Ask a Doubt
      </h3>

      <div style={{ marginBottom: '20px' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your doubt here... (Press Enter to submit)"
          disabled={isSubmitting}
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '15px',
            border: '2px solid #e0e0e0',
            borderRadius: '10px',
            fontSize: '1rem',
            fontFamily: 'Arial, sans-serif',
            resize: 'vertical',
            outline: 'none',
            transition: 'border-color 0.2s',
            backgroundColor: isSubmitting ? '#f5f5f5' : 'white',
            color: '#333'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button
          onClick={submitDoubt}
          disabled={isSubmitting || !text.trim()}
          style={{
            background: isSubmitting ? '#ccc' : text.trim() ? 'linear-gradient(45deg, #667eea, #764ba2)' : '#e0e0e0',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: isSubmitting || !text.trim() ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            if (!isSubmitting && text.trim()) {
              e.target.style.transform = 'scale(1.02)';
            }
          }}
          onMouseOut={(e) => {
            if (!isSubmitting && text.trim()) {
              e.target.style.transform = 'scale(1)';
            }
          }}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
              Submitting...
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Doubt
            </>
          )}
        </button>

        {message && (
          <span style={{
            fontSize: '0.9rem',
            color: message.includes('✅') ? '#4CAF50' : '#f44336',
            fontWeight: '500'
          }}>
            {message}
          </span>
        )}
      </div>
    </div>
  );
}
