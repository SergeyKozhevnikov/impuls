 const data = {
    object :{
    id: 10000,
    name: "Документ под названием “Объект 1.2”",
    desc: "Описание документа 10000 для создания чего либо при создании документа",
    author: "Красненков Илья",
    status: "В разработке",
    date_created: new Date("2024-01-01"),
    date_changed: new Date("2024-03-01"),
    type: "Основной документ",
    priority: "всевышний",
    path: "S://impuls/client/src/components/testPage/testPage.tsx",
    links: ["https://learn.javascript.ru/","https://google.com"],
    tags: [{ key: "Тэг1", value: "Значение тэга" }, { key: "Тэг2", value: 2 }],
  },
  hist : [{  
    id: 1,
    author: "Сотрудник 1",
    date_changed: new Date("2024-01-01"),
    text: "Объект 1: А изменено на Б ",
    avatar: "https://avatars.mds.yandex.net/get-yapic/23186/enc-fcff59d213e265d10a2cccb679221e95c9b92a7e71c02c7c269cd6e384249449/islands-retina-middle"
},
{  
    id: 2,    
    author: "Сотрудник 2",
    date_changed: new Date("2024-01-02"),
    text: "Обект 1: Discription: Имя -> Наименование",
    avatar: "https://cdn.discordapp.com/avatars/1206913485267664947/ea519d3cd94003890fd84eec29d8e720.webp?size=80"
},],
    messages : [{  
    id: 1,
    author: "Илья Красненков",
    date_sent: new Date("2024-01-01"),
    text: "Текст сообщения 1",
    avatar: "https://avatars.mds.yandex.net/get-yapic/23186/enc-fcff59d213e265d10a2cccb679221e95c9b92a7e71c02c7c269cd6e384249449/islands-retina-middle"
},
{  
    id: 2,    
    author: "Кожевников Сергей",
    date_sent: new Date("2024-01-02"),
    text: "Текст сообщения 2",
    avatar: "https://cdn.discordapp.com/avatars/1206913485267664947/ea519d3cd94003890fd84eec29d8e720.webp?size=80"
},
{  
    id: 3,    
    author: "Илья Красненков",
    date_sent: new Date("2024-01-03"),
    text: "Текст сообщения 3",
    avatar: "https://avatars.mds.yandex.net/get-yapic/23186/enc-fcff59d213e265d10a2cccb679221e95c9b92a7e71c02c7c269cd6e384249449/islands-retina-middle"
}],
    tree : [{
        name : "АСУ ТП для АЭС МАРС1",
        objects: [
                {
                name: "Архитектура АСУ ТП",
                },
            ],
                documents: [{
                    name: "План разработки АСУ ТП",
                },
                {
                    name: "Контракт № 342",
                    
                },
                {
                    name: "Проектные документы",
                    data: [{
                        name: "Техническое задание",
                        object :{
                        id: 10000,
                        name: "Документ под названием “Объект 1.2”",
                        desc: "Описание документа 10000 для создания чего либо при создании документа",
                        author: "Красненков Илья",
                        status: "В разработке",
                        date_created: new Date("2024-01-01"),
                        date_changed: new Date("2024-03-01"),
                        type: "Основной документ",
                        priority: "всевышний",
                        path: "S://impuls/client/src/components/testPage/testPage.tsx",
                        links: ["https://learn.javascript.ru/","https://google.com"],
                        tags: [{ key: "Тэг1", value: "Значение тэга" }, { key: "Тэг2", value: 2 }],
                        }
                    },
                    {
                        name: "Объект 3.2",
                        object :{
                            id: 10002,
                            name: "Документ под названием “Объект 3.2",
                            desc: "Описание документа 10000 для создания чего либо при создании документа",
                            author: "Красненков Илья",
                            status: "В разработке",
                            date_created: new Date("2024-02-01"),
                            date_changed: new Date("2024-03-01"),
                            type: "Основной документ",
                            priority: "всевышний",
                            path: "S://impuls/client/src/components/testPage/testPage.tsx",
                            links: ["https://learn.javascript.ru/","https://google.com"],
                            tags: [{ key: "Тэг1", value: "Значение тэга" }, { key: "Тэг2", value: 2 }],
                            },
                    },
                    {
                        name: "Объект 3.3",
                        object :{
                            id: 11111,
                            name: "Документ вот с таким названием",
                            desc: "Описание документа 11111 ",
                            author: "Кто то ",
                            status: "На доработку",
                            date_created: new Date("2024-01-01"),
                            date_changed: new Date("2024-03-01"),
                            type: "Основной документ",
                            priority: "всевышний",
                            path: "S://impuls/client/src/components/testPage/testPage.tsx <any>",
                            links: ["https://ya.ru/","https://vk.ru"],
                            tags: [{ key: "Тэг1", value: "Значение тэга" }, { key: "Тэг2", value: 2 }],
                            },
                    },
                        {   name: "Задачи",
                            tasks: [{
                            name: "Задача 1",
                        },
                        {
                            name: "Задача 2",
                        },
                        {
                            name: "Задача 3",
                        }]}
                ]
            }],
    },
    {
        name : "Ледокол Иван Сусанин",
        objects: [{
            name: "Объект 11",
            },
            {
                name: "Объект 22",
            },
            {
                name: "Объект 34",
            }],
                documents: [{
                    name: "Объект 180",
                },
                {
                    name: "Объект 2285",
                },
                {
                    name: "Объект 3150",
                    data: [{
                        name: "Документ 10000",
                        object :{
                        id: 10000,
                        name: "Документ под названием “Объект 1.2”",
                        desc: "Описание документа 10000 для создания чего либо при создании документа",
                        author: "Красненков Илья",
                        status: "В разработке",
                        date_created: new Date("2024-01-01"),
                        date_changed: new Date("2024-03-01"),
                        type: "Основной документ",
                        priority: "всевышний",
                        path: "S://impuls/client/src/components/testPage/testPage.tsx",
                        links: ["https://learn.javascript.ru/","https://google.com"],
                        tags: [{ key: "Тэг1", value: "Значение тэга" }, { key: "Тэг2", value: 2 }],
                        }
                    },
                    {
                        name: "Объект 3.2",
                    },
                    {
                        name: "Объект 3.3",
                    },
                    {
                        name: "Задачи 123 документа 3150",
                        tasks: [{
                            name: "Задача 11",
                        },
                        {
                            name: "Задача 22",
                        },
                        {
                            name: "Задача 33",
                        }]
                    }
                ]
            }],
            
    }]
}

export default data;