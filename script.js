const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const title= document.querySelector('.post h1')
const text = document.querySelector('.post p')

const API_URL = 'https://jsonplaceholder.typicode.com'

const getPostDetails = async (id) => {
    const res = await fetch(`${API_URL}/posts/${id}`)
    const data = await res.json()
    return data
}

prevBtn.addEventListener('click', async ()  => {
     if (post_number > 1) {
            post_number++
            loadPost()
    }
})
nextBtn.addEventListener ('click', async () => {
    post_number++
      loadPost()
})

async function loadPost() {
    try {
        const postData = await getPostDetails(post_number)
        title.textContent = postData.title
        text.textContent = postData.body
    } catch (error) {
        console.error('Error loading post:', error)
        title.textContent = 'Error'
        text.textContent = 'Failed to load post'
    }
}

let post_number = 1
loadPost()