import React, {useMemo} from "react";
import {Button, Divider} from 'rsuite';

const Days = (props) => {
    const {moment, monthIndex} = props;

    const weekdays = useMemo(() => moment.weekdaysShort(), [moment]);

    const dayList = useMemo(() => {
        const daysInMonth = moment().month(monthIndex).daysInMonth();

        const tempDays = [];

        for (let i = 0; i < daysInMonth; i++) {
            tempDays.push({
                weekday: moment({ year: 2022, month: monthIndex, day: i + 1}).weekday(),
                day: i + 1,
            })
        }

        const days = [...tempDays];

        if (tempDays[0].weekday <= 6) {
            for (let i = tempDays[0].weekday - 1; i >= 0; i--) {
                days.unshift({
                    weekday: i,
                    day: null,
                })
            }
        }

        if (tempDays[tempDays.length - 1].weekday !== 6) {
            for (let i = tempDays[tempDays.length - 1].weekday + 1; i < 7; i++) {
                days.push({
                    weekday: i,
                    day: null,
                })
            }
        }

        return days;
    }, [moment, monthIndex]);
// console.log(dayList);
    return (
        <>
            <div style={{display: "flex", gap: '8px', marginBottom: 10}}>
                {
                    weekdays.map((weekday) => (<div style={{width: 40, display: "flex", justifyContent: "center", color: "white"}} key={`${monthIndex}-${weekday}`}>{weekday}</div>))
                }
            </div>
            {/*<Divider />*/}
            <div style={{display: "flex", flexWrap: 'wrap', gap: '8px'}}>
                {
                    dayList.map((day) => (
                        <Button style={{width: 40, height: 40}} disabled={!day.day}>{day.day}</Button>
                    ))
                }
            </div>
        </>
    )
};

export default Days;
