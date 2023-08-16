import {AsteroidForOrder} from "@/types";
import {useEffect, useState} from "react";

function useCart(item: AsteroidForOrder): [boolean, () => void] {
  const [isInCart, setIsInCart] = useState<boolean>(false)

  useEffect(() => {
    const idList: number[] = []
    const cartInStorage = localStorage.getItem('cart')

    if (cartInStorage) {
      JSON.parse(cartInStorage).forEach((e:AsteroidForOrder) => {
        idList.push(e.id)
      })
    } else {
      setIsInCart(false)
    }

    if (idList.indexOf(item.id) !== -1) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [isInCart])

  const cartHandler = () => {

    const idList: number[] = []
    const cartInStorage = localStorage.getItem('cart')
    let parsedCart: AsteroidForOrder[] = []

    if (cartInStorage) {
      JSON.parse(cartInStorage).forEach((e:AsteroidForOrder) => {
        idList.push(e.id)
      })
      parsedCart = JSON.parse(cartInStorage)



    } else {
      localStorage.setItem('cart', JSON.stringify([]))
      setIsInCart(false)


    }


    if (isInCart) {
      const index = idList.indexOf(item.id)
      parsedCart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(parsedCart))
      setIsInCart(false)

    } else  {

      parsedCart.push(item)
      localStorage.setItem('cart', JSON.stringify(parsedCart))
      setIsInCart(true)


    }
    window.dispatchEvent(new Event("countChange"));

  }


  return [isInCart, cartHandler]
}

export {useCart}
