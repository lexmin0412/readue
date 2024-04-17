import * as fs from 'fs'
import * as path from 'path'
import { execSync } from "child_process";
import { NextResponse } from "next/server";
import { generate4Monorepo } from '@readue/api'
import { generate4SinglePkg, isMonorepo } from '@/../api/lib';

export async function POST(request: Request) {
	const body = await request.json();

	fs.rmSync('/tmp/readue', {
		force: true,
		recursive: true
	})
	fs.mkdirSync('/tmp/readue');
	execSync(
		`git clone https://github.com/${body.userName}/${body.repoName}.git`,
		{
			cwd: "/tmp/readue",
		}
	);

	const repoTempPath = path.join("/tmp/readue", body.repoName)
	// 读取 pkgJson
	const pkgJson = JSON.parse(
		fs.readFileSync(path.join(repoTempPath, "package.json"), 'utf8')
	);
	const result = isMonorepo(repoTempPath) ? generate4Monorepo(pkgJson, repoTempPath) : generate4SinglePkg(pkgJson);
	return NextResponse.json(result.join('\n'));
}
