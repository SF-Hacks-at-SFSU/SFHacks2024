import { useState } from "react";
import data from "./data"
import './schedule.css'

export default function Schedule() {
    const [page, setPage] = useState(0);
    var content = data[page];

    const leftContent = content.slice(0,12).map(x => <li>{x}</li>);
    const rightContent = content.slice(12,24).map(x => <li>{x}</li>);
    return (
        <div className="schedule">
            <div className="schedule--buttons">
                <p className="schedule--buttons--time">Time</p>
                <button className="schedule--buttons--button" style={{backgroundColor: `${page == 0 ? "#132A3E" : "black"}`}} onClick={() => setPage(0)}>Page 1</button>
                <button className="schedule--buttons--button" style={{backgroundColor: `${page == 1 ? "#132A3E" : "black"}`}} onClick={() => setPage(1)}>Page 2</button>
                <button className="schedule--buttons--button" style={{backgroundColor: `${page == 2 ? "#132A3E" : "black"}`}} onClick={() => setPage(2)}>Page 3</button>
            </div>
            <div className="schedule--content">
            <ul className="schedule--content--time">
                    <li>1:00</li>
                    <li>2:00</li>
                    <li>3:00</li>
                    <li>4:00</li>
                    <li>5:00</li>
                    <li>6:00</li>
                    <li>7:00</li>
                    <li>8:00</li>
                    <li>9:00</li>
                    <li>10:00</li>
                    <li>11:00</li>
                    <li>12:00</li>
                </ul>
                <ul className="schedule--content--content">
                    {leftContent}
                </ul>
                <ul className="schedule--content--content">
                    {rightContent}
                </ul>
            </div>
        </div>
    )
}