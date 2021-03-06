Handlebars.registerHelper('replace', function(options) {
    var string = options.fn(this);

	var textSize = '300px';
	var largerTextSize = '400px';
	var dollar = "$";
	var doubleDollar = "$$";
	var begin = `<img style="min-width: ${textSize};" src="https://render.githubusercontent.com/render/math?math=`;
	var beginCentered = `<img style="min-width: ${largerTextSize}; display: block; margin-left: auto; margin-right: auto;" src="https://render.githubusercontent.com/render/math?math=`;
	var end = '">';

	string = CorrectFormula(string, doubleDollar, beginCentered, end);
	string = CorrectFormula(string, dollar, begin, end);

    return string;
});

function Remove(text, toRemove) {
	while (text.indexOf(toRemove) > -1) {
		text = text.replace(toRemove, '');
	}
  
	return text;
}

function Replace(text, find, change) {
	while (text.indexOf(find) > -1) {
		text = text.replace(find, change);
	}
  
	return text;
}

function CorrectFormula(text, delimiter, beginStr, endStr) {

	let insideFormula = false;
		let buffer = '';

	for (let i = 0; i <= text.length - delimiter.length; i++) {

		const item = text.substr(i, delimiter.length);
		const char = text.substr(i, 1);
	 
		if (item.length === delimiter.length && item === delimiter && !insideFormula) {
			insideFormula = true;
			
			if (delimiter.length > 1) i += delimiter.length - 1;
			
			continue;
		} else if (item.length === delimiter.length && item === delimiter && insideFormula) {    
			
			text = text.replace(delimiter + buffer + delimiter, beginStr + buffer + endStr);

			insideFormula = false; 
			buffer = '';
			
			if (delimiter.length > 1) i += delimiter.length - 1;
			
			continue;
		}  
		
		if (insideFormula) {
			buffer += char;
		}
	}
    
	text = Replace(text, beginStr + '\r', beginStr);
	text = Replace(text, beginStr + '\n', beginStr);
	text = Replace(text, '\r' + endStr, endStr);
	text = Replace(text, '\n' + endStr, endStr);
  
	return text;
}
