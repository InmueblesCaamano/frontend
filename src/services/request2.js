const request = {
    post: async function (url, body) {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        const response = await res.json()
        return response
        /* .then(res => res.json())
        .then(res => res)
        .catch(error => error) */
    },
    get: async function (url) {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)

    },
    put: async function (url, body) {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => res)
            .catch(error => error)
    }
}
export default request