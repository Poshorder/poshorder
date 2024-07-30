function getData() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function getSingleItem(itemId) {

   // console.log(itemId)
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/api/item/',{
            headers: {
                "Content-Type": "Application/json"
            },
            method: "POST",
            body: JSON.stringify({id:itemId})
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

    });


}

export {
    getData,
    getSingleItem
}