/**
 * 支持的配置文件名
 */
export const SUPPORTED_FILE_NAMES = [
	'config.js',
	'config.cjs'
]

/**
 * 内容写入模式
 */
export const WRITE_MODE = {
	/**
	 * 覆盖
	 */
	COVER: 'cover',
	/**
	 * 插入
	 */
	INSERT: 'insert'
} as const

/**
 * 默认的插入占位符
 */
export const DEFAULT_INSERT_PLACEHOLDER = '__READUE_PLACEHOLDER__'
