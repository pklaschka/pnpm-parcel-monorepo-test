module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.eslint.json'],
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	rules: {
		"@typescript-eslint/no-inferrable-types": 0 // incompatible to `fliegdoc`
	}
};
