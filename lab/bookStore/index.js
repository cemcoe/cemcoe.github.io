const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                isbn: 9781118026694,
                name: '《Professional JavaScript for Web Developers》[3rd ed]',
                date: '2012',
                price: 85.00,
                count: 1,
                status: '在读'
            },
            {
                id: 2,
                isbn: 9781119366447,
                name: '《Professional JavaScript for Web Developers》[4th ed]',
                date: '2019',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                isbn:9781491904190,
                name: '《You Don\'t Know JS: Types & Grammar》',
                date: '2015',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                isbn: 9781449335588,
                name: '《You Don\'t Know JS: Scope & Closures》',
                date: '2014',
                price: 128.00,
                count: 1
            },
            {
                id: 5,
                isbn: 9781491904152,
                name: '《You Don\'t Know JS: this & Object Prototypes》',
                date: '2014',
                price: 128.00,
                count: 1
            },{
                id: 6,
                isbn: 9780596805524,
                name: '《JavaScript: The Definitive Guide》[6th ed]',
                date: '2011',
                price: 128.00,
                count: 1
            },{
                id: 7,
                isbn: 9781118008188,
                name: '《HTML and CSS: Design and Build Websites》',
                date: '2011',
                price: 128.00,
                count: 1
            },
        ]

    },
    methods: {
        increment(index) {
            console.log('increment', index);
            this.books[index].count++;


        },
        decrement(index) {
            console.log('decrement', index);
            this.books[index].count--;

        },
        removeHandle(index) {
            this.books.splice(index, 1);

        },
        getBook(index) {
            return 'http://gen.lib.rus.ec/search.php?req=' + this.books[index].isbn;
        }

    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].count;
            }
            return totalPrice;
        }


    },
    filters: {
        showPrice(price) {
            return '$' + price.toFixed(2);
        },


    }
})