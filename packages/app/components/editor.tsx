"use client";

import fetch from "@toolkit-fe/request";
import {useEffect, useRef, useState} from "react";

interface EditorProps {
  // onGen: () => void;
}

export default function Editor(props: EditorProps) {

	const userNameRef = useRef<HTMLInputElement>(null);
	const repoNameRef = useRef<HTMLInputElement>(null);
	const contentRef = useRef<HTMLTextAreaElement>(null);
	const [content, setContent] = useState<string>("");

  const getRepoReadme = (userName: string, repoName: string) => {
    return fetch(
      `https://api.github.com/repos/${userName}/${repoName}/readme`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res: any) => {
      if (res.message === "Not Found") {
        throw new Error(
          `https://api.github.com/repos/${userName}/${repoName}/readme.md 指向的文件不存在, 请确保仓库中存在该文件`
        );
      }
      return Buffer.from(res.content, "base64").toString();
    });
  };

  async function handleClick() {
		console.log('fetch begin')
    // const result = await getRepoReadme("lexmin0412", "readue");
		// props.onGen()
		const result = await fetch("/api/repos", {
			method: "post",
			body: JSON.stringify({
				userName: userNameRef.current?.value,
				repoName: repoNameRef.current?.value,
			}),
		}) as string
    console.log("result", result);
		setContent(result);
		if (contentRef.current) {
			console.log("contentRef.current", contentRef.current);
			contentRef.current.value = result;
		}
  }

  return (
		<div className="text-center">
			<div className="flex items-center justify-center">
				<input
					ref={userNameRef}
					className="outline-none px-2 text-black rounded inline-block h-6 leading-6 w-28 text-sm"
					placeholder="请输入用户名"
				/>
				<div className="mx-2">/</div>
				<input
					ref={repoNameRef}
					className="outline-none px-2 text-black rounded inline-block h-6 leading-6 w-28 text-sm"
					placeholder="请输入仓库名"
				/>
			</div>
			<button
				className="mt-5 mx-auto border w-20 rounded h-8 leading-8"
				onClick={handleClick}
			>
				生成
			</button>
			<div className="flex items-start mt-5">
				<span>内容：</span>
				<textarea className="text-black outline-none p-2 rounded inline-block w-[50vw] h-96" ref={contentRef} />
			</div>
		</div>
	);
}
