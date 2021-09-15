import React,{useState,useEffect}from "react";


function SefCounter(){

    let [counter,setCounter]=useState(0)
    let [userName,setUserName]=useState("Zeeshan");
    let [genUserName,setgenUserName]=useState(["Ali","ahmed","Zeeshan"]);

    let [color,setColor]=useState("red");

   







    useEffect(()=>{
        // console.log("Counter", counter  )
        let modulus=counter%2 === 0 ;
        // console.log(modulus)
        // let number=counter%2 ===1;
        let oddNumber=counter%5===0;
        if(oddNumber){
            setColor("blue")
        }
        
       else if(modulus){
            setColor("pink")
        }
        else{
            setColor("red")
        }
    })

    
    useEffect(()=>{
        document.title=`${counter} counter`
    },[counter])


    let UpdateName=()=>{
    let genNum=Math.floor(Math.random()*3)
   var newName= genUserName [genNum]

    
    if (newName !== userName) setUserName(newName);
    }



    let next=()=>{
        setCounter(counter + 1)
    }
    return(
        <>
        <h1>
            {counter}
        </h1>
            <button onClick={next}>Add</button>


            <h1>{userName}</h1>
            <button onClick={UpdateName}>Update</button>

            <h1 style = {{backgroundColor:color}}>{counter}</h1>
        </>
    )
}

export default SefCounter;