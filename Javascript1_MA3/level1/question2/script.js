//Console.log out elements in JSON file
let jsonObject = {
    "video": [{
        "id": 12312412312,
        "name": "Ecuaciones Diferenciales",
        "url": "/video/math/edo/12312412312",
        "author": {
            "data": [{
                "name_author": "Alejandro Morales",
                "url": "/author/alejandro-morales",
                "type": "master"
            }]
        }
    }]
};

let video = jsonObject['video'][0];
console.log(video);

Object.keys(video).forEach(function (key) {
    if (key === 'author') { 
        let data = video[key]['data'][0];
        Object.keys(data).forEach(function (key) {
            console.log(key, data[key]);
        })
    } else {
        console.log(key, video[key]);
    }
});

