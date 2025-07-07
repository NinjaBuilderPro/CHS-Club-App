import "./clubcomponent.css";
interface ClubProps{
    title: string
    description: string
    subjects: string
    advisor: string
    meetingTime: string
    calendar: string
    image: string
}
const ClubComponent = ({title, description, subjects, advisor, meetingTime, calendar, image}: ClubProps) => {
return ( 
    <div className="ClubComponent" >
        <h1 className="ClubTitle">
            <img src="/CHSLogo.png" style={{position: "absolute", width: "15vw", left: "5vw", top: "-1vw"}}/>
            {title}
            {image == "" ? "" : <img src={image} style={{position: "absolute", width: "15vw", right: "8vw", top: "1vw"}}/>}
        </h1>
        <div className="TheLine" style={{backgroundColor: "#f57d7d", width: "80vw", height: "0.2vw", position: "relative"}}/>
        <p className="ClubDescription">
            {description}
        </p>
        <p className="ClubBody">
            Subjects: {subjects}<br/>
            Advisor: {advisor}<br/>
            Meeting Times: {meetingTime}<br/>
            {calendar=="" ? null : <a href={calendar} target="blank">Calendar</a>}
        </p>
    </div>
     );
}
 
export default ClubComponent;