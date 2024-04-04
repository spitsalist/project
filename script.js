const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const title= document.querySelector('.post h1')
const text = document.querySelector('.post p')
let postNumber = 1
const API_URL = 'https://jsonplaceholder.typicode.com'
const getPostDetails = async (id) => {
    const res = await fetch(`${API_URL}/posts/${id}`)
    const data = await res.json()
    return data
}

prevBtn.addEventListener('click', async ()  => {
     if (postNumber > 1) {
            postNumber--
          await  loadPost()
            nextBtn.disabled = false
    }
    if (postNumber === 1) {
        prevBtn.disabled = true
    }
})
nextBtn.addEventListener ('click', async () => {
    postNumber++
     await loadPost()
      prevBtn.disabled = false
})

async function loadPost() {
    try {
        const postData = await getPostDetails(postNumber)
        title.textContent = postData.title
        text.textContent = postData.body
    } catch (error) {
        console.error('Error loading post:', error)
        title.textContent = 'Error'
        text.textContent = 'Failed to load post'
    }
}

loadPost()