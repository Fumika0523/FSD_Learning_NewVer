import React from 'react'

export function ClientPDFDownloadInvoice(){
const [clientName,setClientName] = useState("") //initial value is empty
const handleDownload=()=>{
  setClientName(e.target.value)
  console.log("Button is pressed",clientName)
  //other logics
}

  return (
    <>
        <h2 style={{margin:"3% 0"}}>Client Invoice Download</h2>
   
        <input type="text" value={clientName}
        onChange={(e)=>setClientName(e.target.value)}
        name="" id="" placeholder='Type your name' /> <br />

        <button  onCLick={()=>handleDownload()}
        style={{margin:"3% 0"}}>Download Invoice</button>
    </>

  )
}

// export default PDFDownloadButton