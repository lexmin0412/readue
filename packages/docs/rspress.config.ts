import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
	lang: 'zh',
	base: '/readue/',
  root: path.join(__dirname, 'docs'),
  title: 'Readue',
  description: '一键生成你的项目 README 文档',
	icon: "https://lexmin0412.github.io/readue/rspress-icon.png",
  logo: {
		light: "https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/readue/logo.png",
		dark: "https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/readue/logo.png",
  },
  themeConfig: {
		locales: [
			{
				lang: 'en',
				label: 'English',
				outlineTitle: 'On This Page',
			},
			{
				lang: 'zh',
				label: '简体中文',
				outlineTitle: '大纲',
			},
		],
    socialLinks: [
			{ icon: 'github', mode: 'link', content: 'https://github.com/lexmin0412/readue' },
    ],
	},
	builderConfig: {
		output: {
			assetPrefix: 'https://lexmin0412.github.io/readue/'
		}
	},
});
