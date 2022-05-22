
async function foo(){
    try{
        let click=document.getElementById("content")
        click.innerHTML="";
    
        let a=await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
        let result=await a.json();
            console.log(result);
            let facts=document.createElement("div")
            facts.className="facts"
            let image=document.createElement("img");
            image.setAttribute("src",result.image_link);
            image.className="image"
        let name=document.createElement("div")
        name.className="name";
        name.innerHTML=result.name
        let Latinname=document.createElement("div")
        Latinname.innerHTML="<b>Latin Name:</b>"+result.latin_name;
        image.className="image"
        let type=document.createElement("div")
        type.innerHTML="<b>Animal Type:</b>"+result.animal_type;
        let weight=document.createElement("div")
        weight.innerHTML="<b>Weight:</b>"+result.weight_max +"Kg";
        let lifespan=document.createElement("div")
        lifespan.innerHTML="<b>Life span:</b>"+result.lifespan;
        let food=document.createElement("div")
        food.innerHTML="<b>Foods:</b>"+result.diet;
         
        let button=document.createElement("button")
        button.className="next"
        button.addEventListener("click",next);
        button.innerText="Next"



        facts.append(image,name,Latinname,type,weight,lifespan,food,button)
        click.append(facts)
        document.body.append(click)


    }catch(error){
        alert("Something went wrong")
    }
  
    
    
}

function next(){
    foo()
}

function home(){
location.reload()
}