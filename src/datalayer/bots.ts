// Since implementing a DB is pretty straightforward, I decided to skip it for now.

import { Bot } from "../shared/types";

export let bots: Bot[] = [];
const rulesInitial = [
    {
        id: 1,
        title: 'Process invoice',
        duration: 1500,
        state: 'pending'
    }, {
        id: 2,
        title: 'Categorize transactions',
        duration: 2750,
        state: 'pending'
    }, {
        id: 3,
        title: 'Extract statement data',
        duration: 18000,
        state: 'pending'
    }, {
        id: 4,
        title: 'Amortize loan payments',
        duration: 2573,
        state: 'pending'
    }, {
        id: 5,
        title: 'Depreciate fixed assets',
        duration: 7454,
        state: 'pending'
    }, {
        id: 6,
        title: 'Calculate payroll allocations',
        duration: 37473,
        state: 'pending'
    }, {
        id: 7,
        title: 'Generate month end report',
        duration: 34332,
        state: 'pending'
    }, {
        id: 8,
        title: 'Audit for discrepancies',
        duration: 6765,
        state: 'pending'
    }, {
        id: 9,
        title: 'Close the books',
        duration: 3643,
        state: 'pending'
    }, {
        id: 10,
        title: 'Perform reconciliation',
        duration: 4542,
        state: 'pending'
    }
];

export let rules = [...rulesInitial]
export const resetBots = () => {
    bots = [];
    rules = rulesInitial;
}