export const FindCountry=(values,text)=>{
    return values.filter(value=>value?.name?.common.toLowerCase().includes(text.toLowerCase()))
}