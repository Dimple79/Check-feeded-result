function result(){
 
    var students= {

        DAVID : {
            math: "95",
            physics : "80",
            chemistry : "65",
            computer : "88",
            literature : "75",
            percentage : "80.6 Pass!"
        },
        SOPHIA : {
            math: "31",
            physics : "40",
            chemistry : "40",
            computer : "28",
            literature : "25",
            percentage : "32.8% Fail!"
        },
        EMMA : {
            math: "85",
            physics : "90",
            chemistry : "65",
            computer : "68",
            literature : "45",
            percentage : "70.6 Pass!"
        },
        RAJ : {
            math: "67",
            physics : "70",
            chemistry : "65",
            computer : "58",
            literature : "95",
            percentage : "71 Pass!"
        },
        WILLIAM : { 
            math: "97",
            physics : "90",
            chemistry : "85",
            computer : "78",
            literature : "95",
            percentage : "89% Pass!"
        }  
    }

    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if (definition==undefined) {
        output.innerHTML=`<hr> There is no information about this student. <hr>`; 
    } else{
        output.innerHTML=`YOUR SCORE CARD <hr> Math = ${definition.math}. <hr> Physics = ${definition.physics}. <hr> Chemistry = ${definition.chemistry}. <hr> Literature = ${definition.literature}. <hr> Computer Science = ${definition.computer}. <hr> Your Percentage is ${definition.percentage}. <hr>`;
    };
};
