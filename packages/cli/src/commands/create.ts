import { init } from '@lexmin0412/tpc'
import * as path from 'path'
import { execSync } from 'child_process'

/**
 * 创建一个插件
 */
export const create = () => {
	console.log(process.argv)
	if (!process.argv[3]) {
		console.error('请输入插件名称')
		process.exit(1)
	}

	// 创建目录
	console.log('创建目录')
	execSync(`mkdir ${process.argv[3]}`, {
		cwd: process.cwd(),
	})
	// npm 初始化
	console.log('npm 初始化')
	execSync('npm init -y', {
		cwd: path.resolve(process.cwd(), process.argv[3]),
	})

	console.log('即将执行 TPC 初始化')

	const content =
`import type { ReadueBlockFunction } from '@readue/config'

const generator: ReadueBlockFunction = (readueConfig, pkgJson) => {

	const content: string[] = []

	return {
		name: '',
		content
	}
}

export default generator
`

	return init({
		cwd: path.resolve(process.cwd(), process.argv[3]),
		pkgJsonConfig: {
			name: `@readue/block-${process.argv[3]}`,
			dependencies: {
				'@readue/config': 'latest',
			},
		},
		fileList: [
			{
				path: path.resolve(process.cwd(), process.argv[3], 'src/index.ts'),
				content
			}
		]
	})
}
