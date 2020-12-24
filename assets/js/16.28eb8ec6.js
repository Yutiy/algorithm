(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{516:function(_,v,i){"use strict";i.r(v);var t=i(7),l=Object(t.a)({},(function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("p",[_._v("动态规划（Dynamic Programming），因此常用 DP 指代动态规划。其概念可以理解如下:")]),_._v(" "),i("ul",[i("li",[_._v("将一个大的问题拆分成一个个子问题，将其称之为子结构")]),_._v(" "),i("li",[_._v("每个最优解，也就是"),i("strong",[_._v("最优值")]),_._v("均由 [这些小规模子问题] 推导而来")]),_._v(" "),i("li",[_._v("最重要的是利用 "),i("code",[_._v("历史记录")]),_._v("，来避免重复计算")])]),_._v(" "),i("h2",{attrs:{id:"动态规划解题三大步骤"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#动态规划解题三大步骤"}},[_._v("#")]),_._v(" 动态规划解题三大步骤")]),_._v(" "),i("p",[_._v("动态规划比较难掌握，建议可以先看看经典的动态规划 👉 "),i("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/93857890",target:"_blank",rel:"noopener noreferrer"}},[_._v("背包九讲"),i("OutboundLink")],1),_._v("。解题思路，三大步骤 👇：")]),_._v(" "),i("p",[i("strong",[_._v("状态定义")])]),_._v(" "),i("ul",[i("li",[_._v("需要借助数组来保存之前计算的结果，所以一般采用的就是数组来维护我们的结果，一般 dp 数组。")]),_._v(" "),i("li",[_._v("dp 数组的含义一定要明确，也就是说，dp[i] 表达是啥意思，举个例子，dp[i]表达到达第 i 个阶梯时的方案数")])]),_._v(" "),i("p",[i("strong",[_._v("列出状态转移方程")])]),_._v(" "),i("ul",[i("li",[_._v("通俗易懂的话，找出数组间关系式，这个时解决动态规范问题中，最难也是最重要的一步")]),_._v(" "),i("li",[_._v("通常情况而言，dp[i]个状态的转移方程，跟 dp[i-1] 与 dp[i-2] 之间存在某种联系")])]),_._v(" "),i("p",[_._v("举个例子，在 "),i("RouterLink",{attrs:{to:"/docs/leetcode/动态规划/70.爬楼梯.html"}},[_._v("爬梯子")]),_._v(" 的题目中，状态转移方程 👇")],1),_._v(" "),i("blockquote",[i("p",[_._v("dp[i] = dp[i-1] + dp[i-2]")])]),_._v(" "),i("ul",[i("li",[_._v("首先 dp[i] 表示的就到第 i 个阶梯的方案数")]),_._v(" "),i("li",[_._v("那么爬到第 i 阶梯，有两种情况 👇\n"),i("ul",[i("li",[_._v("从第 i-1 阶梯再爬 1 阶就到第 i 阶")]),_._v(" "),i("li",[_._v("从第 i-2 阶梯再爬 2 阶就到第 i 阶")])])]),_._v(" "),i("li",[_._v("那么它的状态方程转移就是上面的式子")])]),_._v(" "),i("p",[i("strong",[_._v("初始化状态")])]),_._v(" "),i("ul",[i("li",[_._v("dp 数组的第 n 项结果，是由状态转移方程求解而言的，所以需要的是第 n-1 项，n-2 项，或者 n-3 项的值")]),_._v(" "),i("li",[_._v("这个时候，就需要初始话 dp 数组的值，一般而言，比如 dp[1],dp[2],dp[1][1],dp[1][2]")])])])}),[],!1,null,null,null);v.default=l.exports}}]);