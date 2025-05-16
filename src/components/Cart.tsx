import MenuItem from "./MenuItem"

const Cart = () => {
return <section>
    <h1>Cart</h1>
    <ul>
        <MenuItem item={{name: 'Biryani', quantity: 1}}/>
        <MenuItem item={{name: 'Chicken Karhai', quantity: 2}}/>
        <MenuItem item={{name: 'Chicken Haandi', quantity: 3}}/>
    </ul>
</section>
}

export default Cart