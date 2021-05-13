(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{498:function(t,a,s){"use strict";s.r(a);var e=s(51),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"进入docker容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入docker容器"}},[t._v("#")]),t._v(" 进入docker容器")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it 775c7c9ee1e1 /bin/bash\n")])])]),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/xhyan/p/6593075.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"复制docker文件到容器外面修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制docker文件到容器外面修改"}},[t._v("#")]),t._v(" 复制docker文件到容器外面修改")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("注：docker中宿主机与容器（container）互相拷贝传递文件的方法\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、从容器拷贝文件到宿主机\n\ndocker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" mycontainer:/opt/testnew/file.txt /opt/test/\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、从宿主机拷贝文件到容器\n\ndocker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /opt/test/file.txt mycontainer:/opt/testnew/\n")])])]),s("h2",{attrs:{id:"列出所有运行中的容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出所有运行中的容器"}},[t._v("#")]),t._v(" 列出所有运行中的容器")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])])]),s("h2",{attrs:{id:"容器重启配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器重启配置"}},[t._v("#")]),t._v(" 容器重启配置")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("部署项目服务器时，为了应对停电等情况影响正常web项目的访问，会把Docker容器设置为开机自动启动。\n       在使用docker run启动容器时，使用--restart参数来设置：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker run -m 512m --memory-swap 1G -it -p 58080:8080 --restart=always ")]),t._v("\n--name bvrfis --volumes-from logdata mytomcat:4.0 /root/run.sh\n       --restart具体参数值详细信息：\n       no -  容器退出时，不重启容器；\n       on-failure - 只有在非0状态退出时才从新启动容器；\n       always - 无论退出状态是如何，都重启容器；\n       还可以在使用on - failure策略时，指定Docker将尝试重新启动容器的最大次数。默认情况下，Docker将尝试永远重新启动容器。\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sudo docker run --restart=on-failure:10 redis")]),t._v("\n如果创建时未指定 --restart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always ,可通过update 命令\ndocker update --restart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always 容器id\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);