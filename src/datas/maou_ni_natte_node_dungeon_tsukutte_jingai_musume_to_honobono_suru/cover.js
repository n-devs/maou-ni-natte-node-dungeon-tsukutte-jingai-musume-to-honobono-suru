import 'react';
import img from './images/cover.png'




const cover = {
    img: img,
    name: {
        en: "Maou ni Natte node Dungeon Tsukutte Jingai Musume to Honobono suru",
        th: "จู่ๆก็ได้เป็นจอมมารแล้วไปสร้างดันเจี้ยนกับสาวที่ต่างโลก"
    },
    rating: 4.7,
    rank: 0,
    genre: [{
        type: "/genre",
        name: {
            en: "shounen",
            th: "ต่างโลก"
        },
        link: "/shounen"
    },
    {
        type: "/genre",
        name: {
            en: "adventure",
            th: "ผจญภัย"
        },
        link: "/adventure"
    },
    {
        type: "/genre",
        name: {
            en: "fantasy",
            th: "แฟนตาซี"
        },
        link: "/fantasy"
    }]


}

export default cover;