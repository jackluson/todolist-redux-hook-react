import { Action, IState, doneState } from './Store';

export const getDate = () => { //获取当天日期
  const date = new Date();
  const mouth =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return date.getFullYear() + '-' + mouth + '-' + day;
}
export default function reducer(state: IState, action: Action) {
  switch (action.type) {
    case "add todo": {
      return {
        ...state,
        lastUpdated: Date.now(),
        todos: state.todos.concat(action.todo)
      };
    }
    case "done todo": {
      const todos = state.todos.slice();
      let doneItem: doneState = {
        content: todos.splice(action.index, 1)[0],
        date: getDate()
      };
      state.done.push(doneItem);
      return { ...state, lastUpdated: Date.now(), todos, done: state.done };
    }
    case "cancel todo": {
      const todos = state.todos.slice();
      const delItem = todos.splice(action.index, 1);
      state.undo.push(delItem[0]);
      return {
        ...state,
        lastUpdated: Date.now(),
        todos,
        undo: state.undo
      };
    }
    case "withdraw todo": {
      const done = state.done.slice();
      const delItem = done.splice(action.index, 1)[0];
      state.todos.push(delItem.content);
      return {
        ...state,
        lastUpdated: Date.now(),
        done,
        todos: state.todos
      };
    }
    case "delete todo": {
      const undo = state.undo.slice();
      undo.splice(action.index, 1);
      return {
        ...state,
        lastUpdated: Date.now(),
        undo
      };
    }
    case "restore todo": {
      const undo = state.undo.slice();
      const delItem = undo.splice(action.index, 1);
      state.todos.push(delItem[0]);
      return {
        ...state,
        lastUpdated: Date.now(),
        undo,
        todos: state.todos
      };
    }

    default:
      return state;
  }
}
