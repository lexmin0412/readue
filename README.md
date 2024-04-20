# readue

README 生成器。

## Packages

|子包|信息|说明|
|---|---|---|
|[@readue/api](https://www.npmjs.com/package/@readue/api)|![version](https://img.shields.io/npm/v/@readue/api)  ![downloads-month](https://img.shields.io/npm/dm/@readue/api)|Readue Node API|
|[@readue/app](https://www.npmjs.com/package/@readue/app)|![version](https://img.shields.io/npm/v/@readue/app)  ![downloads-month](https://img.shields.io/npm/dm/@readue/app)|Readue App, 提供 Readue 的可视化界面|
|[@readue/block-base_info](https://www.npmjs.com/package/@readue/block-base_info)|![version](https://img.shields.io/npm/v/@readue/block-base_info)  ![downloads-month](https://img.shields.io/npm/dm/@readue/block-base_info)|Readue 基础信息块插件|
|[@readue/block-packages](https://www.npmjs.com/package/@readue/block-packages)|![version](https://img.shields.io/npm/v/@readue/block-packages)  ![downloads-month](https://img.shields.io/npm/dm/@readue/block-packages)|Readue Monorepo 子包信息块|
|[@readue/block-star_history](https://www.npmjs.com/package/@readue/block-star_history)|![version](https://img.shields.io/npm/v/@readue/block-star_history)  ![downloads-month](https://img.shields.io/npm/dm/@readue/block-star_history)|Readue Star History 块插件|
|[@readue/cli](https://www.npmjs.com/package/@readue/cli)|![version](https://img.shields.io/npm/v/@readue/cli)  ![downloads-month](https://img.shields.io/npm/dm/@readue/cli)|Readue 命令行接口|
|[@readue/config](https://www.npmjs.com/package/@readue/config)|![version](https://img.shields.io/npm/v/@readue/config)  ![downloads-month](https://img.shields.io/npm/dm/@readue/config)|Readue 的配置包|
|[@readue/docs](https://www.npmjs.com/package/@readue/docs)|![version](https://img.shields.io/npm/v/@readue/docs)  ![downloads-month](https://img.shields.io/npm/dm/@readue/docs)|Readue 文档|


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=lexmin0412/readue&type=Timeline)](https://star-history.com/#lexmin0412/readue&Timeline)


## 配置文件示例

配置文件路径为根目录下的 `.readue/config.js`，内容示例和说明如下：

```js
// .readue/config.js
module.exports = {
	/**
	 * 写入模式 cover-覆盖全内容 insert-在占位符处插入内容
	 */
	mode: 'insert',
	/**
	 * 插入占位符
	 */
	insertPlaceholder: '__READUE_PLACEHOLDER__',
	/**
	 * 模板文件 - 相对路径
	 */
	templateFile: './template.md',
	/**
	 * 输出文件路径 - 相对路径
	 */
	outputFile: './../README.md',
	/**
	 * 自定义块配置
	 */
	blocks: {
		/**
		 * 开启自定义配置
		 */
		type: 'custom',
		/**
		 * 自定义块插件列表
		 */
		list: [
			"@readue/block-base_info",
			"@readue/block-packages",
			"@readue/block-star_history",
		]
	}
}
```

对应的 模板文件 `.readue/template.md` 的内容示例如下：

```markdown
{{__READUE_PLACEHOLDER__}}

下面为自定义的一些内容。
```

按照上面配置输出的 README 文件：

> 本仓库为 readue 的示例仓库，实际输出结果因仓库内容而异，但大体结构保持一致。

```markdown
# readue

README 生成器。

## Packages

|子包|信息|说明|
|---|---|---|
|[@readue/cli](https://www.npmjs.com/package/@readue/cli)|![version](https://img.shields.io/npm/v/@readue/cli)  ![downloads-month](https://img.shields.io/npm/dm/@readue/cli)|命令行接口|

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=lexmin0412/readue&type=Timeline)](https://star-history.com/#lexmin0412/readue&Timeline)

下面为自定义的一些内容。
```
