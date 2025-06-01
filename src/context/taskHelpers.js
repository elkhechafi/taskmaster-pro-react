export const taskActions = {
    addTask: (task) => ({ type: TASK_ACTIONS.ADD_TASK, payload: task }),
    toggleTask: (id) => ({ type: TASK_ACTIONS.TOGGLE_TASK, payload: { id } }),
    // ... more actions
  };