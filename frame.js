function tutorial(){
	tutor = document.getElementById('tutor')

	if(tutor.style.display == 'none'){
		tutor.style.display = 'block'
	}else{
		tutor.style.display = 'none'
	}
}
function closer(){
	tutor = document.getElementById('tutor')

	tutor.style.display = 'none'
}
function tutorNavi(key){
	howto = document.getElementById('howto')

	if(key == 'summary'){
		howto.innerHTML = `
			<p>
				원신 조합을 맞춰드립니다.
			</p>
			<p>
				먼저 주의해주시길, 조합 또는 정보가 부족하거나 오류가 있을 수도 있으니 참고용으로만 봐쥬시길 부탁드립니다.
			</p>
			<p>
				나오는 조합들은 효율이 나올 수 있는 최소한의 조합에 대해 다루고 있으며, 최고수준의 조합은 아닐 수 있습니다.
			</p>
			<span class="resource">이미지 출처 : Honey Hunter World</span>
		`
	}if(key == 'usage'){
		howto.innerHTML = `
			<p>
				갖고있거나 조합을 알고싶은 캐릭터들을 터치(클릭)해 선택합니다. 두 명이상 선택해야 합니다.
			</p>
			<p>
				아래에 차례대로 선택한 캐릭터, 그들 중에서 조합 가능한 조합, 그리고 한 두 캐릭터 모자란 조합을 확인할 수 있습니다.
			</p>
			<p>
				'5성' 제목 오른쪽의 속성순, 이름순 버튼으로 캐릭터 선택창을 정렬할 수 있습니다.
			</p>
			<p>
				캐릭터 선택을 초기화하기 위해 화면 아래에 있는 '초기화' 버튼을 누르면 됩니다. (또는 새로고침)
			</p>
			<p>
				'선택된 조합'에 표시된 캐릭터 카드를 탭(클릭)하면 '캐릭터 설명' 페이지로 이동합니다.
			</p>
		`
	}if(key == 'version'){
		howto.innerHTML = `
			<p class='versioned'>
				버그 및 조합 제보는 <a href="https://blog.naver.com/kingjw578/222722216854" target="_blank">여기에</a>
			</p>
			<p class='versioned'>
				1.0<br>
				· 출시
			</p>
			<p class='versioned'>
				1.1.0<br>
				· 정렬 버튼 추가<br>
				· 안내 버튼 및 내용 추가<br>
				· 기본 정렬 방식 변경 (출시순)
			</p>
			<p class='versioned'>
				1.1.1<br>
				· 안내창 닫기 버튼 색 변경 (흰색)<br>
				· 정렬 버튼 알고리즘 수정<br>
				· 안내 내용 일부 수정
			</p>
			<p class='versioned'>
				1.1.2<br>
				· 안내 내용 일부 수정<br>
				· 안내 버튼 크기 확장<br>
				· 안내창 닫기 버튼 크기 확장
			</p>
			<p class='versioned'>
				1.2.0<br>
				· 야란 추가<br>
				· 쿠키 시노부 버튼 추가(조합 미포함)<br>
				· 스크롤 디자인 변경
			</p>
			<p class='versioned'>
				2.0.0<br>
				· 캐릭터 설명 페이지 추가<br>
				(타이나리, 사이노, 닐루, 나히다, 콜레이, 도리, 캔디스, 레일라는 추후 추가)<br>
				· 시노부 조합 추가<br>
				· 타이나리, 사이노, 닐루, 나히다, 콜레이, 도리, 캔디스, 레일라 버튼 추가(조합 미포함)
			</p>
			<p class='versioned'>
				2.1.1<br>
				· 타이나리 설명 페이지 추가<br>
				· 방랑자, 파루잔 버튼 추가(조합 미포함)<br>
				· 돌파 재료 프레임 수정<br>
				· 대시·패시브 특성 배치 오류 수정
			</p>
			<p class='versioned'>
				2.2.0<br>
				· 무기순 정렬 버튼 추가<br>
				· 타이나리, 사이노, 닐루 설명/조합 추가
			</p>
			<p class='versioned'>
				2.3.0<br>
				· 나히다, 방랑자 설명/조합 추가
			</p>
			<p class='versioned'>
				2.4.1<br>
				· 콜레이, 도리, 캔디스, 레일라, 파루잔 설명 추가<br>
				· 설명 페이지 드래그/메뉴 스타일 변경<br>
				· 메인 페이지 초기화 버튼 알고리즘 변경
			</p>
			<p class='versioned'>
				2.4.2<br>
				· 선택 알고리즘 수정<br>
				· 메인 페이지 안내 내용 일부 수정
			</p>
		`
	}
}


