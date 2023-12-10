const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('choices');
textarea.focus();

const createTags = (input) =>{
    const tags = input.split(',').filter(tag =>tag.trim() !== '').map(tag => tag.trim())
    console.log(tags);
    tagsElement.innerHTML = ''

    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText =tag
        tagsElement.appendChild(tagElement)

    });
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
const randomSelect = () => {
    const times = 50;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 30)

        randomSelect()
    }
})