import React, {Component} from 'react';
import Axios from "axios";
import Movie from "./Movie";
import "./App.css";

export default class App extends Component{

    //함수 값 선언
    // component 의 상태

    state = {
        isLoading : true,
        movies : []
    };

    getMovies = async () => {

        const {
            data : {
                data: {movies}
            }
        } = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading : false});

    };


    componentDidMount() {
        this.getMovies();
    }

    render() {

        // component 의 상태를 상수화
        // 함수 값을 상수화

        const {isLoading, movies} = this.state;

        return(
           // 화면에 뿌려주는 구간
            <section class="container">
                {isLoading ? (
                    <div class="loader">
                        <span>Loading</span>
                    </div>
                ) : (
                    <div class="movies">
                        {movies.map(movie => (
                            <Movie
                                key ={movie.id}
                                year={movie.year}
                                summary={movie.summary}
                                id={movie.id}
                                title={movie.title}
                                url={movie.url}
                                poster={movie.medium_cover_image}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}