function sorter(type){
	if(type == 'kr'){
		five_s.sort(function(a, b){
			if(a[0]>b[0]) return 1;
			if(a[0]<b[0]) return -1;
		})
		four_s.sort(function(a, b){
			if(a[0]>b[0]) return 1;
			if(a[0]<b[0]) return -1;
		})
	}if(type == 'en'){
		five_s.sort(function(a, b){
			if(a[1]>b[1]) return 1;
			if(a[1]<b[1]) return -1;
		})
		four_s.sort(function(a, b){
			if(a[1]>b[1]) return 1;
			if(a[1]<b[1]) return -1;
		})
	}if(type == 'type'){
		five_s.sort(function(a, b){
			if(a[2]>b[2]) return 1;
			if(a[2]==b[2]){
				if(a[0]>b[0]) return 1;
				if(a[0]<b[0]) return -1;
			}
			if(a[2]<b[2]) return -1;
		})
		four_s.sort(function(a, b){
			if(a[2]>b[2]) return 1;
			if(a[2]==b[2]){
				if(a[0]>b[0]) return 1;
				if(a[0]<b[0]) return -1;
			}
			if(a[2]<b[2]) return -1;
		})
	}if(type == 'weapon'){
		five_s.sort(function(a, b){
			if(a[3]>b[3]) return 1;
			if(a[3]<b[3]) return -1;
		})
		four_s.sort(function(a, b){
			if(a[3]>b[3]) return 1;
			if(a[3]<b[3]) return -1;
		})
	}
}

function createSorterBtn(){
	krsorter = document.createElement('button')
	krsorter.setAttribute('onclick', "createCharacterList('kr')")
	krsorter.setAttribute('class', 'sorterbtnR sorterbtn')
	krsorter.innerText = '이름순'
	weaponsorter = document.createElement('button')
	weaponsorter.setAttribute('onclick', "createCharacterList('weapon')")
	weaponsorter.setAttribute('class', 'sorterbtn')
	weaponsorter.innerText = '무기순'
	typesorter = document.createElement('button')
	typesorter.setAttribute('onclick', "createCharacterList('type')")
	typesorter.setAttribute('class', 'sorterbtnL sorterbtn')
	typesorter.innerText = '속성순'
	
	five.insertBefore(krsorter, five_t)
	five.insertBefore(weaponsorter, five_t)
	five.insertBefore(typesorter, five_t)
}

function createCharacterList(dis){
	if(dis != undefined){
		sorter(dis)

		clist = document.getElementById('CharacterList')
		clist.innerHTML = ''
	}

	clist = document.getElementById('CharacterList')

	five = document.createElement('div')
	five.setAttribute('class', 'character-list')
	five_t = document.createElement('h2')
	five_t.append('5성')
	five.appendChild(five_t)
	clist.appendChild(five)

	four = document.createElement('div')
	four.setAttribute('class', 'character-list')
	four_t = document.createElement('h2')
	four_t.append('4성')
	four.appendChild(four_t)
	clist.appendChild(four)

	createSorterBtn()

	for(i=0; i<five_s.length; i++){
		five_c = five_s[i][0]
		five_en = five_s[i][1]
		five_re = five_c.replace(/ /gi, '_')

		inp_5 = document.createElement('input')
		inp_5.setAttribute('type', 'checkbox')
		inp_5.setAttribute('name', 'character')
		inp_5.setAttribute('value', five_en)
		inp_5.setAttribute('id', five_re)
		inp_5.setAttribute('onclick', 'checkcheck(event)')

		lab_5 = document.createElement('label')
		lab_5.setAttribute('for', five_re)

		five.appendChild(inp_5)
		five.appendChild(lab_5)
	}
	for(i=0; i<four_s.length; i++){
		five_c = four_s[i][0]
		five_en = four_s[i][1]
		five_re = five_c.replace(/ /gi, '_')

		inp_4 = document.createElement('input')
		inp_4.setAttribute('type', 'checkbox')
		inp_4.setAttribute('name', 'character')
		inp_4.setAttribute('value', five_en)
		inp_4.setAttribute('id', five_re)
		inp_4.setAttribute('onclick', 'checkcheck(event)')

		lab_4 = document.createElement('label')
		lab_4.setAttribute('for', five_re)
		
		four.appendChild(inp_4)
		four.appendChild(lab_4)
	}
}


function cleaner(){
	const boxes = document.getElementsByName('character')

	for(i=0; i<boxes.length; i++){
		boxes[i].checked = false
	}
	yours = document.getElementById('yours')					//가능한 조합 표시
	youcan = document.getElementById('youcan')
	youmight = document.getElementById('youmight')
	funny = document.getElementById('funny')

	yours.innerHTML = ''
	youcan.innerHTML = ''
	youmight.innerHTML = ''
	funny.innerHTML = ''
}