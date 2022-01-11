import { createRouter, createWebHistory } from 'vue-router'
import OperationalOverview from '../views/OperationalOverview.vue'
import MembershipSales from '../views/MembershipSales.vue'
import CommoditySales from '../views/CommoditySales.vue'
import StoreChannelSales from '../views/StoreChannelSales.vue'
import ValueGrouping from '../views/ValueGrouping.vue'
import CustomLabel from '../views/CustomLabel.vue'

const routes = [
  {
    path: '/OperationalOverview',
    name: 'OperationalOverview',
    component: OperationalOverview
  },
  {
    path: '/MembershipSales',
    name: 'MembershipSales',
    component: MembershipSales
  },
  {
    path: '/CommoditySales',
    name: 'CommoditySales',
    component: CommoditySales
  },
  {
    path: '/StoreChannelSales',
    name: 'StoreChannelSales',
    component: StoreChannelSales
  },
  {
    path: '/ValueGrouping',
    name: 'ValueGrouping',
    component: ValueGrouping
  },
  {
    path: '/CustomLabel',
    name: 'CustomLabel',
    component: CustomLabel
  },
  {
    path: '/',
    redirect: { name: 'OperationalOverview' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
