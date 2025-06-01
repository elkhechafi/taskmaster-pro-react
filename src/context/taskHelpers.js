// src/context/taskHelpers.js
import { TASK_ACTIONS } from './taskActions';

export const taskActions = {
  addTask: (task) => ({ type: TASK_ACTIONS.ADD_TASK, payload: task }),
  toggleTask: (id) => ({ type: TASK_ACTIONS.TOGGLE_TASK, payload: { id } }),
  updateTask: (id, updates) => ({ type: TASK_ACTIONS.UPDATE_TASK, payload: { id, updates } }),
  deleteTask: (id) => ({ type: TASK_ACTIONS.DELETE_TASK, payload: { id } }),
  setFilter: (filterType, value) => ({ type: TASK_ACTIONS.SET_FILTER, payload: { filterType, value } }),
  setSearch: (search) => ({ type: TASK_ACTIONS.SET_SEARCH, payload: search }),
};