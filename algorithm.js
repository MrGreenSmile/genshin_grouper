function checkcheck(event){
	const query = 'input[name="character"]:checked'				//캐릭터 선택 checkbox
	const selected = document.querySelectorAll(query)

	let characters = []
	selected.forEach((el) => {characters.push(el.value)})
	//document.getElementById('result').innerText = characters


	document.getElementById('yours').innerHTML = ''

	for(i=0; i<characters.length; i++){								//선택한 캐릭터 표시
		var imged = document.createElement('img')
		imged.src = `character/` + characters[i] + `.webp`
		imged.style.width = '100px'
		imged.style.cursor = 'pointer'
		onclicked = `location.href="detail/detail-character.html?` + characters[i] + `"`
		imged.setAttribute('onclick', onclicked)
		document.getElementById('yours').appendChild(imged)
	}
	document.getElementById('youcan').innerText = ''

	yours = document.getElementById('yours')					//가능한 조합 표시
	youcan = document.getElementById('youcan')
	youmight = document.getElementById('youmight')
	funny = document.getElementById('funny')

	youcan_car = document.getElementById('youcan_car')
	youmight_car = document.getElementById('youmight_car')
	funny_car = document.getElementById('funny_car')

	for(i=0; i<all_combi.length; i++){
		for(j=0; j<all_combi[i].length; j++){
			intersection = characters.filter(x => all_combi[i][j].includes(x))
			fst = all_combi[i][j][0] + String(i) + String(j)
			sec = all_combi[i][j][0] + String(i) + String(j+1)
			todetail = `detail/detail-group.html?` + all_combi[i][j][0] + '&' + all_combi[i][j][1] + '&' +  all_combi[i][j][2] + '&' +  all_combi[i][j][3]

			imgs = `
				<img src='character/` + all_combi[i][j][0] + `.webp'>
				<img src='character/` + all_combi[i][j][1] + `.webp'>
				<img src='character/` + all_combi[i][j][2] + `.webp'>
				<img src='character/` + all_combi[i][j][3] + `.webp'>
				`//onclick="location.href='` + todetail + `'"
			if(intersection.length >= 2 && intersection.length < 4){
				g = document.createElement('div')
				g.setAttribute('id', sec)
				youmight.insertBefore(g, youmight_car)
				document.getElementById(sec).innerHTML = imgs
			}
			if(intersection.length == 4){
				g = document.createElement('div')
				g.setAttribute('id', fst)
				youcan.insertBefore(g, youcan_car)
				document.getElementById(fst).innerHTML = imgs
				document.getElementById(sec).innerHTML = ''
			}
		}
	}


	if(characters.length < 2){										//칸 비었을 때 클리어
		if(characters.length == 0){yours.innerHTML = ''}
		youcan.innerHTML = ''
		youmight.innerHTML = ''
		funny.innerHTML = ''
	}
}


function newDiving(){
	newDiv = document.createElement('div')
	newContent = document.createTextNode('오오')
	newDiv.appendChild(newContent)

	currentDiv = document.getElementById('yours')
	document.body.insertBefore(newDiv, currentDiv)
}