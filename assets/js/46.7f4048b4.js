(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{323:function(o,t,e){"use strict";e.r(t);var i=e(10),a=Object(i.a)({},(function(){var o=this,t=o._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h2",{attrs:{id:"windows环境下kafak"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows环境下kafak"}},[o._v("#")]),o._v(" windows环境下kafak")]),o._v(" "),t("ul",[t("li",[o._v("启动zookeeper\n"),t("ul",[t("li",[o._v("bin\\windows\\zookeeper-server-start.bat config\\zookeeper.properties")])])]),o._v(" "),t("li",[o._v("启动kfaka服务\n"),t("ul",[t("li",[o._v("bin\\windows\\kafka-server-start.bat config\\server.properties")])])]),o._v(" "),t("li",[o._v("创建一个主题\n"),t("ul",[t("li",[o._v("bin\\windows\\kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test")])])]),o._v(" "),t("li",[o._v("查看创建的主题列表\n"),t("ul",[t("li",[o._v("bin\\windows\\kafka-topics.bat --list --zookeeper localhost:2181")])])]),o._v(" "),t("li",[o._v("启动生产者\n"),t("ul",[t("li",[o._v("bin\\windows\\kafka-console-producer.bat --broker-list localhost:9092 --topic test")])])]),o._v(" "),t("li",[o._v("启动消费者\n"),t("ul",[t("li",[o._v("bin\\windows\\kafka-console-consumer.bat --zookeeper localhost:2181 --topic test --from-beginning")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);