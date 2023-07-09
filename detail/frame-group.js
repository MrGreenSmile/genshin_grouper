id = location.href.split('?')[1]
id_re = id.replace(/%20/gi, ' ')
id_sp = id_re.split('&')

group = document.getElementById('group')
container = document.getElementById('container')
groupTitle = document.getElementById('group-title')
htmlTitle = document.getElementById('html-title')



for(i=0; i<id_sp.length; i++){								//선택한 조합(이미지)
	chara = document.createElement('img')
	chara.setAttribute('src', `../character/` + id_sp[i] + `.webp`)
	chara.setAttribute('class', 'groupChara')
	onclicked = `location.href = "detail-character.html?` + id_sp[i] + `"`
	chara.setAttribute('onclick', onclicked)
	group.appendChild(chara)
}



forTranslate = []											//한글 이름으로 제목 및 타이틀
nowGroup = []
for(i=0; i<five_s.length; i++){
	forTranslate.push(five_s[i])
}
for(i=0; i<four_s.length; i++){
	forTranslate.push(four_s[i])
}
for(j=0; j<id_sp.length; j++){
	for(i=0; i<forTranslate.length; i++){
		if(forTranslate[i].indexOf(id_sp[j])>0){
			nowGroup.push(forTranslate[i][0])
		}
	}
}
htmlTitle.append('조합 상세 : ' + nowGroup.join('/'))
groupTitle.append(nowGroup.join('/'))

tutor = document.createElement('span')
tutor.setAttribute('id', 'tutorial')
tutor.setAttribute('onclick', 'tutorial()')
tutor.append('안내')
groupTitle.appendChild(tutor)


															//캐릭터 세부 내용
summary = document.createElement('div')						///개요
summary.setAttribute('id', 'summary')
summaryTitle = document.createElement('h2')
summaryTitle.append('개요')
summary.appendChild(summaryTitle)
container.appendChild(summary)

features = document.createElement('div')					///특징
features.setAttribute('id', 'features')
featuresTitle = document.createElement('h2')
featuresTitle.append('특징')
features.appendChild(featuresTitle)
container.appendChild(features)
/*
strength = document.createElement('div')
strength.setAttribute('id', 'strength')
strengthTitle = document.createElement('h3')
strengthTitle.append('장점')
strength.appendChild(strengthTitle)
weekness = document.createElement('div')
weekness.setAttribute('id', 'weekness')
weeknessTitle = document.createElement('h3')
weeknessTitle.append('단점')
weekness.appendChild(weeknessTitle)
features.appendChild(strength)
features.appendChild(weekness)
container.appendChild(features)
*/

settings = document.createElement('div')					///세팅
settings.setAttribute('id', 'settings')
settingsTitle = document.createElement('h2')
settingsTitle.append('세팅')
settings.appendChild(settingsTitle)
container.appendChild(settings)
/*
for(i=0; i<id_sp.length; i++){
	charaSettings = document.createElement('div')
	charaSettings.setAttribute('id', id_sp[i])
	charaImg = document.createElement('img')
	charaImg.setAttribute('class', 'charaImg')
	charaImg.setAttribute('src', `../character/` + id_sp[i] + `.webp`)
	charaSettings.appendChild(charaImg)
	settings.appendChild(charaSettings)
}
container.appendChild(settings)
*/

for(i=0; i<all_combi.length; i++){
	for(j=0; j<all_combi[i].length; j++){
		intersection = id_sp.filter(x => all_combi[i][j].includes(x))
		if(intersection.length == 4){
			ij = all_combi[i][j]
		}
	}
}

/*
i1 = document.getElementById(id_sp[0])
i2 = document.getElementById(id_sp[1])
i3 = document.getElementById(id_sp[2])
i4 = document.getElementById(id_sp[3])
*/