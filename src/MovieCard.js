export default function MovieCard(props){

    const {title, poster, description, price, star, fev, cart, rating} = props.movies;
    return (
        <>
            <div className='main'>
                <div className='left'>
                    <img src={poster} alt='poster'/>
                </div>
                <div className='right'>
                    <div className='title'>{title}</div>
                    <div className='description'>{description}</div>
                    <div className='price'>{price}</div>
                    <div className='footer'>
                        <div className='rating'>IMDB: {rating}</div>
                        <div className='stars'>
                            <img src='https://cdn-icons-png.flaticon.com/128/2801/2801932.png' 
                                    alt='Minus' 
                                    className='dec' 
                                    onClick={()=> {props.dec(props.movies)}}
                            />

                            <img src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' alt='star' className='star'/>

                            <img src='https://cdn-icons-png.flaticon.com/128/748/748113.png' 
                                alt='Plus' 
                                className='inc' 
                                onClick={()=> {props.inc(props.movies)}}
                            />

                            <span className='star-count'>{star}</span>
                        </div>

                        <button className={fev? "fev": "unfev"} onClick={()=>{props.handelFev(props.movies)}}>
                            {fev? 'Fevorite': 'UnFevorite'}
                        </button>

                        <button className={cart? "add": "remove"} onClick={() => {props.handelCart(props.movies)}}>
                            {cart? "Add to card": "Remove"}
                        </button>

                    </div>
                </div>
            </div>
        </>
    )

}