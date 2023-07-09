id = location.href.split('?')[1]
id_s = id.split('#')[0]
id_re = id_s.replace(/%20/gi, ' ')

group = document.getElementById('group')
container = document.getElementById('container')
groupTitle = document.getElementById('group-title')
htmlTitle = document.getElementById('html-title')


chara = document.createElement('img')						//캐릭터 이미지
chara.setAttribute('src', `../character/` + id_re + `.webp`)
chara.setAttribute('style', 'width:120px')
group.appendChild(chara)


forTranslate = []											//한글 이름으로 제목 및 타이틀
for(i=0; i<five_s.length; i++){
	forTranslate.push(five_s[i])
}
for(i=0; i<four_s.length; i++){
	forTranslate.push(four_s[i])
}
for(i=0; i<forTranslate.length; i++){
	if(forTranslate[i].indexOf(id_re)>0){
		character = forTranslate[i][0]
	}
}
htmlTitle.append('캐릭터 상세 : ' + character)
groupTitle.append(character)

tutor = document.createElement('span')
tutor.setAttribute('id', 'tutorial')
tutor.setAttribute('onclick', 'tutorial()')
tutor.append('안내')
groupTitle.appendChild(tutor)



function cntNavi(navi){
	basicCnt = document.getElementById('basicCnt')
	tipsCnt = document.getElementById('tipsCnt')
	
	if(navi == 'basic'){
		if(basicCnt.style.display == 'none'){
			basicCnt.style.display = ''
		}else{
			basicCnt.style.display = 'none'
		}
	}if(navi == 'tips'){
		if(tipsCnt.style.display == 'none'){
			tipsCnt.style.display = ''
		}else{
			tipsCnt.style.display = 'none'
		}
	}
}
//https://genshin.honeyhunterworld.com/?lang=EN
//https://genshin.gamedot.org/?mid=wiki&view=%EB%B6%84%EB%A5%98%3A%EB%93%B1%EC%9E%A5%EC%9D%B8%EB%AC%BC%2F%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B4%EB%B8%94
//https://namu.wiki/w/%EC%9B%90%EC%8B%A0/%EB%93%B1%EC%9E%A5%EC%9D%B8%EB%AC%BC
///https://genshin-builds.com/ko/character/albedo



									//개요
									///parag -> 내용을 원소로 받는 배열
function summarizer(parag){
	summary = document.getElementById('summary')

	for(i=0; i<parag.length; i++){
		summaryParag = document.createElement('p')
		summaryParag.innerHTML = parag[i]
		summary.appendChild(summaryParag)
	}
}

illust = document.getElementById('illust')
illust.src = 'character/' + character + '공식일러.webp'


									//프로필
function porfiler(chaprofile){
	chaname = document.getElementById('chaname')
	chagender = document.getElementById('chagender')
	chastars = document.getElementById('chastars')
	chaeye = document.getElementById('chaeye')
	chaweapon = document.getElementById('chaweapon')
	chadestiny = document.getElementById('chadestiny')
	chabirthday = document.getElementById('chabirthday')
	chabelong = document.getElementById('chabelong')
	chacv = document.getElementById('chacv')

	profileList = [chaname, chagender, chastars, chaeye, chaweapon, chadestiny, chabirthday, chabelong, chacv]
	profile = chaprofile
	nation = ['한', '일', '영', '중']
	for(i=0; i<profileList.length-1; i++){
		profileList[i].innerText = profile[i]
	}
	for(i=0; i<profile[8].length; i++){
		cvnation = document.createElement('div')
		cvnation.innerText = nation[i] + ' : ' + profile[8][i]
		chacv.appendChild(cvnation)
	}
}

									//특제 요리
