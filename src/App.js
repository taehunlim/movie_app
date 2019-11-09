import React, {Component} from 'react';
import Axios from "axios";
import Movie from "./Movie";

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
            <div>
                {isLoading ? "loading" : movies.map(movie => (
                    <Movie
                        id={movie.id}
                        url={movie.url}
                        title={movie.title}
                        summary={movie.summary}
                        year={movie.year}
                        poster={movie.small_cover_image}
                    />
                ))}
            </div>
        );
    }
}
