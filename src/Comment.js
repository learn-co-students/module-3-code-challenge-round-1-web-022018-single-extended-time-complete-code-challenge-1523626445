class Comment {
  constructor(content, image_id) {
    this.content = content
    this.image_id = image_id
  }

  static render() {
    fetch(`https://randopic.herokuapp.com/images/10`).then(res => res.json()).then(json => {
      document.getElementById('comments').innerHTML = ""
      json.comments.forEach(comment =>
        document.getElementById('comments').innerHTML += `<li>${comment.content}</li>`
        )
    })
  }
}
