# @readue/block-base_info

![downloads-month](https://img.shields.io/npm/dm/@readue/block-base_info)

基础信息块，用于最简短地描述项目。

## 安装

```bash
pnpm add @readue/block-base_info
```

## 使用

该插件开箱即用，无任何配置。

```js
// .readue/config.js
module.exports = {
	blocks: {
		type: 'custom',  // 只有 type 为 custom 时，list 中的块插件才会生效
		list: [
			"@readue/block-base_info",
		]
	}
}
```
