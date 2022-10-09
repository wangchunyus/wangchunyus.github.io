(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{370:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"skywalking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skywalking"}},[t._v("#")]),t._v(" skywalking")]),t._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("blockquote",[a("p",[t._v("SkyWalking 是观察性分析平台和应用性能管理系统。")]),t._v(" "),a("p",[t._v("提供分布式追踪、服务网格遥测分析、度量聚合和可视化一体化解决方案.")]),t._v(" "),a("p",[t._v("支持Java, .Net Core, PHP, NodeJS, Golang, LUA语言探针")]),t._v(" "),a("p",[t._v("支持Envoy + Istio构建的Service Mesh")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/apache/skywalking",target:"_blank",rel:"noopener noreferrer"}},[t._v("apache/skywalking: APM, Application Performance Monitoring System (github.com)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://skywalking.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache SkyWalking"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),a("ul",[a("li",[t._v("多种监控手段，语言探针和service mesh")]),t._v(" "),a("li",[t._v("多语言自动探针，Java, .Net Core, PHP, NodeJS, Golang, LUA")]),t._v(" "),a("li",[t._v("轻量高效，不需要大数据")]),t._v(" "),a("li",[t._v("模块化，UI、存储、集群管理多种机制可选")]),t._v(" "),a("li",[t._v("支持告警")]),t._v(" "),a("li",[t._v("优秀的可视化方案")])]),t._v(" "),a("h2",{attrs:{id:"文件下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件下载"}},[t._v("#")]),t._v(" 文件下载")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Downloads | Apache SkyWalking"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"文件夹介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件夹介绍"}},[t._v("#")]),t._v(" 文件夹介绍")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── README.txt\n├── agent\t\t\t\t\t\t\t\t\t\t\t\t\tjava客户端收集数据使用\n│   ├── activations\t\t\t\t\t\t\t\t激活的插件\t\t\n│   ├── bootstrap-plugins\t\t\t\t\t也是插件，如需使用copy到plugins中\n│   ├── config\t\t\t\t\t\t\t\t\t\t各种配置文件\n│   ├── logs\t\t\t\t\t\t\t\t\t\t\t执行日志\n│   ├── optional-plugins\t\t\t\t\t可选插件，如需使用copy到plugins中\n│   ├── optional-reporter-plugins\t可选插件，如需使用copy到plugins中\n│   ├── plugins\t\t\t\t\t\t\t\t\t\t实际上使用的插件\n│   └── skywalking-agent.jar\t\t\t执行文件 -javaagent:/skywalking/agent/skywalking-agent.jar\n├── bin\t\t\t\t\t\t\t\t\t\t\t\t\t\t服务端执行脚本\n│   ├── oapService.bat\t\t\t\t\t\t\n│   ├── oapService.sh\n│   ├── oapServiceInit.bat\t\t\t\t初始化数据库脚本\n│   ├── oapServiceInit.sh\n│   ├── oapServiceNoInit.bat\n│   ├── oapServiceNoInit.sh\n│   ├── startup.bat\t\t\t\t\t\t\t\t启动脚本\n│   ├── startup.sh\n│   ├── webappService.bat\t\t\t\t\tui启动脚本\n│   └── webappService.sh\n├── config\t\t\t\t\t\t\t\t\t\t\t\t\t\t各种配置文件\n│   ├── alarm-settings.yml\t\t\t\t\t\t报警配置文件\n│   ├── application.yml\t\t\t\t\t\t\t\t主配置文件，基本上都是改这个\n│   ├── component-libraries.yml\t\t\t\t自定义组件配置文件\n│   ├── endpoint-name-grouping.yml\t\t\n│   ├── envoy-metrics-rules\n│   ├── fetcher-prom-rules\n│   ├── gateways.yml\n│   ├── lal\n│   ├── log-mal-rules\n│   ├── log4j2.xml\t\t\t\t\t\t\t\t\t\t日志配置文件\n│   ├── metadata-service-mapping.yaml\n│   ├── meter-analyzer-config\n│   ├── oal\t\t\t\t\t\t\t\t\t\t\t\t\t\toal配置文件\n│   ├── otel-oc-rules\n│   ├── service-apdex-threshold.yml\n│   ├── ui-initialized-templates\n│   └── zabbix-rules\n├── config-examples\n│   ├── alarm-settings.yml\n│   ├── lal.yaml\n│   └── log-mal.yaml\n├── oap-libs\t\t\t\t\t\t\t\t\t\t\t\t\t依赖库，如需连接mysql则添加驱动\n├── tools\n│   └── profile-exporter\n└── webapp\t\t\t\t\t\t\t\t\t\t\t\t\t\tui文件\n    ├── skywalking-webapp.jar\t\t\t\t\t\n    └── webapp.yml\t\t\t\t\t\t\t\t\t\tui配置文件\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);