export interface ReadueConfig {
	/**
	 * 写入模式 cover-覆盖全内容(默认) insert-在占位符处插入内容
	 */
	mode: 'cover' | 'insert'
	/**
	 * 插入占位符 当 mode 为 insert 时生效
	 */
	insertPlaceholder?: string
	/**
	 * 模板文件 - 相对与配置文件的路径 mode 为 insert 时必传
	 */
	templateFile?: string
	/**
	 * 输出文件路径 - 相对与配置文件的路径
	 */
	outputFile: string
	/**
 * 块配置
 */
	blocks?: {
		/**
		 * 配置类型 default-默认配置 custom-自定义配置
		 */
		type: 'default' | "custom"
		/**
		 * 块列表
		 */
		list: string[]
	}
}

/**
 * 块函数
 */
export type ReadueBlockFunction = (readueConfig: ReadueConfig, pkgJson?: Record<string, unknown>) => {
	/**
		* 块名称
		*/
	name: string,
	/**
		* 块内容
		*/
	content: string[]
}
