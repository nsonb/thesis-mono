import { useContext, useState } from "react"
import instance from "../axios/api"
import { DataContext } from "../context/DataContext"

const Upload = () => {
  const [content, setContent] = useState('')
  const { fetchData } = useContext(DataContext)

  const onSubmit = (e) => {
    e.preventDefault()
    instance
      .post('/posts', {
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
        <label>Content</label>
        <textarea value={content} onChange={(e) => {setContent(e.target.value)}}/>
        <button onClick={(e) => {onSubmit(e)}}>Click Me</button>
      </form>
    </div>
    
  )
}

export default Upload