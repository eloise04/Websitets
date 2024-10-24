import React from 'react';

interface HomePagePropsI {
    title: string;
    text?: string;
    imageUrl?: string;
}

const HomePage: React.FC<HomePagePropsI> = ({ title, text, imageUrl }) => {
    return (
        <div className="homepage-container">
            <div className="text-container">
                <h1 className="homepage-title">{title}</h1>
                <p className="homepage-text">{text}</p>
            </div>
            <div className="image-container">
                <img src={imageUrl} alt="Description" className="homepage-image" />
            </div>
        </div>
    );
};

export default HomePage;