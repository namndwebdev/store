
import { Typography } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
	
import ReactMarkdown from "react-markdown";
import { useState } from "react";
export default function MarkdownViewer({description}) {
  
      
  //  const mac1='https://via.placeholder.com/400/FF0000/FFFFFF'
// const {id}= useParams()
// const [content,setContent] = useState()
//    useEffect(()=>{
//     fetch(`https://backoffice.nodemy.vn/api/products?filters[id][$eq]=${id}`)
//     .then(res => res.json())
//     .then(data =>{             
//       setContent(data.data[0].attributes.description); 
//         })
// }, [])
  return (
    <div className="detail_bot">
  	
<ReactMarkdown>{description}</ReactMarkdown>

    </div>
  );
}
