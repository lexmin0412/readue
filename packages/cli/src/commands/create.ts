/**
 * 创建一个插件
 */
export const create = () => {
	console.log(process.argv)
	if (!process.argv[3]) {
		console.error('请输入插件名称')
		process.exit(1)
	}

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
	// TODO 通过 tpc 插件注入内容

	return content
}
