import * as path from 'path'
import * as fs from 'fs'

// 简单判断，当存在 pnpm-workspace.yaml 文件时，则认为是 monorepo
export const isMonorepo = (cwd: string) => {
	return fs.existsSync(path.resolve(cwd, 'pnpm-workspace.yaml'))
}
