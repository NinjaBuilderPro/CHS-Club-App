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
    <div className="ClubComponent" style={{
        fontSize: "2vw",
        border: "0.4vi solid rgb(0, 113, 4)",
        borderRadius: "1vw",
        position: "relative",
        width: "80vw",
        // top: "7vi",
        backgroundColor: "white",
        fontFamily: "Arial"
    }}>
        <h1 style={{
            fontSize: "5vi",
            fontWeight: "normal",
            textShadow: "0.2vw 0.2vw gray",
            textAlign: "center",
        }}>
            {title}
        </h1>
        <p style={{
            textAlign: "center",
            justifySelf: "center",
            maxWidth: "60vw"
        }}>
            {description}
        </p>
        <p style={{
            fontSize: "3vw",
            textAlign: "left",
            paddingLeft: "2vw"
        }}>
            Subjects: {subjects}<br/>
            Advisor: {advisor}<br/>
            Meeting Times: {meetingTime}<br/>
            {calendar=="" ? null : <a href={calendar} target="blank">Calendar</a>}
        </p>
    </div>
     );
}
 
export default ClubComponent;