function specialCook(cooks){
	cookImg = document.getElementById('cookImg')
	cookCnt = document.getElementById('cookCnt')

	if(cooks[0] == '없음'){
		cookCntTitle = document.createElement('h3')
		cookCntTitle.append(cooks[0])
		cookCntTitle.style.paddingLeft = '10px'
		cookCnt.appendChild(cookCntTitle)
	}else{
		cooking = document.createElement('img')
		cooking.src = 'character/' + cooks[0] + '.webp'
		cookImg.appendChild(cooking)

		cookCntTitle = document.createElement('h3')
		cookCntTitle.append(cooks[0])
		cookCntTitle.style.paddingLeft = '10px'
		cookCnt.appendChild(cookCntTitle)
		for(i=1; i<cooks.length; i++){
			cookCntPara = document.createElement('p')
			cookCntPara.innerHTML = cooks[i]
			cookCnt.appendChild(cookCntPara)
		}
	}
}

									//돌파/특성 재료
									///brk[돌, 채집물, [몬스터 재료]]
									///cha[[책], 주간 보스, [몬스터 재료], 지식의 왕관]
function materializer(brk, cha){								
	material = document.getElementsByClassName('material')
	material0 = material[0]
	material1 = material[1]

	for(i=0; i<brk.length; i++){
		if(i == 3){brktem=brk[i][2]}
		else{brktem=brk[i]}

		materialCnt = document.createElement('div')
		materialCnt.setAttribute('class', 'materials')

		materialImg = document.createElement('img')
		materialImg.src = 'material/' + brktem + '.webp'
		materialCnt.appendChild(materialImg)

		material0.appendChild(materialCnt)
	}
	for(i=0; i<cha.length; i++){
		if(i == 0){chatem=cha[i] + '의 철학'}
		else if(i == 2){chatem=cha[i][2]}
		else{chatem=cha[i]}

		materialCnt = document.createElement('div')
		materialCnt.setAttribute('class', 'materials')

		materialImg = document.createElement('img')
		materialImg.src = 'material/' + chatem + '.webp'
		materialCnt.appendChild(materialImg)

		material1.appendChild(materialCnt)
	}

	detailBrkMaterial(brk)
	detailChaMaterial(cha)
}

function material_detail(r){
	brkthr = document.getElementById('brkthr')
	charst = document.getElementById('charst')

	if(r == 1){
		if(brkthr.style.display == 'none'){
			brkthr.style.display = 'block'
			charst.style.display = 'none'
		}else{
			brkthr.style.display = 'none'
		}
	}if(r == 2){
		if(charst.style.display == 'none'){
			charst.style.display = 'block'
			brkthr.style.display = 'none'
		}else{
			charst.style.display = 'none'
		}
	}
}
function material_detail_lev(r){
	brkthr = document.getElementById('brkthr')
	charst = document.getElementById('charst')

	if(r == 1){
		brkthr.style.display = 'none'
	}if(r == 2){
		charst.style.display = 'none'
	}
}

