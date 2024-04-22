module.exports = {
	/**
	 * 写入模式 cover-覆盖全内容 insert-在占位符处插入内容
	 */
	mode: 'insert',
	/**
	 * 插入占位符
	 */
	insertPlaceholder: '__READUE_PLACEHOLDER__',
	/**
	 * 模板文件 - 相对路径
	 */
	templateFile: './template.md',
	/**
	 * 输出文件路径 - 相对路径
	 */
	outputFile: './../README.md',
	/**
	 * 自定义块配置
	 */
	blocks: {
		type: 'custom',
		list: [
			"@readue/block-base_info",
			"@readue/block-packages",
			"@readue/block-env_requirement",
			"@readue/block-star_history",
		]
	}
}
