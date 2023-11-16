import itemController from '../controller/CategoryController';
const CatagoryData=[
    {
        'title':'Furniture',
        'thumbnail':'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png'
    },
    {
        'title':'Hand Bag',
        'thumbnail':'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png'
    },
    {
        'title':'Books',
        'thumbnail':'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png'
    },
    {
        'title':'Tech',
        'thumbnail':'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png'
    },
    {
        'title':'Sneakers',
        'thumbnail':'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png'
    },
    {
        'title':'Travel',
        'thumbnail':'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png'
    },
];

for(let item of CatagoryData){
    itemController.push= `
            <div className="item-category">
                <h1>${item.title}</h1>
                <img src="${item.thumbnail}" alt="" />
            </div>
    `;
}