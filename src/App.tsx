// src/App.js
import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskDashboard from './components/organisms/TaskDashboard';
import './styles/globals.css';

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <header className="header">
          <div className="container">
            <h1>TaskMaster Pro</h1>
            <p>React Interview Preparation Project</p>
          </div>
        </header>
        
        <main className="main-content">
          <div className="container">
            <TaskDashboard />
          </div>
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;