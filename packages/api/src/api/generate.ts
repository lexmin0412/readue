import { Generator } from "../utils";

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
export const generate4Monorepo = (_pkgJson: Record<string, any>, cwd: string) => {
	const generator = new Generator(cwd)
	return  generator.loadBlocks().gen()
};
