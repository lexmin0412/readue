import type { PackageJson } from 'pkg-types'
import { ReadueConfig } from '@readue/config'

export default function (_readueConfig: ReadueConfig, pkgJson: PackageJson) {
	return {
		name: 'BaseInfo',
		content: [
			`# ${pkgJson.name}`,
			'',
			pkgJson.description || '暂无描述'
		]
	}
}
