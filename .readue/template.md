{{__READUE_PLACEHOLDER__}}

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
