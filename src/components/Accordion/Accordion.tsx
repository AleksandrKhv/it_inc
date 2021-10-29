import React from 'react';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

    if (props.collapsed) {
        return <AccordionTittle title={props.titleValue}/>
    } else {
        return (
            <div>
                <AccordionTittle title={props.titleValue}/>
                <AccordionBode/>
            </div>)
    }
}

/*function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTittle title={props.titleValue }/>
            <AccordionBode />
        </div>
    );  
}*/

type AccordionTittlePropsType = {
    title: string
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBode() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;