(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{436:function(t,e,s){"use strict";s.r(e);var a=s(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frequently-asked-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[t._v("#")]),t._v(" Frequently Asked Questions")]),t._v(" "),s("h2",{attrs:{id:"what-is-subquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-subquery"}},[t._v("#")]),t._v(" What is SubQuery?")]),t._v(" "),s("p",[t._v("SubQuery is an open source project that allows developers to index, transform, and query Substrate chain data to power their applications.")]),t._v(" "),s("p",[t._v("SubQuery also provides free, production grade hosting of projects for developers removing the responsiblity of manging infrastructure, and letting developers do what they do best - build.")]),t._v(" "),s("h2",{attrs:{id:"what-is-the-best-way-to-get-started-with-subquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-best-way-to-get-started-with-subquery"}},[t._v("#")]),t._v(" What is the best way to get started with SubQuery?")]),t._v(" "),s("p",[t._v("The best way to get started with SubQuery is to try out our "),s("RouterLink",{attrs:{to:"/quickstart/helloworld-localhost.html"}},[t._v("Hello World tutorial")]),t._v(". This is a simple 5 min walk through of downloading the starter template, building the project, and then using Docker to run a node on your localhost and running a simple query.")],1),t._v(" "),s("h2",{attrs:{id:"how-can-i-contribute-or-give-feedback-to-subquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-contribute-or-give-feedback-to-subquery"}},[t._v("#")]),t._v(" How can I contribute or give feedback to SubQuery?")]),t._v(" "),s("p",[t._v("We love contributions and feedback from the community. To contribute code, fork the repository of interest and make your changes. Then submit a PR or Pull Request. Oh, don't forget to test as well! Also check out our contributions guide lines (TBA).")]),t._v(" "),s("p",[t._v("To give feedback, contact us at hello@subquery.network or jump onto our "),s("a",{attrs:{href:"https://discord.com/invite/78zg8aBSMG",target:"_blank",rel:"noopener noreferrer"}},[t._v("discord channel"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"how-much-does-it-cost-to-host-my-project-in-subquery-projects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-much-does-it-cost-to-host-my-project-in-subquery-projects"}},[t._v("#")]),t._v(" How much does it cost to host my project in SubQuery Projects?")]),t._v(" "),s("p",[t._v("Hosting your project in SubQuery Projects is absolutely free - it's is our way of giving back to the community. To learn how to host your project with us, please check out the "),s("RouterLink",{attrs:{to:"/quickstart/helloworld-hosted.html"}},[t._v("Hello World (SubQuery hosted)")]),t._v(" tutorial.")],1),t._v(" "),s("h2",{attrs:{id:"what-are-deployment-slots"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-deployment-slots"}},[t._v("#")]),t._v(" What are deployment slots?")]),t._v(" "),s("p",[t._v("Deployment slots are a feature in "),s("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("SubQuery Projects"),s("OutboundLink")],1),t._v(" that is the equivalent of a development environment. For example, in any software organisation there is normally a development environment and a production environment as a minimum (ignoring localhost that is). Typically additional environments such as staging and pre-prod or even QA are included depending on the needs of the organisation and their development set up.")]),t._v(" "),s("p",[t._v('SubQuery currently has two slots available. A staging slot and a production slot. This allows developers to deploy their SubQuery to the staging environment and all going well, "promote to production" at the click of a button.')]),t._v(" "),s("h2",{attrs:{id:"what-is-the-advantage-of-a-staging-slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-advantage-of-a-staging-slot"}},[t._v("#")]),t._v(" What is the advantage of a staging slot?")]),t._v(" "),s("p",[t._v("The main benefit of using a staging slot is that it allows you to prepare a new release of your SubQuery project without exposing it publicly. You can wait for the staging slot to reindex all data without affecting your production applications.")]),t._v(" "),s("p",[t._v("The staging slot is not shown to the public in the "),s("a",{attrs:{href:"https://explorer.subquery.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Explorer"),s("OutboundLink")],1),t._v(" and has a unique URL that is visible only to you. And of course, the separate environment allows you to test your new code without affecting production.")]),t._v(" "),s("h2",{attrs:{id:"what-are-extrinsics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-extrinsics"}},[t._v("#")]),t._v(" What are extrinsics?")]),t._v(" "),s("p",[t._v("If you are already familiar with blockchain concepts, you can think of extrinsics as comparable to transactions. More formally though, an extrinsic is a piece of information that comes from outside the chain and is included in a block. There are three categories of extrinsics. They are inherents, signed transactions, and unsigned transactions.")]),t._v(" "),s("p",[t._v("Inherent extrinsics are pieces of information that are not signed and only inserted into a block by the block author.")]),t._v(" "),s("p",[t._v("Signed transaction extrinsics are transactions that contain a signature of the account that issued the transaction. They stands to pay a fee to have the transaction included on chain.")]),t._v(" "),s("p",[t._v("Unsigned transactions extrinsics are transactions that do not contain a signature of the account that issued the transaction. Unsigned transactions extrinsics should be used with care because there is nobody paying a fee, becaused it is signed. Because of this, the transaction queue lacks economic logic to prevent spam.")]),t._v(" "),s("p",[t._v("For more information, click "),s("a",{attrs:{href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/extrinsics",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"how-to-check-your-node-health"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-check-your-node-health"}},[t._v("#")]),t._v(" How to check your node health?")]),t._v(" "),s("p",[t._v("There are 2 URL resources available to check your SubQuery node health.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("/meta\n/health\n")])])]),s("p",[t._v("Append this to the base URL of your SubQuery node. Eg "),s("code",[t._v("http://localhost:3000/meta")]),t._v(" will return:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"targetHeight"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6692385")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bestHeight"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6692389")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"indexerNodeVersion"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.19.1"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uptime"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.566230083")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"polkadotSdkVersion"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5.4.1"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apiConnected"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true,\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"injectedApiConnected"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true,\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"usingDictionary"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" false,\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chain"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Polkadot"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"specName"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"polkadot"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genesisHash"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blockTime"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("http://localhost:3000/health")]),t._v(" will return HTTP 200 if successful.")]),t._v(" "),s("p",[t._v("A 500 error will be returned if the indexer is not healthy. This can often be seen when the node is booting up.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Indexer is not healthy"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("If an incorrect URL is used, a 404 not found error will be returned.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statusCode"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(",\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cannot GET /healthy"')]),t._v(",\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not Found"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"what-is-the-endpoint-for-the-kusama-network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-endpoint-for-the-kusama-network"}},[t._v("#")]),t._v(" What is the endpoint for the Kusama network?")]),t._v(" "),s("p",[t._v("The network.endpoint for the Kusama network is "),s("code",[t._v("wss://kusama.api.onfinality.io/public-ws")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"what-is-the-endpoint-for-the-polkadot-mainnet-network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-endpoint-for-the-polkadot-mainnet-network"}},[t._v("#")]),t._v(" What is the endpoint for the Polkadot mainnet network?")]),t._v(" "),s("p",[t._v("The network.endpoint for the Polkadot network is "),s("code",[t._v("wss://polkadot.api.onfinality.io/public-ws")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);