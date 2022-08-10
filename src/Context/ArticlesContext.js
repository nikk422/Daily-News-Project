import { createContext , useContext , useEffect , useState } from "react"
import axios from "axios"

const ArticleContext = createContext();


const ArticleProvider=({children})=>{
    const [ data , setData]= useState([])

    useEffect(()=>{
        (async()=>{
            const res= await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10");
            setData(res.data)
        })()

    },[])

    return (
        <ArticleContext.Provider value={{data , setData}}>
            {children}
        </ArticleContext.Provider>
    )
}

const useArticle= ()=> useContext(ArticleContext)

export {ArticleProvider , useArticle}