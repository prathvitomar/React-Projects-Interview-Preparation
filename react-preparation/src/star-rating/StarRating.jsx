import React, {useState} from 'react'

function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [stars, setStars] = useState(0);

    const onHoverFunc = (index)=>{
        setStars(index);
    }

    const onClickFunc = (index)=>{
        setRating(index);
    }

    const onHoverExitFunc = ()=>{
        setStars(rating);
    }

    return(
        <>
        {
            [...Array(noOfStars)].map((_, index)=>{
                index += 1;
                return <div key={index}>
                <img 
                width="50px"
                index={index}
                onClick={()=> onClickFunc(index)}
                onMouseMove={()=> onHoverFunc(index)}
                onMouseLeave={() => onHoverExitFunc()}
                src={index <= (stars || rating) ? `../public/images/filled-star.png` : `../public/images/empty-star.png`}
                alt=""
                />
            </div>
            })
        }
        </>
    )

}

export default StarRating