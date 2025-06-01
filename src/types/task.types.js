// Define your data structure FIRST
export const TASK_STATUS = {
    TODO: 'todo',
    IN_PROGRESS: 'in_progress', 
    COMPLETED: 'completed'
  };
  
  export const TASK_PRIORITY = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high'
  };
  
  // This is your "single source of truth"
  export const initialTaskState = {
    tasks: [],
    projects: [{ id: 'default', name: 'Personal', tasks: [] }],
    currentProject: 'default',
    filters: {
      status: 'all',
      priority: 'all',
      search: ''
    },
    loading: false,
    error: null
  };