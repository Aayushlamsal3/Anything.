<script>
        function appendtodisplay(value){
            document.getElementById("display").value += value;
        }
        function calculate(){
            try{
            let val=document.getElementById("display").value
            let result=eval(val)
            document.getElementById('result').innerText=`Result:${result}`
            document.getElementById("display").value="";
            document.getElementById("result").value="";
            }
            catch{
            document.getElementById("result").innerText="Invalid operation"
            }
        }

        function ClearInp(){
            document.getElementById("display").value=""
            document.getElementById("result").value="";
        }
    </script>
