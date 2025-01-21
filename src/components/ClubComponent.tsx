interface ClubProps{
    title: string
    subjects: string
    meetingTime: string
    calendar: string
}
const ClubComponent = ({title: title, subjects, meetingTime, calendar}: ClubProps) => {
    return ( 
        <div className="ClubComponent" style={{
            position: "relative",
            width: "84vi",
            height: "32vi",
            top: "3vi",
        }}>
            <div style={{
                fontSize: "4vi",
                border: "2vi solid green",
                borderRadius: "1vi",
                position: "absolute",
                minWidth: "30vi",
                backgroundColor: "khaki"
            }}>
                {title}
            </div>
            <div className="ClubInfo" style={{
                fontSize: "2vi",
                border: "2vi solid green",
                position: "absolute",
                width: "80vi",
                top: "8vi",
                backgroundColor: "khaki"
            }}>
                <p style={{
                    fontSize: "3vi"
                }}>
                    Subjects: {subjects}<br/>
                    Meeting Times: {meetingTime}<br/>
                    {calendar=="" ? null : <a href={calendar}>Calendar</a>}
                </p>
            </div>
        </div>
     );
}
 
export default ClubComponent;