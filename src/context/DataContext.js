import { createContext, useState } from "react"
import instance from "../axios/api"

export const DataContext = createContext()

export const DataContextProvider = (props) => {
  const [ data, setData ] = useState(null)
  const fetchData = () => {
    instance
      .get('/posts')
      .then((res) => {
        setData(res.data)
      })
  }

  return (
    <DataContext.Provider value = {{data , fetchData}}>
      {props.children}
    </DataContext.Provider>
  )
}