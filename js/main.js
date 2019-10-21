
 var hw1 = [254, 115,78, 25, 91, 45, 37], i;



for (i=0; i < hw1.length; i++){
    if (hw1[i]>50){
        console.log(hw1[i])
    }
}
 //

 var letters = [];
 var row = "Backend As A Service";
 var newRow = row.split(' ');
 newRow.forEach(e => {
     letters.push(e[0]);
 });
 var finishRow = letters.join("");
 console.log(letters);
 console.log(finishRow);


 //

 var now = new Date();
 var func = function (x) {
     if (typeof (x) === "number") {
         console.log(now);
     } else {
         console.log("Неверный тип данных")
     }
     return;
 };


 function testUserText(userText) {
     // return escape(userText)
     return userText.replace('<',"&lt").replace('>',"&gt").replace(/"/g, '&quot;');
 }

 function insertUserText(userText) {
     var x = document.createElement('div');
     x.innerHTML =   testUserText(userText);
     document.body.appendChild(x)
 }

 // insertUserText(`<svg/onload='document.write("Looser");
 //                  document.body.style.backgroundColor="black";
 //                  document.body.style.color="red";
 //                  document.body.style.fontSize="50px";
 //                  document.body.style.fontWeight="bold";
 //                  document.body.style.textAlign="center";
 //                  document.body.style.paddingTop="45%";'>`);
