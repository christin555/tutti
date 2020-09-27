import './sccs/style.scss';
import Swiper from 'swiper';

window.onload = function() {
    //data
    let productsMain = [
        {id: 1, img: 'src/img/main.png', productName:'Кресло "Антиква"', priceOld:'$240', priceNew:'$140', page: 1},
        {id: 2, img: 'src/img/main2.png', productName:'Кресло "Антиква2"', priceOld:'$241', priceNew:'$841', page: 2},
        {id: 3, img: 'src/img/main3.png', productName:'Кресло "Антиква3"', priceOld:'$242', priceNew:'$241', page: 3},
        {id: 4, img: 'src/img/main4.png', productName:'Кресло "Антиква4"', priceOld:'$243', priceNew:'$941', page: 4}
    ];
    let reviews = [
        {id: 1, userPhoto: 'src/img/user.jfif', userName:'Елена Новикова', userStatus:'студентка', userComment:'«Хочу поделиться своими впечатлениями по использованию дивана «Бродвей», заказывала в конце 2016 года. Держится великолепно. Спасибо, большое сотрудникам этого чудесного магазина.»'},
        {id: 2, userPhoto: 'src/img/user2.jpg', userName:'user2', userStatus:'студент', userComment:'круто'},
        {id: 3, userPhoto: 'src/img/user3.jpg', userName:'user3', userStatus:'школьник', userComment:'супер круто'},
        {id: 4, userPhoto: 'src/img/user.jfif', userName:'user4', userStatus:'школьница', userComment:'пойдет'}
    ];
    let lastChance = {
        chairs: [
            {
                id: 1,
                img: 'src/img/main.png',
                productName: 'Стул "Антиква"',
                priceOld: '$230',
                priceNew: '$150',
                page: 1
            },
            {
                id: 2,
                img: 'src/img/main2.png',
                productName: 'Стул "Антиква2"',
                priceOld:'$241',
                priceNew: '$141',
                page: 2
            },
            {
                id: 3,
                img: 'src/img/main3.png',
                productName: 'Стул "Антиква3"',
                priceOld: '$262',
                priceNew: '$2641',
                page: 3
            },
            {
                id: 4,
                img: 'src/img/main4.png',
                productName: 'Стул "Антиква4"',
                priceOld: '$243',
                priceNew: '$941',
                page: 4
            }
        ],
        sofas: [
            {
                id: 1,
                img: 'src/img/sofa4.png',
                productName: 'Диван "Антиква"',
                priceOld: '$220',
                priceNew: '$144',
                page: 1
            },
            {
                id: 2,
                img: 'src/img/sofa3.png',
                productName: 'Диван "Антиква2"',
                priceOld:'$241',
                priceNew: '$841',
                page: 2
            },
            {
                id: 3,
                img: 'src/img/sof2.png',
                productName: 'Диван "Антиква3"',
                priceOld: '$242',
                priceNew: '$231',
                page: 3
            },
            {
                id: 4,
                img: 'src/img/sofa1.png',
                productName: 'Диван "Антиква4"',
                priceOld: '$243',
                priceNew: '$911',
                page: 4
            }
        ],
        armchairs: [
            {
                id: 1,
                img: 'src/img/main.png',
                productName: 'Кресло "Антиква"',
                priceOld: '$240',
                priceNew: '$100',
                page: 1
            },
            {
                id: 2,
                img: 'src/img/main2.png',
                productName: 'Кресло "Антиква2"',
                priceOld:'$941',
                priceNew: '$841',
                page: 2
            },
            {
                id: 3,
                img: 'src/img/main3.png',
                productName: 'Кресло "Антиква3"',
                priceOld: '$652',
                priceNew: '$5641',
                page: 3
            },
            {
                id: 4,
                img: 'src/img/main4.png',
                productName: 'Кресло "Антиква4"',
                priceOld: '$213',
                priceNew: '$541',
                page: 4
            }
        ],
    };

    //init
    showLastChance('chairs');
    showNewProduct(productsMain[0]);
    var mySwiper = new Swiper('.review', {
        slidesPerView: 1,
        spaceBetween: 1000,
        wrapperClass: 'review-wrapper',
        slideClass: 'review-slide',
        navigation: {
            nextEl: '#nextReview',
            prevEl: '#previousReview',
        },
        pagination: {
            el: '.review-pagination',
            clickable: true,
            bulletClass: 'item',
            bulletActiveClass: 'item_active'
        }
    });
    let reviewsCards = reviews.map(rev => {
        return ReviewConsctruct(rev);
    })
    mySwiper.appendSlide(reviewsCards);

    //shared func
    function CardConsctruct(img,name,oldPrice,newPrice){
        let div = `
             <div class="CardRectangle">
                <div class="CardRectangle-separator"></div>
                <div class="name">${name}</div>
                <div class="price">
                    <span class="priceNew">${newPrice} </span>
                    <span class="priceOld">${oldPrice} </span>
                </div>
                <div class="image">
                    <img src=${img}>
                </div>

                <div>
                    <button class="Button Button_dark CardRectangle-Button" >Купить</button>
                </div>
                 </div>
           `;
        return div;
    }
    function ReviewConsctruct({userPhoto,userStatus,userComment,userName}){
        let div = `
                <div class="review-slide">
                    <div class="review-userPhoto">
                     <img src='${userPhoto}' />
                     </div>
                     <div class="review-userName">${userName}</div>
                     <div class="review-userStatus">${userStatus}</div>
                     <div class="review-userComment">${userComment}</div>
                </div>
           `;
        return div;
    }
    function changeText(className, text){
        document.querySelector(className).textContent = text;
    }
    function toogleClass(className, el){
        document.querySelector('.' + className).classList.remove(className);
        el.classList.add(className);
    }

    //change data
    function showLastChance(tab){
        lastChancesProducts.innerHTML ='';
        lastChance[tab].map(el=>{
            lastChancesProducts.innerHTML += (CardConsctruct(el.img,el.productName,el.priceOld,el.priceNew));
        });
    }
    function showNewProduct(product){
        changeText('.mainView-Card-Info .productName', product.productName);
        changeText('.mainView-Card-Info .priceOld', product.priceOld);
        changeText('.mainView-Card-Info .priceNew', product.priceNew);
        document.querySelector('.mainView-Card-Image img').setAttribute('src', product.img);
    }
    document.querySelectorAll('.mainView-Pagination-item').forEach(function (button) {
        button.addEventListener('click', function () {
            let nextPage = this.getAttribute('value');
            let nextProduct = productsMain.filter(el => el.page == nextPage)[0];
            showNewProduct(nextProduct);
            toogleClass("mainView-Pagination-item_active", this);

        })});

    //events
    document.querySelectorAll('.Tabs-Item').forEach(function (button) {
        button.addEventListener('click', function () {
            showLastChance(this.getAttribute('value'));
            toogleClass('Tabs-Item_active', this);
        })});
    document.getElementById('previousReview').onclick = function() {
        mySwiper.navigation.prevEl;
    };
    document.getElementById('nextReview').onclick = function() {
        mySwiper.navigation.nextEl;
    };
}