function detailBrkMaterial(brk){
	brkthr = document.getElementById('brkthr')

	for(i=1; i<=6; i++){
		if(i==1){level=20;dusk = ' 가루';	dust = 1;			natural = 3;	monster = 3;	j = 0	}
		if(i==2){level=40;dusk = ' 조각';	dust = 3;boss = 2;	natural = 10;	monster = 15;			}
		if(i==3){level=50;					dust = 6;boss = 4;	natural = 20;	monster = 12;	j = 1	}
		if(i==4){level=60;dusk = ' 덩이';	dust = 3;boss = 8;	natural = 30;	monster = 18;			}
		if(i==5){level=70;					dust = 6;boss = 12;	natural = 45;	monster = 12;	j = 2	}
		if(i==6){level=80;dusk = '';		dust = 6;boss = 20;	natural = 60;	monster = 24;			}

		Cnt = document.createElement('div')

		ImgDiv0 = document.createElement('div')
		ImgDiv0.setAttribute('class', 'eachDetail')
		ImgDiv0.append('lv.' + level)

		ImgDiv1 = document.createElement('div')
		ImgDiv1.setAttribute('class', 'eachDetail')
		Cnt1 = document.createElement('div')
		Cnt1.setAttribute('class', 'eachDetailNeeds')
		Img1 = document.createElement('img')
		Img1.src = 'material/' + brk[0] + dusk + '.webp'
		Cnt1.append(dust)
		ImgDiv1.appendChild(Cnt1)
		ImgDiv1.appendChild(Img1)
		
		ImgDiv2 = document.createElement('div')
		ImgDiv2.setAttribute('class', 'eachDetail')
		Img2 = document.createElement('img')
		if(i!=1){
			Img2.src = 'material/' + brk[1] + '.webp'
		}
		Cnt2 = document.createElement('div')
		if(i!=1){
			Cnt2.setAttribute('class', 'eachDetailNeeds')
			Cnt2.append(boss)
		}
		ImgDiv2.appendChild(Cnt2)
		ImgDiv2.appendChild(Img2)

		ImgDiv3 = document.createElement('div')
		ImgDiv3.setAttribute('class', 'eachDetail')
		Img3 = document.createElement('img')
		Img3.src = 'material/' + brk[2] + '.webp'
		Cnt3 = document.createElement('div')
		Cnt3.setAttribute('class', 'eachDetailNeeds')
		Cnt3.append(natural)
		ImgDiv3.appendChild(Cnt3)
		ImgDiv3.appendChild(Img3)

		ImgDiv4 = document.createElement('div')
		ImgDiv4.setAttribute('class', 'eachDetail')
		Img4 = document.createElement('img')
		Img4.src = 'material/' + brk[3][j] + '.webp'
		Cnt4 = document.createElement('div')
		Cnt4.setAttribute('class', 'eachDetailNeeds')
		Cnt4.append(monster)
		ImgDiv4.appendChild(Cnt4)
		ImgDiv4.appendChild(Img4)

		Cnt.appendChild(ImgDiv0)
		Cnt.appendChild(ImgDiv1)
		Cnt.appendChild(ImgDiv2)
		Cnt.appendChild(ImgDiv3)
		Cnt.appendChild(ImgDiv4)
		brkthr.appendChild(Cnt)
	}
}
function detailChaMaterial(cha){
	charst = document.getElementById('charst')

	for(i=1; i<=9; i++){
		if(i==1){book = 3;	monster = 6;				j1 = 0;j2 = 0;	bookname='가르침'}
		if(i==2){book = 2;	monster = 3;				j1 = 1;j2 = 1;	bookname='인도'}
		if(i==3){book = 4;	monster = 4;								}
		if(i==4){book = 6;	monster = 6;								}
		if(i==5){book = 9;	monster = 9;								}
		if(i==6){book = 4;	monster = 4;	weekly = 1;	j1 = 2;j2 = 2;	bookname='철학'}
		if(i==7){book = 6;	monster = 6;								}
		if(i==8){book = 12;	monster = 9;	weekly = 2;					}
		if(i==9){book = 16;	monster = 12;								}

		Cnt = document.createElement('div')

		ImgDiv0 = document.createElement('div')
		ImgDiv0.setAttribute('class', 'eachDetail')
		ImgDiv0.append('lv.' + (i+1))

		ImgDiv1 = document.createElement('div')
		ImgDiv1.setAttribute('class', 'eachDetail')
		Img1 = document.createElement('img')
		Img1.src = 'material/' + cha[0] + '의 ' + bookname + '.webp'
		Cnt1 = document.createElement('div')
		Cnt1.setAttribute('class', 'eachDetailNeeds')
		Cnt1.append(book)
		ImgDiv1.appendChild(Cnt1)
		ImgDiv1.appendChild(Img1)
		
		ImgDiv2 = document.createElement('div')
		ImgDiv2.setAttribute('class', 'eachDetail')
		Img2 = document.createElement('img')
		if(i > 5){
			Img2.src = 'material/' + cha[1] + '.webp'
		}
		Cnt2 = document.createElement('div')
		if(i > 5){
			Cnt2.setAttribute('class', 'eachDetailNeeds')
			Cnt2.append(weekly)
		}
		ImgDiv2.appendChild(Cnt2)
		ImgDiv2.appendChild(Img2)

		ImgDiv3 = document.createElement('div')
		ImgDiv3.setAttribute('class', 'eachDetail')
		Img3 = document.createElement('img')
		Img3.src = 'material/' + cha[2][j2] + '.webp'
		Cnt3 = document.createElement('div')
		Cnt3.setAttribute('class', 'eachDetailNeeds')
		Cnt3.append(monster)
		ImgDiv3.appendChild(Cnt3)
		ImgDiv3.appendChild(Img3)

		ImgDiv4 = document.createElement('div')
		ImgDiv4.setAttribute('class', 'eachDetail')
		Img4 = document.createElement('img')
		if(i==9){
			Img4.src = 'material/' + cha[3] + '.webp'
		}
		Cnt4 = document.createElement('div')
		if(i==9){
			Cnt4.setAttribute('class', 'eachDetailNeeds')
			Cnt4.append(1)
		}
		ImgDiv4.appendChild(Cnt4)
		ImgDiv4.appendChild(Img4)
		
		Cnt.appendChild(ImgDiv0)
		Cnt.appendChild(ImgDiv1)
		Cnt.appendChild(ImgDiv2)
		Cnt.appendChild(ImgDiv3)
		Cnt.appendChild(ImgDiv4)
		charst.appendChild(Cnt)
	}
}



									//특성
