
$(document).ready(function () {
    $("#btn_search").click(function () {
        let url1="https://weatherapi-com.p.rapidapi.com/current.json?q=";
        let url2=document.getElementById("location").value;
        let result = url1.concat(url2);
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": result,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "dc74d997b3msh3b26c1e1a01ef0cp1b7c87jsnf1fb946551d5",
                "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
            }
        };
        
        $.ajax(settings).done(function (response) {
            //response.
                
            document.getElementById('temp').innerHTML =response.current.temp_f;
            document.getElementById('location_bind').innerHTML =response.location.name+"  "+response.location.region+"  "+response.location.country;
            //document.getElementById("icon").innerHTML=response.current.condition.icon;
            document.getElementById('Condition').innerHTML =response.current.condition.text;
            const img = document.querySelector("img"); 
            img.src = "https:"+response.current.condition.icon;
           
        });  

    });
});