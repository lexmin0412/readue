import * as fs from 'fs'
import * as path from 'path'
import { SUPPORTED_FILE_NAMES } from '../constants'
import { ReadueConfig } from "../types"

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
 * 获取配置
 */
export const getConfig = (cwd: string = process.cwd()): ReadueConfig => {
	const checkFiles = SUPPORTED_FILE_NAMES.map((item) => {
		return path.resolve(process.cwd(), './.readue', item)
	})

	const configFilePath = checkFiles.find((item) => {
		return fs.existsSync(item)
	})
	if (!configFilePath) {
		return getDefaultConfig()
	}
	return require(configFilePath)
}
