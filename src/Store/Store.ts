import { Action, createStore } from "redux";
import reducer from "./reducer";

export interface doneState{
  content:string;
  date: string;
}

// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
export interface IState {
  lastUpdated: number;
  todos: string[];
  done: doneState[];
  undo: string[];
}
// 类型别名用来给一个类型起个新名字。
export type Action =
  | {
    type: "add todo";
    todo: string;
  }
  | {
    type: "done todo";
    index: number;
  }
  | {
    type: "cancel todo";
    index: number;
  }
  | {
    type: "withdraw todo";
    index: number;
  }
  | {
    type: "delete todo";
    index: number;
  }
  | {
    type: "restore todo";
    index: number;
  };

export function makeStore() {
  return createStore(reducer, {
    lastUpdated: 0,
    todos: [
    ],
    done: [
    ],
    undo:[
    ]
  });
}
