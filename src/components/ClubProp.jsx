const ClubProp = () => {
    return ( 
        <div className="ClubProp" style={{
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
                width: "30vi"
            }}>
                Club-1
            </div>
            <div className="ClubInfo" style={{
                fontSize: "2vi",
                border: "2vi solid green",
                position: "absolute",
                width: "80vi",
                top: "8vi"
            }}>
                <p style={{
                    fontSize: "3vi"
                }}>
                    Catagories: Math, Science<br/>
                    Time Commitment: high<br/>
                    Calendar: (insert link)
                </p>
            </div>
        </div>
     );
}
 
export default ClubProp;