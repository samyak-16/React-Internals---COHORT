import axios from "axios";
import React, { useState, useEffect } from "react";

const    RandomJokes =  ()=>{


    const [jokes,setJokes] = useState([]);


    useEffect(()=>{

    const fetchJokes = async()=>{
        try {
                const url = 'https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1';
          const response  =  await  axios.get(url)
            setJokes(response.data.data.data);
        //   console.log(data);
        } catch (error) {
            console.error("Error fetching jokes:", error);
            
        }
    }
    fetchJokes();
    console.log(jokes);
    
          
        
    },[])

    return(
        <div>
            {jokes.map((joke, index) => (
                <div key={index} className="joke">
                    <p>{joke.content}</p>
                    <p><strong>Category:</strong> {joke.categories.join(", ")}</p>
                </div>
            ))}
        </div>
    )

}

export { RandomJokes };





