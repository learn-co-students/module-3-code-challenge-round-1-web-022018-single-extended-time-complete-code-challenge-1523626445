document.addEventListener('DOMContentLoaded', function() {
  const imageId = 10 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(imageURL).then(res => res.json()).then(json => {
    console.log(json)
    document.getElementById('image').src = json.url
    document.getElementById('name').innerText = json.name


    Comment.render()

    const likesNum = document.getElementById('likes')
    document.getElementById('like_button').addEventListener("click", likeClick)

    function likeClick(e) {
      e.preventDefault()
      likesNum.innerText = parseInt(likesNum.innerText) + 1
      fetch(likeURL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({image_id:imageId})
      }).then(res => res.json()).then(likejson => {console.log("SUCCESS");})
    }

    const cominput = document.getElementById('comment_input')
    document.getElementById('comment_form').addEventListener("submit", comClick)

    function comClick(e) {
      e.preventDefault()
      fetch(commentsURL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({image_id:imageId, content:cominput.value})
      }).then(res => res.json()).then(likejson => {console.log("SUCCESS");})
      Comment.render()
      cominput.value = ""
    }
  })

})
