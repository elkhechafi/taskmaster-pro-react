// src/context/taskReducer.js
import { TASK_ACTIONS } from './taskActions';

export function taskReducer(state, action) {
  switch (action.type) {
    case TASK_ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { 
          id: Date.now(), 
          ...action.payload,
          createdAt: new Date().toISOString()
        }]
      };
    
    case TASK_ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id
            ? { ...task, status: task.status === 'completed' ? 'todo' : 'completed' }
            : task
        )
      };
    
    case TASK_ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updates }
            : task
        )
      };
    
    case TASK_ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };
    
    case TASK_ACTIONS.SET_SEARCH:
      return {
        ...state,
        filters: { ...state.filters, search: action.payload }
      };
    
    default:
      return state;
  }
}