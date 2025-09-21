import MovieCard from './MovieCard';


export default function MovieList(props){

    const {movies, inc, dec, handelFev, handelCart} = props;
    return (
        <>
            {movies.map((movie)=> <MovieCard movies={movie} 
                                            inc = {inc} 
                                            dec = {dec}
                                            handelFev = {handelFev}
                                            handelCart ={handelCart}/>)}
        </>
    )

}