function talents(talent, ext='none'){
	normalTalentsImg = document.getElementById('normalTalentsImg')
	combatTalentsImg = document.getElementById('combatTalentsImg')
	burstTalentsImg = document.getElementById('burstTalentsImg')
	fstPassiveImg = document.getElementById('fstPassiveImg')
	fthPassiveImg = document.getElementById('fthPassiveImg')
	inherencePassiveImg = document.getElementById('inherencePassiveImg')

	normalTalentsImg.src = 'character/' + character + '기본공격.webp'
	combatTalentsImg.src = 'character/' + character + '전투스킬.webp'
	burstTalentsImg.src = 'character/' + character + '폭발스킬.webp'
	fstPassiveImg.src = 'character/' + character + '돌파특성1.webp'
	fthPassiveImg.src = 'character/' + character + '돌파특성2.webp'



	normalTalentsCnt = document.getElementById('normalTalentsCnt')
	normalTalentsTitle = document.createElement('h4')
	normalTalentsTitle.innerHTML = talent[0]
	normalTalentsCnt.appendChild(normalTalentsTitle)
	for(i=0; i<talent[1].length; i++){					//기본 공격
		normalTalentsEach = document.createElement('p')
		normalTalentsEach.innerHTML = talent[1][i]
		normalTalentsCnt.appendChild(normalTalentsEach)
	}
	combatTalentsCnt = document.getElementById('combatTalentsCnt')
	combatTalentsTitle = document.createElement('h4')
	combatTalentsTitle.innerHTML = talent[2][0]
	combatTalentsCnt.appendChild(combatTalentsTitle)
	for(i=0; i<talent[2][1].length; i++){				//전투스킬 개요
		combatTalentsEach = document.createElement('p')
		combatTalentsEach.innerHTML = talent[2][1][i]
		combatTalentsCnt.appendChild(combatTalentsEach)
	}
	for(i=2; i<talent[2].length; i++){					//전투스킬 효과 나열
		if(i % 2 == 0){
			if(talent[2][i] != ''){
				combatTalentsSubitle = document.createElement('h4')
				combatTalentsSubitle.append(talent[2][i])
				combatTalentsCnt.appendChild(combatTalentsSubitle)
			}if(talent[2][i] == ''){
				break
			}
		}
		if(i % 2 == 1){
			for(j=0; j<talent[2][i].length; j++){
				combatTalentsSubCnt = document.createElement('p')
				combatTalentsSubCnt.innerHTML = talent[2][i][j]
				combatTalentsCnt.appendChild(combatTalentsSubCnt)
			}
		}
	}

	k = 3

	dashTalent = document.getElementById('dashTalent')
	dashTalent.style.display = 'none'
	
	if(ext == 'dash'){
		k = 4
		dashTalent.style.display = ''

		dashTalentsImg = document.getElementById('dashTalentsImg')
		dashTalentsImg.src = 'character/' + character + '대시스킬.webp'
		tashTalentsCnt = document.getElementById('tashTalentsCnt')
		
		tashTalentsTitle = document.createElement('h4')
		tashTalentsTitle.append(talent[3][0])
		tashTalentsCnt.appendChild(tashTalentsTitle)
		for(i=1; i<talent[3][1].length; i++){
			tashTalentsSubCnt = document.createElement('p')
			tashTalentsSubCnt.innerHTML = talent[3][1][i]
			tashTalentsCnt.appendChild(tashTalentsSubCnt)
		}
	}
	burstTalentsCnt = document.getElementById('burstTalentsCnt')
	burstTalentsTitle = document.createElement('h4')
	burstTalentsTitle.innerHTML = talent[k][0]
	burstTalentsCnt.appendChild(burstTalentsTitle)
	for(i=0; i<talent[k][1].length; i++){				//폭발스킬 개요
		combatTalentsEach = document.createElement('p')
		combatTalentsEach.innerHTML = talent[k][1][i]
		burstTalentsCnt.appendChild(combatTalentsEach)
	}
	for(i=2; i<talent[k].length; i++){					//폭발스킬 효과 나열
		if(i % 2 == 0){
			if(talent[k][i] != ''){
				combatTalentsSubitle = document.createElement('h4')
				combatTalentsSubitle.append(talent[k][i])
				burstTalentsCnt.appendChild(combatTalentsSubitle)
			}if(talent[k][i] == ''){
				break
			}
		}
		if(i % 2 == 1){
			for(j=0; j<talent[k][i].length; j++){
				combatTalentsSubCnt = document.createElement('p')
				combatTalentsSubCnt.innerHTML = talent[k][i][j]
				burstTalentsCnt.appendChild(combatTalentsSubCnt)
			}
		}
	}

	fstPassiveCnt = document.getElementById('fstPassiveCnt')
	fstPassiveTitle = document.createElement('h4')
	fstPassiveTitle.append(talent[k+1])
	fstPassiveCnt.appendChild(fstPassiveTitle)
	for(i=0; i<talent[k+2].length; i++){					//1차 돌파특성 개요
		fstPassiveEach = document.createElement('p')
		fstPassiveEach.innerHTML = talent[k+2][i]
		fstPassiveCnt.appendChild(fstPassiveEach)
	}
	fthPassiveCnt = document.getElementById('fthPassiveCnt')
	fthPassiveTitle = document.createElement('h4')
	fthPassiveTitle.append(talent[k+3])
	fthPassiveCnt.appendChild(fthPassiveTitle)
	for(i=0; i<talent[k+4].length; i++){					//4차 돌파특성 개요
		fthPassiveEach = document.createElement('p')
		fthPassiveEach.innerHTML = talent[k+4][i]
		fthPassiveCnt.appendChild(fthPassiveEach)
	}
	extrainherencePassiveImg = document.getElementById('extrainherencePassiveImg')
	extrainherencePassiveCnt = document.getElementById('extrainherencePassiveCnt')

	if(ext != 'passive'){										//고유특성
		extraTalents = document.getElementById('extraTalents')
		extraTalents.style.display = 'none'

		
		inherencePassiveImg.src = 'character/' + character + '고유특성.webp'

		inherencePassiveCnt = document.getElementById('inherencePassiveCnt')
		inherencePassiveTitle = document.createElement('h4')
		inherencePassiveTitle.append(talent[k+5])
		inherencePassiveCnt.appendChild(inherencePassiveTitle)
		inherencePassiveEach = document.createElement('p')
		inherencePassiveEach.innerHTML = talent[k+6]
		inherencePassiveCnt.appendChild(inherencePassiveEach)
	}
	if(ext == 'passive'){
		inherencePassiveCnt = document.getElementById('inherencePassiveCnt')

		inherencePassiveImg.src = 'character/' + character + '고유특성1.webp'
		inherencePassiveTitle = document.createElement('h4')
		inherencePassiveTitle.append(talent[k+5])
		inherencePassiveCnt.appendChild(inherencePassiveTitle)
		inherencePassiveEach = document.createElement('p')
		inherencePassiveEach.innerHTML = talent[k+6]
		inherencePassiveCnt.appendChild(inherencePassiveEach)


		extrainherencePassiveImg.src = 'character/' + character + '고유특성2.webp'
		inherencePassiveTitle = document.createElement('h4')
		inherencePassiveTitle.append(talent[k+7])
		inherencePassiveEach1 = document.createElement('p')
		inherencePassiveEach1.innerHTML = talent[k+8]
		extrainherencePassiveCnt.appendChild(inherencePassiveTitle)
		extrainherencePassiveCnt.appendChild(inherencePassiveEach1)
	}
}

										//별자리
