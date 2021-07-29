export const valueCheck = (target) => {

  const value = target.value !== "on" ? target.value : target.checked

  if(value === '+' || value === '0+' || value === '0.+' || value === '.+' || value === '1+' || value === '1.+' || value === '2+' || value === '2.+' || value === '3+' || value === '3.+' || value === '4+'){
    return (value.substring(0, value.length - 1))
  }
  if(value === '' || value === '0' || value === '0.' || value === '.' || value === '1' || value === '1.' || value === '2' || value === '2.' || value === '3' || value === '3.' || value === '4'){
    return (value)
  }
  if(value === true || value === false){
    return (value)
  }
  return ""
}
