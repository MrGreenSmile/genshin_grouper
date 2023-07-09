//\n로 단락 나누기

allWeapon = [
    //활
    {
    name:'천공의 날개',
    atk:48,
    subStat:'치명타 확률',
    subEffect:['하늘에 메아리치는 노래',
    '치명타 피해+20/25/30/35/40%\n공격 명중 시 60/70/80/90/100% 확률로 공격력 125%의 범위 물리 피해를 준다. 해당 효과는 4/3.5/3/2.5/2초마다 1번 발동한다.'
              ]},{
    name:'약수',
    atk:44,
    subStat:'치명타 피해',
    subEffect:['만물 정화의 형상',
    'HP가 16/20/24/28/32% 증가하고, 해당 무기를 장착한 캐릭터 주변에 적이 존재하면 캐릭터가 가하는 피해가 20/25/30/35/40% 증가한다. \n이 효과는 해당 캐릭터의 필드 위 혹은 대기 상태에 관계없이 발동된다.'
              ]},{
    name:'종말 탄식의 노래',
    atk:46,
    subStat:'원소 충전 효율',
    subEffect:['이별의 그리운 노래',
    '바람 속을 유랑하는 「천년의 대악장」의 일부분.\n원소 마스터리가 60/75/90/105/120pt 증가한다. 원소 전투 스킬이나 원소 폭발이 적에게 명중 시, 캐릭터는 <em>회상의 부적</em>을 한 장 획득한다. 이는 0.2초마다 한 번 발동되며, 캐릭터가 대기 상태일 때도 발동된다. <em>회상의 부적</em> 4장 소유 시, 부적을 모두 소모하여 주변의 파티 내 모든 캐릭터에게 12초 동안 「<em>천년의 악장·이별의 노래</em>」효과를 부여한다.\n원소 마스터리가 100/125/150/175/200pt 증가하고, 공격력이 20/25/30/35/40% 증가한다. 발동 후 20초 동안은 <em>회상의 부적</em>을 획득할 수 없다. <em>천년의 대악장</em>의 수치 효과 중 동일 유형의 수치 효과는 중첩될 수 없다.'
              ]},{
    name:'아모스의 활',
    atk:46,
    subStat:'공격력',
    subEffect:['잊지 않은 포부',
    '일반/강공격 피해+12/15/18/21/24%\n일반/강공격 화살이 발사된 후 0.1초가 지날 때마다 피해가 8/10/12/14/16%씩 증가한다. 최대 중첩수 : 5회'
              ]},{
    name:'비뢰의 고동',
    atk:46,
    subStat:'치명타 피해',
    subEffect:['비뢰 어궁',
    '공격력이 20% 증가하고, <em>비뢰의 문장</em>의 위세를 획득한다.\n<em>비뢰의 문장</em> : 1/2/3스택의 <em>비뢰의 문장</em>보유 시, 일반 공격으로 가하는 피해가 각각 12/24/40% - 15/30/50% - 18/36/60% - 21/42/70% - 24/48/80% 증가한다\n<em>비뢰의 문장</em> 1 스택 조건 : 일반 공격으로 피해를 가하면 5초간 유지. 원소 전투 스킬을 발동하면 10초간 유지. 캐릭터의 원소 에너지가 100% 미만일 때 유지. 각 <em>비뢰의 문장</em>의 지속시간은 따로 적용된다.'
              ]},{
    name:'극지의 별',
    atk:46,
    subStat:'치명타 피해',
    subEffect:['만물 정화의 형상',
    'HP가 16/20/24/28/32% 증가하고, 해당 무기를 장착한 캐릭터 주변에 적이 존재하면 캐릭터가 가하는 피해가 20/25/30/35/40% 증가한다. 이 효과는 해당 캐릭터가 대기상태일 때도 발동된다.'
              ]},{
    name:'페보니우스 활',
    atk:41,
    subStat:'원소 충전 효율',
    subEffect:['바람과 함께',
    '치명타 발생 시 60/70/80/90/100%의 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다.'
              ]},{
    name:'절현',
    atk:42,
    subStat:'원소 마스터리',
    subEffect:['무형 화살의 노래',
    '원소 전투 스킬과 원소 폭발 피해가 24/30/36/42/48% 증가한다.'
              ]},{
    name:'제례활',
    atk:44,
    subStat:'원소 충전 효율',
    subEffect:['침착',
    '원소 전투 스킬로 피해를 줄 때 40/50/60/70/80% 확률로 해당 스킬의 재발동 대기시간이 초기화된다. 해당 효과는 30/26/22/19/16초마다 1번 발동한다.'
              ]},{
    name:'왕실의 장궁',
    atk:42,
    subStat:'공격력',
    subEffect:['집중',
    '공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩수 5회. 공격 시 치명타가 발생하면 모든 효과가 사라진다.'
              ]},{
    name:'녹슨 활',
    atk:42,
    subStat:'공격력',
    subEffect:['속사 궁술',
    '일반 공격으로 주는 피해가 40/50/60/70/80% 증가한다. 강공격 피해-10%'
              ]},{
    name:'담월 프로토타입',
    atk:42,
    subStat:'공격력',
    subEffect:['이착 불귀',
    '조준 사격 시 약점에 명중하면 이동속도가 10% 증가하고 공격력이 36/45/54/63/72% 증가한다. 지속시간 : 10초'
              ]},{
    name:'강철궁',
    atk:41,
    subStat:'물리 피해 보너스',
    subEffect:['에너지 주입 화살',
    '일반/조준 사격이 적에게 명중 시 공격력이 4/5/6/7/8% 증가하고 일반 공격의 공격 속도가 1.2/1.5/1.8/2.1/2.4% 증가한다. 지속시간 : 6초. 최대 중첩수 : 4회. 해당 효과는 0.3초마다 1번 발동한다.'
              ]},{
    name:'흑암 배틀 보우',
    atk:44,
    subStat:'치명타 피해',
    subEffect:['승승장구',
    '적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속시간 : 30초. 최대 중첩수 : 3최. 중첩 1회당 지속시간은 따로 계산한다.'
              ]},{
    name:'청록의 사냥활',
    atk:42,
    subStat:'치명타 확률',
    subEffect:['청록색의 바람',
    '일반/강공격 명중 시 50% 확률로 <em>바람의 눈</em>을 1개 생생해 주변의 적을 끌어당기고 닿은 적에게 0.5초마다 공격력 40/50/60/70/80%의 피해를 준다. 지속시간 : 4초. 해당 효과는 14/13/12/11/10초마다 1번 발동한다.'
              ]},{
    name:'바람 꽃의 노래',
    atk:42,
    subStat:'원소 마스터리',
    subEffect:['바람 꽃의 염원',
    '원소 전투 스킬 발동 시, 바람의 꽃의 오랜 염원으로 공격력이 16/20/24/28/32% 증가한다. 지속시간 : 6초'
              ]},{
    name:'뒷골목 사냥꾼',
    atk:44,
    subStat:'공격력',
    subEffect:['골목의 매복자',
    '이 무기를 장착한 캐릭터가 대기 상태인 경우 매 초마다 가하는 피해가 2/2.5/3/3.5/4%씩 최대 20/25/30/35/40% 까지 증가한다. 이 효과는 해당 캐릭터가 4초 이상 필드에 나와있을 경우 매 초마다 4/5/6/7/8%씩 최소 0%까지 감소한다.'
              ]},{
    name:'유야의 왈츠',
    atk:42,
    subStat:'물리 피해 보너스',
    subEffect:['극야의 2중주',
    '일반 공격 명중 후 5초 동안 원소 전투 스킬 피해가 20/25/30/35/40% 증가한다. 원소 전투 스킬 명중 후 5초 동안 일반 공격 피해가 20/25/30/35/40% 증가한다.'
              ]},{
    name:'파마궁',
    atk:41,
    subStat:'공격력',
    subEffect:['아사세의 활고자',
    '일반 공격으로 가하는 피해가 16/20/24/28/32% 증가하고, 강공격으로 가하는 피해가 12/15/18/21/24% 증가한다. 해당 무기를 장착한 캐릭터의 원소 에너지가 100%일 때, 해당 효과는 100% 증가한다.'
              ]},{
    name:'포식자',
    atk:42,
    subStat:'공격력',
    subEffect:['강력한 공격',
    'Playstation Network에서만 적용.\n적에게 얼음 원소 피해를 준 후, 일반/강공격으로 가하는 피해가 10% 증가한다. 지속시간 : 6초. 최대 중첩수 : 2회. 또한, <em>에일로이</em>가 <em>포식자</em>를 장착할 때 공격력이 66pt 증가한다.'
              ]},{
    name:'모운의 달',
    atk:44,
    subStat:'공격력',
    subEffect:['파도를 지배하는 와타츠미 백성',
    '파티 내 모든 캐릭터의 원소 에너지 최대치의 총합을 기반으로, 1pt마다 해당 무기를 장착한 캐릭터의 원소 폭발 피해가 0.12/0.15/0.18/0.21/0.24% 증가한다. 해당 방식을 통해 원소 폭발로 가하는 피해가 최대 40/50/60/70/80%까지 증가한다.'
              ]},{
    name:'노을',
    atk:44,
    subStat:'원소 충전 효율',
    subEffect:['심연을 비추는 노을',
    '<em>석양</em>, <em>유하</em>, <em>조휘</em> 3가지 상태는 캐릭터가 가하는 피해를 각각 12/20/28% 증가시킨다. 캐릭터의 공격이 적을 명중 시, 순서대로 상태를 전환한다. 7초마다 1회 전환되며, 해당 무기를 장착한 캐릭터가 대기 상태일 때도 발동된다.'
              ]},{
    name:'까마귀깃 활',
    atk:40,
    subStat:'원소 마스터리',
    subEffect:['따끈따끈 첨벙첨벙',
    '물/불 원소의 영향을 받은 적에게 가하는 피해가 12/15/18/21/24% 증가한다.'
              ]},{
    name:'신궁의 서약',
    atk:39,
    subStat:'치명타 피해',
    subEffect:['정확',
    '약점 공격 시 가하는 피해가 24/30/36/42/48% 증가한다.'
              ]},{
    name:'곡궁',
    atk:38,
    subStat:'HP',
    subEffect:['수확',
    '적을 처치하면 HP를 8/10/12/14/16% 회복한다.'
              ]},{
    name:'탄궁',
    atk:38,
    subStat:'치명타 확률',
    subEffect:['탄궁',
    '일반/조준 공격 시 화살 발사 후 0.3초 내에 적을 명중하면 가하는 피해가 36/42/48/54/60% 증가한다. 반대일 경우 가하는 피해가 10% 감소한다.'
              ]},{
    name:'전령',
    atk:40,
    subStat:'치명타 피해',
    subEffect:['명적 발사',
    '조준 사격 시 약점에 명중하면 추가로 공격력 100/125/150/175/200%의 피해를 주고 반드시 치명타가 터진다. 해당 효과는 10초마다 1번 발동한다.'
              ]},{
    name:'사냥꾼의 길',
    atk:44,
    subStat:'치명타 확률',
    subEffect:['동물이 거니는 길의 끝',
    '모든 원소 피해 보너스를 12% 획득한다.\n강공격 명중 후, <em>무한 사냥</em>을 획득한다. 강공격으로 가하는 피해가 원소 마스터리 수치의 160% 만큼 증가한다. 해당 효과는 12회 발동 후 또는 10초 후 사라지고, 12초마다 <em>무한 사냥</em> 효과를 최대 1회 획득할 수 있다.'
              ]},{
    name:'메마른 연못',
    atk:42,
    subStat:'원소 충전 효율',
    subEffect:['찢어진 그물',
    '원소 전투 스킬 발동 후 <em>연회</em> 효과가 발동한다.\n공격이 적에게 명중하면 공격력의 80%에 해당하는 범위 피해를 준다. 해당 효과는 15초 동안 지속되거나 3회의 범위 피해 발동 시 사라진다.\n해당 방식으로 2초마다 최대 1회의 범위 피해를 주고 12초마다 <em>연회</em>를 최대 1회 발동할 수 있다.'
              ]},{
    name:'왕의 측근',
    atk:41,
    subStat:'공격력',
    subEffect:['미궁의 왕의 가르침',
    '원소 전투 스킬 또는 원소 폭발 발동 시 <em>숲의 가르침</em> 효과를 획득하고 원소 마스터리가 60pt 증가한다. 지속시간 : 12초. 해당 효과는 캐릭터 교체 시 사라진다.\n<em>숲의 가르침</em>의 지속시간이 종료되거나 효과가 사라지면 주변의 적 1명에게 공격력 100%의 피해를 준다. <em>숲의 가르침</em>은 20초마다 최대 1회 발동된다.'
              ]}
    
    
    
    
    
    //한손검
    ,{
    name:'매의 검',
    atk:48,
    subStat:'물리 피해 보너스',
    subEffect:['서풍 매의 투쟁',
    '공격력이 20/25/30/35/40% 증가한다. 피해를 입으면 다음 효과가 발동한다 : \n투쟁의 깃발을 높이 든 서풍 매의 영혼이 깨어나 공격력 100/115/130/145/160%만큼의 HP를 회복하고 주변의 적에게 공격력 200/230/260/290/320%의 피해를 준다. 해당 효과는 15초마다 1번 발동한다.'
              ]},{
    name:'반암결록',
    atk:44,
    subStat:'치명타 확률',
    subEffect:['수호자의 무구한 마음',
    'HP가 20/25/30/35/40% 증가하고, 이 무기를 장착한 캐릭터 HP 최대치의 1.2/1.5/1.8/2.1/2.4%에 해당하는 공격력 보너스를 획득한다.'
              ]},{
    name:'참봉의 칼날',
    atk:46,
    subStat:'공격력',
    subEffect:['금빛의 옥·제군의 길',
    '보호막 강화 효과가 20/25/30/35/40% 증가한다. 공격 명중 후 공격력이 4/5/6/7/8% 증가한다. 지속시간 : 8초. 최대 중첨수 : 5회. 해당 효과는 0.3초마다 1번 발동한다. 또한 보호막 존재 시 해당 효과의 공격력 증가 효과가 100% 증가한다.'
              ]},{
    name:'천공의 검',
    atk:46,
    subStat:'원소 충전 효율',
    subEffect:['높은 하늘을 둟는 이빨',
    '치명타 확률이 4/5/6/7/8% 증가한다. 원소 폭발 발동 시 <em>파공의 기세</em>를 획득한다 : 이동속도, 공격속도+10%\n일반/강공격이 명중 시 추가로 공격력 20/25/30/35/40%의 피해를 준다. 지속시간 : 12초.'
              ]},{
    name:'오래된 자유의 서약',
    atk:46,
    subStat:'원소 마스터리',
    subEffect:['실천하는 투쟁의 노래',
    '바람 속을 유랑하는 「천년의 대악장」의 일부분이다. 가하는 피해가 10/12.5/15/17.5/20% 증가한다. 원소 반응을 발동할 때 캐릭터는 <em>투쟁 부적</em>을 한 장 획득한다. (0.5초마다 한 번 발동) 캐릭터가 대기 상태일 때도 발동할 수 있다.\n<em>투쟁 부적</em> 2장 보유 시, 2장의 부적을 모두 사용하여 파티 내 모든 캐릭터가 12초 동안 <em>천년의 대악장·투쟁의 노래</em> 효과를 획득한다. 일반/강/낙하 공격 피해가 16/20/24/28/32% 증가하고, 공격력이 20/25/30/35/40% 증가한다. 발동 후 20초 동안은 <em>투쟁 부적</em>을 획득할 수 없다. <em>천년의 대악장</em>의 발동 효과는 동일한 수치의 다른 효과들과 중첩되지 않는다.'
              ]},{
    name:'안개를 가르는 회광',
    atk:48,
    subStat:'치명타 피해',
    subEffect:['무절 어검',
    '모든 원소 피해 보너스를 12% 획득하고 <em>무절의 문장</em>을 획득한다. 1/2/3 스택의 <em>무절의 문장</em> 보유 시, 각각 8/16/28% - 10/20/35% - 12/24/42% - 14/28/49% - 16/32/56%에 해당하는 자신의 원소 타입의 원소 피해 보너스를 획득한다.\n캐릭터가 <em>무절의 문장</em>을 획득할 수 있는 상황 : 일반 공격으로 원소 피해를 가하면 5초간 유지. 원소 폭발을 발동하면 10초간 지속. 캐릭터의 원소 에너지가 100% 미만일 때 지속. 해당 <em>무절의 문장</em>의 각 스택 지속시간은 따로 계산된다.'
              ]},{
    name:'하란 월백의 후츠',
    atk:46,
    subStat:'치명타 확률',
    subEffect:['흐르는 칼날',
    '모든 원소 피해 보너스를 12% 획득한다. 근처 파티 내 다른 캐릭터가 원소 전투 스킬 발동 시 해당 무기를 장착한 캐릭터가 <em>하스이</em> 효과를 1스택 획득한다. 0.3초마다 최대 1회 발동한다. 최대 중첩수 : 2스택.\n해당 무기를 장착한 캐릭터가 원소 전투 스킬을 발동 시 누적되어 있는 <em>하스이</em>를 소모하여 <em>하란</em> 효과를 획득한다. 소모한 스택마다 일반 공격 피해가 20% 증가한다. 지속시간 : 8초.'
              ]},{
    name:'페보니우스 검',
    atk:41,
    subStat:'원소 충전 효율',
    subEffect:['바람과 함께',
    '치명타 시 60/70/80/90/100% 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다.'
              ]},{
    name:'피리검',
    atk:42,
    subStat:'공격력',
    subEffect:['화음',
    '일반/강공격이 명중 시 <em>하모니</em>를 부여한다. 5 <em>하모니</em>를 얻으면 음악의 힘이 발동하고 주변의 적에게 100/125/150/175/200%의 피해를 준다. <em>하모니</em>는 최대 30초 동안 지속되며 0.5초마다 최대 1개 얻을 수 있다.'
              ]},{
    name:'제례검',
    atk:41,
    subStat:'원소 충전 효율',
    subEffect:['침착',
    '원소 전투 스킬로 피해를 줄 때 40/50/60/70/80% 확률로 해당 스킬의 재사용 대기시간이 초기화된다. 해당 효과는 30/26/22/19/16초마다 발동된다.'
              ]},{
    name:'왕실의 장검',
    atk:42,
    subStat:'공격력',
    subEffect:['집중',
    '공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩수 : 5회. 공격 시 치명타가 발생하면 모든 효과가 사라진다.'
              ]},{
    name:'용의 포효',
    atk:42,
    subStat:'공격력',
    subEffect:['따끈따끈 짜릿짜릿',
    '불/번개 원소의 영향을 받은 적에게 가하는 피해가 20/24/28/32/36% 증가한다.'
              ]},{
    name:'참암 프로토타입',
    atk:44,
    subStat:'물리 피해 보너스',
    subEffect:['부서진 바위',
    '일반/강공격 명중 시 공격력과 방어력이 4/5/6/7/8% 증가한다. 지속시간 : 6초. 최대 중첩수 : 4회. 해당 효과는 0.3초마다 1번 발동한다.'
              ]},{
    name:'강철 벌침',
    atk:42,
    subStat:'원소 마스터리',
    subEffect:['에너지 주입 가시',
    '원소 피해를 가한 후 6초 동안 캐릭터가 가하는 피해가 6/7.5/9/10.5/12% 증가한다. 최대 중첩수 : 2회. 해당 효과는 1초마다 1번 발동한다.'
              ]},{
    name:'흑암 장검',
    atk:44,
    subStat:'치명타 피해',
    subEffect:['승승장구',
    '적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속시간 : 30초. 최대 중첩수 : 3회. 중첩 1회당 지속시간은 따로 계산한다.'
              ]},{
    name:'칠흑검',
    atk:42,
    subStat:'치명타 확률',
    subEffect:['정의',
    '일반/강공격으로 가하는 피해가 20/25/30/35/40% 증가한다. 또한 일반/강공격에 치명타 발생 시 공격력의 60/70/80/90/100%에 해당 하는 HP를 회복한다. 해당 효과는 5초마다 1번 발동한다.'
              ]},{
    name:'강림의 검',
    atk:39,
    subStat:'공격력',
    subEffect:['현새 강림',
    'Playstation Network에서만 적용.\n 일반/강공격 명중 후 50% 확률로 작은 범위에 공격력 200%의 피해를 준다. 해당 효과는 10초마다 1회 발동한다. 또한 <em>여행자</em>가 <em>강림의 검</em> 착용 시 공격력이 66pt 증가한다.'
              ]},{
    name:'부식의 검',
    atk:42,
    subStat:'원소 충전 효율',
    subEffect:['끝없는 갈망',
    '원소 전투 스킬로 가하는 피해가 16/20/24/28/32% 증가하고 원소 전투 스킬의 치명타 확률이 6/7.5/9/10.5/12% 증가한다.'
              ]},{
    name:'뒷골목의 섬광',
    atk:45,
    subStat:'원소 마스터리',
    subEffect:['골목의 레인저',
    '캐릭터가 가하는 피해가 12/15/18/21/24% 증가한다. 피해를 받은 후, 피해 증가 효과는 5초 동안 사라진다.'
              ]},{
    name:'아메노마 카게우치가타나',
    atk:41,
    subStat:'공격력',
    subEffect:['이와쿠라의 후손',
    '원소 전투 스킬 발동 후 <em>계승의 씨앗</em>을 1개 획득하고, 해당 효과는 5초마다 1회 발동된다. <em>계승의 씨앗</em> 지속시간 : 30초. 동시에 최대 3개까지 존재할 수 있다. 원소 폭발 발동 후 보유중인 <em>계승의 씨앗</em>이 모두 소모되며, 2초 후 소모된 <em>계승의 씨앗</em>의 개수에 따라 하나당 해당 캐릭터의 원소 에너지를 6/7.5/9/10.5/12pt 회복한다.'
              ]},{
    name:'진사의 방추',
    atk:41,
    subStat:'방어력',
    subEffect:['무구한 마음',
    '원소 전투 스킬 피해량이 방어력의 40/50/60/70/80% 만큼 증가한다. 해당 효과는 1.5초마다 최대 1회 발동되며, 원소 전투 스킬로 피해를 가한 다음 0.1초 후에 효과가 사라진다.'
              ]},{
    name:'카고츠루베 잇신',
    atk:42,
    subStat:'공격력',
    subEffect:['투명한 잇신의 기술',
    '일반/강/낙하 공격이 적에게 명중 시, 날카로운 바람으로 공격력의 180%에 해당하는 범위 피해를 주고 공격력이 15% 발동된다. 지속시간 : 8초. 해당 효과는 8초마다 최대 1회 발동된다.'
              ]},{
    name:'차가운 칼날',
    atk:39,
    subStat:'공격력',
    subEffect:['해빙의 물',
    '물/얼음 원소의 영향을 받은 적에게 가하는 피해가 12/15/18/21/24% 증가한다.'
              ]},{
    name:'여명신검',
    atk:39,
    subStat:'치명타 피해',
    subEffect:['격려',
    'HP가 90% 초과 시 치명타 확률이 14/17.5/21/24.5/28% 증가한다.'
              ]},{
    name:'여행자의 검',
    atk:40,
    subStat:'방어력',
    subEffect:['여정',
    '원소 구슬 또는 원소 입자를 획득 시 HP를 1/1.25/1.5/1.75/2% 회복한다.'
              ]},{
    name:'흘호 생선회칼',
    atk:39,
    subStat:'공격력',
    subEffect:['결',
    '공격 명중 시 50%의 확률로 단일 대상에게 공격력 240/280/320/360/400%의 피해를 준다. 해당 효과는 15/14/13/12/11초마다 1번 발동한다.'
              ]},{
    name:'비천어검',
    atk:38,
    subStat:'원소 충전 효율',
    subEffect:['결심',
    '원소 폭발 발동 후 공격력과 이동속도가 12/15/18/21/24% 증가한다.'
              ]},{
    name:'암철검',
    atk:39,
    subStat:'원소 마스터리',
    subEffect:['과전류',
    '과전화, 초전도, 감전, 번개 원소 확산 반응 후 12초동안 공격력이 20/25/30/35/40% 증가한다.'
              ]},{
    name:'원목 검',
    atk:44,
    subStat:'원소 충전 효율',
    subEffect:['숲의 비호',
    '연소, 활성, 촉진, 발산, 개화, 만개 혹은 발화 발동 후, 캐릭터 주변에 최대 10초 동안 지속되는 <em>유식의 잎사귀</em>가 생성된다. <em>유식의 잎사귀</em>를 습득한 캐릭터는 원소 마스터리가 60/75/90/105/120pt 증가한다. 지속시간 : 12초.\n해당 방식으로 20초마다 <em>유식의 잎사귀</em>를 최대 1개 생성한다. 캐릭터가 대기 상태일 때도 발동한다. <em>유식의 잎사귀</em> 효과는 중첩되지 않는다.'
              ]},{
    name:'크시포스의 달빛',
    atk:42,
    subStat:'원소 마스터리',
    subEffect:['지니의 속삭임',
    '10초마다 다음 효과가 발생한다.\n장착한 캐릭터의 원소 마스터리 1pt 당 해당 캐릭터의 원소 충전 효율을 0.036/0.045/0.054/0.063/0.072% 만큼 증가시키고, 해당 증가량의 30% 만큼 근처에 있는 파티 내 다른 캐릭터의 원소 충전 효율을 증가시킨다. 지속시간 : 12초.\n동명의 무기를 여러 개 장착 시 해당 효과의 중첩이 가능하다. 캐릭터가 대기상태일 때도 발동된다.'
              ]},{
    name:'성현의 열쇠',
    atk:44,
    subStat:'HP',
    subEffect:['모래바다에 잠긴 서사시',
    'HP가 20/25/30/35/40% 증가한다. 원소 전투 스킬이 적을 명중하면 20초 동안 지속되는 <em>웅장한 시편</em>효과를 획득한다. : \n장착한 캐릭터 HP 최대치의 0.12/0.15/0.18/0.21/0.24%만큼 원소 마스터리를 획득한다. 해당 효과는 0.3초마다 최대 1회 발동할 수 있다. 최대 중첩수 : 3.\n해당 효과가 3스택 또는 지속시간이 갱신되면 장착한 캐릭터 HP 최대치의 0.2/0.25/0.3/0.35/0.4%만큼 근처 파티 내 모든 캐릭터의 원소 마스터리가 증가한다. 지속시간 : 20초.'
              ]}
    
    
    
    //양손검
    ,{
    name:'천공의 긍지',
    atk:48,
    subStat:'원소 충전 효율',
    subEffect:['맑은 하늘을 가르는 용의 척추',
    '가하는 피해가 8/10/12/14/16% 증가한다. 원소 폭발 사용 후 일반/강공격 명중 시 <em>진공의 칼날</em>이 발사되어 경로상의 적들에게 공격력의 80/100/120/140/160%의 피해를 준다. 지속시간 : 20초 또는 <em>진공의 칼날</em> 8번 소모할 때까지.'
              ]},{
    name:'늑대의 말로',
    atk:46,
    subStat:'공격력',
    subEffect:['늑대 같은 사냥꾼',
    '공격력+20/25/30/35/40%. HP가 30% 미만인 적을 명중 시 모든 파티원의 공격력이 40/50/60/70/80% 증가한다. 지속시간 : 12초. 해당 효과는 30초마다 1번 발동한다.'
              ]},{
    name:'무공의 검',
    atk:46,
    subStat:'공격력',
    subEffect:['금빛의 옥·제군의 길',
    '보호막 강화 효과가 20/25/30/35/40% 증가한다. 공격 명중 후 공격력이 4/5/6/7/8% 증가한다. 해당 효과는 0.3초마다 1번 발동한다. 지속시간 : 8초. 최대 중첩수 : 5회. 또한 보호막 존재 시 공격력 증가 효과가 100% 증가한다.'
              ]},{
    name:'송뢰가 울릴 무렵',
    atk:49,
    subStat:'물리 피해 보너스',
    subEffect:['깃발을 든 반항의 노래',
    '바람 속을 유랑하는 「천년의 대악장」의 일부분. 공격력이 16/20/24/28/32% 증가한다. 일반/강공격이 적에게 명중 시, 캐릭터는 <em>속삭임의 부적</em> 1개를 획득한다. 이는 0.3초마다 한 번 발동한다.\n<em>속삭임의 부적</em> 4개 소유 시, 부적을 모두 소모하여 주변의 파티 내 모든 캐릭터에게 12초동안 <em>천년의 대악장·깃발의 노래</em> 효과를 부여한다 :\n일반 공격속도가 12/15/18/21/24% 증가하고, 공격력이 20/25/30/35/40% 증가한다. 발동 후 20초 동안은 <em>속삭임의 부적</em>을 획득할 수 없다. <em>천년의 대악장</em> 수치 효과중 동일 유형의 효과는 중첩될 수 없다.'
              ]},{
    name:'쇄석의 붉은 뿔',
    atk:44,
    subStat:'치명타 피해',
    subEffect:['오토기 대왕의 동화',
    '방어력이 28/35/42/49/56% 증가한다. 일반/강공격 피해량이 방어력의 40/50/60/70/80% 만큼 증가한다.'
              ]},{
    name:'페보니우스 대검',
    atk:41,
    subStat:'원소 충전 효율',
    subEffect:['바람과 함께',
    '치명타 발생 시 60/70/80/90/100% 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다.'
              ]},{
    name:'시간의 검',
    atk:42,
    subStat:'HP',
    subEffect:['반역의 수호자',
    '피격 시 HP 최대치의 20/23/26/29/32% 피해를 흡수하는 보호막이 생성된다. 보호막은 10초간 지속하거나 보호막이 파괴될 때까지 유지된다. 45초마다 1회 발동한다. 보호막 존재 시 캐릭터가 가하는 피해가 12/15/18/21/24% 증가한다.'
              ]},{
    name:'제례 대검',
    atk:44,
    subStat:'원소 충전 효율',
    subEffect:['침착',
    '원소 전투 스킬로 피해를 줄 때 40/50/60/70/80%의 확률로 해당 스킬의 재사용 대기시간이 초기화된다. 해당 효과는 30/26/22/19/16초마다 1번 발동한다.'
              ]},{
    name:'왕실의 대검',
    atk:44,
    subStat:'공격력',
    subEffect:['집중',
    '공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩주 : 5회. 공격 시 치명타가 발생하면 모든 효과가 사라진다.'
              ]},{
    name:'빗물 베기',
    atk:42,
    subStat:'원소 마스터리',
    subEffect:['첨벙첨벙 찌릿찌릿',
    '물/번개 원소의 영향을 받은 적에게 가하는 피해가 20/24/28/32/36% 증가한다.'
              ]},{
    name:'고화 프로토타입',
    atk:44,
    subStat:'공격력',
    subEffect:['분쇄',
    '일반/강공격 명중 후 50% 확률로 작은 범위 내의 적에게 공격력 240/300/360/420/480%의 추가 피해를 준다. 해당 효과는 15초마다 1번 발동한다.'
              ]},{
    name:'백영검',
    atk:42,
    subStat:'방어력',
    subEffect:['에너지 주입 칼날',
    '일반/강공격 명중 시 공경력과 방어력이 6/7.5/9/10.5/12% 증가한다. 지속시간 : 6초. 최대 중첩수 : 4회. 해당 효과는 0.5초마다 1번 발동한다.'
              ]},{
    name:'흑암참도',
    atk:42,
    subStat:'치명타 피해',
    subEffect:['승승장구',
    '적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속시간 : 30초. 최대 중첩수 : 3회. 중첩의 지속시간은 따로 계산된다.'
              ]},{
    name:'이무기 검',
    atk:42,
    subStat:'치명타 확률',
    subEffect:['파도 가르기',
    '캐릭터가 필드에 있을 때 4초마다 가하는 피해가 6/7/8/9/10%, 받는 피해가 3/2.7/2.4/2.2/2% 증가한다. 최대 중첩수 : 5회. 캐릭터를 대기 상태로 전환해도 효과는 초기화되지 않는다. 피해를 받으면 중첩수가 1개 사라진다.'
              ]},{
    name:'설장의 성은',
    atk:44,
    subStat:'물리 피해 보너스',
    subEffect:['서리의 매장',
    '일반/강공격이 적에게 명중 시 60/70/80/90/100% 확률로 적의 위쪽에 영원의 얼음 결정을 생성한 후 떨궈 공격력 80/95/110/125/140%의 범위 피해를 준다.\n적이 얼음 원소의 영향을 받으면 공격력 200/240/280/320/360%의 피해를 준다. 해당 효과는 10초마다 1회 발동한다.'
              ]},{
    name:'천암고검',
    atk:42,
    subStat:'공격력',
    subEffect:['천암결·일심',
    '파티 내에 리월 출신 캐릭터가 1명 존재할 때마다 해당 무기를 장착한 캐릭터의 공격력이 7/8/9/10/11% 증가하고, 치명타 확률이 3/4/5/6/7% 증가한다. 최대 중첩수 : 4회.'
              ]},{
    name:'카츠라기를 벤 나가마사',
    atk:42,
    subStat:'원소 충전 효율',
    subEffect:['명사의 거동',
    '원소 전투 스킬로 가하는 피해가 6/7.5/9/10.5/12% 증가한다. 원소 전투 스킬이 명중하면, 캐릭터는 원소 에너지를 3pt를 잃고 그 후 6초동안 2초마다 원소 에너지를 3/3.5/4/4.5/5pt 회복한다. 이 효과는 10초마다 최대 1회만 발동하며, 캐릭터가 대기 상태일 때도 발동된다.'
              ]},{
    name:'진주를 문 해황',
    atk:41,
    subStat:'공격력',
    subEffect:['바다의 승리',
    '원소 폭발로 가하는 피해가 12/15/18/21/24% 증가한다. 원소 폭발이 적을 명중하면, 100% 확률로 참다랑어를 소환해 공격력 100/125/150/175/200%의 범위 피해를 준다. 해당 효과는 15초마다 1회 발동한다.'
              ]},{
    name:'아쿠오마루',
    atk:42,
    subStat:'공격력',
    subEffect:['파도를 지배하는 와타츠미 백성',
    '파티 내 모든 캐릭터의 원소 에너지 최대치의 총합을 기반으로, 1pt마다 해당 무기를 장착한 캐릭터의 원소 폭발 피해가 0.12/0.15/0.18/0.21/0.24% 증가한다. 해당 방식을 통해 원소 폭발로 가하는 피해가 최대 40/50/60/70/80%까지 증가한다.'
              ]},{
    name:'강철의 그림자',
    atk:39,
    subStat:'HP',
    subEffect:['불굴',
    'HP가 70/75/80/85/90% 미만일 때 강공격 발동 시 쉽게 경직되지 않고 강공격 피해가 30/35/40/45/50% 증가한다.'
              ]},{
    name:'드래곤 블러드 소드',
    atk:38,
    subStat:'원소 마스터리',
    subEffect:['따끈따끈 찌릿찌릿',
    '불/번개 원소의 영향을 받은 적에게 가하는 피해가 12/15/18/21/24% 증가한다.'
              ]},{
    name:'백철 대검',
    atk:39,
    subStat:'방어력',
    subEffect:['수확',
    '적을 처치하면 HP를 8/10/12/14/16% 회복한다.'
              ]},{
    name:'훌륭한 대화수단',
    atk:39,
    subStat:'공격력',
    subEffect:['직설',
    '원소 전투 스킬 발동 후 일반/강공격이 적에게 명중하면 작은 범위 내에 공격력 60/75/90/105/120%의 피해를 추가로 준다. 지속시간 : 15초. 해당 효과 피해는 3초마다 1번 발동한다.'
              ]},{
    name:'비천대어검',
    atk:39,
    subStat:'물리 피해 보너스',
    subEffect:['용기',
    '일반/강공격 명중 시 공격력이 6/7/8/9/10% 증가한다. 지속시간 : 6초. 최대 중첩수 : 4회. 해당 효과는 0.5초마다 1번 발동한다.'
              ]},{
    name:'숲의 리게일리어',
    atk:44,
    subStat:'원소 충전 효율',
    subEffect:['숲의 비호',
    '연소, 활성, 촉진, 발산, 개화, 만개 혹은 발화 발동 후, 캐릭터 주변에 최대 10초 동안 존재하는 <em>유식의 잎사귀</em>가 생성된다. <em>유식의 잎사귀</em>를 습득한 캐릭터는 원소 마스터리가 60pt 증가한다. 지속시간 : 12초.\n해당 방식으로 20초마다 <em>유식의 잎사귀</em>를 최대 1개 생성한다. 캐릭터가 대기상태일 때도 발동된다. <em>유식의 잎사귀</em> 효과는 중첩되지 않는다.'
              ]},{
    name:'물빛 마카이라',
    atk:42,
    subStat:'원소 마스터리',
    subEffect:['모래 위 누각',
    '10초마다 다음 효과가 발생한다.\n장착한 캐릭터의 원소 마스터리의 24/30/36/42/48% 만큼 해당 캐릭터의 공격력이 상승하고, 해당 증가량의 30% 만큼 근처 파티 내 다른 캐릭터의 공격력이 증가한다. 지속시간 : 12초.\n동명의 무기를 여러 개 장착 시 해당 효과의 중첩이 가능하다. 캐릭터가 대기상태일 때도 발동된다.'
              ]}
    
    
    
    
    
    //장병기
    ,{
    name:'화박연',
    atk:48,
    subStat:'치명타 확률',
    subEffect:['정의의 솔개창',
    '적 명중 시 자신의 공격력이 3.2/3.9/4.6/5.3/6% 증가한다. 지속시간 : 6초. 최대 중첩수 : 7회. 해당 효과는 0.3초마다 1번 발동한다. 최대 중첩 시 피해가 12/15/18/21/24% 증가한다.'
              ]},{
    name:'천공의 마루',
    atk:48,
    subStat:'원소 충전 효율',
    subEffect:['검은 날개를 절단하는 이빨',
    '치명타 확률이 8/10/12/14/16%, 일반 공격속도가 12% 증가한다. 또한 일반/강공격 명중 시 50% 확률로 <em>진공 칼날</em>을 날려 작은 범위 내의 적에게 추가로 공격력의 40/55/70/85/100%의 피해를 준다. 해당 효과는 2초마다 1번 발동한다.'
              ]},{
    name:'관홍의 창',
    atk:46,
    subStat:'공격력',
    subEffect:['금빛의 옥·제군의 길',
    '보호막 강화 효과가 20/25/30/35/40% 증가한다. 공격 명중 후 공격력이 4/5/6/7/8% 증가한다. 해당 효과는 0.3초마다 1번 발동한다. 지속시간 : 8초. 최대 중첩수 : 5회. 또한 보호막 존재 시 해당 효과의 공격력 증가 효과가 100% 증가한다.'
              ]},{
    name:'호마의 지팡이',
    atk:46,
    subStat:'치명타 피해',
    subEffect:['자유의 붉은 나비',
    'HP가 20/25/30/35/40% 증가하고, 이 무기를 장착한 캐릭터 HP 최대치의 0.8/1/1.2/1.4/1.6%에 해당하는 공격력 보너스를 획득한다. 이 무기를 장착한 캐릭터의 HP가 50% 미만일 경우, 공격력이 추가로 HP 최대치의 1/1.2/1.4/1.6/1.8%만큼 증가한다.'
              ]},{
    name:'예초의 번개',
    atk:46,
    subStat:'원소 충전 효율',
    subEffect:['불시의 꿈·영원한 부뚜막',
    '원소 충전 효율이 100%를 초과할 경우, 초과된 부분의 28/35/42/49/56%만큼 공격력이 증가하며, 해당 방식을 통해 최대 80/90/100/110/120% 증가할 수 있다. 원소 폭발 발동 후 12초동안 원소 충전 효율이 30/35/40/45/50% 증가한다.'
              ]},{
    name:'식재',
    atk:49,
    subStat:'공격력',
    subEffect:['멸각의 계법',
    '모든 원소의 피해 보너스를 12/15/18/21/24% 획득한다. 원소 전투 스킬 발동 시, 20초 동안 지속되는 <em>원돈</em>을 획득하고 공격력이 1초마다 3.2/4/4.8/5.6/6.4% 증가한다. 해당 공격력 증가 효과는 최대 6회 중첩된다. 해당 무기를 장착한 캐릭터가 대기 상태일 때 <em>원돈</em>의 공격력 증가 효과는 2배가 된다.'
              ]},{
    name:'용학살창',
    atk:41,
    subStat:'원소 마스터리',
    subEffect:['따끈따끈 첨벙첨벙',
    '물/불 원소의 영향을 받은 적에게 가하는 피해가 20/24/28/32/36% 증가한다.'
              ]},{
    name:'별의 낫 프로토타입',
    atk:42,
    subStat:'원소 충전 효율',
    subEffect:['마력의 갈증',
    '원소 전투 스킬 발동 후 일반/강공격 피해가 8/10/12/14/16% 증가한다. 지속시간 : 12초. 최대 중첩수 : 2회.'
              ]},{
    name:'유월창',
    atk:44,
    subStat:'물리 피해 보너스',
    subEffect:['에너지 주입 바늘',
    '원소 입자 또는 원소 구슬 획득 후 5초동안 일반/강공격 시 적에게 추가로 공격력 20/25/30/35/40%의 피해를 준다.'
              ]},{
    name:'흑암창',
    atk:42,
    subStat:'치명타 피해',
    subEffect:['승승장구',
    '적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속시간 : 30초. 최대 중첩수 : 3회. 중첩 1회 당 지속시간은 따로 계산된다.'
              ]},{
    name:'결투의 창',
    atk:41,
    subStat:'치명타 확률',
    subEffect:['검투사',
    '주변에 적이 2 명 이상 있을 때 공격력과 방어력이 16/20/24/28/32%, 16/20/24/28/32% 증가한다. 주변의 적이 2 명 미만일 때 공격력이 24/30/36/42/48% 증가한다.'
              ]},{
    name:'페보니우스 장창',
    atk:44,
    subStat:'원소 충전 효율',
    subEffect:['바람과 함께',
    '치명타 발생 시 60/70/80/90/100% 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다.'
              ]},{
    name:'왕실의 장창',
    atk:44,
    subStat:'공격력',
    subEffect:['집중',
    '공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩수 : 5회. 공격 시 치명타가 발생하면 모든 효과가 사라진다.'
              ]},{
    name:'용의 척추',
    atk:41,
    subStat:'물리 피해 보너스',
    subEffect:['서리의 매장',
    '일반/강공격이 적에게 명중 시 60/70/80/90/100% 확률로 적의 위쪽에 <em>영원의 얼음 결정</em>을 생성한 후 떨어뜨려 공격력 80/95/110/125/140%의 범위 피해를 준다. 적이 얼음 원소의 영향을 받으면 공격력 200/240/280/320/360%의 피해를 준다. 해당 효과는 10초마다 1회 발동한다.'
              ]},{
    name:'천암장창',
    atk:44,
    subStat:'공격력',
    subEffect:['찬암결·일심',
    '파티 내에 리월 출신 캐릭터가 1명 존재할 때마다 해당 무기를 장착한 캐릭터의 공격력이 7/8/9/10/11% 증가하고, 치명타 확률이 3/4/5/6/7% 증가한다. 최대 중첩수 : 4회.'
              ]},{
    name:'키타인 십자창',
    atk:44,
    subStat:'원소 마스터리',
    subEffect:['명사의 거동',
    '원소 전투 스킬로 가하는 피해가 6/7.5/9/10.5/12% 증가한다. 원소 전투 스킬이 명중되면, 캐릭터는 원소 에너지를 3pt를 잃고, 그 후 6초동안 2초마다 원소 에너지를 3/3.5/4/4.5/5pt 회복한다. 이 효과는 10초마다 최대 1회만 발동하며, 캐릭터가 대기 상태일 때도 발동한다.'
              ]},{
    name:'어획',
    atk:42,
    subStat:'원소 충전 효율',
    subEffect:['뱃노래',
    '원소 폭발로 가하는 피해가 16/20/24/28/32% 증가하고 원소 폭발의 치명타 확률이 6/7.5/9/10.5/12% 증가한다.'
              ]},{
    name:'파도를 베는 지느러미',
    atk:45,
    subStat:'공격력',
    subEffect:['파도를 지배하는 와타츠미 백성',
    '파티 내 모든 캐릭터의 원소 에너지 최대치의 총합을 기반으로, 1pt마다 해당 무기를 장착한 캐릭터의 원소 폭발 피해가 0.12/0.15/0.18/0.21/0.24% 증가한ㄷ.\n해당 방식을 통해 원소 폭발로 가하는 피해가 최대 40/50/60/70/80%까지 증가한다.'
              ]},{
    name:'백술창',
    atk:39,
    subStat:'치명타 확률',
    subEffect:['예리',
    '일반 공격으로 가하는 피해가 24/30/36/42/48% 증가한다.'
              ]},{
    name:'미늘창',
    atk:40,
    subStat:'공격력',
    subEffect:['무게',
    '일반 공격으로 명중한 적에게 추가로 공격력 160/200/240/280/320%의 피해를 준다. 해당 효과는 10초마다 1번 발동한다.'
              ]},{
    name:'흑술창',
    atk:38,
    subStat:'HP',
    subEffect:['제유',
    '슬라임 타입의 적에게 가하는 피해가 40/50/60/70/80% 증가한다.'
              ]},{
    name:'적색 사막의 지팡이',
    atk:44,
    subStat:'치명타 확률',
    subEffect:['신기루 끝의 뜨거운 꿈',
    '장착한 캐릭터 원소 마스터리의 52%에 해당하는 공격력 보너스를 획득한다. 원소 전투 스킬이 적을 명중하면 10초 동안 <em>적색 사막의 꿈</em> 효과를 획득한다.\n<em>적색 사막의 꿈</em> : 장착한 캐릭터의 원소 마스터리의 28% 만큼 공격력 보너스를 획득한다. 최대 중첩 : 3회.'
              ]},{
    name:'달을 꿰뚫는 화살',
    atk:44,
    subStat:'원소 마스터리',
    subEffect:['깊은 숲속 달 그림자',
    '연소, 활성, 촉진, 발산, 개화, 만개 혹은 발화 발동 후, 캐릭터 주변에 최대 10초동안 존재하는 <em>소생의 잎사귀</em>가 생성된다. <em>소생의 잎사귀</em>를 습득한 캐릭터는 공격력이 16% 증가한다. 지속시간 : 12초. 해당 방식으로 20초마다 <em>소생의 잎사귀</em>를 최대 1개 생성한다. 캐릭터가 대기상태일 때도 발동한다.'
              ]},{
    name:'날카로운 바람의 서신',
    atk:42,
    subStat:'공격력',
    subEffect:['오지 않는 바람',
    '원소 반응 발동 후 10초 동안 공격력이 12/15/18/21/24% 증가하고, 원소 마스터리가 48/60/72/84/96pt 증가한다.'
              ]}
    
    
    
    
    //법구
    ,{
    name:'천공의 두루마리',
    atk:48,
    subStat:'공격력',
    subEffect:['사방에 떠다니는 뭉게구름',
    '원소 피해 보너스+12/15/18/21/24%. 일반 공격 명중 시 50% 확률로 <em>구름의 총애</em>를 받는다. 15초 내에 주변의 적을 직접 공격하면 공격력의 160/200/240/280/320%의 피해를 준다. 해당 효과는 30초마다 1번 발동한다.'
              ]},{
    name:'사풍 원서',
    atk:46,
    subStat:'치명타 확률',
    subEffect:['끝없는 은혜',
    '이동속도+10%. 필드에 있을 때 4초마다 원소 피해 보너스를 8/10/12/14/16% 획득한다. 최대 중첩수 : 4회. 캐릭터가 전투 불능이 되거나 교체될 때까지 지속된다.'
              ]},{
    name:'속세의 자물쇠',
    atk:46,
    subStat:'공격력',
    subEffect:['금빛의 옥·제군의 길',
    '보호막 강화 효과가 20/25/30/35/40% 증가한다. 공격 명중 후 공격력이 4/5/6/7/8% 증가한다. 해당 효과는 0.3초마다 1번 발동한다. 지속시간 : 8초. 최대 중첩수 : 5회. 또한 보호막 존재 시 해당 효과의 공격력 증가 효과가 100% 증가한다.'
              ]},{
    name:'불멸의 달빛',
    atk:46,
    subStat:'HP',
    subEffect:['백야의 밝은 달',
    '치유 보너스가 10/12.5/15/17.5/20% 증가하고, 일반 공격이 가하는 피해가 해당 장비를 장착한 캐릭터의 HP 최대치의 1/1.5/2/2.5/3% 만큼 증가한다. 원소 폭발 발동 후 12초 내에 일반 공격으로 적을 명중하면 원소 에너지를 0.1초마다 1번씩 0.6pt 회복한다.'
              ]},{
    name:'카구라의 진의',
    atk:46,
    subStat:'치명타 피해',
    subEffect:['신성한 벚나무의 카미아소비 카구라의 춤',
    '원소 전투 스킬 발동 시, <em>카구라의 춤</em>의 효과를 받아 해당 무기를 장착한 캐릭터의 원소 전투 스킬의 피해가 12/15/18/21/24% 증가한다. 지속시간 : 16초. 최대 중첩수 : 3회. 3스택 중첩 시 모든 원소 피해 보너스를 12/15/18/21/24% 획득한다.'
              ]},{
    name:'페보니우스 비전',
    atk:42,
    subStat:'원소 충전 효율',
    subEffect:['바람과 함께',
    '치명타 발생 시 60/70/80/90/100%의 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다.'
              ]},{
    name:'음유시인의 악장',
    atk:42,
    subStat:'치명타 피해',
    subEffect:['등장 음악',
    '캐릭터가 등장할 때 무작위로 <em>테마송</em>을 획득한다. 지속시간 : 10초. 30초마다 1번 발동한다.\n서창 : 공격력+60/75/90/105/120%\n영탄곡 : 모든 원소 피해 : +48/60/72/84/96%\n간주곡 : 원소 마스터리+240/300/360/420/480pt'
              ]},{
    name:'제례의 악장',
    atk:41,
    subStat:'원소 마스터리',
    subEffect:['침착',
    '원소 전투 스킬로 피해를 줄 때 40/50/60/70/80%의 확률로 해당 스킬의 재사용 대기시간이 초기화된다. 해당 효과는 30/26/22/19/16초마다 1번 발동한다.'
              ]},{
    name:'왕실의 비전록',
    atk:44,
    subStat:'공격력',
    subEffect:['집중',
    '공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩수 : 5회. 공격 시 치명타가 발생하면 모든 효과가 사라진다.'
              ]},{
    name:'일월의 정수',
    atk:42,
    subStat:'치명타 확률',
    subEffect:['해와 달의 광휘',
    '일반 공격 명중 후 6초동안 원소 전투 스킬과 원소 폭발 스킬 피해가 20/25/30/35/40% 증가한다. 원소 전투 스킬과 원소 폭발 명중 후 6초동안 일반 공격 피해가 20/25/30/35/40% 증가한다.'
              ]},{
    name:'황금 호박 프로토타입',
    atk:42,
    subStat:'HP',
    subEffect:['도금',
    '원소 폭발 발동 후 6초 동안 2초마다 원소 에너지를 4/4.5/5/5.5/6pt 회복한다. 또한 파티 내 모든 캐릭터의 HP를 2초마다 4/4.5/5/5.5/6% 회복한다.'
              ]},{
    name:'만국 항해용해도',
    atk:44,
    subStat:'원소 마스터리',
    subEffect:['에너지 주입 두루마리',
    '원소 반응 후 10초동안 원소 피해 보너스를 8/10/12/14/16% 획득한다. 최대 중첩수 : 2회.'
              ]},{
    name:'흑암 홍옥',
    atk:42,
    subStat:'치명타 피해',
    subEffect:['승승장구',
    '적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속시간 : 30초. 최대 중첩수 : 3회. 중참 1회 당 지속시간은 따로 계산한다.'
              ]},{
    name:'소심',
    atk:41,
    subStat:'공격력',
    subEffect:['메아리',
    '일반/강공격 명중 시 50% 확률로 <em>마음을 비추는 법구</em>를 발사해 공격력 240/270/300/330/360%의 피해를 주고 적 사이에서 4번 튕긴다. 해당 효과는 12/11/10/9/8초마다 1번 발동한다.'
              ]},{
    name:'인동의 열매',
    atk:42,
    subStat:'공격력',
    subEffect:['서리의 매장',
    '일반/강공격이 적에게 명중 시 60/70/80/90/100% 확률로 적의 위쪽에 <em>영원의 얼음 결정</em>을 생성한 후 떨어뜨려 공격력 80/95/110/125/140%의 범위 피해를 준다. 적이 얼음 원소의 영향을 받으면 공격력 200/240/280/320/360%의 피해를 준다. 해당 효과는 10초마다 1회 발동한다.'
              ]},{
    name:'뒷골목의 술과 시',
    atk:44,
    subStat:'원소 충전 효율',
    subEffect:['변화무쌍',
    '일반 공격으로 적을 명중시킨 후, 대시나 대시를 대체할 수 있는 능력으로 소모되는 스태미너가 14/16/18/20/22% 감소한다. 지속 시간 : 5초. 또한, 대시나 대시를 대체할 수 있는 능력을 사용한 후, 공격력이 20/25/30/35/40% 증가한다. 지속시간 : 5초.'
              ]},{
    name:'도도코 이야기집',
    atk:41,
    subStat:'공격력',
    subEffect:['도도! 대모험',
    '일반 공격으로 적을 명중한 후 6초동안 강공격 피해가 16/20/24/28/32% 증가한다. 강공격으로 적을 명중한 후 6초동안 공격력이 8/10/12/14/16% 증가한다.'
              ]},{
    name:'하쿠신의 고리',
    atk:44,
    subStat:'원소 충전 효율',
    subEffect:['벚꽃 재궁',
    '해당 무기를 장착한 캐릭터가 번개 원소 관련 반응을 일으키면 근처에 해당 원소 반응과 관련 있는 원소 타입의 파티 내 캐릭터는 10/12.5/15/17.5/20%의 상응하는 원소 피해 보너스르 받는다. 지속시간 : 6초. 해당 방식으로 얻을 수 있는 원소 피해 보너스는 중첩되지 않는다.'
              ]},{
    name:'맹세의 눈동자',
    atk:44,
    subStat:'공격력',
    subEffect:['은은한 빛의 해연 백성',
    '원소 전투 스킬 발동 후, 원소 충전 효율이 24/30/36/42/48% 증가한다. 지속시간 : 10초.'
              ]},{
    name:'마도 서론',
    atk:38,
    subStat:'원소 마스터리',
    subEffect:['첨벙첨벙 찌릿찌릿',
    '물/번개 원소의 영향을 받은 적에게 가하는 피해가 12/15/18/21/24% 증가한다.'
              ]},{
    name:'드래곤 슬레이어 영웅담',
    atk:39,
    subStat:'HP',
    subEffect:['전승',
    '스스로 캐릭터를 교체 시 새로 등장한 캐릭터의 공격력이 24/30/36/42/48% 증가한다. 지속시간 : 10초. 해당 효과는 20초마다 1번 발동한다.'
              ]},{
    name:'이세계 여행기',
    atk:39,
    subStat:'원소 충전 효율',
    subEffect:['에너지 샤워',
    '원소 입자 또는 원소 구슬 획득 시 HP를 1/1.25/1.5/1.75/2% 회복한다.'
              ]},{
    name:'비취 오브',
    atk:40,
    subStat:'원소 마스터리',
    subEffect:['급류',
    '증발, 감전, 빙결, 물 원소 확산 반응 후 12초동안 공격력이 20/25/30/35/40% 증가한다.'
              ]},{
    name:'1급 보옥',
    atk:40,
    subStat:'치명타 확률',
    subEffect:['급습 전술',
    '적을 처치한 후 15초동안 이동 속도와 공격력이 12/14/16/18/20% 증가한다.'
              ]},{
    name:'충만의 열매',
    atk:42,
    subStat:'원소 충전 효율',
    subEffect:['원만의 상',
    '원소 반응 발동 후, <em>영결</em> 효과를 획득한다.\n<em>영결</em> : 원소 마스터리가 24pt 증가하고 공격력이 5% 감소한다. 0.3초마다 <em>영결</em> 효과를 최대 1스택 획득한다. 최대 중첩 : 5회. 원소 반응을 발동하지 않으면 6초마다 1스택 감소한다. 캐릭터가 대기상태일 때도 발동된다.'
              ]},{
    name:'떠오르는 천일 밤의 꿈',
    atk:44,
    subStat:'원소 마스터리',
    subEffect:['천 개의 새벽이 부르는 노래',
    '장비를 장착한 캐릭터와 파티 내 기타 캐릭터의 원소 타입 동일 여부에 따라, 장비를 장착한 캐릭터에게 다음과 같은 효과를 부여한다. \n같은 경우 : 원소 마스터리+32/40/48/56/64pt. 다른 경우 : 장착 캐릭터의 원소 피해 보너스+10/14/18/22/26%. 해당 효과는 각각 최대 3회까지 중첩된다.\n추가로, 파티 내 장착 캐릭터를 제외한 주변 캐릭터의 원소 마스터리가 40/42/44/46/48pt 증가하며, 동명의 무기를 여러 개 장착 시, 해당 효과는 중첩 가능하다.'
              ]},{
    name:'방랑하는 저녁별',
    atk:42,
    subStat:'원소 마스터리',
    subEffect:['숲과 들의 저녁별',
    '10초마다 다음 효과가 발생한다. : \n장착한 캐릭터의 원소 마스터리의 24/30/36/42/48%만큼 해당 캐릭터의 공격력이 증가하고, 해당 증가량의 30%만큼 근처 파티 내 다른 캐릭터의 공격력이 증가한다. 지속시간 : 12초.\n동명의 무기를 여러 개 장착 시 해당 효과는 중첩이 가능하다. 캐릭터가 대기 상태일 때도 발동한다.'
              ]},{
    name:'툴레이툴라의 기억',
    atk:48,
    subStat:'치명타 피해',
    subEffect:['파묻힌 사파이어의 눈물',
    '일반 공격속도가 10/12.5/15/17.5/20% 증가한다.\n원소 전투 스킬 발동 후 14초 동안 1초마다 일반 공격으로 가하는 피해가 4.8/6/7.2/8.4/9.6% 증가한다. 일반 공격이 적을 명중한 후, 일반 공격으로 가하는 피해가 9.6/12/14.4/16.8/19.2% 증가한다. 해당 효과는 0.3초마다 최대 1회 발동된다. 지속시간 동안 일반 공격으로 가하는 피해는 해당 효과로 최대 48/60/72/84/96%까지 증가한다.\n효과는 캐릭터 퇴장 시 사라지며, 원소 전투 스킬을 다시 발동하면 기존 효과는 사라진다.'
              ]}
]


