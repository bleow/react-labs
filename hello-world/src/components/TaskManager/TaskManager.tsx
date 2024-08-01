import React, {useReducer, useState} from 'react';

enum ActionTypes {
  ADD_TASK = 'ADD_TASK',
  TOGGLE_TASK = 'TOGGLE_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  UPDATE_INPUT = 'UPDATE_INPUT'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK: {
      if (state.currentTask.trim() === '') {
        return state;
      }
      return {
        ...state,
        taskList: [...state.taskList, { taskName: state.currentTask, isDone: false }],
        currentTask: ''
      }
    }
    case ActionTypes.TOGGLE_TASK: {
      return {
        ...state,
        taskList: state.taskList.map((task, i) =>
          i === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      }
    }
    case ActionTypes.REMOVE_TASK: {
      return {
        ...state,
        taskList: state.taskList.filter((_, i) => i !== action.payload)
      }
    }
    case ActionTypes.UPDATE_INPUT: {
      return {
        ...state,
        currentTask: action.payload
      }
    }
  }
}

function TaskManager() {
  interface Task {
    taskName: string;
    isDone: boolean;
  }

  interface State {
    taskList: Task[];
    currentTask: string;
  }

  const initialState = {
    taskList: [] as Task[],
    currentTask: '',
  };

  const [state, dispatch] = useReducer<State>(reducer, initialState);

  const addTask = () => {
    dispatch({ type: ActionTypes.ADD_TASK });
  };

  const toggleTask = (index) => {
    dispatch({ type: ActionTypes.TOGGLE_TASK, payload: index });
  };

  const removeTask = (index, e) => {
    e.stopPropagation();
    dispatch({ type: ActionTypes.REMOVE_TASK, payload: index });
  };

  const updateInput = (e) => {
    dispatch({ type: ActionTypes.UPDATE_INPUT, payload: e.target.value });
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={state.currentTask}
        onChange={updateInput}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {state.taskList.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
            onClick={() => toggleTask(index)}
          >
            {task.taskName}
            <button onClick={(e) => removeTask(index, e)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
