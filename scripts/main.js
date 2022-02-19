async function makeAPICall(url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }catch(err){
        console.log(err)
    }
}
 
function appendPicture(data, parent){

    data.forEach(element => {
        let div = document.createElement("div");
         
        div.id="mini_div";

        let image = document.createElement("img");

          image.src = element.urls.small;
           
          image.id = "pic";
          
        let p = document.createElement("p");

        p.innerHTML = element.user.name;
 
        
         
        div.append(image,p);

        div.onclick=()=>{
            localStorage.setItem("clicked_image",JSON.stringify(element));
        };

        parent.append(div)
    });
}

export { makeAPICall, appendPicture }; 