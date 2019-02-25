import { css } from "emotion";
import * as React from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { IState } from "../Store/Store";
import { listProps } from './TodoList';

// 继承接口 合并接口
interface doListProps extends listProps {
  index: number;
}

export default function TodoItem({ index, type, action, action1, icon }: doListProps) {

  const mapState = React.useCallback((state: IState) => state[type][index], [
    index
  ]);
  const doItem = useMappedState(mapState);
  // React.useEffect(function logMsg() {
  //   console.log("todos",todo)
  // },[index]);
  const dispatch = useDispatch();
  const actionTodo = React.useCallback(
    () => dispatch({ type: action + " todo", index }),
    [index]
  );
  const action2Todo = React.useCallback(
    () => dispatch({ type: action1 + " todo", index }),
    [index]
  );
  return (
    <li className={styles.root}>
      <i
        className="iconfont"
        onClick={actionTodo}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <span>{typeof doItem === "string"? doItem : doItem.content}</span>
      {action1 ? (
        <button onClick={action2Todo}>
          {type === "todos" ? "cancel" : "delete"}
        </button>
      ) : (
          <span className={styles.timeSpan}>{doItem.date}</span>
      )}
    </li>
  );
}

const styles = {
  root: css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;
    min-height: 44px;
    position: relative;
    min-height: 44px;
    line-height: 25px;
    padding: 10px 100px 10px 50px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    color: #373e40;
    &:hover {
      background-color: #efefef;
    }
    i {
      position: absolute;
      left: 15px;
      top: 10px;
      font-size: 24px;
      color: #f1c40f;
      font-weight: bolder;
      cursor: pointer;
    }
    button {
      position: absolute;
      right: 10px;
      top: 7px;
      width: 50px;
      height: 30px;
      line-height: 30px;
      padding: 0;
      background: #fff;
      border: 1px solid #c0ccda;
      color: #666;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        border: 1px solid #f39894;
        color: #f39894;
      }
    }
  `,
  timeSpan: css`
    position: absolute;
    right: 10px;
    top: 0;
    line-height: 44px;
    font-size: 12px;
    color: #aaa;
  `
};
