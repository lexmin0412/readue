import type { PackageJson } from 'pkg-types'
import { ReadueConfig } from '@readue/config'

export default function generate(_readueConfig: ReadueConfig, pkgJson: PackageJson) {

	const content: string[] = [
		'## 环境要求',
	]

	if (pkgJson.engines) {
		for (const key in pkgJson.engines) {
			content.push('', `- ${key} ${pkgJson.engines[key]}`)
		}
	}

	return {
		name: 'EnvRequirement',
		content
	}
}
