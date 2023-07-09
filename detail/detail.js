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

function toMain(){
	location.href = '../genshin-grouper.html'
}
function toTop(){
	location.href = '#top'
}