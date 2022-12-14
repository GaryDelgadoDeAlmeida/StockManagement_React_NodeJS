import { useCallback, useState } from "react"

export function useFetchAPI(url) {
    const [loading, setLoading] = useState(false)
    const [entities, setEntities] = useState([])

    const load = useCallback(async () => {
        setLoading(true)
    
        await fetch(`http://127.0.0.1:8080${url}`, {
            headers: {
                "Accept": "application/ld+json",
                "Content-Type": "application/json"
            },
            method: "GET",
            mode: "cors"
        })
        .then((response) => {
            if(response.status === 200) {
                response.json().then((responseData) => setEntities(responseData))
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        });
        
        setLoading(false)
    }, [url])

    return {
        entities,
        load,
        loading,
    }
}