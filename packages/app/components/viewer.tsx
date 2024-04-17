import { execSync } from 'child_process'
import React from "react";

export interface ViewerRef {
	run: (userName: string, repoName: string) => void;
}

function Viewer() {

	// 使用 octokit clone github 仓库
	const cloneGithubRepo: ViewerRef['run'] = (userName, repoName) => {
		// clone 仓库到临时目录
		execSync(
			`git clone https://github.com/${userName}/${repoName}.git`,
			{
				cwd: "/tmp/readue",
			}
		);
	};

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Viewer</h1>
    </div>
  );
}

export default Viewer;