function constellazor(constellations, ext='normal'){
	constellation = document.getElementById('constellation')

	for(i=0; i<constellations.length; i++){
		constellationTr = document.createElement('tr')
		constellationTd1 = document.createElement('td')
		constellationTd1.setAttribute('class', 'constellationImg')
		constellationDiv1 = document.createElement('div')
		constellationTd2 = document.createElement('td')

		
		constellationImg = document.createElement('img')
		constellationImg.style.width = '100px'
		constellationTd1.appendChild(constellationImg)
		if(ext == 'none'){
			constellationImg.src = 'character/' + character + '별자리.webp'
		}
		if(ext == 'normal'){
			constellationImg.src = 'character/' + character + '별자리' + (i+1) + '.webp'
		}
		constellationTitle = document.createElement('h3')
		constellationTitle.append(constellations[i][0])
		constellationTitle.setAttribute('class', 'constellationTitle')
		constellationTd2.appendChild(constellationTitle)
		for(j=1; j<constellations[i].length; j++){
			constellationCnt = document.createElement('p')
			constellationCnt.innerHTML = constellations[i][j]
			constellationTd2.appendChild(constellationCnt)
		}
		constellationTr.appendChild(constellationTd1)
		constellationTr.appendChild(constellationTd2)
		constellation.appendChild(constellationTr)
	}
}




