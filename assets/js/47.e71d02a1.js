(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{324:function(a,s,n){"use strict";n.r(s);var t=n(10),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"备忘单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备忘单"}},[a._v("#")]),a._v(" 备忘单")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#\t打包跳过编译失败\nmvn clean package -DskipTests --fail-never\n\n# 编译时测试失败不阻断\nmvn clean package -Dmaven.test.failure.ignore=true \n\n# 打包是不编译测试代码,也不执行\nmvn clean package -Dmaven.test.skip=true  \n\n# 编译测试类,但不运行\nmvn clean package  -DskipTests \n\n# 只执行当前目录的，不对子目录进行\nmvn clean package --non-resolvable\n\n# 指定环境\nmvn clean package -P test\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),s("h4",{attrs:{id:"使用maven自动将源码打包并发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用maven自动将源码打包并发布"}},[a._v("#")]),a._v(" 使用maven自动将源码打包并发布")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\x3c!-- Source attach plugin --\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-source-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>attach-sources</id>\n            <goals>\n                <goal>jar</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("注意：在多项目构建中，将source-plugin置于顶层或parent的pom中并不会发挥作用，必须置于具体项目的pom中。")]),a._v(" "),s("h4",{attrs:{id:"版本号范围写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本号范围写法"}},[a._v("#")]),a._v(" 版本号范围写法")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("范围")]),a._v(" "),s("th",[a._v("意义")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("1.0")]),a._v(" "),s("td",[a._v("x >= 1.0 * 1.0 的默认 Maven 含义是所有 （，），但建议使用 1.0。显然，这不能在这里强制实施版本，因此它已被重新定义为最小版本。")])]),a._v(" "),s("tr",[s("td",[a._v("(,1.0]")]),a._v(" "),s("td",[a._v("x <= 1.0")])]),a._v(" "),s("tr",[s("td",[a._v("(,1.0)")]),a._v(" "),s("td",[a._v("x < 1.0")])]),a._v(" "),s("tr",[s("td",[a._v("[1.0]")]),a._v(" "),s("td",[a._v("x = 1.0")])]),a._v(" "),s("tr",[s("td",[a._v("[1.0,)")]),a._v(" "),s("td",[a._v("x >= 1.0")])]),a._v(" "),s("tr",[s("td",[a._v("(1.0,)")]),a._v(" "),s("td",[a._v("x > 1.0")])]),a._v(" "),s("tr",[s("td",[a._v("(1.0,2.0)")]),a._v(" "),s("td",[a._v("1.0 < x < 2.0")])]),a._v(" "),s("tr",[s("td",[a._v("[1.0,2.0]")]),a._v(" "),s("td",[a._v("1.0 <= x <= 2.0")])]),a._v(" "),s("tr",[s("td",[a._v("(,1.0],[1.2,)")]),a._v(" "),s("td",[a._v("x <= 1.0 或 x >= 1.2。多个集是逗号分隔的")])]),a._v(" "),s("tr",[s("td",[a._v("(,1.1),(1.1,)")]),a._v(" "),s("td",[a._v("x ！ = 1.1")])])])]),a._v(" "),s("h4",{attrs:{id:"子项目中排除掉定义在parent中的插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子项目中排除掉定义在parent中的插件"}},[a._v("#")]),a._v(" 子项目中排除掉定义在Parent中的插件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<plugin>\n\t<groupId>org.apache.maven.plugins</groupId>\n\t<artifactId>maven-xxx-plugin</artifactId>\n\t<executions>\n\t\t\x3c!--加一个execution , phase设置成空--\x3e\n\t\t<execution>\n\t\t\t<phase/>\n\t\t</execution>\n\t\t\x3c!--加一个有自己id的execution，id随便，其余可以不写--\x3e\n\t\t<execution>\n\t\t\t<id>myid</id>\n\t\t</execution>\n\t</executions>\n</plugin>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("h4",{attrs:{id:"跳过checkstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跳过checkstyle"}},[a._v("#")]),a._v(" 跳过checkstyle")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" <properties>\n        <checkstyle.skip>true</checkstyle.skip>\n </properties>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h4",{attrs:{id:"使用maven运行main-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用maven运行main-方法"}},[a._v("#")]),a._v(" 使用Maven运行main 方法")]),a._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/mojohaus/exec-maven-plugin",target:"_blank",rel:"noopener noreferrer"}},[a._v("mojohaus/exec-maven-plugin: Exec Maven Plugin (github.com)"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.mojohaus.org/exec-maven-plugin/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Exec Maven Plugin – Introduction (mojohaus.org)"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);