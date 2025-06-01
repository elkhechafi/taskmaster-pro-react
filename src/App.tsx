import React from 'react';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>TaskMaster Pro</h1>
          <p>React Interview Preparation Project</p>
        </div>
      </header>
      
      <main className="main-content">
        <div className="container">
          <div className="card">
            <h2>Welcome to TaskMaster Pro!</h2>
            <p>Your React learning journey starts here.</p>
            
            {/* This will be replaced with actual components */}
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <button className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;