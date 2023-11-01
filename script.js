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
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let easyWords = [
	'add', 'aid', 'air', 'age', 'act', 'aim', 'ale', 'ace', 'all', 'art', 'and', 'ant', 'ash', 'ape', 'arc', 'ark', 'axe', 'aux', 'awe', 'awl', 'back', 'bail', 'babe', 'badge', 'bag', 'bake', 'ban', 'ball', 'bad', 'bald', 'bat', 'bark', 'barn', 'bath', 'beet', 'bench', 'beg', 'best', 'bit', 'blade', 'blue', 'boat', 'bowl', 'both', 'breeze', 'bridge', 'budge', 'buck', 'bulb', 'bunk', 'bug', 'bull', 'build', 'burn', 'bush', 'but', 'buy', 'bud', 'bunch', 'cab', 'cache', 'cage', 'cain', 'calk', 'call', 'calm', 'came', 'can', 'car', 'card', 'care', 'cat', 'catch', 'caught', 'cause', 'chair', 'chain', 'chalk', 'cheap', 'cheat', 'cheer', 'chest', 'choice', 'chord', 'churn', 'climb', 'cliff', 'clip', 'cloud', 'clove', 'cold', 'cook', 'cool', 'craft', 'crack', 'cup', 'curl', 'cute', 'dam', 'daft', 'dame', 'dance', 'dank', 'dart', 'dash', 'dawn', 'day', 'daze', 'dead', 'dear', 'deer', 'death', 'deed', 'den', 'dent', 'die', 'dig', 'dill', 'dim', 'dime', 'dine', 'doe', 'dog', 'dirt', 'ear', 'earl', 'earn', 'earth', 'east', 'eat', 'edge', 'eel', 'eight', 'elk', 'elm', 'eye', 'face', 'fact', 'fast', 'fall', 'faith', 'field', 'fire', 'fly', 'float', 'free', 'fry', 'fuzz', 'gag', 'gage', 'gal', 'game', 'gang', 'germ', 'give', 'gland', 'goose', 'good', 'grow', 'guy', 'had', 'hag', 'hail', 'half', 'hall', 'halt', 'ham', 'hard', 'hare', 'harp', 'hat', 'hate', 'have', 'hay', 'head', 'hike', 'hill', 'hog', 'hold', 'hole', 'home', 'hook', 'hope', 'hug', 'in', 'it', 'imp', 'ill', 'ice', 'inch', 'ink', 'inn', 'irk', 'if', 'itch', 'its', 'jab', 'jack', 'jade', 'jail', 'jam', 'jaunt', 'jaw', 'jeep', 'jeer', 'jell', 'jest', 'jeans', 'jet', 'jig', 'job', 'joke', 'jolt', 'joy', 'keen', 'keep', 'kept', 'kick', 'knit', 'knob', 'key', 'kid', 'kill', 'king', 'knew', 'knock', 'kiss', 'kit', 'kite', 'knack', 'knight', 'knot', 'lack', 'lace', 'lad', 'lamb', 'land', 'lane', 'last', 'led', 'learn', 'lick', 'lie', 'log', 'long', 'lute', 'mace', 'mad', 'main', 'male', 'map', 'march', 'mare', 'meal', 'melt', 'miss', 'mix', 'mud', 'much', 'mule', 'nab', 'nail', 'name', 'nape', 'neat', 'neck', 'need', 'net', 'new', 'nest', 'nice', 'niece', 'north', 'now', 'oaf', 'oak', 'oar', 'oat', 'odd', 'oft', 'oil', 'oink', 'old', 'ouch', 'ounce', 'ought', 'pack', 'pact', 'pad', 'page', 'paid', 'pail', 'pain', 'paint', 'pant', 'park', 'part', 'peh', 'peg', 'pen', 'perch', 'pew', 'pitch', 'plant', 'plate', 'poll', 'pork', 'pool', 'pound', 'pour', 'print', 'prize', 'put', 'quack', 'quad', 'quart', 'queer', 'quick', 'quit', 'quag', 'quail', 'quark', 'quell', 'quiche', 'quill', 'quaint', 'quartz', 'qualm', 'queen', 'queue', 'quirk', 'race', 'rad', 'raft', 'rag', 'rage', 'raid', 'rain', 'raise', 'rake', 'ranch', 'ream', 'rear', 'ride', 'right', 'rift', 'roam', 'roast', 'robe', 'rock', 'rod', 'role', 'roll', 'roof', 'row', 'sack', 'sad', 'safe', 'sag', 'said', 'sail', 'same', 'sand', 'school', 'scoff', 'Scout', 'scrunch', 'seal', 'search', 'shade', 'shark', 'shed', 'short', 'side', 'slay', 'snail', 'smell', 'snack', 'son', 'sore', 'spam', 'spread', 'still', 'stone', 'sword', 'tab', 'tack', 'tact', 'tad', 'tale', 'talk', 'tall', 'tank', 'tart', 'tent', 'term', 'text', 'thank', 'thin', 'time', 'toad', 'toast', 'tote', 'toy', 'trade', 'trail', 'train', 'treat', 'tree', 'try', 'truth', 'tune', 'uke', 'urn', 'ugh', 'van', 'vat', 'vase', 'verb', 'verse', 'wade', 'wage', 'waist', 'wall', 'walk', 'x-ray', 'yaw', 'yield', 'yell', 'yawn', 'yacht', 'yak', 'yam', 'yard', 'yes', 'yoga', 'your', 'zip', 'zap', 'zoom',
]
let hardWord = [
	'school', 'college', 'btc', 'musk', 'courses', 'internet', 'patience', 'argentina', 'motivation', 'tech', 'info', 'send', 'mate', 'react js', 'game', 'graphic', 'copper', 'boca', 'lie', 'case', 'expand', 'absence', 'football', 'native', 'demon', 'thread', 'award', 'tycoon', 'still', 'empirical', 'doll', 'java', 'dinner', 'register', 'proof', 'script', 'wrist', 'sulphur', 'selection', 'slam', 'grandmother', 'assertive', 'eaux', 'javascript', 'admiration', 'recognize', 'roll', 'bank', 'reactor', 'gradient', 'ribbon', 'slayer', 'pleasant', 'path', 'draft', 'polish', 'art', 'hook', 'messy', 'flow', 'operational', 'transaction', 'physics', 'rally', 'fold', 'housewife', 'suspicion', 'craft', 'objective', 'grass', 'reckless', 'manual', 'test', 'switch', 'silver', 'take', 'president', 'constituency', 'basis', 'cluster', 'psychology', 'cat', 'minimize', 'hide', 'chord', 'brilliance', 'official', 'condition', 'guideline', 'apology', 'general', 'sock', 'hunting', 'kinship', 'change', 'departure', 'mile', 'ancestor', 'diego', 'cheat', 'taxi', 'tight', 'moment', 'dimension', 'family', 'vegan', 'projection', 'demonstration', 'pony', 'standard', 'appendix', 'reluctance', 'system', 'analyst',
]
const start_block = document.querySelector('.start-block')
const start = document.querySelector('.start')
const game = document.querySelector('.game')
const words = document.querySelector('.words')
const txt = document.querySelector('.txt')
const level = document.querySelector('.level')
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
		let fallingEl = document.createElement('div')
		if (score <= 20) {
			fallingEl.innerHTML = letters[random(letters.length - 1)]
			level.innerHTML = `Level 1`
		}
		else if (score >= 50) {
			fallingEl.innerHTML = hardWord[random(hardWord.length - 1)]
			level.innerHTML = `Level 3`
		}
		else {
			fallingEl.innerHTML = easyWords[random(easyWords.length - 1)]
			level.innerHTML = `Level 2`
		}

		fallingEl.style = `
		left: ${random(words.offsetWidth - 100)}px;
		background:${randomColor()};
		`
		fallingEl.classList.add('item')
		words.append(fallingEl)
	}, 1000)
}
function moveWord() {
	s2 = setInterval(function () {
		const divs = document.querySelectorAll('.item')
		divs.forEach(el => {
			el.style.top = el.offsetTop + 0.5 + 'px'
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