(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{387:function(s,a,n){"use strict";n.r(a);var e=n(10),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"jdk动态配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk动态配置"}},[s._v("#")]),s._v(" jdk动态配置")]),s._v(" "),a("blockquote",[a("p",[s._v("根据需要动态配置jdk")]),s._v(" "),a("p",[s._v("需要先把jdk文件解压到mac默认的文件夹下（/Library/Java/JavaVirtualMachines）")]),s._v(" "),a("p",[s._v("/usr/libexec/java_home -v <版本号> 是打印指定版本号绝对路径")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# jdk设置\n# 注意下面的引号` （不是单引号\'，是Esc键下面的 与~符号同键的那个符号）  \n# 设置 JDK 8  \nexport JAVA_8_HOME=`/usr/libexec/java_home -v 1.8`  \n# 设置 JDK 11 \nexport JAVA_11_HOME=`/usr/libexec/java_home -v 11`\n# 设置 JDK 15 \nexport JAVA_15_HOME=`/usr/libexec/java_home -v 15`\n\n#默认JDK 11  \nexport JAVA_HOME=$JAVA_11_HOME  \n  \n#alias命令动态切换JDK版本  \nalias jdk8="export JAVA_HOME=$JAVA_8_HOME"  \nalias jdk11="export JAVA_HOME=$JAVA_11_HOME"\nalias jdk15="export JAVA_HOME=$JAVA_15_HOME"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);