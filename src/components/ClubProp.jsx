const ClubProp = () => {
    return ( 
        <div className="ClubProp">
            <p style={{
                fontSize: "40px",
                border: "8px solid green",
                borderRadius: "16px",
                position: "relative",
                bottom: "200px",
                right: "500px",
                width: "300px"
            }}>
                Club-1
            </p>
            <div className="ClubInfo" style={{
                fontSize: "28px",
                border: "20px solid green",
                position: "relative",
                bottom: "200px",
                right: "500px",
                width: "600px"
            }}>
                <p>
                    Catagories: Math, Science<br/>
                    Time Commitment: high<br/>
                    Calendar: (insert link)
                </p>
            </div>
        </div>
     );
}
 
export default ClubProp;