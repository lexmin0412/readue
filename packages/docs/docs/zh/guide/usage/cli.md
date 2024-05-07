# 命令行工具

## 安装

```bash
npm install -g @readue/cli
```

## 使用

在项目根目录下执行以下命令，即可生成 README 文件。

```bash
readue gen
```

## 配置

在 readue 命令执行时，会读取项目目录下的 `.readue/config.js` 文件。

示例：

```js
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
		type: 'custom',
		list: [
			"@readue/block-base_info",
			"@readue/block-packages",
			"@readue/block-star_history",
		]
	}
}

```

下面对配置项进行说明。

### mode

写入模式，可选值：cover、insert。

- cover：覆盖全内容，即删除原 README 文件的内容，并写入新内容。
- insert：在占位符处插入内容。

### insertPlaceholder

插入占位符，即插入自定义块时，在 README 文件中的占位符。

### templateFile

模板文件路径 (相对于配置文件的路径) ，是生成 README 的基准文件，可以在其中书写无需动态生成的内容，并定义占位符用于插入 Readue 的输出结果。

### outputFile

输出文件的路径 (相对于配置文件的路径)。

### blocks

自定义块配置。

示例：

```js
module.exports = {
	blocks: {
		type: 'custom',
		list: [
			"@readue/block-base_info",
			"@readue/block-packages",
			"@readue/block-star_history",
		]
	}
}
```

#### blocks.type

自定义块配置类型，可选值：

- `custom`：使用用户自定义配置，即 `blocks.list` 指定的自定义块。
- `default`：使用默认配置。

#### blocks.list

自定义块列表，`blocks.type` 为 custom 时，需要指定自定义块。
