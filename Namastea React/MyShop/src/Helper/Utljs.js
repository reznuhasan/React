

export const FindProducts=(values,text="")=>{
    const datas=values.filter(value=>value?.title?.toLowerCase().includes(text.toLowerCase()));
    return datas;
}