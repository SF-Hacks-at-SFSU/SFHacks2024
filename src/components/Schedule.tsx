//ts-ignore

function Schedule() {
    const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes()
        + ":" + date.getSeconds();
 
    return (
        <div>
            <h1>Current Time</h1>
            <h2> {showTime}</h2>
        </div>
    );
}

export default Schedule; 