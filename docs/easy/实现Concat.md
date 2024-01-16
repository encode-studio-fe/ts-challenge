---
title: 实现Concat
---

# {{ $frontmatter.title }}

## 题目描述

在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

例如：

```ts
type Result = Concat<[1], [2]>; // expected to be [1, 2]
```

## 分析

相关的官方的 Spread 实现。

## 题解

```ts
type Concat<T extends any[], U extends any[]> = [...T, ...U];
```

只需要借助 扩展操作符即可实现。

## 知识点

1. 扩展操作符