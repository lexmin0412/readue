import * as path from 'path'
import { ReadueConfig } from "../types"
import { cosmiconfigSync } from 'cosmiconfig'

/**
 * 获取默认配置
 * @param cwd 工作目录 默认为 process.cwd()
 */
export const getDefaultConfig = (cwd: string = process.cwd()): ReadueConfig => {
	return {
		mode: "cover",
		templateFile: path.resolve(cwd, "./readue/template.md"),
		outputFile: path.resolve(cwd, "./README.md"),
	}
}

/**
 * 获取用户配置
 * @param cwd 工作目录 默认为 process.cwd()
 */
export const getUserConfig = (cwd: string = process.cwd()) => {
	const configContent = cosmiconfigSync('readue').search(cwd);
	return configContent?.config
}

/**
 * 获取配置
 */
export const getConfig = (cwd: string = process.cwd()): ReadueConfig => {
	try {
		return getUserConfig(cwd) || getDefaultConfig();
  } catch (error) {
    console.error('读取配置失败，将使用默认配置:', error);
    return getDefaultConfig();
  }
}
