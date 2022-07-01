const $pizzaList = document.querySelector('#pizza-list');

const getPizzaList = () => {
  fetch('/api/pizzas')
    .then(response => response.json())
    .then(pizzaListArr => {
      pizzaListArr.forEach(printPizza);
    })
    .catch(err => {
      console.log(err);
    });
    
};

// function processFile() {
//   var fileSize = 0;
//   //get file
//   var theFile = document.getElementById("myFile");

//   console.log(theFile.value)

//   var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
//   //check if file is CSV
//   if (regex.test(theFile.value.toLowerCase())) {
//     //check if browser support FileReader
//     if (typeof (FileReader) != "undefined") {
//       //get table element
//       var table = document.getElementById("myTable");
//       var headerLine = "";
//       //create html5 file reader object
//       var myReader = new FileReader();
//       // call filereader. onload function
//       myReader.onload = function (e) {
//         var content = myReader.result;
//         console.log(content)
//         //split csv file using "\n" for new line ( each row)
//         var lines = content.split("\r");
//         //loop all rows
//         for (var count = 0; count < lines.length; count++) {
//           //create a tr element
//           var row = document.createElement("tr");
//           //split each row content
//           var rowContent = lines[count].split(",");
//           //loop throw all columns of a row
//           for (var i = 0; i < rowContent.length; i++) {
//             //create td element 
//             var cellElement = document.createElement("td");
//             if (count == 0) {
//               cellElement = document.createElement("th");
//             } else {
//               cellElement = document.createElement("td");
//             }
//             //add a row element as a node for table
//             var cellContent = document.createTextNode(rowContent[i]);

//             cellElement.appendChild(cellContent);
//             //append row child
//             row.appendChild(cellElement);
//           }
//           //append table contents
//           myTable.appendChild(row);
//         }
//       }
//       //call file reader onload
//       myReader.readAsText(theFile.files[0]);
//     }
//     else {
//       alert("This browser does not support HTML5.");
//     }

//   }
//   else {
//     alert("Please upload a valid CSV file.");
//   }
//   return false;
// }


// const fs = require("fs");

// fs.writeFile("log.txt", process.argv[2], function(err) {

//   if (err) {
//     return console.log(err);
//   }

//   console.log("Done!");

// });

// fs.readFile("log.txt", "utf8", function(error, log) {

//   if (error) {
//     return console.log(error);
//   }
  
//   console.log(log);
  
//   });


const printPizza = ({ _id, pizzaName, toppings, size, commentCount, createdBy, createdAt }) => {
  const pizzaCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${pizzaName}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">By ${createdBy}</h4>
          <p>On ${createdAt}</p>
          <p>${commentCount} Comments</p>
          <h5 class="text-dark">Suggested Size: ${size}
          <h5 class="text-dark">Toppings</h5>
          <ul>
            ${toppings
              .map(topping => {
                return `<li>${topping}</li>`;
              })
              .join('')}
          </ul>
          <a class="btn display-block w-100 mt-auto" href="/pizza?id=${_id}">See the discussion.</a>
        </div>
      </div>
    </div>
  `;

  $pizzaList.innerHTML += pizzaCard;
};

getPizzaList();
