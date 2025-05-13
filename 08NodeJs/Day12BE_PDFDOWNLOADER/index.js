const express = require("express")
const cors = require("cors") 
const PDFDocument=require('pdfkit')
const app = express()

app.use(cors())
app.get('/',(req,res)=>{
    res.send("Server Started...")
})

app.get("/downloadpdf",(req,res)=>{
//create a docunent
const doc = new PDFDocument();

//Browser/postman
//set Header >> Browser/postman >> need to download
res.setHeader("content-Type","application/pdf")
res.setHeader("content-Disposition","attachment ; filename= moviestation.pdf") //test.pdf << filename

//Directly to the response
doc.pipe(res)
//Add the content to the PDF
doc.fontSize(35) .text('Lorem Ipsum is simply ', 100, 100)

//Finalise the PDF
doc.end(); //ending our documentation
})

function drawTableRow(doc,y,row,widths){
    let x=50; //x axis
    row.foreach((cell,index)=>{ //iterate over each cell
        //Print end execute here itself
        doc.text(cell,x,y,{width:widths[i],align:"left"}) //cell x y width alignment
    })
}

app.get('/getinvoice',(req,res)=>{
//create a document >> passing an object constructor PDFDocument
const doc = new PDFDocument({margin:50,size:"A4"})

//Browser / Postman
//set Header >> Browser / postman >> Need to download a pdf file
res.setHeader("content-Type","application/pdf")
res.setHeader("content-Disposition","attachment ; filename=test.pdf")

//pipe PDf content directly to the response
doc.pipe(res)

// take a client name

//drawTableRow() //doc,y,row,widths >> ????
console.log("Client Name") // from front-end
//Finalize the PDF
console.log("req.query",req.query.clientname)
doc.fontSize(35).text(`${req.query.clientname}`)
doc.end()
})

const PORT = 8003
app.listen(PORT,()=>{
    console.log("Server Listening",PORT)
})