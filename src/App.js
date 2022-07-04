import React, {useEffect, useState} from "react";
import {SelectPicker, FlexboxGrid, Divider, DatePicker, InputGroup} from 'rsuite';
import Calendar from './components/Calendar';
import Container from './components/container/Container';
import moment from 'moment';

const localeList = [
    {value: 'uk', label: 'Ukrain'},
    {value: 'en', label: 'English'},
];

function App() {
    const [locale, setLocale] = useState(localeList[0]);
    useEffect(() => {
        moment.locale(locale.value);
    }, [locale]);

    return (
        <div className={'container-main'}>
            <Container position={'top'}>
                <FlexboxGrid justify="space-between" align="middle">
                    <FlexboxGrid.Item colspan={8}>
                        <InputGroup style={{ width: 300 }}>
                            <DatePicker locale={locale} value={moment({ year: 2022, month: 9, day: 1}).toDate()} cleanable={false} ranges={[]} block appearance="subtle" style={{ width: 150 }} />
                            <Divider vertical />
                            <DatePicker locale={locale} value={moment({ year: 2023, month: 6, day: 1}).toDate()} cleanable={false} ranges={[]} block appearance="subtle" style={{ width: 150 }} />
                        </InputGroup>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={8}>
                        <SelectPicker cleanable={false} data={localeList} onSelect={(locale) => setLocale(locale)} searchable={false} style={{ width: 224 }} />
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Container>
            <Container position={'left'}>
                {/*<div className="container-left"></div>*/}
            </Container>

            <Container position={'center'}>
                <Calendar moment={moment}/>
            </Container>

            <Container position={'right'}>
                {/*<div className="container-right"></div>*/}
            </Container>

            <Container position={'bottom'}>
                {/*<div className="container-bottom"></div>*/}
            </Container>
        </div>
    );
}

export default App;
