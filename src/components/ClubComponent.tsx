interface ClubProps{
    title: string
    subjects: string
    meetingTime: string
    calendar: string
}
var hasCalendar = true;
const ClubComponent = ({title: title, subjects, meetingTime, calendar}: ClubProps) => {
    return ( 
        <div className="ClubComponent" style={{
            position: "relative",
            width: "84vi",
            top: "3vi",
            height: `calc(22.8vi + ${hasCalendar ? "0vi" : "4.5vi"})`
        }}>
            <div style={{
                fontSize: "4vi",
                border: "0.4vi solid rgb(0, 113, 4)",
                borderRadius: "1vi",
                position: "absolute",
                minWidth: "30vi",
                backgroundColor: "ivory",
                height: "6vi",
                fontFamily: "Arial"
            }}>
                {title}
            </div>
            <div className="ClubInfo" style={{
                fontSize: "2vi",
                border: "0.4vi solid rgb(0, 113, 4)",
                borderRadius: "1vi",
                position: "absolute",
                width: "80vi",
                top: "7vi",
                backgroundColor: "ivory",
                fontFamily: "Arial"
            }}>
                <p style={{
                    fontSize: "3vi"
                }}>
                    Subjects: {subjects}<br/>
                    Meeting Times: {meetingTime}<br/>
                    {calendar=="" ? null : <a href={calendar}>Calendar</a>}
                    {calendar=="" ? hasCalendar = true : hasCalendar = false}
                </p>
            </div>
        </div>
     );
}
 
export default ClubComponent;