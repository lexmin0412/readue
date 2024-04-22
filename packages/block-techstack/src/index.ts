import { ReadueBlockFunction } from "@readue/config";

const generate: ReadueBlockFunction = function (readueConfig, pkgJson) {
	const BASE_LIBS = [
		{
			name: "用户界面框架",
			list: ["react", "vue", "svelte", "angular"],
		},
		{
			name: "用户界面UI库",
			list: ["antd", "element-ui", "bootstrap", "tailwindcss"],
		},
		{
			name: "路由",
			list: ["react-router", "vue-router"],
		},
		{
			name: "状态管理",
			list: [
				"redux",
				"react-redux",
				"zustand",
				"recoil",
				"mobx",
				"vuex",
				"pinia",
			],
		},
		{
			name: "构建工具",
			list: ["webpack", "rollup", "vite", "esbuild", "swc", "rsbuild"],
		},
		{
			name: "请求库",
			list: ["axios", "ahooks"],
		},
		{
			name: "测试",
			list: ["jest", "cypress", "playwright", "puppeteer", "vitest"],
		},
		{
			name: "类型系统",
			list: ["typescript", "flow"],
		},
	];

	const content: string[] = [
		'## 技术栈'
	];

	// 读取 pkgJson 的依赖
	const dependencies = pkgJson?.dependencies || {};
	const devDependencies = pkgJson?.devDependencies || {};
	const allDependencies = { ...dependencies, ...devDependencies };

	BASE_LIBS.forEach((libType) => {
		const matchedDeps: string[] = []
		Object.keys(allDependencies).forEach((dep) => {
			if (libType.list.includes(dep)) {
				matchedDeps.push(`${dep}`);
			}
		});
		const itemContent = matchedDeps?.length ? matchedDeps.join("、") : '未知'
		content.push('', `- ${libType.name}: ${itemContent}`);
	});

	return {
		name: "Techstack",
		content,
	};
};

export default generate;
