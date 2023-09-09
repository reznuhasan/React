

export const calculateCgpa=(courses)=>{
    let totalGpa=0;
    let totalCredit=0;
    for(let i=0;i<courses.length;i++){
        if(courses[i].grade==='A+'){
            totalGpa=totalGpa+(4*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }else if(courses[i].grade==='A'){
            totalGpa=totalGpa+(3.75*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }
        else if(courses[i].grade==='A-'){
            totalGpa=totalGpa+(3.50*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }
        else if(courses[i].grade==='B+'){
            totalGpa=totalGpa+(3.25*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }
        else if(courses[i].grade==='B'){
            totalGpa=totalGpa+(3*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }
        else if(courses[i].grade==='B-'){
            totalGpa=totalGpa+(2.75*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }
        else if(courses[i].grade==='C+'){
            totalGpa=totalGpa+(2.5*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }
        else if(courses[i].grade==='C'){
            totalGpa=totalGpa+(2.25*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }
        else if(courses[i].grade==='D'){
            totalGpa=totalGpa+(2*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }
        else if(courses[i].grade==='F'){
            totalGpa=totalGpa+(0*courses[i].courseCredit)
            totalCredit=totalCredit+courses[i].courseCredit
        }
    }
    console.log(totalGpa,totalCredit)
    return (totalGpa/totalCredit).toFixed(2)
}