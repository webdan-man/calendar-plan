import React from "react";
import CalendarItem from './CalendarItem';
import {Carousel} from 'rsuite';

const Calendar = ({moment}) => {
    const calendarList = moment.months();
    return (
        <div style={{width: '100vw', height: '100vh', display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Carousel style={{ width: 371, height: 420}}>
                {
                    calendarList.map((month, index) => (
                            <div style={{display: "flex"}} key={month}>
                                <CalendarItem moment={moment} monthIndex={index} month={month}/>
                            </div>
                        )
                    )
                }
            </Carousel>
        </div>
    )

};

export default Calendar;
