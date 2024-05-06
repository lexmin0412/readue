# @readue/block-packages

![downloads-month](https://img.shields.io/npm/dm/@readue/block-packages)

Monorepo 子包列表信息块，用于展示各个子包的 npm 包名、版本号、下载量等。

## 安装

```bash
pnpm add @readue/block-packages
```

## 使用

该插件开箱即用，无任何配置。

```js
// readue.config.ts
module.exports = {
	blocks: {
		type: 'custom',  // 只有 type 为 custom 时，list 中的块插件才会生效
		list: [
			"@readue/block-packages",
		]
	}
}
```
