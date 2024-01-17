---
title: 实现Pop
---

# {{ $frontmatter.title }}

## 题目描述

实现一个通用`Pop<T>`，它接受一个数组`T`，并返回一个由数组`T`的前 length-1 项以相同的顺序组成的数组。

例如

```ts
type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
```

**额外**：同样，您也可以实现`Shift`，`Push`和`Unshift`吗？

## 分析

这一题乍一看和 [实现 push](/easy/实现Push.md)、[实现 Unshift](/easy/实现Unshift.md) 一样，都是对元组元素进行增删。

只不过这一题是要删除，相比之下，增加更为容易。

想要删除，其实换句话将就是用剩余的元素组成新的元组，也就是推断了。套用老的推断匹配的套路就成。

从这一点看，反而和 [第一个元素](/easy/第一个元素.md)、[最后一个元素](/medium/最后一个元素.md) 更加类似。所谓的 pop，不过就是推断除了最后一个元素的剩余元素。

## 题解

```ts
type Pop<T extends any[]> = T extends [...infer F, infer R] ? F : [];

type Shift<T extends any[]> = T extends [infer F, ...infer R] ? R : [];
```

这里需要注意的就是推断的边界，因为要推断的类型有两个，F 和 R，所以当元组里面元素只有 0 个时，会走 false 的逻辑，所以返回 `[]`，而有两个元素时，并不会走 false 逻辑，F 或 R 会被推断为 `[]`。

## 知识点

1. 匹配推断，`A extends infer xxx ? x : xx`。