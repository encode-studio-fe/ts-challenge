---
title: get
---

# {{ $frontmatter.title }}

## 题目描述

The [`get` function in lodash](https://lodash.com/docs/4.17.15#get) is a quite convenient helper for accessing nested values in JavaScript. However, when we come to TypeScript, using functions like this will make you lose the type information. With TS 4.1's upcoming [Template Literal Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types) feature, properly typing `get` becomes possible. Can you implement it?

For example,

```ts
type Data = {
  foo: {
    bar: {
      value: 'foobar';
      count: 6;
    };
    included: true;
  };
  hello: 'world';
};

type A = Get<Data, 'hello'>; // 'world'
type B = Get<Data, 'foo.bar.count'>; // 6
type C = Get<Data, 'foo.bar'>; // { value: 'foobar', count: 6 }
```

Accessing arrays is not required in this challenge.

## 分析

这个题的点在于需要支持 'a.b.c' 的操作，需要进行递归访问属性，属性不存在则返回 never 即可。

只需要判断 K 是不是 属性，如果是，则返回该属性值，否则根据 `.` 进行分割递归即可。

## 题解

```ts
type Get<T, K> =
  // 是属性
  K extends keyof T
    ? // 直接返回
      T[K]
    : // 分割字符
    K extends `${infer F}.${infer R}`
    ? // 判断是否是 属性
      F extends keyof T
      ? // 是，则递归处理剩余的参数
        Get<T[F], R>
      : // 否则 返回 never
        never
    : // 属性为空，必然是匹配到空字符串的场景，此时返回 never
      never;
```

## 知识点

1. 字符匹配套路