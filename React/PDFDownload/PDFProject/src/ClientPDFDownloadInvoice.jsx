import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function PDFDownloadButton(){

const [clientName,setClientName] = useState("") //initial value is empty
const handleDownload=async()=>{
  console.log("Button is pressed",clientName)
  console.log(`http://localhost:8003/getinvoice?clientname=${clientName}`)
  //getinvoice = endpoint
  //?xxxx << need to assign the value to xxxx
// const response  = await axios.get(`http://localhost:8003/getinvoice?clientname=${clientName}`)
let url1 = `http://localhost:8003/getinvoice?clientname=${clientName}`
const response = await fetch(`${url1}`)
console.log(response)

if(!response.status==200 && !response.ok && !response.statusText=="OK"){
  throw new Error("Failed to download PDF")
}
const blob = await response.blob()
const url = window.URL.createObjectURL(blob)
console.log(url)

const link = document.createElement("a")
link.href=url
link.download="order-summary-pdf"
document.body.append(link)
link.click()
document.body.removeChild(link)
window.URL.revokeObjectURL(url)
}



  return (
    <>
        <h2 style={{margin:"3% 0"}}>Client Invoice Download</h2>
   
        <input type="text" value={clientName}
        onChange={(e)=>setClientName(e.target.value)}
        name="" id="" placeholder='Type your name' /> <br />

        <button  onClick={()=>handleDownload()}
        style={{margin:"3% 0"}}>Download Invoice</button>
    </>

  )
}

export default PDFDownloadButton