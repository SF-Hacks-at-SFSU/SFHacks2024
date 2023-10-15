import React, { useState, useRef, useEffect } from 'react'
import './countdown.css'

export default function CountDown() {
	const Ref = useRef(null);

    var countDownDate = new Date("Apr 5, 2024 00:00:00");

	const [timer, setTimer] = useState({
		days: null,
		hours: null,
		minutes: null,
		seconds: null
	});

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
		return {
			total, days, hours, minutes, seconds
		};
	}

	const startTimer = (e) => {
		let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
		
        if (total >= 0) {
            setTimer({days, hours, minutes, seconds});
		}
	}

	const clearTimer = (e) => {

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	useEffect(() => {
		clearTimer(countDownDate);
	}, []);

	return (
		<div className="countdown">
            <div className="countdown--elements">
                <h1>Days</h1>
			    <p>{timer.days === null ? "loading..." : timer.days > 9 ? timer.days : '0' + timer.days}</p>
            </div>
            <div className="countdown--elements">
                <h1>Hours</h1>
                <p>{timer.days === null ? "..." : timer.hours > 9 ? timer.hours : '0' + timer.hours}</p>
            </div>
            <div className="countdown--elements">
                <h1>Minutes</h1>
                <p>{timer.days === null ? "..." : timer.minutes > 9 ? timer.minutes : '0' + timer.minutes}</p>
            </div>
            <div className="countdown--elements">
                <h1>Seconds</h1>    
                <p>{timer.days === null ? "..." : timer.seconds > 9 ? timer.seconds : '0' + timer.seconds}</p>
            </div>
		</div>
	)
}