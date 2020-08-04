module.exports = {
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"rules": {
		'indent': ['error', "tab"],
		"consistent-return": 2,
		"react/jsx-indent": ["error", "tab"],
		"semi"             : [1, "always"],
		"no-mixed-spaces-and-tabs": 0
	},
	"plugins": ['react'],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 9,
		"ecmaFeatures": {
		"jsx": true
		},
		"sourceType": "module"
	},
	"env": {
		"browser": true,
		"es6": true,
		"jest": true, // test is not defined
		"node": true // module is not defined
	},
};
