module.exports = {
	matcher: (rawCommitInfo) => {
		const { message } = rawCommitInfo;

		// 提取 feat、fix 类型 的 commit
		const [, type, scope, description] = message.match(/(feat|fix)(?:\(([^)]*?)\))?:\s?(.+)/) || [];

		if (!type || !description) return false;

		return {
			type,
			scope,
			description,
		};
	},
};
