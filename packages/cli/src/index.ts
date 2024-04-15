import * as path from 'path'
import * as fs from 'fs'
import { getRepoReadme } from './utils'

const content = fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString()

const pkgJson = JSON.parse(content)

const [
	userName,
	repoName
] = pkgJson.repository?.url?.split('github.com/')?.[1]?.split('.git')?.[0]?.split('/') || []

if (!userName || !repoName) {
	throw new Error('请在 package.json 中配置 repository 字段')
}

getRepoReadme(userName, repoName).then(res=>{
	console.log(`README 内容如下:
${res}`)
})
