import React from "react";
import {Checkbox, Collapse} from 'antd';

const {Panel} = Collapse;

const categories = [
{
    "_id": 1,
    "name": "Laptop"
},
{
    "_id": 2,
    "name": "Gaming Mouse"
},
{
    "_id": 3,
    "name": "Games Console"
},
{
    "_id": 4,
    "name": "Keyboard"
},
{
    "_id": 5,
    "name": "Gaming Controller"
},
{
    "_id": 6,
    "name": "Gaming Headset"
},
{
    "_id": 7,
    "name": "Gaming Chair"
}
]

function CheckBox() {

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header key="1">
                    {categories.map((value, index) => (
                        <React.Fragment key={index}>
                            <CheckBox
                                onChange
                                type="checkbox"
                                checked
                                />
                                <span>{value.name}</span>
                        </React.Fragment>
                    ))}

                </Panel>
            </Collapse>
        </div>
    );
}

export default CheckBox;