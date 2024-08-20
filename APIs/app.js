let data = "";

const fetchData = async() => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts/")
    let json = await data.json()
    data = json;
    console.log(data)

}

fetchData()
