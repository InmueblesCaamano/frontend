const request = {
    get: async function (url) {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const response = await res.json()
        return response
    },
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
    },

    put: async function (url, body = {}) {
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        const response = await res.json()
        return response
    },
    delete: async function (url) {
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const response = await res.json()
        return response
    }
}
export default request