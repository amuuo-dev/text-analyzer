// Get references to the span elements
const wordCountSpan=document.getElementById("wordCount")
const charCountSpan=document.getElementById("charCount")
const avgCountSpan=document.getElementById("avgCount")
// Get reference to the textarea
const textInput=document.getElementById("textInput")
// Get reference to the analyze button
const analyzerBtn=document.getElementById("analyzerBtn")
// Add click event listener to the analyze button
analyzerBtn.addEventListener("click",()=>{
 // Get the text from the textarea
  const inputText=textInput.value
  //calculate word count
  const wordCount=inputText.split(" ").filter((word)=>{
    return word.length>0
  }).length
//displaying wordcount
wordCountSpan.textContent=wordCount

//calculating character count
  const charCount=inputText.length
  //displaying the char count
  charCountSpan.textContent=charCount
   
  //calculating average count
const avgWordLength=wordCount>0 ? charCount/wordCount : 0
//displaying average length
avgCountSpan.textContent=avgWordLength.toFixed(2)
//clearing text area
textInput.value = ""
})
