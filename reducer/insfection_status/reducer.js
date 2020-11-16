import {INFECTION_STATUS, INFECTION_STATUS_SUCCESS, INFECTION_STATUS_ERROR} from "../actionType";

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        "accDefRate": {"_text": null},
                        "accExamCnt": {"_text": null},
                        "accExamCompCnt": {"_text": null},
                        "careCnt": {"_text": null},
                        "clearCnt": {"_text": null},
                        "createDt": {"_text": null},
                        "deathCnt": {"_text": null},
                        "decideCnt": {"_text": null},
                        "examCnt": {"_text": null},
                        "resutlNegCnt": {"_text": null},
                        "seq": {"_text": null},
                        "stateDt": {"_text": null},
                        "stateTime": {"_text": null},
                        "updateDt": {"_text": null}
                    }
                ]
            },
            "numOfRows": {"_text": null},
            "pageNo": {"_text": null},
            "totalCount": {"_text": null}
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INFECTION_STATUS : {
            console.log('INFECTION_STATUS TEST');
            return {
                ...state,
            }
        }
        case INFECTION_STATUS_SUCCESS : {
            console.log('INFECTION_STATUS TEST_SUCCESS');
            console.log('###payload### ::', action.payload);
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case INFECTION_STATUS_ERROR : {
            console.log('INFECTION_STATUS TEST_ERROR');
            return {
                ...state,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer;