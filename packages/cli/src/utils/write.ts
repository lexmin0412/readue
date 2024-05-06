import * as path from "path";
import * as fs from "fs";
import { DEFAULT_INSERT_PLACEHOLDER, getDefaultConfig, readUserConfig, ReadueConfig, WRITE_MODE } from '@readue/config'

export const writeReadme = (newLines: string[]) => {
	/**
	 * 最后的写入函数
	 */
	const writeFile = (
		lines: string[],
		filePath: string = path.resolve(process.cwd(), "README.md")
	) => {
		fs.writeFileSync(filePath, lines.join("\n"));
		console.log("[Success] README.md 生成完毕 ✅");
	};

	let config: ReadueConfig = getDefaultConfig()
	const userConfigRes = readUserConfig();
	if (userConfigRes?.config) {
		// 存在则读取内容与默认配置合并
		config = {
			...config,
			...userConfigRes.config,
		};
		// 把自定义配置中的相对路径转换成绝对路径
		if (userConfigRes.config.templateFile) {
			config = {
				...config,
				templateFile: path.resolve(
					userConfigRes.filepath,
					'..',
					userConfigRes.config.templateFile
				),
			};
		}
		if (config.outputFile) {
			config = {
				...config,
				outputFile: path.resolve(userConfigRes.filepath, '..', userConfigRes.config.outputFile),
			};
		}
	}

	const templateFilePath = path.resolve(config.templateFile as string)
	if (config.mode === WRITE_MODE.COVER || !fs.existsSync(templateFilePath)) {
		// 如果是覆盖模式或者模板文件不存在，则直接写入内容
		writeFile(newLines);
		return;
	}


	// 否则处理内容插入
	const existedContent = fs.readFileSync(config.templateFile as string, "utf-8");
	const lines = existedContent.split("\n");
	// 在已存在内容中找到占位符，替换为生成的内容
	const placeholderIndex = lines.findIndex((line) =>
		line.includes(config.insertPlaceholder || DEFAULT_INSERT_PLACEHOLDER)
	);
	if (placeholderIndex > -1) {
		// 如果存在则在对应位置插入
		lines.splice(placeholderIndex, 1, newLines.join("\n"));
	} else {
		// 否则插入到最前
		lines.unshift(newLines.join("\n"));
	}

	writeFile(lines);
};
