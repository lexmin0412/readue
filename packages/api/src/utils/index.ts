import * as path from 'path'
import * as fs from 'fs'
import { ReadueBlockFunction, getConfig } from '@readue/config'

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

/**
 * 内容生成器
 */
export class Generator {

	constructor(public cwd: string = process.cwd()) {}

	/**
	 * 块插件列表
	 */
	blocks: ReadueBlockFunction[] = []

	/**
	 * 加载块插件
	 */
	loadBlocks() {
		const config = getConfig(this.cwd)
		config.blocks?.list.forEach(element => {
			this.blocks.push(require(element).default as ReadueBlockFunction)
		});
		return this
	}

	/**
	 * 生成内容
	 */
	gen() {
		const config = getConfig(this.cwd)
		const content = fs.readFileSync(path.resolve(this.cwd, 'package.json')).toString()
		const pkgJson = JSON.parse(content)

		const contentLines: string[] = []
		this.blocks.forEach(block=>{
			const { name, content } = block(config, pkgJson)
			console.log(`[info] 执行块插件 ${name} - 开始`);
			contentLines.push(...content, '')
			console.log(`[info] 执行块插件 ${name} - 结束`);
			console.log('')
		})
		return contentLines
	}
}
