const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [{
        id: "2",
        name: "public",
        isFolder: true,
        items: [{
            id: "3",
            name: "public nested",
            isFolder: true,
            items: []
        }]
    },
    {
        id: "4",
        name: "config",
        isFolder: false,
        items: []
    },
    {
        id: "5",
        name: "src",
        isFolder: true,
        items: [{
            id: "6",
            name: "layout",
            isFolder: true,
            items: [{
                id: "7",
                name: "pages",
                isFolder: true,
                items: [{
                    id: "8",
                    name: "hello",
                    isFolder: false,
                    items: []
                }]
            }]
        }]
    }
    ]
}

export default explorer;