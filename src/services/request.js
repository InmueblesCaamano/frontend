const request = async ({ url, method, body }) => {
    return await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => res)
        .catch(error => error)
}

export default request