import React from 'react';
import MovieList from './MovieList';
import Navbar from './NavBar';
import { movies } from './movieDetails';

export default class App extends React.Component {

  constructor(){
        super();
        this.state = {
            movies : movies,
            cartCount: 0,
        }
    }

    handelIncStar = (movie) =>{
        // this.setState((preState) => {
        //     if(preState.star < 5){
        //         return {
        //             star: preState.star + 0.5
        //         }  
        //     }
        // })
        const {movies} = this.state
        const movieId = movies.indexOf(movie);
        if(movies[movieId].star<5){
            movies[movieId].star += 1;
        }
        
        this.setState({
            movies
        })
    }

    handelDecStar = (movie) =>{
        // this.setState((preState)=>{
        //     if(preState.star > 0){
        //         return {
        //             star: preState.star - 0.5
        //         }
        //     }
        // })
        const {movies} = this.state
        const movieId = movies.indexOf(movie);
        if(movies[movieId].star>0){
            movies[movieId].star -= 1;
        }
        
        this.setState({
            movies
        })
    }

    handelFev = (movie) =>{
        // this.setState({
        //     fev : !this.state.fev
        // })

        const {movies} = this.state
        const movieId = movies.indexOf(movie);
        movies[movieId].fev = !movies[movieId].fev;
        this.setState({
            movies
        })
    }

    handelCart = (movie) =>{
        // this.setState({
        //     cart : !this.state.cart
        // })

        let {movies, cartCount} = this.state
        const movieId = movies.indexOf(movie);
        movies[movieId].cart = !movies[movieId].cart;

        if(!movies[movieId].cart){
          cartCount +=1;
        } else{
          cartCount -=1;
        }

        this.setState({
            movies, cartCount
        })
    }

  render(){
    const {movies, cartCount} = this.state;
    return (
      <>
        {/* <h1 className='main-head'>ANIME CARD</h1> */}
        <Navbar cartCount={cartCount}/>
        <MovieList movies={movies}
                    inc = {this.handelIncStar}
                    dec = {this.handelDecStar}
                    handelFev = {this.handelFev}
                    handelCart = {this.handelCart}/>
      </>
      
    )
  }
}

