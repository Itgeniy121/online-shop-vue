import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
import DecorPage from "@/views/DecorPage";
import ChairsPage from "@/views/ChairsPage";
import LampsPage from "@/views/LampsPage";
import TablesPage from "@/views/TablesPage";
import ShopingCart from "@/views/ShopingCart";
import MyProfile from "@/views/MyProfile";
// ----products
import MyChair1 from "@/products/MyChair1";
import MyChair2 from "@/products/MyChair2";
import MyLamp1 from "@/products/MyLamp1";
import MyLamp2 from "@/products/MyLamp2";
import MyTable1 from "@/products/MyTable1";
import MyTable2 from "@/products/MyTable2";
import MyDecor1 from "@/products/MyDecor1";
import MyDecor2 from "@/products/MyDecor2";
import MyDecor3 from "@/products/MyDecor3";


export default createRouter ({
  history: createWebHistory(),
routes: [
  {path: '/', component: HomePage},
  {path: '/decor', component: DecorPage},
  {path: '/chairs', component: ChairsPage},
  {path: '/lamps', component: LampsPage},
  {path: '/tables', component: TablesPage},
  {path: '/shopingcart', component: ShopingCart},
  {path: '/profile', component: MyProfile},
  // Items-Chairs----------
  {path: '/chair1', component: MyChair1},
  {path: '/chair2', component: MyChair2},
  // Items-Lamps----------
  {path: '/lamp1', component: MyLamp1},
  {path: '/lamp2', component: MyLamp2},
   // Items-Tables----------
   {path: '/table1', component: MyTable1},
   {path: '/table2', component: MyTable2},
  // Items-Decor----------
  {path: '/decor1', component: MyDecor1},
  {path: '/decor2', component: MyDecor2},
  {path: '/decor3', component: MyDecor3},



]

})
