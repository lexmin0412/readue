# @readue/block-tree

![downloads-month](https://img.shields.io/npm/dm/@readue/block-tree)

Readue 文件树块插件，用于展示项目的整体目录结构。

## 安装

```bash
pnpm add @readue/block-tree
```

## 使用

该插件开箱即用，无任何配置。

```js
// .readue/config.js
module.exports = {
	blocks: {
		type: 'custom',  // 只有 type 为 custom 时，list 中的块插件才会生效
		list: [
			"@readue/block-tree",
		]
	}
}
```
