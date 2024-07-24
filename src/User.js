import CartProduct from "./Components/CartProduct"

export default class User{
    constructor(otherUser){
        this.firstName=otherUser.firstName
        this.lastName=otherUser.lastName
        this.password=otherUser.password
        this.userName=otherUser.userName
        if(otherUser.cart==null){
          this.cart=new Map()
        }
        else{
          this.cart=otherUser.cart
        }
    }

      calculateTotal(){
        let total=0
          this.cart.forEach((value,key)=>{
            total+=value.quanitity*value.price
          })
          return total
    }

    generateCartLiElements(){
        return Array.from(this.cart.values()).map(product=><CartProduct product={product}/>)
     }

}