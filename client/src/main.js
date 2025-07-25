export async function fetchData(route= '', data={}, methodType){
    const response = await fetch(`https://localhost:5000${route}`, {
        method: methodType,        
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if(response.ok){
        return await response.json();
    }else {
        throw await response.json();
    }

}