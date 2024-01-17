---
title: isNever
---

# {{ $frontmatter.title }}

## 题目描述

Implement a type IsNever, which takes input type `T`. If the type of resolves to `never`, return `true`, otherwise `false`.

For example:

```ts
type A = IsNever<never>; // expected to be true
type B = IsNever<undefined>; // expected to be false
type C = IsNever<null>; // expected to be false
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false
```

## 分析

可以做几个例子：

```ts
// true
type Case1 = never extends never ? true : false;

type isNever<T> = T extends never ? true : false;

// false
type Case2 = isNever<never>;

// false
type Case3 = isNever<[]>;

// false
type Case4 = isNever<0>;

// false
type Case5 = isNever<''>;
```

从实际看，Case1 对 never 的判断非常精准，但是当转为泛型后，Case2 对 never 的判断就失效了。这个本质还是因为 ts 的分发特性，原本是对于联合类型会做分发处理，可以参考 [实现 Exclude](/easy/实现Exclude.md)。但是这个特性仅在泛型下生效，所以 Case1 是正确的，而 Case2 触发了分发特性，但是 never 本身又没有什么元素可以分发，所以直接返回了 never。

## 题解

```ts
type IsNever<T> = [T] extends [never] ? true : false;
```

## 知识点

1. 判断 never: `[T] extends [never] ? true : false`