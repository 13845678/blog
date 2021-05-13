(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{496:function(t,a,s){"use strict";s.r(a);var n=s(51),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"php文件保存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php文件保存"}},[t._v("#")]),t._v(" PHP文件保存")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_put_contents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"test.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"This is another something."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILE_APPEND")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("filename")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("要写入数据的文件名")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("要写入的数据。类型可以是 string，array（但不能为多维数组），或者是 stream 资源")])]),t._v(" "),s("tr",[s("td",[t._v("flags")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("可选，规定如何打开/写入文件。可能的值1.FILE_USE_INCLUDE_PATH：检查 filename 副本的内置路径2.   FILE_APPEND：在文件末尾以追加的方式写入数据3.  LOCK_EX：对文件上锁")])]),t._v(" "),s("tr",[s("td",[t._v("context")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("可选，Context是一组选项，可以通过它修改文本属性")])])])]),t._v(" "),s("h2",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("p",[t._v("如果文件不存在，则创建文件，相当于fopen()函数行为。\n如果文件存在，默认将清空文件内的内容，可设置 flags 参数值为 FILE_APPEND 以避免（见下）。\n本函数可安全用于二进制对象。\n"),s("a",{attrs:{href:"https://blog.csdn.net/dongsg11200/article/details/9126757",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"追加文本换行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#追加文本换行"}},[t._v("#")]),t._v(" 追加文本换行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php中在文件追加时候换行\\r\\n\n")])])]),s("h2",{attrs:{id:"php获取数组对象的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php获取数组对象的值"}},[t._v("#")]),t._v(" php获取数组对象的值")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"<br>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"php获取时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php获取时间"}},[t._v("#")]),t._v(" php获取时间")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/gengfu_php/article/details/77816470",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);