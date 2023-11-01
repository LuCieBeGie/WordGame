function random(a) {
	return Math.round(Math.random() * a)
}
function randomColor() {
	return `rgb(${random(255)}, ${random(255)}, ${random(255)})`
}
let s1
let s2
let audio1 = new Audio
let audio2 = new Audio
let score = 0
audio1.src = 'mp3.mp3'
audio2.src = 'mp32.mp3'
let barer = [
	'school',
	'college',
	'btc',
	'musk',
	'courses',
	'internet',
	'patience',
	'argentina',
	'motivation',
	'tech',
	'info',
	'send',
	'mate',
	'react js',
	'game',
	'graphic',
	'copper',
	'boca',
	'lie',
	'case',
	'expand',
	'absence',
	'football',
	'native',
	'demon',
	'thread',
	'award',
	'tycoon',
	'still',
	'empirical',
	'doll',
	'java',
	'dinner',
	'register',
	'proof',
	'script',
	'wrist',
	'sulphur',
	'selection',
	'slam',
	'grandmother',
	'assertive',
	'eaux',
	'javascript',
	'admiration',
	'recognize',
	'roll',
	'bank',
	'reactor',
	'gradient',
	'ribbon',
	'slayer',
	'pleasant',
	'path',
	'draft',
	'polish',
	'art',
	'hook',
	'messy',
	'flow',
	'operational',
	'transaction',
	'physics',
	'rally',
	'fold',
	'housewife',
	'suspicion',
	'craft',
	'objective',
	'grass',
	'reckless',
	'manual',
	'test',
	'switch',
	'silver',
	'take',
	'president',
	'constituency',
	'basis',
	'cluster',
	'psychology',
	'cat',
	'minimize',
	'hide',
	'chord',
	'brilliance',
	'official',
	'condition',
	'guideline',
	'apology',
	'general',
	'sock',
	'hunting',
	'kinship',
	'change',
	'departure',
	'mile',
	'ancestor',
	'diego',
	'cheat',
	'taxi',
	'tight',
	'moment',
	'dimension',
	'family',
	'vegan',
	'projection',
	'demonstration',
	'pony',
	'standard',
	'appendix',
	'reluctance',
	'system',
	'analyst',
	'levi',
]
const start_block = document.querySelector('.start-block')
const start = document.querySelector('.start')
const game = document.querySelector('.game')
const words = document.querySelector('.words')
const txt = document.querySelector('.txt')
start.onclick = function () {
	start_block.style.display = 'none'
	startGame()
}
function startGame() {
	txt.value = ''
	createWord()
	moveWord()
	audio1.play()
	txt.addEventListener('input', check)
}
function createWord() {
	s1 = setInterval(function () {
		let div = document.createElement('div')
		div.innerHTML = barer[random(barer.length - 1)]
		div.style = `
		position: absolute;
		top: 0;
		left: ${random(words.offsetWidth - 100)}px;
		background:${randomColor()};
		`
		div.classList.add('item')
		words.append(div)
	}, 1000)
}
function moveWord() {
	s2 = setInterval(function () {
		const divs = document.querySelectorAll('.item')
		divs.forEach(el => {
			el.style.top = el.offsetTop + 1 + 'px'
			if (el.offsetTop >= words.offsetHeight - el.offsetHeight) {
				end()
				clearInterval(s1)
				clearInterval(s2)
				audio1.pause()
				audio1.currentTime = 0
				txt.removeEventListener('input', check)
				words.innerHTML = ''
				start_block.style.display = 'flex'
			}
		})
	}, 100)
}
const h1 = document.createElement('h1')
function check() {
	const divs = document.querySelectorAll('.item')
	let val = this.value
	for (let el of divs) {
		if (val == el.innerHTML) {
			h1.innerHTML = ''
			words.append(h1)
			score++
			h1.innerHTML = score
			audio2.currentTime = 1
			audio2.play()
			el.remove()
			this.value = ''
			return
		}
	}
}
function end() {
	const over = document.createElement('h1')
	over.innerHTML = 'GAME OVER' + ' ' + 'Your Score:' + ' ' + score
	over.classList.add('over')
	start_block.append(over)
	score = 0
	setTimeout(function () {
		over.remove()
	}, 3000)
}