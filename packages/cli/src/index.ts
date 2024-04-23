import * as path from 'path'
import * as fs from 'fs'
import figlet from 'figlet'
import pc from 'picocolors'
import { program } from 'commander'
import { gen } from './commands/gen'
import { create } from './commands/create'

const content = fs.readFileSync(path.resolve(__dirname, '../package.json')).toString()

const pkgJson = JSON.parse(content)

console.log(`
[info] @readue/cli 启动
`)

const artText = figlet.textSync('R e a d u e', {
	font: 'Standard',
	horizontalLayout: 'default',
	verticalLayout: 'default',
	width: 80,
	whitespaceBreak: true
})

console.log(pc.green(artText))

console.log(`> readue ${process.argv[2]}
`)

program
	.version(pkgJson.version)
	.command('gen')
	.description('生成 README.md 文件')
	.action(() => {
		try {
			gen()
		} catch (error) {
			console.error(error)
			process.exit(1)
		}
	})

program
	.command('create')
	.description('创建 Readue 插件')
	.action(() => {
		try {
			create()
		} catch (error) {
			console.error(error)
			process.exit(1)
		}
	})

program.parse()
