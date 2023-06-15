function insert_Row() {
    //Write your code here
  let table = document.getElementById('sampleTable');
   let row = table.insertRow(0);
  
   let data1 = row.insertCell(0);
     data1.innerText = "New Cell1";
     let data2 = row.insertCell(1);
     data2.innerText = "New Cell2";


  
}
