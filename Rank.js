const {values,map,reduce,filter} = require('@laufire/utils/collection');

const markSheets=[ 
    {
        student: 'Sriram',
        rollNo: 11,
    },
    {
        student: 'Ram',
        rollNo: 16,            
    },
    {
        student: 'sri',
        rollNo: 18,
    },
    {
        student: 'mani',
        rollNo: 20,
    },
] 

const studentMarks = {
'11':{
    tamil: 80,
    english: 90,
    science: 86,
    maths: 97,
    social: 76
},
'16':{
    tamil: 60,
    english: 97,
    science: 100,
    maths: 34,
    social: 100
},
'18':{
    tamil: 60,
    english: 90,
    science: 66,
    maths: 93, 
    social: 46,
},
'20':{
    tamil: 40,
    english: 70,
    science: 86,
    maths: 73,
    social: 86,
},
}
const getTotal = (marks) => reduce(values(marks),((prev, curr) => prev + curr));

const getResult = (marks) => Math.min(...values(marks)) >= 35 ? "Pass" : "Fail";

const processMarkSheet = (markSheet) => {
   return({
     ...markSheet,
    ...studentMarks[markSheet.rollNo], 
    total:getTotal(studentMarks[markSheet.rollNo]),
    result:getResult(studentMarks[markSheet.rollNo]),

});
}; 

const counter = (a,b) => b.result === "Pass" ? {pass:a.pass+1} : {fail:a.fail+1};

const getCount = (studentDataList) => reduce(studentDataList,(a,b) => ({...a,...counter(a,b)}),{pass:0,fail:0});         


const finalMarkSheets = () => {
    const studentData = map(markSheets,(processMarkSheet));
    const final = map(studentData,(markSheet,index,array) => ({    
        ...markSheet,
        rank:markSheet.result === "Pass" ? filter((item) => item.total > markSheet.total && item.result
        !== "Fail").length+1 : "-",
    }));
    return final;
};

const getStudentData = () => {
    const studentDataList = finalMarkSheets();  
    const count = getCount(studentDataList);
    return[...studentDataList,count]; 
};

console.table(getStudentData());