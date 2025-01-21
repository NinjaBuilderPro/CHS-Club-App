import ClubComponent from "./ClubComponent";
import "./MainScreen.css";
import clubs from "./Clubs.json";
const MainScreen = () => {
    return (
        <div className="MainScreen">
            {
                clubs.map((clubs,i) => (
                    <div key={i}>
                        <ClubComponent title={clubs.title} subjects={clubs.subjects} meetingTime={clubs.meetingTime} calendar={clubs.calendar}/>
                    </div>
                ))
            }
        </div>
    );
}
 
export default MainScreen;