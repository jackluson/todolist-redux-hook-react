import { css } from "emotion";
import * as React from "react";

export default function Footer(){
  return (
    <div className={styles.root}>
        <h3>感谢 GitHub Pages 全力驱动</h3>
        <a href="https://github.com/jackluson/todolist--redux-hook-react">GitHub Address<i className="iconfont">&#xea0a;</i></a>
    </div>
  )
}
const styles = {
  root: css`
    position:fixed;
    bottom: 40px;
    left:0;
    width: 100%;
    text-align: center;
    h3,a{
      font-size:16px;
      color: #a2a2a2;
      margin-bottom:8px;
      text-decoration:none;
      i{
        margin-left:10px;
        font-size:22px;
      }
    }
  `
}