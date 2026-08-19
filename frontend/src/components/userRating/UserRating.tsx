import FullStarIcon from "../../assets/icons/star.svg?react";
import HalfStarIcon from "../../assets/icons/star_half.svg?react";
import EmptyStarIcon from "../../assets/icons/star_empty.svg?react";

import "./userRating.css";

interface UserRatingProps
{
    starsRating: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
    content: string,
    name: string,
    place: string
}


export default function UserRating({
    starsRating,
    content,
    name,
    place
}: UserRatingProps)
{
    const starsIcons = Array.from({length: 5}, (_, i) => {
        if(i < Math.floor(starsRating))
            return <FullStarIcon key={i}/>;
        if(starsRating === i + 0.5)
            return <HalfStarIcon key={i}/>;
        return <EmptyStarIcon key={i}/>;
    });

    return (
        <div className="user-rating">
            <div className="stars">
                {starsIcons}
            </div>
            <blockquote className="content">
                {content}
            </blockquote>
            <div className="person">
                &mdash; {name}, {place}
            </div>
        </div>
    );
}