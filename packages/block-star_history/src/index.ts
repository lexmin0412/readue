import type { PackageJson } from 'pkg-types'
import { ReadueConfig } from '@readue/config'

export default function (_readueConfig: ReadueConfig, pkgJson: PackageJson) {

	let content: string[] = []

	// 获取 git 用户名 + 仓库名
	const reg = /git\+https:\/\/github\.com\/(.*?)\.git/g;
	// 替换为 https://github.com/lexmin0412/readue
	let gitUrl = (pkgJson.repository as {
		url: string,
		type: string
		directory: string
	})?.url || "";
	if (reg.test(gitUrl)) {
		gitUrl = gitUrl.replace(reg, "$1");
	}

	if (gitUrl) {
		content = [
			...content,
			"",
			"## Star History",
			"",
			`[![Star History Chart](https://api.star-history.com/svg?repos=${gitUrl}&type=Timeline)](https://star-history.com/#${gitUrl}&Timeline)`,
		];
	} else {
		console.warn(
			"[Warning] 当前 package.json 中没有配置完整的 repository 字段，将跳过 Star History 生成"
		);
	}

	return {
		name: 'Star History',
		content: [
			...content,
		]
	}
}
