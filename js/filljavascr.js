let items_parent = document.getElementById('info'), //поиск по id main блока
    requiredJson = info_array, //реАдресация
    count = requiredJson.length; //длинна Json

function fillInfo()
{
	for (var i = 0; i < count; i++)
	{
		let parent = items_parent,
			divElement0 = document.createElement('div'),
			divElement1 = document.createElement('div'),
			divElement2 = document.createElement('div'),
			imgElement2 = document.createElement('img'),
			divElement4 = document.createElement('div'),
			divElement3 = document.createElement('div'),
			brElement4 = document.createElement('br');
		divElement0.classList = "row";
		divElement1.classList = "info";
		divElement1.id = requiredJson[i].name;
		divElement2.classList = "cols col-6";
		imgElement2.src = "image/" + requiredJson[i].name + ".jpg";
		imgElement2.classList = "img_char";
		divElement4.classList = "cols col-6";
		divElement3.classList = "text_char";
		divElement3.innerHTML = requiredJson[i].char_text;

		divElement0.append(divElement1);
		divElement1.append(divElement2);
		divElement1.append(divElement4);
		divElement2.append(imgElement2);
		divElement4.append(brElement4);
		divElement4.append(divElement3);
		parent.append(divElement0);
	}
}

fillInfo();