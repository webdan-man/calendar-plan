import React, {useState} from "react";
import {IconButton} from "rsuite";
import { ArrowLeftLine, ArrowRightLine } from '@rsuite/icons';
import './container.scss';

const ContainerButton = (props) => {
    const {position, expand, setExpand} = props;
    return (
        <IconButton size="xs"
                    className={`container-button container-button-${position}` + (expand ? ` container-button-${position}-expand` : '')}
                    onClick={() => setExpand(!expand)} icon={expand ? <ArrowLeftLine /> : <ArrowRightLine />}
                    appearance="primary"
                    circle
        />
    )
};

const Container = (props) => {
    const {children, position} = props;
    const [expand, setExpand] = useState(false);
    return (
        <div className={`container container-${position}` + (expand ? ` container-${position}-expand` : '')}>
            {position !== 'center' && (
                <div className={'container-action'}>
                    <ContainerButton position={position} expand={expand} setExpand={setExpand}/>
                </div>
            )}
            {(expand || position === 'center') && <div className={'container-content'}>
                {children}
            </div>}
        </div>
    )
};

export default Container;
