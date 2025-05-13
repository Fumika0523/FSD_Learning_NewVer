import React from 'react'


const BasicPDFDownload = () => {

//api call
//downloadpdf
//sever listening 8003

const handleDownload=async()=>{
//alert("Function called")
//API call > Async await

try{
    const response = await fetch('http://localhost:8003/downloadpdf',{method:"GET"})
    console.log(response)
    //Error Handling
        if(!response.status==200 && !response.ok && !response.statusText==="OK"){
            throw new Error("Failed to download an PDF")
        }
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        console.log(url)

        const link = document.createElement("a")
        link.href=url
        //.donwload
        link.download="order-summary-pdf"
        //document.body.append(link)  // multiple at a t ime
        document.body.append(link) //1 at a time
        link.click() // click and download

        //remove a link as a chile >> js vanilla
        //removeChile
        document.body.removeChild(link)

        //remove >> objectURL >> Browser
        window.URL.revokeObjectURL(url)
}catch(e){
    console.log("Error",e)
}
 }
  return (
    <>
        <h1>Order Summary</h1>
        <p>Iten: Bluetooth Device Wireless</p>
        <p>Total: $999</p>
        <button
        onClick={()=>handleDownload()}>Download Invoice</button>
    </>

  )
}

export default BasicPDFDownload