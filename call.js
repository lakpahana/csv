var zipindex, phoneindex, have_been_called_to=1;
var rows, rowindex, row, cells, cell;
function Upload() {
    var fileUpload = document.getElementById("fileUpload");
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
               
                rows = e.target.result.split(/\r\n|\n/);
                var headers = rows[1].split(',');
                document.getElementById("remaining").value = rows.length - 1;
                document.getElementById("ide").value = headers[0];
                document.getElementById("fname").value = headers[1];
                document.getElementById("lname").value = headers[2];
                document.getElementById("phone").value = headers[3];
                document.getElementById("address").value = headers[4];
                document.getElementById("city").value = headers[5];
                document.getElementById("state").value = headers[6];
                document.getElementById("country").value = headers[7];
                document.getElementById("zip").value = headers[8];
                document.getElementById("age").value = headers[9];
                document.getElementById("Birth").value = headers[10];
                document.getElementById("income").value = headers[11];
                document.getElementById("howner").value = headers[12];
                document.getElementById("married").value = headers[13];
                document.getElementById("prop").value = headers[14];
                document.getElementById("netw").value = headers[15];
                document.getElementById("hhold").value = headers[16];
                document.getElementById("Credit").value = headers[17];
                document.getElementById("dwle").value = headers[18];
                document.getElementById("polt").value = headers[19];
                document.getElementById("eth").value = headers[20];
                document.getElementById("lang").value = headers[21];
                document.getElementById("mail").value = headers[22];
                document.getElementById("lat").value = headers[23];
                document.getElementById("lng").value = headers[24];
                  

                         

            }
            reader.readAsText(fileUpload.files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }
}

function loadnext(){
     
    cells = rows[++have_been_called_to].split(",");
    console.log(cells);
    
    for (var j = 0; j < cells.length; j++) {
        console.log(cells[j]);
        var k = rows.length - have_been_called_to;

        document.getElementById("remaining").value = rows.length - have_been_called_to;
        document.getElementById("ide").value = cells[0];
        document.getElementById("fname").value = cells[1];
        document.getElementById("lname").value = cells[2];
        document.getElementById("phone").value = cells[3];
        document.getElementById("address").value = cells[4];
        document.getElementById("city").value = cells[5];
        document.getElementById("state").value = cells[6];
        document.getElementById("country").value = cells[7];
        document.getElementById("zip").value = cells[8];
        document.getElementById("age").value = cells[9];
        document.getElementById("Birth").value = cells[10];
        document.getElementById("income").value = cells[11];
        document.getElementById("howner").value = cells[12];
        document.getElementById("married").value = cells[13];
        document.getElementById("prop").value = cells[14];
        document.getElementById("netw").value = cells[15];
        document.getElementById("hhold").value = cells[16];
        document.getElementById("Credit").value = cells[17];
        document.getElementById("dwle").value = cells[18];
        document.getElementById("polt").value = cells[19];
        document.getElementById("eth").value = cells[20];
        document.getElementById("lang").value = cells[21];
        document.getElementById("mail").value = cells[22];
        document.getElementById("lat").value = cells[23];
        document.getElementById("lng").value = cells[24];
        if (k == 0){
          document.getElementById("loadnext").disabled = true;
        }

      }
}