import * as path from 'path'
import * as fs from 'fs'

const content = fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString()

const pkgJson = JSON.parse(content)

// 扫描目录获取 packages 列表
const packages = fs.readdirSync(path.resolve(process.cwd(), './packages'))

console.log('[info] 生成基本信息 - 开始')
let readmeLines = [
	// 标题
  `# ${pkgJson.name}`,
	'',
	// 描述
	`${pkgJson.description}`,
	''
]
console.log(`[info] 生成基本信息 - 结束
`)

// 根据 列表生成 README.md 中的信息

console.log('[info] 生成子包信息 - 开始')
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
console.log(`[info] 生成子包信息 - 结束
`)

// 追加 Star History

console.log('[info] 生成 Star History - 开始')
// 获取 git 用户名 + 仓库名
const reg = /git\+https:\/\/github\.com\/(.*?)\.git/g
// 替换为 https://github.com/lexmin0412/readue
let gitUrl = pkgJson.repository?.url || ''
if (reg.test(gitUrl)) {
	gitUrl = gitUrl.replace(reg, '$1')
}

if (gitUrl) {
	readmeLines = [
		...readmeLines,
		'',
		'## Star History',
		'',
		`[![Star History Chart](https://api.star-history.com/svg?repos=${gitUrl}&type=Timeline)](https://star-history.com/#${gitUrl}&Timeline)`
	]
} else {
	console.warn('[Warning] 当前 package.json 中没有配置完整的 repository 字段，将跳过 Star History 生成')
}
console.log(`[info] 生成 Star History - 结束
`)


// 写到 当前目录的 README.md 中
fs.writeFileSync(path.resolve(process.cwd(), 'README.md'), readmeLines.join('\n'))

console.log('[Success] README.md 生成完毕 ✅')
