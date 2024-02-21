import React, { useEffect, useState } from 'react';

export default function News() {
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const api = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=094a4894ab104804ba60b7ad67c19153";
            try {
                const response = await fetch(api);
                const data = await response.json();
                setNews(data);
            } catch (err) {
                console.error("Error fetching news:", err);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className='my-3 mx-1'>
            {
                news && (
                    <div>
                        <h4>News Today</h4>
                        <hr></hr>
                        <h6>{news.articles[0].title}</h6>
                        <img src={news.articles[0].urlToImage} alt="newsimage" style={{ width: "17rem" }} />
                        <p>{news.articles[0].description}</p>
                        <a className="btn btn-primary" href={news.articles[0].url} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                )
            }
            <hr></hr>
            {
                news && (
                    <div>
                        <h6>{news.articles[1].title}</h6>
                        <img src={news.articles[1].urlToImage} alt="newsimage" style={{ width: "17rem" }} />
                        <p>{news.articles[1].description}</p>
                        <a className="btn btn-primary" href={news.articles[1].url} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                )
            }
        </div>
    );
}
