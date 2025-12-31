import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '3px solid rgba(0, 255, 255, 0.3)',
    borderRadius: '50%',
    borderTopColor: 'var(--neon-cyan)',
    animation: 'spin 1s ease-in-out infinite',
  },
  text: {
    marginTop: '1rem',
    color: 'var(--neon-cyan)',
    letterSpacing: '2px',
    fontSize: '0.9rem',
    animation: 'pulse 1.5s infinite',
  }
};

const Loading = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
        `}</style>
      </div>
      <div style={styles.text}>ACCESSING MAINFRAME...</div>
    </div>
  );
};

export default Loading;
