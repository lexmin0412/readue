import { ReadueBlockFunction } from '@readue/config'
const tree = require('tree-node-cli')

const generator: ReadueBlockFunction = (readueConfig, pkgJson) => {

	const content: string[] = [
		'## 项目结构',
		''
	]

	const result = tree(process.cwd(), {
		maxDepth: 2,
		exclude: [/node_modules/, /\.git/, /.DS_Store/]
	})

	content.push(
		'```bash',
		...result.split('\n'),
		'```'
	)

	return {
		name: 'Tree',
		content
	}
}

export default generator
