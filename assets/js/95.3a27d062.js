(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{373:function(s,e,a){"use strict";a.r(e);var n=a(10),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"常用配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用配置"}},[s._v("#")]),s._v(" 常用配置")]),s._v(" "),e("h3",{attrs:{id:"application-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[s._v("#")]),s._v(" application.yml")]),s._v(" "),e("blockquote",[e("p",[s._v("服务端核心配置类")]),s._v(" "),e("p",[s._v("这个设置文件背后的核心概念是，Skywalking的Collector基于纯模块化设计。 最终用户可以根据自己的需求切换或组装收集器功能。")])]),s._v(" "),e("h4",{attrs:{id:"核心配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心配置"}},[s._v("#")]),s._v(" 核心配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('core:\n  selector: ${SW_CORE:default}\n  default:\n    # rest请求配置\n    restHost: ${SW_CORE_REST_HOST:0.0.0.0}\n    restPort: ${SW_CORE_REST_PORT:12800}\n    restContextPath: ${SW_CORE_REST_CONTEXT_PATH:/}\n    restMinThreads: ${SW_CORE_REST_JETTY_MIN_THREADS:1}\n    restMaxThreads: ${SW_CORE_REST_JETTY_MAX_THREADS:200}\n    restIdleTimeOut: ${SW_CORE_REST_JETTY_IDLE_TIMEOUT:30000}\n    restAcceptorPriorityDelta: ${SW_CORE_REST_JETTY_DELTA:0}\n    restAcceptQueueSize: ${SW_CORE_REST_JETTY_QUEUE_SIZE:0}\n    # gRPC配置\n    gRPCHost: ${SW_CORE_GRPC_HOST:0.0.0.0}\n    gRPCPort: ${SW_CORE_GRPC_PORT:11800}\n    gRPCSslEnabled: ${SW_CORE_GRPC_SSL_ENABLED:false}\n    gRPCSslKeyPath: ${SW_CORE_GRPC_SSL_KEY_PATH:""}\n    gRPCSslCertChainPath: ${SW_CORE_GRPC_SSL_CERT_CHAIN_PATH:""}\n    gRPCSslTrustedCAPath: ${SW_CORE_GRPC_SSL_TRUSTED_CA_PATH:""}\n    # 追踪记录保存时间\n    recordDataTTL: ${SW_CORE_RECORD_DATA_TTL:3} # Unit is day\n    # 指标保存时间\n    metricsDataTTL: ${SW_CORE_METRICS_DATA_TTL:7} # Unit is day\n\t\t# top的计算周期（最慢sql，最慢断点等）\n    topNReportPeriod: ${SW_CORE_TOPN_REPORT_PERIOD:10} # top_n record worker report cycle, unit is minute\n    # Extra model column are the column defined by in the codes, These columns of model are not required logically in aggregation or further query,\n    # and it will cause more load for memory, network of OAP and storage.\n    # But, being activated, user could see the name in the storage entities, which make users easier to use 3rd party tool, such as Kibana->ES, to query the data by themselves.\n    # 是否开启第三方访问\n    activeExtraModelColumns: ${SW_CORE_ACTIVE_EXTRA_MODEL_COLUMNS:false}\n    \n    # 限制名字的长度\n    # The max length of service + instance names should be less than 200\n    serviceNameMaxLength: ${SW_SERVICE_NAME_MAX_LENGTH:70}\n    instanceNameMaxLength: ${SW_INSTANCE_NAME_MAX_LENGTH:70}\n    # The max length of service + endpoint names should be less than 240\n    endpointNameMaxLength: ${SW_ENDPOINT_NAME_MAX_LENGTH:150}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br")])]),e("h4",{attrs:{id:"存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[s._v("#")]),s._v(" 存储")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("storage:\n# 选择存储方式，默认是H2（内存数据库），支持mysql，elasticsearch，influxdb\n  selector: ${SW_STORAGE:mysql}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"客户端分析配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端分析配置"}},[s._v("#")]),s._v(" 客户端分析配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("agent-analyzer:\n  selector: ${SW_AGENT_ANALYZER:default}\n  default:\n    # 采样率，默认10000及100% （配置的数值/10000）  \n    sampleRate: ${SW_TRACE_SAMPLE_RATE:10000} # The sample rate precision is 1/10000. 10000 means 100% sample in      default.\n    \n    # 慢sql分析 \n    slowDBAccessThreshold: ${SW_SLOW_DB_THRESHOLD:default:200,mongodb:100} # The slow database access thresholds. Unit ms.\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h4",{attrs:{id:"动态配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态配置"}},[s._v("#")]),s._v(" 动态配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("configuration:\n  # 选择配置服务，支持grpc，Apollo，zookeeper，etcd，consul，k8s-configmap，nacos\n  selector: ${SW_CONFIGURATION:none}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"alarm-settings-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alarm-settings-yml"}},[s._v("#")]),s._v(" alarm-settings.yml")]),s._v(" "),e("blockquote",[e("p",[s._v("告警的核心由一组规则驱动")]),s._v(" "),e("p",[s._v("告警规则的定义分为三部分。")]),s._v(" "),e("ol",[e("li",[s._v("告警规则。它们定义了应该如何触发度量警报，应该考虑什么条件。")]),s._v(" "),e("li",[s._v("[网络钩子](#Webhook}。当警告触发时，哪些服务终端需要被告知。")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/SkyAPM/document-cn-translation-of-skywalking/blob/master/docs/zh/8.0.0/setup/backend/backend-alarm.md#gRPCHook",target:"_blank",rel:"noopener noreferrer"}},[s._v("gRPC钩子"),e("OutboundLink")],1),s._v(". 远程gRPC方法的主机和端口，告警触发后调用.")])])]),s._v(" "),e("h5",{attrs:{id:"告警规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#告警规则"}},[s._v("#")]),s._v(" 告警规则")]),s._v(" "),e("p",[s._v("告警规则配置项的说明：")]),s._v(" "),e("ul",[e("li",[s._v("Rule name：规则名称，也是在告警信息中显示的唯一名称。必须以"),e("code",[s._v("_rule")]),s._v("结尾，前缀可自定义")]),s._v(" "),e("li",[s._v("Metrics name：度量名称，取值为oal脚本中的度量名，目前只支持"),e("code",[s._v("long")]),s._v("、"),e("code",[s._v("double")]),s._v("和"),e("code",[s._v("int")]),s._v("类型。详见"),e("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/docs/en/guides/backend-oal-scripts.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("Official OAL script"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("Include names：该规则作用于哪些实体名称，比如服务名，终端名（可选，默认为全部）")]),s._v(" "),e("li",[s._v("Exclude names：该规则作不用于哪些实体名称，比如服务名，终端名（可选，默认为空）")]),s._v(" "),e("li",[s._v("Threshold：阈值")]),s._v(" "),e("li",[s._v("OP： 操作符，目前支持 "),e("code",[s._v(">")]),s._v("、"),e("code",[s._v("<")]),s._v("、"),e("code",[s._v("=")])]),s._v(" "),e("li",[s._v("Period：多久告警规则需要被核实一下。这是一个时间窗口，与后端部署环境时间相匹配")]),s._v(" "),e("li",[s._v("Count：在一个Period窗口中，如果values超过Threshold值（按op），达到Count值，需要发送警报")]),s._v(" "),e("li",[s._v("Silence period：在时间N中触发报警后，在TN -> TN + period这个阶段不告警。 默认情况下，它和Period一样，这意味着相同的告警（在同一个Metrics name拥有相同的Id）在同一个Period内只会触发一次")]),s._v(" "),e("li",[s._v("message：告警消息")])]),s._v(" "),e("h5",{attrs:{id:"网络钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络钩子"}},[s._v("#")]),s._v(" 网络钩子")]),s._v(" "),e("p",[s._v("发送字段说明：")]),s._v(" "),e("ul",[e("li",[s._v("scopeId、scope：所有可用的 Scope 详见 "),e("code",[s._v("org.apache.skywalking.oap.server.core.source.DefaultScopeDefine")])]),s._v(" "),e("li",[s._v("name：目标 Scope 的实体名称")]),s._v(" "),e("li",[s._v("id0：Scope 实体的 ID")]),s._v(" "),e("li",[s._v("id1：保留字段，目前暂未使用")]),s._v(" "),e("li",[s._v("ruleName：告警规则名称")]),s._v(" "),e("li",[s._v("alarmMessage：告警消息内容")]),s._v(" "),e("li",[s._v("startTime：告警时间，格式为时间戳")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 网络钩子，告警时触发\nwebhooks:\n#  - http://127.0.0.1/notify/\n#  - http://127.0.0.1/go-wechat/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"component-libraries-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-libraries-yml"}},[s._v("#")]),s._v(" component-libraries.yml")]),s._v(" "),e("blockquote",[e("p",[s._v("定义被监控应用程序中使用的所有组件库的名称和id。")]),s._v(" "),e("p",[s._v("二次开发，或者开发插件时使用")]),s._v(" "),e("p",[s._v("id必须唯一")])]),s._v(" "),e("h3",{attrs:{id:"endpoint-name-grouping-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-name-grouping-yml"}},[s._v("#")]),s._v(" endpoint-name-grouping.yml")]),s._v(" "),e("blockquote",[e("p",[s._v("这个分组文件提供了基于正则表达式的定义功能，可以通过更好的和将这些端点合并到一个组中\n更有意义的聚合度量。")])]),s._v(" "),e("h3",{attrs:{id:"service-apdex-threshold-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service-apdex-threshold-yml"}},[s._v("#")]),s._v(" service-apdex-threshold.yml")]),s._v(" "),e("blockquote",[e("p",[s._v("应用性能指数(APDEX)是基于设置阈值的响应时间度量。它表示令人满意与不满意的响应时间比率。响应时间是指从一个请求到返回的完整请求。")])])])}),[],!1,null,null,null);e.default=t.exports}}]);