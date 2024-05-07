# 编写一个插件

我们以读取子包列表为例，来演示如何编写一个插件。

## 插件的基础结构

每一个块插件，都是一个单独的 npm 包。插件本身是一个函数，接收两个参数：

```js
// 插件入口文件
export default function (readueConfig, pkgJson) {
	return {
		name: "Packages", // 插件名称
		content: []  // 插件内容 字符串数组，每一个元素对应 Markdown 文档中的一行
	}
}
```


## 初始化插件包

我们按照如下步骤初始化一个插件包，命名为 `@readue/block-test`

```bash
# 初始化 package.json
npm init -y
# 全局安装 tpc（已安装用户请忽略）
npm install @lexmin0412/tpc -g
# 初始化一个 TypeScript 包的项目结构
tpc init
```

## 编写插件

我们初始化一个 npm 包，然后在入口文件写入如下内容：

```ts
import type { PackageJson } from "pkg-types";
import { ReadueConfig } from "@readue/config";
import * as fs from "fs";
import * as path from "path";

// 导出内容生成器函数
export default function (
	_readueConfig: ReadueConfig,
	pkgJson: PackageJson,
	options: {
		cwd: string;
	} = {
		cwd: process.cwd(),
	}
) {
	let content: string[] = [
		"# Packages",
		"", // 标题和内容之间空一行
	];

	const packages = fs.readdirSync(path.resolve(options.cwd, "./packages"));
	if (packages?.length) {
		packages.forEach((item) => {
			// 列出每一个子目录的名称
			content.push(`- ${item}`);
		});
	}

	return {
		name: "Packages", // 插件名称
		content: [
			// 插件内容 字符串数组，每一个元素对应 Markdown 文档中的一行
			...content,
		],
	};
}
```

将上面编写的插件，发布到 npm 仓库中。

## 使用插件

在 .readue/config.js 中通过 `blocks` 配置项注入插件：

```js
// readue.config.ts
module.exports = {
	/**
	 * 自定义块配置
	 */
	blocks: {
		type: "custom",
		list: ["@readue/block-test"],
	},
};
```
