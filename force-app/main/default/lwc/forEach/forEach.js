import { LightningElement } from 'lwc';

export default class ForEach extends LightningElement {
    contacts=[
        {
            id:1,
            Name:'abc',
            Title:'CEO'
        },
        {
            id:2,
            Name:'abc1',
            Title:'CEO1'
        },
        {
            id:3,
            Name:'abc2',
            Title:'CEO2'
        }
    ]
}