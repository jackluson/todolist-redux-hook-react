import { Action, createStore } from "redux";
import reducer from "./reducer";

export interface IState {
  lastUpdated: number;
  todos: string[];
}
// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以

export type Action =
  | {
    type: "add todo";
    todo: string;
  }
  | {
    type: "delete todo";
    index: number;
  };

export function makeStore() {
  return createStore(reducer, {
    lastUpdated: 0,
    todos: [
      "Make the fire!",
      "Fix the breakfast!",
      "Wash the dishes!",
      "Do the mopping!"
    ]
  });
}
