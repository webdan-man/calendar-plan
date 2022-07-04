import React from "react";
import {Panel} from 'rsuite';
import Days from './Days';

const CalendarItem = (props) => {
    const {month, moment, monthIndex} = props;

    return (
        <Panel header={month} style={{margin: '4px 0', width: 371}}>
            <Days moment={moment} monthIndex={monthIndex}/>
        </Panel>
    )
};

export default CalendarItem;
