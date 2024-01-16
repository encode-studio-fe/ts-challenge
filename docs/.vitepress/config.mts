import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Typescript 实战',
	base: '/ts-challenge',
	themeConfig: {
		logo: '/avatar.png',
		nav: [
			{ text: '项目介绍', link: '/' },
			{
				text: '入门',
				link: '/easy/实现pick',
			},
			{
				text: '通用',
				link: '/common/判断两个类型相等',
			},
			{
				text: 'type-challenges',
				link: 'https://github.com/type-challenges/type-challenges',
			},
		],

		sidebar: [
			{
				text: '入门',
				items: [
					{ text: '实现Pick', link: '/easy/实现pick' },
					{ text: '实现readonly', link: '/easy/实现readonly' },
					{ text: '元组转换为对象', link: '/easy/元组转换为对象' },
					{ text: '第一个元素', link: '/easy/第一个元素' },
					{ text: '获取元组长度', link: '/easy/获取元组长度' },
					{ text: '实现Exclude', link: '/easy/实现Exclude' },
					{ text: '实现Awaited', link: '/easy/实现Awaited' },
					{ text: '实现If', link: '/easy/实现If' },
					{ text: '实现Concat', link: '/easy/实现Concat' },
					{ text: '实现Includes', link: '/easy/实现Includes' },
					{ text: '实现Push', link: '/easy/实现Push' },
					{ text: '实现Unshift', link: '/easy/实现Unshift' },
					{ text: '实现Parameters', link: '/easy/实现Parameters' },
				],
			},
			{
				text: '通用',
				items: [
					{ text: '判断两个类型相等', link: '/common/判断两个类型相等' },
					{ text: '递归深度', link: '/common/递归深度' },
					{ text: '箭头函数重载', link: '/common/箭头函数重载' },
					{ text: '类型推断的边界条件', link: '/common/类型推断的边界条件' },
				],
			},
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/encode-studio-fe/ts-challenge' }],

		footer: {
			copyright:
				'Copyright © 2023-present <a href="https://github.com/encode-studio-fe/ts-challenge">印客学院</a>, All Rights Reserved',
		},
	},
});
