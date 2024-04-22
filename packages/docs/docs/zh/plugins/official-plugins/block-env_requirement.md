# @readue/block-env_requirement

![downloads-month](https://img.shields.io/npm/dm/@readue/block-env_requirement)

Readue 环境要求块插件，用于展示项目的环境要求。

## 安装

```bash
pnpm add @readue/block-env_requirement
```

## 使用

该插件开箱即用，无任何配置。

```js
// .readue/config.js
module.exports = {
	blocks: {
		type: 'custom',  // 只有 type 为 custom 时，list 中的块插件才会生效
		list: [
			"@readue/block-env_requirement",
		]
	}
}
```
