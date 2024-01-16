---
title: 实现Push
---

# {{ $frontmatter.title }}

## 题目描述

在类型系统里实现通用的 `Array.push` 。

例如：

```typescript
type Result = Push<[1, 2], '3'>; // [1, 2, '3']
```

## 分析

需要创建一个新类型，这个类型先把原来的元组复制一份，再向元组中增加一个元素。

而复制，仅仅需要扩展操作符，增加一个元素，写在新元组中即可。

## 题解

```ts
type Push<T extends any[], U> = [...T, U];
```

## 知识点

1. 元组使用扩展操作符