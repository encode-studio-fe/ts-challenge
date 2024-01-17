---
title: isAny
---

# {{ $frontmatter.title }}

## 题目描述

Sometimes it's useful to detect if you have a value with `any` type. This is especially helpful while working with third-party Typescript modules, which can export `any` values in the module API. It's also good to know about `any` when you're suppressing implicitAny checks.

So, let's write a utility type `IsAny<T>`, which takes input type `T`. If `T` is `any`, return `true`, otherwise, return `false`.

## 分析

这个题判断是不是 any：

```ts
type isAny<T> = Equals<any, T>;
```

当然也有其他的方法，就是借助 any 的特性: `any & 任何值 = any`。

## 题解

```ts
type IsAny<T> =
  // 核心在于 T & 1，如果 T 是 1，那么 T & 1 = 1
  // 0 extends 1 -> false
  // 如果 T 不是 1 和 any，那么 T & 1 之后，只会 = 1 或者 never
  // 0 extends 1 | never -> false
  // 只有 any 满足条件
  0 extends T & 1 ? true : false;
```

当然，上述判断中的 0， 1 可以改成其他任意字面量类型。

## 知识点

1. `any & 任意类型 = any`