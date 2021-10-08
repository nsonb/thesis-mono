import { useContext, useState } from "react"
import instance from "../axios/api"
import { DataContext } from "../context/DataContext"

const Upload = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { fetchData } = useContext(DataContext)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(title, content)
    instance
      .post('/posts', {
        "title": title,
        "author": window.localStorage.getItem('user'),
        "content": {
          "text": content
        }
      }).then((res) => {
        console.log(res)
        if(fetchData) fetchData()
      })
  }

  return (
    <div>
      Upload content
      <form onSubmit={(e) => {onSubmit(e)}}>
        <label>Title</label>
        <input type='text' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
        <label>Content</label>
        <textarea value={content} onChange={(e) => {setContent(e.target.value)}}/>
        <button onClick={(e) => {onSubmit(e)}}>Click Me</button>
      </form>
    </div>
    
  )
}

export default Upload