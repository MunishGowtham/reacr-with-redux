export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_ACTION':
            /* returns a new copy of all existing courses with the new course we passed in using spread operator */
            return [...state, { ...action.course }]
        default:
            return state
    }
}
