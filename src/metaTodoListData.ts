// todolist各类型基本数据
export interface todoType{
  type: string;
  action: string;
  action1?: string;
  title: string;
  icon: string;
}
export const todoListData: todoType[] = [
  {
    type: "todos",
    title: "待办",
    action: "done",
    action1: "cancel",
    icon: "&#xe6ad;"
  },
  {
    type: "done",
    title: "已办",
    action: "withdraw",
    icon: "&#xe6ae;"
  },
  {
    type: "undo",
    title: "已取消",
    action: "restore",
    action1: "delete",
    icon: "&#xe639;"
  }
];