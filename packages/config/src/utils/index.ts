import * as path from 'path'
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
