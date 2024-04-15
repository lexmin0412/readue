import fetch from '@toolkit-fe/request'

export const getRepoReadme = (userName: string, repoName: string) => {
	return fetch(
		`https://api.github.com/repos/${userName}/${repoName}/readme`,
		{
			headers: {
				'Content-Type': 'application/json',
			}
		}
	).then((res: any) => {
		if (res.message === 'Not Found') {
			throw new Error(`https://api.github.com/repos/${userName}/${repoName}/readme.md 指向的文件不存在, 请确保仓库中存在该文件`)
		}
		return Buffer.from(res.content, 'base64').toString()
	})
}
