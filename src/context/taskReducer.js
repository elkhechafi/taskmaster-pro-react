// src/context/taskReducer.js
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
      
      // ... other cases
      default:
        return state; // Return the current state if no action matches
    }
  }