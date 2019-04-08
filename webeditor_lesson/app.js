/* app.js - Web Editor */


window.onload = function(){

    document.querySelector("#run").addEventListener("click",function(){
        console.log("ok");
        let mf = document.getElementById("myframe").contentWindow.document;
        let t_html = document.getElementById("html").value;
        let t_css = document.getElementById("css").value;
        let t_js = document.getElementById("js").value;
      
        mf.open();
        mf.writeln(
            t_html 
       );
        mf.close();

      
    });

      
}