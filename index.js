<html>
    <head>
        <html>
            <head>
                <title>calculator</title>
                <script>
                     function add(){
            var a = document.getElementById('First').value;
            var b = document.getElementById('Second').value;
            out = parseInt(a)+parseInt(b)
            
            document.getElementsByTagName('p')[0].innerText='Out is '+ out
          
        }
                </script>
            </head>
            <body>
        <div>
            <label>first</label>
            <input type="text" id='First'/><br/>
            <label>second</label>
            <input type = "text" id='Second'/></br>
            <button type="button"onClick="add()">add</button>
            <button type="button"onClick="sub()">sub</button>
            <button type="button"onClick="multiply()">multi</button>
            <button type="button"onClick="divide()">Div</button>
        
        </div>
        <p id='output'>
        </p>
        
        <script>
               function sub(){
            var a = document.getElementById('First').value;
            var b = document.getElementById('Second').value;
            out = parseInt(a)-parseInt(b)
            document.getElementsByTagName('p')[0].innerText='Out is '+ out
               }
        </script>
        <script>
            function multiply(){
         var a = document.getElementById('First').value;
         var b = document.getElementById('Second').value;
         out = parseInt(a)*parseInt(b)
         document.getElementsByTagName('p')[0].innerText='Out is '+ out
            }
     </script>
      <script>
        function divide(){
     var a = document.getElementById('First').value;
     var b = document.getElementById('Second').value;
     out = parseInt(a)/parseInt(b)
     document.getElementsByTagName('p')[0].innerText='Out is '+ out
        }
 </script>
            </body>
        </html>
