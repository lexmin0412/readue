# @readue/block-star_history

![downloads-month](https://img.shields.io/npm/dm/@readue/block-star_history)

星标历史块，用于展示 Github 仓库的 Star 增长曲线。

## 安装

```bash
pnpm add @readue/block-star_history
```

## 使用

该插件开箱即用，无任何配置。

```js
// readue.config.ts
module.exports = {
	blocks: {
		type: 'custom',  // 只有 type 为 custom 时，list 中的块插件才会生效
		list: [
			"@readue/block-star_history",
		]
	}
}
```