function weaponizer(weaponList){
	weapon = document.getElementById('weapon')

	for(i=0; i<weaponList.length; i++){
		weaponTr = document.createElement('tr')
		weaponTd1 = document.createElement('td')
		weaponTd1.setAttribute('class', 'weaponImg')
		weaponTd2 = document.createElement('td')
		weaponTd2.setAttribute('class', 'weaponCnt')

		weaponImg = document.createElement('img')
		weaponImg.src = 'weapon/' + weaponList[i][0] + '.webp'
		weaponTd1.appendChild(weaponImg)

		weaponTitle = document.createElement('h3')
		weaponCnt = document.createElement('p')
		weaponTitle.append(weaponList[i][0])
		weaponCnt.innerHTML = weaponList[i][1]
		weaponTd2.appendChild(weaponTitle)
		weaponTd2.appendChild(weaponCnt)

		weaponTr.appendChild(weaponTd1)
		weaponTr.appendChild(weaponTd2)
		weapon.appendChild(weaponTr)
	}


    clickCount = 0
	weaponImg = document.getElementsByClassName('weaponImg')
	weaponSub = document.getElementsByClassName('weaponCnt')
	for(i=0; i<weaponImg.length; i++){
		weaponImg[i].setAttribute('onmouseover', `addWeaponSummary(` + i + `, weaponList, 'over')`)
		weaponImg[i].setAttribute('onmouseout', `addWeaponSummary(` + i + `, weaponList, 'out')`)
		weaponImg[i].setAttribute('onclick', `addWeaponSummary(` + i + `, weaponList, 'click')`)
	}
}
function addWeaponSummary(i, weaponList, evt){
	if(evt == 'over'){
		for(j=0; j<allWeapon.length; j++){
			if(weaponList[i][0] == allWeapon[j].name){
				weaponSub[i].innerHTML = `<h3>` + allWeapon[j].name + `</h3>`
                
                atk = document.createElement('p')
                atk.innerHTML = '<b>기초 공격력 : </b>'
                atk.append(allWeapon[j].atk)
                weaponSub[i].appendChild(atk)
                stt = document.createElement('p')
                stt.innerHTML = '<b>추가 능력치 : </b>'
                stt.append(allWeapon[j].subStat)
                weaponSub[i].appendChild(stt)
                eff = document.createElement('p')
                eff.innerHTML = '<b>추가 효과 : </b><br>'
                weaponSub[i].appendChild(eff)
                
                weaponSummary = allWeapon[j].subEffect[1].split('\n')
                for(k=0; k<weaponSummary.length; k++){
                    weaponCnt = document.createElement('p')
                    weaponCnt.innerHTML = weaponSummary[k]
                    weaponSub[i].appendChild(weaponCnt)
                }
			}
		}
	}if(evt == 'out'){
		weaponCnt = document.createElement('p')
		weaponCnt.innerHTML = weaponList[i][1]

		weaponSub[i].innerHTML = `<h3>` + weaponList[i][0] + `</h3>`
		weaponSub[i].appendChild(weaponCnt)
	}
    if(evt == 'click'){
        clickCount += 1
        if(clickCount % 2 == 1){
            addWeaponSummary(i, weaponList, 'over')
        }
        if(clickCount % 2 == 0){
            addWeaponSummary(i, weaponList, 'out')
        }
    }
}
function relicizer(mainOption, subOption, relicSets){
	clock = document.getElementById('clock')
	grail = document.getElementById('grail')
	crown = document.getElementById('crown')
	relicSub = document.getElementById('relicSub')
	relics = [clock, grail, crown]

	for(i=0; i<relics.length; i++){
		for(j=0; j<mainOption[i].length; j++){
			relics[i].append(mainOption[i][j])
			if(j == mainOption[i].length-1){break}
			relics[i].append(', ')
		}
	}
	for(i=0; i<subOption.length; i++){
		relicSub.append(subOption[i])
		if(i == subOption.length-1){break}
		relicSub.append(', ')
	}

	
	relicSetting = document.getElementById('relicSetting')
	
	for(i=0; i<relicSets.length; i++){
		relicSetsTr = document.createElement('tr')
		relicSetsTd1 = document.createElement('td')
		relicSetsTd2 = document.createElement('td')
		relicSetsTd1.setAttribute('class', 'relicImg')
        relicSetsTd2.setAttribute('class', 'relicCnt')

		relicDiv = document.createElement('div')
		relicTitles = document.createElement('h3')

		if(relicSets[i][0].length > 1){
			relicImg1 = document.createElement('img')
			relicImg2 = document.createElement('img')
			relicImg1.src = 'relic/' + relicSets[i][0][0] + '.webp'
			relicImg2.src = 'relic/' + relicSets[i][0][1] + '.webp'
			relicImg2.setAttribute('class', 'relicImgSnd')
			relicDiv.appendChild(relicImg1)
			relicDiv.appendChild(relicImg2)

			for(j=0; j<relicSets[i][0].length; j++){
				relicTitles.append(relicSets[i][0][j] + '(2)')
				relicSetsTd2.appendChild(relicTitles)
				if(j == relicSets[i][0].length-1){break}
				relicTitles.append(' - ')
			}
		}if(relicSets[i][0].length == 1){
			relicImg = document.createElement('img')
			relicDiv.style.textAlign = "center"
			relicImg.src = 'relic/' + relicSets[i][0] + '.webp'
			relicDiv.appendChild(relicImg)

			relicTitles.append(relicSets[i][0] + '(4)')
			relicSetsTd2.appendChild(relicTitles)
		}
		relicSetsTd1.appendChild(relicDiv)

		for(j=1; j<relicSets[i].length; j++){
			relicCnt = document.createElement('p')
			relicCnt.innerHTML = relicSets[i][j]
			relicSetsTd2.appendChild(relicCnt)
		}
		relicSetsTr.appendChild(relicSetsTd1)
		relicSetsTr.appendChild(relicSetsTd2)
		relicSetting.appendChild(relicSetsTr)
        
        
	}
    
    
    clickCount = 0
    relicImg = document.getElementsByClassName('relicImg')
    relicSub = document.getElementsByClassName('relicCnt')
    for(i=0; i<relicImg.length; i++){
        relicImg[i].setAttribute('onmouseover', `addRelicSummary(` + i + `, relicSets, 'over')`)
        relicImg[i].setAttribute('onmouseout', `addRelicSummary(` + i + `, relicSets, 'out')`)
        relicImg[i].setAttribute('onclick', `addRelicSummary(` + i + `, relicSets, 'click')`)
    }
}
function addRelicSummary(i, relicSets, evt){
    if(evt == 'over'){
        if(relicSets[i][0].length > 1){
            relicSub[i].innerHTML = ''
            
            for(j=0; j<allRelic.length; j++){
                for(k=0; k<2; k++){
                    if(allRelic[j].name == relicSets[i][0][k]){
                        relicSubTtl = document.createElement('h3')
                        relicSubTtl.innerHTML = '<h3>' + allRelic[j].name + '</h3>'
                        relicSub[i].appendChild(relicSubTtl)
                        
                        relic2Set = document.createElement('p')
                        relic2Set.innerHTML = '<b>2셋 효과 : </b>' + allRelic[j].set2
                        relicSub[i].appendChild(relic2Set)
                        
                        relic4Set = document.createElement('p')
                        relic4Set.innerHTML = '<b>4셋 효과 : </b>'
                        relicSub[i].appendChild(relic4Set)
                        
                        relic4setSum = allRelic[j].set4.split('\n')
                        for(p=0; p<relic4setSum.length; p++){
                            relic4SetSummary = document.createElement('p')
                            relic4SetSummary.innerHTML = relic4setSum[p]
                            relicSub[i].appendChild(relic4SetSummary)
                        }
                    }
                }
            }
        }
        if(relicSets[i][0].length == 1){
            for(j=0; j<allRelic.length; j++){
                if(allRelic[j].name == relicSets[i][0]){
                    relicSub[i].innerHTML = '<h3>' + allRelic[j].name + '</h3>'

                    relic2Set = document.createElement('p')
                    relic2Set.innerHTML = '<b>2셋 효과 : </b>' + allRelic[j].set2
                    relicSub[i].appendChild(relic2Set)
                    
                    relic4Set = document.createElement('p')
                    relic4Set.innerHTML = '<b>4셋 효과 : </b>'
                    relicSub[i].appendChild(relic4Set)
                    
                    relic4setSum = allRelic[j].set4.split('\n')
                    for(p=0; p<relic4setSum.length; p++){
                        relic4SetSummary = document.createElement('p')
                        relic4SetSummary.innerHTML = relic4setSum[p]
                        relicSub[i].appendChild(relic4SetSummary)
                    }
                }
            }
        }
    }
    if(evt == 'out'){
        if(relicSets[i][0].length > 1){setNum = 2}
        if(relicSets[i][0].length == 1){setNum = 4}
        relicName = relicSets[i][0].join('(' + setNum + ') - ')
        relicSub[i].innerHTML = '<h3>' + relicName + '(' + setNum + ')</h3>'
        
        for(j=1; j<relicSets[i].length; j++){
            relicSum = document.createElement('p')
            relicSum.innerHTML = relicSets[i][j]
            relicSub[i].appendChild(relicSum)
        }
	}
    if(evt == 'click'){
        clickCount += 1
        if(clickCount % 2 == 1){
            addRelicSummary(i, relicSets, 'over')
        }
        if(clickCount % 2 == 0){
            addRelicSummary(i, relicSets, 'out')
        }
    }
}


