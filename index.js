exports.decorateConfig = config =>
	Object.assign({}, config, {
		borderColor: 'transparent',
		cursorColor: '#00ECD2',
		backgroundColor: '#00214D',
		foregroundColor: '#00ECD2',
		selectionColor: '#69696980',
		color: {
			black: '#212121',
			red: '#FF4646',
			green: '#02D07D',
			yellow: '#FDE24F',
			blue: '#00214D',
			magenta: '#FF5470',
			cyan: '#00ECD2',
			white: '#ffff',
			lightBlack: '#3D3D3D',
			lightRed: '#FF5F5F',
			lightGreen: '#35FDAD',
			lightYellow: '#FEEA81',
			lightBlue: '#185FBD',
			lightMagenta: '#FF798F',
			lightCyan: '#6CFFEF',
			lightWhite: '#fffffe',
		},
	});
