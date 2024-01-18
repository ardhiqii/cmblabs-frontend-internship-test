export const TruncateString = (string,length) =>{
  const currLength = string.length
  let newString = string
  if(currLength > length){
    newString = string.substring(0,length)
    newString = newString +"..."
  }
  return newString
}