const ClubProp = () => {
    return ( 
        <div className="ClubProp">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <p style={{
                fontSize: "4vi",
                border: "0.5vi solid green",
                borderRadius: "2vi",
                position: "relative",
                bottom: "10vw",
                right: "30vw",
                width: "20vw"
            }}>
                Club-1
            </p>
            <div className="ClubInfo" style={{
                fontSize: "2vw",
                border: "1vw solid green",
                position: "relative",
                bottom: "10vw",
                right: "30vw",
                width: "30vw"
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