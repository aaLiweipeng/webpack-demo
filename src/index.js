/*
 * @Descripttion: 
 * @Author: lwp
 * @Date: 2023-04-17 02:52:22
 * @LastEditTime: 2023-04-28 01:43:39
 */
// 引入 css
import css1 from './style/style1.css'
import less2 from "./style/style2.less";
console.log("css1", css1);
console.log("less2", less2);

import { sum } from "./math";
import _ from "lodash";

import { sum } from './math'

const sumRes = sum(10, 20)
console.log('sumRes', sumRes)

// // 增加，开启热更新之后的代码逻辑
// if (module.hot) {
//     module.hot.accept(['./math'], () => {
//         const sumRes = sum(10, 30)
//         console.log('sumRes in hot', sumRes)
//     })
// }

console.log('window.ENV', ENV)

// 引入图片
function insertImgElem(imgFile) {
    const img = new Image() // 新建一个img标签实例
    img.src = imgFile // 给img实例的src属性赋值
    document.body.appendChild(img) // 把img标签加到html正文
}

import imgFile1 from './img/1.png'
insertImgElem(imgFile1)
import imgFile2 from './img/2.jpeg'
insertImgElem(imgFile2)