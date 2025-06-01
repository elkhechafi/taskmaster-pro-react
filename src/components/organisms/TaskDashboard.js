import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';
import { taskActions } from '../../context/taskHelpers';

function TaskDashboard() {
  const { state, dispatch } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      dispatch(taskActions.addTask({
        title: newTaskTitle.trim(),
        status: 'todo',
        priority: 'medium'
      }));
      setNewTaskTitle('');
    }
  };

  const handleToggleTask = (taskId) => {
    dispatch(taskActions.toggleTask(taskId));
  };

  return (
    <div className="card">
      <h2>My Tasks ({state.tasks.length})</h2>
      
      {/* Quick Add Task Form */}
      <form onSubmit={handleAddTask} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="input"
            style={{ flex: 1 }}
          />
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </form>

      {/* Task List */}
      <div>
        {state.tasks.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem' }}>
            No tasks yet. Add your first task above! 🚀
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {state.tasks.map(task => (
              <div 
                key={task.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '0.75rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <input
                  type="checkbox"
                  checked={task.status === 'completed'}
                  onChange={() => handleToggleTask(task.id)}
                  style={{ marginRight: '0.75rem' }}
                />
                <span 
                  style={{ 
                    textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                    color: task.status === 'completed' ? 'var(--text-muted)' : 'var(--text-primary)',
                    flex: 1
                  }}
                >
                  {task.title}
                </span>
                <span 
                  style={{ 
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginLeft: '1rem'
                  }}
                >
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Debug Info (remove later) */}
      <details style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        <summary>Debug State (click to expand)</summary>
        <pre style={{ marginTop: '0.5rem', padding: '0.5rem', backgroundColor: 'var(--bg-tertiary)' }}>
          {JSON.stringify(state, null, 2)}
        </pre>
      </details>
    </div>
  );
}

export default TaskDashboard;