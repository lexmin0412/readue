import * as path from 'path'
import * as fs from 'fs'
import { generate4Monorepo, generate4SinglePkg, isMonorepo } from "@readue/api"
import { writeReadme } from "../utils"

/**
 * 生成 RAEDME 文件
 */
export const gen = () => {
	const content = fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString()

	const pkgJson = JSON.parse(content)

	const genContent = () => {
		if (isMonorepo(process.cwd())) {
			return generate4Monorepo(pkgJson, process.cwd())
		} else {
			return generate4SinglePkg(pkgJson)
		}
	}

	const readmeLines = genContent()

	// 写到 当前目录的 README.md 中
	writeReadme(readmeLines)

	console.log('')
}

