import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../Data/MovieTicketOnlineBookingSystem.json';
import '../components/headerFooter.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from 'react-bootstrap/Card';


function Home() {
    const [movies, setMovies] = useState(Data.Tbl_MovieList);
    const cardsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const navigateTo = useNavigate();
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = movies.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);


        if (navigateTo) {
            navigateTo("/cinema");
        }
    };

    return (

        <div className="body">
            <Header />
            <div className="content text-center">
                <div className="head">
                    <h3>Tickets for sale</h3>
                </div>
                <h3 className="watch-latest">Now Showing</h3>

                <div className="movie-grid">
                    {currentCards.map((movie) => (
                        <Card key={movie.MovieId} style={{ width: '18rem', height: '27rem', margin: '10px' }} onClick={() => handleMovieClick(movie)}>
                            <Card.Img variant="top" style={{ height: '20rem' }} src={movie.MoviePhoto} alt={movie.MovieTitle} />
                            <Card.Body>
                                <Card.Title>{movie.MovieTitle}</Card.Title>
                                <p>Release Date: {movie.ReleaseDate}</p>
                                <p>Duration: {movie.Duration}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <div className="pagination-container">
                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        ◀️
                    </button>
                    {Array.from({ length: Math.ceil(movies.length / cardsPerPage) }, (_, index) => (
                        <button
                            key={index}
                            className="pagination-button"
                            onClick={() => handlePageChange(index + 1)}
                            style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === Math.ceil(movies.length / cardsPerPage)}
                    >
                        ▶️
                    </button>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Home;
