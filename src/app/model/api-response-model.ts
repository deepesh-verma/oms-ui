import { ErrorResponseModel } from "./error-response-mdel";

export interface ApiResponseModel {

    data: Array<any>,
    error: ErrorResponseModel
}