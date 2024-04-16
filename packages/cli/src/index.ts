import * as path from 'path'
import * as fs from 'fs'

const content = fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString()

const pkgJson = JSON.parse(content)

// 扫描目录获取 packages 列表
const packages = fs.readdirSync(path.resolve(process.cwd(), './packages'))

let readmeLines = [
	// 标题
  `# ${pkgJson.name}`,
	'',
	// 描述
	`${pkgJson.description}`,
	''
]

// 根据 列表生成 README.md 中的信息

if (packages?.length) {
	readmeLines = [
		...readmeLines,
		// 标题
		'## Packages',
		'',
		'|子包|信息|说明|',
		'|---|---|---|',
	]
}

packages.forEach(item => {
	// 读取子目录
	const subDir = path.resolve(process.cwd(), `./packages/${item}`)
	// 读取 目录下的 package.json
	const subPkgJson = JSON.parse(fs.readFileSync(path.resolve(subDir, 'package.json')).toString())
	readmeLines.push(`|[${subPkgJson.name}](https://www.npmjs.com/package/${subPkgJson.name})|![version](https://img.shields.io/npm/v/${subPkgJson.name})  ![downloads-month](https://img.shields.io/npm/dm/${subPkgJson.name})|${subPkgJson.description}|`)
})

// 写到 当前目录的 README.md 中
fs.writeFileSync(path.resolve(process.cwd(), 'README.md'), readmeLines.join('\n'))

console.log('README.md 生成完毕 ✅')
