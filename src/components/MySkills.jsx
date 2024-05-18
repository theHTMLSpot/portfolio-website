import CircleProgressBar from "./CircleProgressBar";


function MySkills()
{
    return(
        <div className='skills'>
            <h1> My skills are: </h1>
            <div className="skillGraphs">
                <CircleProgressBar percentage={10} circleWidth={200}/>
                <CircleProgressBar   percentage={10} circleWidth={200}/>
                <CircleProgressBar percentage={10} circleWidth={200}/>
            </div>
        </div>
    );
}

export default MySkills;