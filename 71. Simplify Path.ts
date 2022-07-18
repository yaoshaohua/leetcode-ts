/*
 * @Description: 

  71. 简化路径

 * @Author: ysh
 * @Date: 2022-07-18 22:28:23
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-18 22:49:27
 */

function simplifyPath(path: string): string {
  const names = path.split("/");
  const stack: string[] = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "" || names[i] === ".") {
      continue;
    } else if (names[i] === "..") {
      if (stack.length) stack.pop();
    } else {
      stack.push(names[i]);
    }
  }
  return `/${stack.join("/")}`;
}
