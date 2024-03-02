import { useState, useEffect } from "react";
import axios from 'axios'

const Doremon = () => {
    const [apiData, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const data = response.data
            const modifiedData = data.map(each => ({
                id: each.id,
                body: each.body,
                title: each.title
            }))
            setData(modifiedData)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>Doremon Hello!!</h1>
            <div>
                {apiData.map(each => (
                    <div key={each.id}>
                        <p>Title: {each.title}</p>
                        <p>Body: {each.body}</p>

                        <br/>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Doremon;
