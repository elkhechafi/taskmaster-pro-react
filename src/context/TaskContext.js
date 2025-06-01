import React, { createContext, useReducer, useContext } from 'react';
import { taskReducer } from './taskReducer';
import { initialTaskState } from '../types/task.types';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

// Custom hook - this is the magic!
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within TaskProvider');
  }
  return context;
}