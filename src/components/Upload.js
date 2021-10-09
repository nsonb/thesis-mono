import styled from "@emotion/styled"
import { useContext, useState } from "react"
import instance from "../axios/api"
import { default_theme } from "../common/Colors"
import { DataContext } from "../context/DataContext"

const UploadContainer = styled.div`
  box-sizing: border-box;
  height: 10rem;
  border-radius: .5rem;
  background-color: ${default_theme.grey};
  padding: .5rem;
`

const UploadForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: fit-content;

  & button {
    height: 100%;
    width: 20%;
    font-family: 'Open Sans', sans-serif;
    background-color: pink;
  }

  & textarea {
    height: 100%;
    width: 80%;
    font-family: 'Open Sans', sans-serif;
    resize: none;
    padding: .5rem;
  }
`


const Upload = () => {
  const [content, setContent] = useState('')
  const { fetchData } = useContext(DataContext)

  const onSubmit = (e) => {
    e.preventDefault()
    if(content === '' ) return
    instance
      .post('/posts', {
        "author": window.localStorage.getItem('user'),
        "content": {
          "text": content
        }
      }).then(() => {
        if(fetchData) fetchData()
      })
  }

  return (
    <UploadContainer>
      <UploadForm onSubmit={(e) => {onSubmit(e)}}>
        <textarea 
          columns={50}
          rows={7}
          required
          maxLength={255}
          placeholder='content here'
          value={content} 
          onChange={(e) => {setContent(e.target.value)}}/>
        <button onClick={(e) => {onSubmit(e)}}>Click Me</button>
      </UploadForm>
    </UploadContainer>
    
  )
}

export default Upload