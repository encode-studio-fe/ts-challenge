import{_ as a,c as n,m as s,a as h,t as k,U as l,o as p}from"./chunks/framework.6TUX4MDB.js";const A=JSON.parse('{"title":"Camelize","description":"","frontmatter":{"title":"Camelize"},"headers":[],"relativePath":"hard/Camelize.md","filePath":"hard/Camelize.md"}'),t={name:"hard/Camelize.md"},e={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),E=l(`<h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>实现 Camelize 类型: 将对象属性名从 蛇形命名(下划线命名) 转换为 小驼峰命名</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Camelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  some_prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">another_prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">snake_case</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// expected to be</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   someProp: string,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   prop: { anotherProp: string },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   array: [{ snakeCase: string }]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// }</span></span></code></pre></div><h2 id="分析" tabindex="-1">分析 <a class="header-anchor" href="#分析" aria-label="Permalink to &quot;分析&quot;">​</a></h2><p>这种题目之前也遇到不少，比如 <a href="/ts-challenge/hard/CamelCase.html">CamelCase</a>。</p><p>只是这一题是上一题的升级版，需要对对象的属性值进行操作，而不是直接对字符操作。</p><p>借助 as 即可修改属性，套用 <a href="/ts-challenge/hard/CamelCase.html">CamelCase</a> 的解法即可。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Camelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CamelCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 递归处理对象属性</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Camelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>但是上述解法在面对元组元素的时候，就会出现问题：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cases</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Equal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      Camelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        some_prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">another_prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 不能正确处理元组类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">snake_case</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">another_element</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">yet_another_prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">yet_another_element</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }&gt;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        someProp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">anotherProp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">snakeCase</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">anotherElement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">yetAnotherProp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">yetAnotherElement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &gt;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p>所以还需要对元组进行遍历，每一个元素都进行一次递归处理即可。</p><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CamelCaseF</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  S</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 辅助字符，存储 _ 之前遇到的字符</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  W</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> S</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\${</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ?</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 如果是 _</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    F</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;_&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 处理 _ 之前的的字符 W, 并递归剩余字符，重置 W</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      \`\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Capitalize</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Lowercase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CamelCaseF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    :</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 否则，递归剩余字符，将 F 存储 W 中</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      \`\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CamelCaseF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  :</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 遍历结束，取出最后一次的字符进行处理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Capitalize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Lowercase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 单独处理掉第一个字符的小写</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CamelCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">S</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Uncapitalize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CamelCaseF</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ObjCamelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CamelCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Camelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TupleCamelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 遍历元组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> R</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 每一个元素进行递归处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Camelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Camelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">R</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Camelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 判断是不是元组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ?</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 元组则进行遍历，并递归处理每一个元素</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      TupleCamelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    :</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 否则执行对象属性的处理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      ObjCamelize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre></div><p>这里其实还缺失了对函数的判断，<code>Function extends {}</code> 是 true，如果是函数，则需要直接返回，而不是继续递归，不过用例中并没有，就不做过多讨论了。</p><h2 id="知识点" tabindex="-1">知识点 <a class="header-anchor" href="#知识点" aria-label="Permalink to &quot;知识点&quot;">​</a></h2><ol><li>均是以前的知识拼凑的，看起来确实复杂一点</li></ol>`,16);function d(i,g,F,y,C,c){return p(),n("div",null,[s("h1",e,[h(k(i.$frontmatter.title)+" ",1),r]),E])}const o=a(t,[["render",d]]);export{A as __pageData,o as default};
