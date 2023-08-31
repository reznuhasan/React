export const FindCountry=(values,text)=>{
    return values.filter(value=>value?.name.toLowerCase().includes(text.toLowerCase()))
}