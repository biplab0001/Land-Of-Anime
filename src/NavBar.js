import navStyle from "./NavBar.module.css";


export default function Navbar(props){
    return(
        <>
            <div className={navStyle.nav}>
                <div className={navStyle.title}>Land Of Anime</div>
                <div className={navStyle.cartWrapper}>
                    <img src="https://cdn-icons-png.flaticon.com/128/3081/3081559.png" alt="shopping cart" className={navStyle.shoppingCart} />
                    <span className={navStyle.cartCount}>{props.cartCount}</span>
                </div>
            </div>
        </>
    )
}