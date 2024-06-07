import { useEffect, useState, useRef } from "react";
import Chart from 'chart.js/auto';
import { useParams } from "react-router-dom";

function DemoReport() {
  const [genreData, setGenreData] = useState(null);
  const [genreNames, setGenreNames] = useState({});
  const { category } = useParams();
  const chartRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();
        const genres = extractGenres(data.results);
        setGenreData(genres);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };



    const fetchGenreNames = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch genre names');
        }
        const data = await response.json();
        const genreNamesMap = {};
        data.genres.forEach((genre: { id: string | number; name: any; }) => {
          genreNamesMap[genre.id] = genre.name;
        });
        setGenreNames(genreNamesMap);
      } catch (error) {
        console.error('Error fetching genre names:', error);
      }
    };

    fetchMovieData();
    fetchGenreNames();
  }, [category]);

  const extractGenres = (movies: any[]) => {
    const genres = {};
    movies.forEach(movie => {
      movie.genre_ids.forEach(genreId => {
        if (genres[genreId]) {
          genres[genreId]++;
        } else {
          genres[genreId] = 1;
        }
      });
    });
    return genres;
  };

  useEffect(() => {
    if (!genreData || !genreNames) return;

    const labels = Object.keys(genreData).map(id => genreNames[id]);
    const data = Object.values(genreData);

    // Check if a chart instance exists
    if (chartRef.current) {
      // Destroy the existing chart
      chartRef.current.destroy();
    }

    // Render pie chart
    const ctx = document.getElementById('genreChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Genres',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
            ],
            borderWidth: 1
          }
        ]
      }
    });

    // Save the chart instance to the ref
    chartRef.current = chart;
  }, [genreData, genreNames, category]);

  return (
    <canvas id="genreChart" width="400" height="400"></canvas>
  );
}
export default DemoReport;
