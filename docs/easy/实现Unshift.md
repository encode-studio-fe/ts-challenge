---
title: 实现Unshift
---

# {{ $frontmatter.title }}

## 题目描述

实现类型版本的 `Array.unshift`。

例如：

```typescript
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
```

## 分析

同 [实现 push](/easy/实现Push.md) 一样，扩展操作符，调整位置即可

## 题解

```ts
type Unshift<T extends any[], U> = [U, ...T];
```

## 知识点

1. 元组使用扩展操作符