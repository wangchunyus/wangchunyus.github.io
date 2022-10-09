(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{287:function(s,a,n){"use strict";n.r(a);var t=n(10),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"利用ascii码与位运算异或进行大小写转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用ascii码与位运算异或进行大小写转换"}},[s._v("#")]),s._v(" 利用ASCII码与位运算异或进行大小写转换")]),s._v(" "),a("blockquote",[a("p",[s._v("大小写字母在ASCII码中差32(1<<5)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("c^=1<<5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"计算数字中1的数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算数字中1的数量"}},[s._v("#")]),s._v(" 计算数字中1的数量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int countOne(int n){\n  int count = 0;\n  while (n != 0){\n    count++;\n    n = (n-1) & n;// 去掉最右边一个1\n  }\n  return count;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h4",{attrs:{id:"不用临时变量交换值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不用临时变量交换值"}},[s._v("#")]),s._v(" 不用临时变量交换值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("numbers[0] ^= numbers[1];\nnumbers[1] ^= numbers[0];\nnumbers[0] ^= numbers[1];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"最后一个1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后一个1"}},[s._v("#")]),s._v(" 最后一个1")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("num&-num\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"去掉最右边一个1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去掉最右边一个1"}},[s._v("#")]),s._v(" 去掉最右边一个1")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("n&(n-1)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"绝对值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对值"}},[s._v("#")]),s._v(" 绝对值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("(n ^ (n >> 31)) - (n >> 31)\nn>0 则 n >> 31 = 0 ，即为 n^0-0\nn<0 则 n >> 31 = -1 ,即为 n^-1 + 1 同 ~n+1 ，即补码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"符号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#符号"}},[s._v("#")]),s._v(" 符号")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("(n >> 31) | (~((~n + 1) >> 31) + 1)\n\n(~n + 1) >> 31  \t\t\t\t\t正数为 -1 ，负数为 0。\n~((~n + 1) >> 31) \t\t\t\t取反后正数为 0 ，负数为 -1\n(~((~n + 1) >> 31) + 1)\t\t加一后正数为 1 ，负数为 0\n(n >> 31) |\t\t\t\t\t\t\t\t正数为 0，负数为 -1 和上一步进行或运算。则正数为 1，负数为 -1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"取最大值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取最大值"}},[s._v("#")]),s._v(" 取最大值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int max(int a, int b){\n    return (b & ((a - b) >> 31)) | (a & (~(a - b) >> 31));\n}  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);