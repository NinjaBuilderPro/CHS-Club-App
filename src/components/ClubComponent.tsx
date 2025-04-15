import "./clubcomponent.css";
interface ClubProps{
    title: string
    description: string
    subjects: string
    advisor: string
    meetingTime: string
    calendar: string
}
const ClubComponent = ({title, description, subjects, advisor, meetingTime, calendar}: ClubProps) => {
return ( 
    <div className="ClubComponent" >
        <h1 className="ClubTitle">
            {title}
        </h1>
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