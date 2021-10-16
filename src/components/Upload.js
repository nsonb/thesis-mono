import styled from "@emotion/styled"
import { useContext, useState } from "react"
import instance from "../axios/api"
import { default_theme } from "../common/Colors"
import { DataContext } from "../context/DataContext"

const UploadContainer = styled.div`
  box-sizing: border-box;
  min-height: 10rem;
  border-radius: .5rem;
  background-color: ${default_theme.grey};
  padding: .5rem;
`

const UploadForm = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: fit-content;

  & textarea {
    height: 100%;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    resize: none;
    padding: .5rem;
    border-radius: .5rem;
    box-sizing: border-box;
  }
`

const UploadButton = styled.button`
  display: block;
  height: 2rem;
  width: 7rem;
  font-family: 'Open Sans', sans-serif;
  background-color: ${default_theme.main};
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  margin-top: .3rem;
  margin-left: auto;
  margin-right: 0;
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
        setContent('')
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
        <UploadButton onClick={(e) => {onSubmit(e)}}>Post</UploadButton>
      </UploadForm>
    </UploadContainer>
    
  )
}

export default Upload