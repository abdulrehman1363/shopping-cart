import { ProductItem } from './productType'

export const initialState : ProductItem[] = [
    {
    id: "1",
    title: "Blue t-shirt",
    description: "No fancy sizing charts here, one t-shirt size to rule them all",
    imageUrl: "/blue-tshirt.png",
    price: 399
  },
  {
    id: "2",
    title: "Yellow t-shirt",
    description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
    imageUrl: "/yellow-tshirt.png",
    price: 499
  },
  {
    id: "3",
    title: "Red t-shirt",
    description: "The only product on our site that might actually be worth buying",
    imageUrl: "/red-tshirt.png",
    price: 799
  }
]
