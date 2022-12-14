const {rules} = require(`./.xo-config.json`)

module.exports = {
	root: true,
	extends: [
		`eslint:recommended`,
		`plugin:@typescript-eslint/recommended`,
		`prettier`,
		`xo`,
	],
	parser: `@typescript-eslint/parser`,
	plugins: [`@typescript-eslint`, `prettier`],
	ignorePatterns: [`node_modules`, `**/*deprecated*`, `**/*ts*`],
	overrides: [
		{
			files: [`*.ts`, `*.tsx`], // Your TypeScript files extension

			// As mentioned in the comments, you should extend TypeScript plugins here,
			// instead of extending them outside the `overrides`.
			// If you don't want to extend any rules, you don't need an `extends` attribute.
			extends: [
				`plugin:@typescript-eslint/recommended`,
				`plugin:@typescript-eslint/recommended-requiring-type-checking`,
			],

			parserOptions: {
				project: [`./tsconfig.json`], // Specify it only for TypeScript files
			},
			rules: {
				...rules,
			},
		},
	],
	rules: {
		// "@typescript-eslint/quotes": [2, "backtick"],
		semi: [2, `never`],
		quotes: [2, `backtick`],
		"@typescript-eslint/no-var-requires": [1],
		curly: [2, `multi-or-nest`, `consistent`],
	},
}