function tiper(tip){
	tips = document.getElementById('tips')

	for(i=0; i<tip.length; i++){
		tipsCont = document.createElement('p')
		tipsCont.innerHTML = tip[i]
		tips.appendChild(tipsCont)
	}
}

function partnerizer(partners){
	partner = document.getElementById('partner')

	partnerEN = []
	for(j=0; j<partners.length; j++){
		for(i=0; i<four_s.length; i++){
			if(four_s[i][0] == partners[j][0]){
				partnerEN.push(four_s[i][1])
			}
		}
		for(i=0; i<five_s.length; i++){
			if(five_s[i][0] == partners[j][0]){
				partnerEN.push(five_s[i][1])
			}
		}
	}

	for(i=0; i<partners.length; i++){
		partnerDiv = document.createElement('div')
		partnerImg = document.createElement('img')
		partnerImg.src = '../character/' + partnerEN[i] + '.webp'
		partnerImg.style.width = '150px'
		partnerImg.style.cursor = 'pointer'
		partnerImg.setAttribute('onclick', `location.href="detail-character.html?` + partnerEN[i] + `"`)
		partnerDiv.appendChild(partnerImg)

		partnerCnt = document.createElement('p')
		partnerCnt.innerHTML = partners[i][1]
		partnerDiv.appendChild(partnerCnt)

		partner.appendChild(partnerDiv)
	}
}