import './sccs/style.scss';

window.onload = function() {

    let productsMain = [
        {id: 1, img: 'src/img/main.png', productName:'Кресло "Антиква"', priceOld:'$240', priceNew:'$140', page: 1},
        {id: 2, img: 'src/img/main2.png', productName:'Кресло "Антиква2"', priceOld:'$241', priceNew:'$841', page: 2},
        {id: 3, img: 'src/img/main3.png', productName:'Кресло "Антиква3"', priceOld:'$242', priceNew:'$241', page: 3},
        {id: 4, img: 'src/img/main4.png', productName:'Кресло "Антиква4"', priceOld:'$243', priceNew:'$941', page: 4}
    ];

    let rewiews = [
        {id: 1, img: 'src/img/main.png', userName:'Кресло "Антиква"', status:'$240', text:'$140', page: 1},
        {id: 2, img: 'src/img/main2.png', userName:'Кресло "Антиква2"', status:'$241', text:'$841', page: 2},
        {id: 3, img: 'src/img/main3.png', userName:'Кресло "Антиква3"', status:'$242', text:'$241', page: 3},
        {id: 4, img: 'src/img/main4.png', userName:'Кресло "Антиква4"', status:'$243', text:'$941', page: 4}
    ];

    function changeText(className, text){
        document.querySelector(className).textContent = text;
    }

    function toogleClass(className){
        console.log(this);
        document.querySelector(className).classList.remove(className);
        this.classList.add(className);
    }

        document.querySelectorAll('.mainView-Pagination-item').forEach(function (button) {
            button.addEventListener('click', function () {

                let nextPage = this.getAttribute('value');
                let nextProduct = productsMain.filter(el => el.page == nextPage)[0];

                changeText('.mainView-Card-Info .productName', nextProduct.productName);
                changeText('.mainView-Card-Info .priceOld', nextProduct.priceOld);
                changeText('.mainView-Card-Info .priceNew', nextProduct.priceNew);
                document.querySelector('.mainView-Card-Image img').setAttribute('src', nextProduct.img);

                toogleClass.bind(this,"mainView-Pagination-item_active")();

    })});
}
