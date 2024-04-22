import type { PackageJson } from 'pkg-types'
import { ReadueConfig } from '@readue/config'
import * as fs from 'fs'
import * as path from 'path'

export default function (_readueConfig: ReadueConfig, pkgJson: PackageJson, options: {
	cwd: string
} = {
	cwd: process.cwd()
}) {

	const {cwd} = options

	let content: string[] = []

	const packages = fs.readdirSync(path.resolve(cwd, "./packages"));

	if (packages?.length) {
		content = [
			...content,
			"## Packages",
			"",
			"|子包|信息|说明|",
			"|---|---|---|",
		];
	}

	packages.forEach((item) => {
		// 读取子目录
		const subDir = path.resolve(cwd, `./packages/${item}`);
		// 读取 目录下的 package.json
		const subPkgJson = JSON.parse(
			fs.readFileSync(path.resolve(subDir, "package.json")).toString()
		);
		if (subPkgJson.private) {
			content.push(`|${subPkgJson.name}|私有包, 未发布|${subPkgJson.description}|`)
		} else {
			content.push(
				`|[${subPkgJson.name}](https://www.npmjs.com/package/${subPkgJson.name})|![version](https://img.shields.io/npm/v/${subPkgJson.name})  ![downloads-month](https://img.shields.io/npm/dm/${subPkgJson.name})|${subPkgJson.description}|`
			);
		}
	});

	return {
		name: 'Packages',
		content: [
			...content,
		]
	}
}
