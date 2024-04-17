import * as path from 'path'
import * as fs from 'fs'
import { generate4Monorepo, generate4SinglePkg } from './utils'

const content = fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString()

const pkgJson = JSON.parse(content)

// 简单判断，当存在 pnpm-workspace.yaml 文件时，则认为是 monorepo
const isMonorepo = fs.existsSync(path.resolve(process.cwd(), 'pnpm-workspace.yaml'))

const genContent = () => {
	if (isMonorepo) {
		return generate4Monorepo(pkgJson)
	} else {
		return generate4SinglePkg(pkgJson)
	}
}

const readmeLines = genContent()

// 写到 当前目录的 README.md 中
fs.writeFileSync(path.resolve(process.cwd(), 'README.md'), readmeLines.join('\n'))

console.log('[Success] README.md 生成完毕 ✅')
