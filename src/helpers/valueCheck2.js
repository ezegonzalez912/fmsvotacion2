export const valueCheck2 = (value) => {
    if (value === '' || value === '0' || value === '0.' || value === '.' || value === '1' || value === '1.' || value === '2'){
      return (value)
    }else{
      return ""
    }
}