allRelic = [
    {
    name:'검투사의 피날레',
    set2:'공격력+18%',
    set4:'해당 성유물 세트를 장착한 캐릭터가 한손검, 양손검, 장병기를 사용 시 캐릭터의 일반공격으로 가하는 피해가 35% 증가한다.'
    },{
    name:'대지를 유랑하는 악단',
    set2:'원소 마스터리+80pt',
    set4:'해당 성유물 세트를 장착한 캐릭터가 법구 또는 활을 사용 시 캐릭터의 강공격으로 가하는 피해가 35% 증가한다.'
    },{
    name:'뇌명을 평정한 존자',
    set2:'번개 원소 내성+40%',
    set4:'번개 원소의 영향을 받은 적에게 가하는 피해가 35% 증가한다.'
    },{
    name:'번개 같은 분노',
    set2:'번개 원소 피해+15%',
    set4:'과부화, 감전, 초전도, 만개 반응이 주는 피해가 40% 증가하고, 촉진 반응이 주는 피해가 20% 증가한다.\n원소 반응 또는 활성화 반응 발동 시 원소 스킬의 재사용 시간이 1초 줄어든다. 해당 효과는 0.8초마다 1번 발동한다.'
    },{
    name:'청록색 그림자',
    set2:'바람 원소 피해+15%',
    set4:'확산 반응이 가하는 피해가 60% 증가한다. 확산되는 원소 타입에 따라 피해 범위 내 적의 해당 원소의 내성이 40% 감소한다. 지속시간 : 10초'
    },{
    name:'불 위를 걷는 현인',
    set2:'불 원소 내성+40%',
    set4:'불 원소의 영향을 받은 적에게 가하는 피해가 35% 증가한다.'
    },{
    name:'불타오르는 화염의 마녀',
    set2:'불 원소 피해+15%',
    set4:'과부화, 연소 반응이 적에게 주는 피해가 40%, 증발, 융해 반응의 보너스 계수가 15% 증가한다. 원소 전투 스킬 발동 후 10초 동안 2셋 효과가 50% 증가한다. 최대 중첩수 : 3회'
    },{
    name:'유구한 반암',
    set2:'바위 원소 피해+15%',
    set4:'바위 원소 반응으로 만들어진 결정 획득 시 파티 내 모든 캐릭터는 해당 원소 피해 보너스를 35% 획득한다. 지속시간 : 10초. 이러한 효과로 1가지 원소 피해 보너스만 획득할 수 있다.'
    },{
    name:'몰락한 마음',
    set2:'물 원소 피해+15%',
    set4:'원소 전투 스킬 발동 후 15초 동안 일반/강공격으로 가하는 피해가 30% 증가한다.'
    },{
    name:'얼음바람 속에서 길을 잃은 용사',
    set2:'얼음 원소 피해+15%',
    set4:'얼음 원소의 영향을 받은 적을 공격 시 치명타 확률이 20% 증가한다. 만약 적이 빙결 상태라면 치명타 확률이 추가로 20% 증가한다.'
    },{
    name:'추억의 시메나와',
    set2:'공격력+18%',
    set4:'원소 전투 스킬 발동 후, 캐릭터의 원소 에너지가 15pt 이상일 경우, 15pt의 원소 에너지를 잃고, 10초 동안 일반/강/낙하 공격으로 가하는 피해가 50% 증가한다.'
    },{
    name:'진사 왕생록',
    set2:'공격력+18%',
    set4:'원소 폭발 시전 후 16초 동안 <em>숨겨진 빛</em> 효과가 생성되고, 공격력이 8% 증가한다. 캐릭터 HP가 감소할 때 공격력이 10% 더 증가한다. 이러한 방식으로 최대 4회 증가할 수 있으며, 0.8초마다 1회 발동한다. \n<em>숨겨진 빛</em> 효과는 캐릭터 퇴장 시 사라진다. 지속시간 동안 다시 원소 폭발 발동 시 기존의 <em>숨겨진 빛</em>은 사라진다.'
    },{
    name:'제사의 여운',
    set2:'공격력+18%',
    set4:'일반 공격으로 적 명중 시 36% 확률로 <em>유곡의 축사</em>를 발동한다. \n<em>유곡의 축사</em> : 일반 공격의 비해가 공격력의 70%만큼 증가한다. 해당 효과는 일반 공격으로 피해를 가한 다음 0.05초 후에 사라진다. \n일반 공격으로 <em>유곡의 축사</em>가 발동되지 않을 때, 다음 공격에서 발동될 확률이 20% 증가한다. 0.2초 내 최대 1회 발동 여부를 판정한다.'
    },{
    name:'피에 물든 기사도',
    set2:'가하는 물리 피해+25%',
    set4:'적을 처치한 후 10초 동안 강공격 사용 시 스태미너를 소모하지 않고 강공격으로 가하는 피해가 50% 증가한다.'
    },{
    name:'창백의 화염',
    set2:'가하는 물리 피해+25%',
    set4:'원소 전투 스킬로 적 명중 시 공격력이 9% 증가한다. 지속시간 : 7초, 최대 중첩수 : 2회. 해당 효과는 0.3초마다 1번 발동한다. 최대 중첩 시 2셋 효과가 100% 상승한다.'
    },{
    name:'풍요로운 꿈의 껍데기',
    set2:'방어력+30%',
    set4:'해당 성유물 세트를 장착한 캐릭터는 아래 상황에서 <em>문답</em> 효과를 얻는다 : \n 필드 위 바위 원소 공격으로 적 명중 시 1스택 획득. 0.3초마다 최대 1회 발동한다. 대기 상태일 때 3초마다 1스택 획득. <em>문답</em> 효과는 최대 4스택까지 중첩가능하고, 스택 당 방어력 5%, 바위 원소 피해 보너스 6%를 획득한다. \n6초마다 <em>문답</em> 효과를 획득하지 못할 경우, 1스택 차감된다.'
    },{
    name:'절연의 기치',
    set2:'원소 충전 효율+20%',
    set4:'원소 폭발로 가하는 피해가 원소 충전 효율의 25% 만큼 증가한다. 해당 방식으로 최대 75%까지 증가할 수 있다.'
    },{
    name:'옛 왕실의 의식',
    set2:'원소 폭발로 가하는 피해가 20% 증가한다.',
    set4:'원소 폭발 발동 후 파티 내 모든 캐릭터의 공격력이 20% 증가한다. (지속시간 : 12초) 해당 효과는 중첩되지 않는다.'
    },{
    name:'견고한 천암',
    set2:'HP+20%',
    set4:'원소 전투 스킬로 적 명중 시 파티 내 주변 모든 캐릭터의 공격력이 20% 증가하고, 보호막 강화 효과가 30% 증가한다. (지속시간 : 3초) 해당 효과는 0.5초마다 최대 1번 발동한다. 해당 성유물을 장착한 캐릭터가 대기상태일 때도 해당 효과가 발동된다.'
    },{
    name:'날아오르는 유성',
    set2:'보호막 강화 효과가 35% 상승한다.',
    set4:'보호막 존재 시 추가로 일반/강공격 보너스를 40% 획득한다.'
    },{
    name:'사랑받는 소녀',
    set2:'캐릭터가 주는 치유효과+15%',
    set4:'원소 전투 스킬 또는 원소 폭발 발동 후 10초 동안 파티 내 모든 캐릭터가 받는 치유 효과가 20% 증가한다.'
    },{
    name:'바다에 물든 거대 조개',
    set2:'치유 보너스+15%',
    set4:'해당 성유물 세트를 장착한 캐릭터가 파티 내 캐릭터를 치유하면 3초간 지속되는 <em>바다에 물든 거품</em>을 생성해 치유한 HP의 회복량을 기록한다.(초과된 수치 포함) \n지속시간 종료 후 <em>바다에 물든 거품</em>이 폭발해 주변의 적에게 누적 회복량의 90%에 해당하는 피해를 준다. (계산 방식은 원소 반등의 방식과 같지만, 원소 마스터리, 레벨 또는 반응 피해 보너스 효과를 받지 않는다.) \n3.5초마다 최대 1개의 <em>바다에 물든 거품</em>이 생성되며, <em>바다에 물든 검품</em>은 초과한 부분의 치유량을 포함해 최대 30000pt의 회복량을 기록할 수 있다. 자신의 파티에 <em>바다에 물든 거품</em>은 동시에 1개만 존재할 수 있다. \n해당 성유물 세트를 장착한 캐릭터가 대기 상태일 때도 발동한다.'
    },{
    name:'숲의 기억',
    set2:'풀 원소 피해 보너스+15%',
    set4:'원소 전투 스킬 또는 원소 폭발 스킬에 명중된 적은 풀 원소 내성이 30% 감소한다. 지속시간 : 8초.\n장착한 캐릭터가 대기상태일 때도 해당 효과가 발동된다.'
    },{
    name:'도금된 꿈',
    set2:'원소 마스터리+80pt',
    set4:'원소 반응 발동 후 8초 동안 파티 내 다른 캐릭터의 원소 유형에 따라 장착 캐릭터가 다음 강화 효과를 받는다.\n파티 내 캐릭터와 동일한 원소 타입의 캐릭터가 1명 존재할 때마다 공격력이 14% 증가한다. 파티 내 장착 캐릭터와 다른 원소 타입의 캐릭터가 1명 존재할 때마다 원소 마스터리가 50pt 증가한다.\n해당 효과는 각각 최대 3명까지 계산되고, 8초마다 최대 1회 발동한다. 장착 캐릭터가 대기상태일 때도 해당 효과는 발동된다.'
    },{
    name:'모래 위 누각의 역사',
    set2:'바람 원소 피해 보너스+15%',
    set4:'강공격이 적을 명중한 후, 해당 캐릭터의 일반 공격속도가 10% 증가하고 일반/강/낙하 공격으로 가하는 피해가 40% 증가한다. 지속시간 : 15초.'
    },{
    name:'잃어버린 낙원의 꽃',
    set2:'원소 마스터리+80pt',
    set4:'장착 캐릭터가 개화/만개/발화 반응으로 가하는 피해가 40% 증가하고, 개화/만개/발화 발동하면 해당 효과로 증가한 보너스가 25% 증가한다. 지속시간 : 10초. 최대 중첩수 : 4회.\n해당 효과는 1초마다 최대 1회 발동되며, 장착 캐릭터가 대기 상태일 때도 발동된다.'
    }
    
    
    ,{
    name:'교관',
    set2:'원소 마스터리+80pt',
    set4:'원소 반응 후 파티 내 모든 캐릭터의 원소 마스터리가 120pt 증가한다. 지속시간 : 8초'
    },{
    name:'기적',
    set2:'모든 원소 내성+20%',
    set4:'받은 원소 공격에 대응하는 원소 내성이 30% 증가한다. 지속시간 : 10초. 해당 효과는 10초마다 1번 발동한다.'
    },{
    name:'노름꾼',
    set2:'원소 전투 스킬로 주는 피해+20%',
    set4:'적을 처치하면 100% 확률로 원소 전투 스킬의 재사용 대기시간이 초기화된다. 해당 효과는 15초마다 1번 발동한다.'
    },{
    name:'무인',
    set2:'일반/강공격으로 주는 피해+15%',
    set4:'원소 전투 스킬 발동 후 8초 동안 일반/강공격으로 가하는 피해가 25% 증가한다.'
    },{
    name:'수호자의 마음',
    set2:'방어력+20%',
    set4:'파티 내 다른 원소 타입의 캐릭터가 1명 존재 할 때마다 대응하는 원소 내성을 30% 획득한다.'
    },{
    name:'용사의 마음',
    set2:'공격력+18%',
    set4:'HP가 50%를 초과하는 적에게 가하는 피해가 30% 증가한다.'
    },{
    name:'유배자',
    set2:'원소 충전 효율+20%',
    set4:'원소 폭발 발동 후 2초마다 파티 내 기타 캐릭터의 원소 에너지를 2pt 회복한다. 해당 효과는 6초간 지속되며 중접되지 않는다.'
    },{
    name:'전쟁광',
    set2:'치명타 확률+12%',
    set4:'HP 70% 미만 시 치명타 확률이 추가로 24% 증가한다.'
    },{
    name:'학사',
    set2:'원소 충전 효율+20%',
    set4:'원소 에너지 획득 시 파티 내 모든 활과 법구를 사용하는 캐릭터는 원소 에너지를 추가로 +3pt 회복한다. 해당 효과는 3초마다 1번 발동한다.'
    },{
    name:'행자의 마음',
    set2:'공격력+18%',
    set4:'강공격의 치명타 확률+30%'
    }
]