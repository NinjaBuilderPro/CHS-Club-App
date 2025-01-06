const Title = () => {
  var hello = "yo bro"
    return (
      <div className="Title">
        <font size = "6">
          <h1 style = 
          {{
            color: "green",
            position: "absolute",
            top: "10%",
          }}>
            CHS Club Finder
           </h1>
          <p style={{
            color: "lightGreen",
          }}>
            This is my app that I'm making for central highschool
          </p>
        </font>
      </div>
    );
}
 
export default Title;