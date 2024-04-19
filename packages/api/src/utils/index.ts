import * as path from 'path'
import * as fs from 'fs'
import { getConfig } from '@readue/config'

// 简单判断，当存在 pnpm-workspace.yaml 文件时，则认为是 monorepo
export const isMonorepo = (cwd: string) => {
	return fs.existsSync(path.resolve(cwd, 'pnpm-workspace.yaml'))
}

export const loadBlock = (cwd: string) => {
	const config = getConfig(cwd)
	return config.blocks?.list.map((item)=>{
		return require(item).default
	})
}
