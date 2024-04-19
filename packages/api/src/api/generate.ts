import { loadBlock } from "../utils";
import { getConfig } from "@readue/config"
import type { ReadueBlockFunction } from '@readue/config'

/**
 * 判断是否是私有包
 */
const isPrivatePkg = (pkgJson: Record<string, unknown>) => {
	return pkgJson.private;
}

/**
 * 生成基本信息
 */
export const generateBaseInfo = (pkgJson: Record<string, any>) => {
	console.log("[info] 生成基本信息 - 开始");
	let readmeLines = [
		// 标题
		`# ${pkgJson.name}`,
		"",
		// 描述
		`${pkgJson.description}`,
		"",
	];
	console.log(`[info] 生成基本信息 - 结束
	`);

	return readmeLines;
};

/**
 * 生成单包仓库的 README 内容
 * @param pkgJson 仓库的 package.json 内容
 */
export const generate4SinglePkg = (pkgJson: Record<string, unknown>) => {
	let readmeLines = generateBaseInfo(pkgJson);

	if (isPrivatePkg(pkgJson)) {
		return readmeLines
	}

	// 生成版本信息
	readmeLines = [
		...readmeLines,
		`![version](https://img.shields.io/npm/v/${pkgJson.name}) ![downloads-month](https://img.shields.io/npm/dm/${pkgJson.name})`
	]

	return readmeLines;
};

/**
 * 生成 Monorepo 的 README 内容
 * @param pkgJson 仓库的 package.json 内容
 */
export const generate4Monorepo = (pkgJson: Record<string, any>, cwd: string) => {
	let readmeLines: string[] = []
	const config = getConfig(cwd)

	// 根据 列表生成 README.md 中的信息
	const blockFuncs = loadBlock(process.cwd())
	blockFuncs?.map((funcItem: ReadueBlockFunction)=>{
		const { name, content } = funcItem(config, pkgJson)
		console.log(`[info] 执行块插件 ${name} - 开始`);
		readmeLines = [
			...readmeLines,
			...content,
			''
		]
		console.log(`[info] 执行块插件 ${name} - 结束`);
		console.log('')
	})

	return readmeLines;
};
