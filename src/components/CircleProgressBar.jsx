
function CircleProgressBar(percentage, circleWidth)
{
    return(
        
        <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth}`}>
        <circle cx={circleWidth /2 } cy={circleWidth /2 } strokeWidth='15px' r={85} className="circleBackground"/>
    </svg>
    
    );
}

export default CircleProgressBar;