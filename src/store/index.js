import { createStore } from 'vuex';

const store = createStore ({
  state(){
    return {
      menu:[
        
        {name: 'Lamps', path: '/lamps',},
        {name: 'Tables', path: '/tables',},
        {name: 'Chairs', path: '/chairs',},
        {name: 'Decor', path: '/decor',},
      ], 
      brends:[
        {img: '/svg/Delivery.svg', title: 'Next day as standard', description: 'Order before 3pm and get your order the next day as standard',},
        {img: '/svg/Checkmark--outline.svg', title: 'Made by true artisans', description: 'Handmade crafted goods made with real passion and craftmanship',},
        {img: '/svg/Purchase.svg', title: 'Unbeatable prices', description: 'For our materials and quality you won’t find better prices anywhere',},
        {img: '/svg/Sprout.svg', title: 'Recycled packaging', description: 'We use 100% recycled to ensure our footprint is more manageable',},
      ],
    products:[
      {img: '/img/chair1.jpg', title: 'STIG, Bar chair', price: '25', path: '/chair1', newprice: 25,},
      {img: '/img/lamp1.jpg', title: 'TVÄRHAND, Table lamp', price: '18', path: '/lamp1', newprice: 18,},
      {img: '/img/decor1.jpg', title: 'DRACAENA MARGINATA', price: '13', path: '/decor1', newprice: 13,},
      {img: '/img/table2.jpg', title: 'Trotten, Desk', price: '150', path: '/table2'},
    ],
    lamps:[
      {img: '/img/lamp1.jpg', name: 'TVARHAND, Table lamp', price: '18', path: '/lamp1', id: 1.1, newprice: 18,},
      {img: '/img/lamp2.jpg', name: 'SAXHYTTAN, Table lamp', price: '22', path: '/lamp2', id: 2.1, newprice: 22,},
    ],
    tables:[
      {img: '/img/table1.jpg', name: 'ADILS, Desk', price: 129, path: '/table1', id: 1.2, newprice: 129,},
      {img: '/img/table2.jpg', name: 'Trotten, Desk', price: 150, path: '/table2', id: 2.2, newprice: 150,},
    ],
    chairs:[
      {img: '/img/chair1.jpg', name: 'STIG, Bar chair', price: 25, path: '/chair1', id: 1.3, newprice: 25,},
      {img: '/img/chair2.jpg', name: 'ALVSTA, Kitchen chair', price: 95, path: '/chair2', id: 2.3, newprice: 95,},
    ],
    decors:[
      {img: '/img/decor1.jpg', name: 'DRACAENA MARGINATA', price: 13, path: '/decor1', id: 1.4, newprice: 13,},
      {img: '/img/decor2.jpg', name: 'GRANVAG, Mirror with storage', price: 110, path: '/decor2', id: 2.4, newprice: 110,},
      {img: '/img/decor3.jpg', name: 'HANDSKALAD, Decoration', price: 16, path: '/decor3', id: 3.4, newprice: 16,},
    ],
    cart:[
  
    ],
   flag: 0,
   subtotal: 0,
    }
  },
mutations: {
    AddItem(state, payload){
      state.cart.forEach((item) => {
        console.log(payload.id === item.id);
        if(payload.id === item.id){
          state.flag = 1;
          item.count += payload.count;
          item.newprice = item.price * item.count;
        } 
      })

      console.log(state.flag);
      if(state.flag === 0){
        state.cart.push(payload);
      } 
      state.flag = 0;
      
    }, 
    CountPlus(state, payload){
      state.subtotal = 0;
      state.cart.forEach((item) => {
        if(payload.id === item.id){
          item.count++;
          item.newprice = item.price * item.count;
        }
      })
      state.cart.forEach((item) => {
        state.subtotal += item.newprice;
      })
    },
        CountMinus(state, payload){
          state.subtotal = 0;
          state.cart.forEach((item, index, object) => {
            if(item.count !=1){
            if(payload.id === item.id){
              item.count--;
              item.newprice = item.newprice - item.price;
            } 
          } else if(payload.id === item.id && item.count === 1 ) {
             object.splice(index, 1);
          } 
      })
      state.cart.forEach((item) => {
        state.subtotal += item.newprice;
      })
    },
    addToCart(state, payload){
      state.cart.forEach((item) => {
        console.log(payload.id === item.id);
        if(payload.id === item.id){
          state.flag = 1;
          item.count += payload.count;
          item.newprice = item.price * item.count;
        } 
      })

      console.log(state.flag);
      if(state.flag === 0){
        state.cart.push(payload);
      } 
      state.flag = 0;
    },
    Subtotal(state){
      state.subtotal = 0;
      state.cart.forEach((item) => {
        state.subtotal += item.newprice;
      })
    }
  }
})
export default store;
