import * as fs from 'fs'
import * as path from 'path'
import inquirer from 'inquirer'
import { ReadueConfig, WRITE_MODE } from '@readue/config'
import * as prettier from 'prettier'

export const init = async() => {
	const answers: Pick<ReadueConfig, 'mode' | 'outputFile'> = await inquirer.prompt([
		{
			type: 'list',
			name: 'mode',
			message: '内容写入模式, cover-整个文件覆盖, insert-指定位置插入',
			default: 'cover',
			choices: ['cover', 'insert']
		},
		{
			type: 'input',
			name: 'outputFile',
			default: './../README.md',
			message: '输出文件路径'
		}
	])

	const configJson: ReadueConfig = {
		mode: answers.mode,
		outputFile: './../README.md',
		blocks: {
			type: 'custom',
			list: [
				'@readue/block-base_info',
			]
		}
	}

	if (answers.mode === WRITE_MODE.INSERT) {
		const insertConfig = await inquirer.prompt([
			{
				type: 'input',
				name: 'templateFile',
				default: './template.md',
				message: '模板文件路径'
			},
			{
				type: 'input',
				name: 'insertPlaceholder',
				default: '__READUE_PLACEHOLDER__',
				message: '插入位置占位符'
			},
		])
		configJson.insertPlaceholder = insertConfig.insertPlaceholder
		configJson.templateFile = insertConfig.templateFile
	}

	// 覆盖模式

	const configFileContent =
`/**
 * Readue 配置文件
 * @type {import('@readue/config').ReadueConfig}
 */
module.exports = ${JSON.stringify(configJson)}
`

const templateFileContent = `> 本文件由 [readue](https://github.com/lexmin0412/readue) 自动生成。

{{__READUE_PLACEHOLDER__}}
`

const prettierConfig = {
	parser: 'typescript',

	// TODO 下面的配置与主项目保持一致，需要改为引用
	printWidth: 120, // 单行最大长度
	useTabs: true, // 使用tab
	tabWidth: 2, // tab step
	semi: false, // 禁用行尾分号
	singleQuote: true, // 使用单引号
	quoteProps: 'as-needed', // 当从对象中解构属性时按需添加引号
	jsxSingleQuote: false, // jsx使用双引号
	trailingComma: 'all', // 所有参数都允许尾逗号
	bracketSpacing: true, // 括号两端是否需要空格
	bracketSameLine: false, // jsx标签的闭合标签使用单独的一行（避免添加属性造成版本控制系统的多行冲突）
	arrowParens: 'avoid', // 箭头函数参数总是使用括号包裹（避免冲突）
	proseWrap: 'never', // 是否在markdown文件中根据printWidth来处理换行
	htmlWhitespaceSensitivity: 'css', // 去除html中的无用空格
	vueIndentScriptAndStyle: false, // vue模板中的script和style标签内部代码是否需要默认缩进,
	endOfLine: 'lf', // linux风格的行尾结束符
	embeddedLanguageFormatting: 'auto', // 开启内嵌代码（如js中的html, vue中的js等）的自动格式化
	singleAttributePerLine: true, // 在HTML, Vue and JSX中单行只写一个属性
}
const formattdConfigFileContent = await prettier.format(
	configFileContent,
	prettierConfig as prettier.Options,
)

	const pkgJson = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), './package.json'), 'utf-8'))

	const configDir = path.resolve(process.cwd(), './.config')
	if (!fs.existsSync(configDir)) {
		fs.mkdirSync(configDir)
	}
	const configFilePath = path.resolve(configDir, `readuerc.${pkgJson.type === 'module' ? 'cjs': 'js'}`)
	// 这里要特别注意 模板文件路径是基于配置文件的
	fs.writeFileSync(configFilePath, formattdConfigFileContent, 'utf-8')

	// 嵌入模式下，需要生成模板文件
	if (configJson.mode === WRITE_MODE.INSERT && configJson.templateFile) {
		const templateFilePath = path.resolve(configDir, configJson.templateFile as string)
		fs.writeFileSync(templateFilePath, templateFileContent, 'utf-8')
	}
}
