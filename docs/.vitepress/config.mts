import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Typescript 实战',
	base: '/ts-challenge',
	themeConfig: {
		logo: '/avatar.png',
		nav: [
			{ text: '实战介绍', link: '/' },
			{
				text: '入门',
				link: '/easy/实现pick',
			},
			{
				text: '中等',
				link: '/medium/获取函数返回类型',
			},
			{
				text: '困难',
				link: '/hard/SimpleVue',
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
				text: '中等',
				items: [
					{ text: '获取函数返回类型', link: '/medium/获取函数返回类型' },
					{ text: '实现Omit', link: '/medium/实现Omit' },
					{ text: '实现DeepReadonly', link: '/medium/实现DeepReadonly' },
					{ text: '元组转联合', link: '/medium/元组转联合' },
					{ text: '可串联构造器', link: '/medium/可串联构造器' },
					{ text: '最后一个元素', link: '/medium/最后一个元素' },
					{ text: '实现Pop', link: '/medium/实现Pop' },
					{ text: '实现Promise.all', link: '/medium/实现Promise.all' },
					{ text: '实现按类型查找', link: '/medium/实现按类型查找' },
					{ text: '实现TrimLeft', link: '/medium/实现TrimLeft' },
					{ text: '实现Trim', link: '/medium/实现Trim' },
					{ text: '实现Capitalize', link: '/medium/实现Capitalize' },
					{ text: '实现Replace', link: '/medium/实现Replace' },
					{ text: '实现ReplaceAll', link: '/medium/实现ReplaceAll' },
					{ text: '追加参数', link: '/medium/追加参数' },
					{ text: '实现全排列', link: '/medium/实现全排列' },
					{ text: '计算字符的长度', link: '/medium/计算字符的长度' },
					{ text: '实现Flatten', link: '/medium/实现Flatten' },
					{ text: 'AppendToObject', link: '/medium/AppendToObject' },
					{ text: '实现Absolute', link: '/medium/实现Absolute' },
					{ text: '字符转联合', link: '/medium/字符转联合' },
					{ text: '实现Merge', link: '/medium/实现Merge' },
					{ text: '实现KebabCase', link: '/medium/实现KebabCase' },
					{ text: '实现Diff', link: '/medium/实现Diff' },
					{ text: 'AnyOf', link: '/medium/AnyOf' },
					{ text: 'isNever', link: '/medium/isNever' },
					{ text: 'isUnion', link: '/medium/isUnion' },
					{ text: '实现ReplaceKeys', link: '/medium/实现ReplaceKeys' },
					{ text: '移除索引签名', link: '/medium/移除索引签名' },
					{ text: '百分比解析器', link: '/medium/百分比解析器' },
				]
			},
			{
				text: '困难',
				items: [
					{ text: 'SimpleVue', link: '/hard/SimpleVue' },
					{ text: '柯里化', link: '/hard/柯里化' },
					{ text: 'UnionToIntersection', link: '/hard/UnionToIntersection' },
					{ text: '获取必填属性', link: '/hard/获取必填属性' },
					{ text: '获取可选属性', link: '/hard/获取可选属性' },
					{ text: '获取必填属性键值', link: '/hard/获取必填属性键值' },
					{ text: '获取可选属性键值', link: '/hard/获取可选属性键值' },
					{ text: '大写首字母', link: '/hard/大写首字母' },
					{ text: 'CamelCase', link: '/hard/CamelCase' },
					{ text: 'cPrintfParser', link: '/hard/cPrintfParser' },
					{ text: 'isAny', link: '/hard/isAny' },
					{ text: 'get', link: '/hard/get' },
					{ text: 'stringToNumber', link: '/hard/stringToNumber' },
					{ text: '元组转EnumObject', link: '/hard/元组转EnumObject' },
					{ text: 'printf', link: '/hard/printf' },
					{ text: 'StringJoin', link: '/hard/StringJoin' },
					{ text: 'DeepPick', link: '/hard/DeepPick' },
					{ text: 'Camelize', link: '/hard/Camelize' },
					{ text: 'DropString', link: '/hard/DropString' },
					{ text: '两数之和', link: '/hard/两数之和' },
				]
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
