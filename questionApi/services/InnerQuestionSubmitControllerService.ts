/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_QuestionSubmit_ } from '../models/BaseResponse_QuestionSubmit_';
import type { QuestionSubmit } from '../models/QuestionSubmit';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InnerQuestionSubmitControllerService {
    /**
     * getQuestionSubmitById
     * @param id id
     * @returns BaseResponse_QuestionSubmit_ OK
     * @throws ApiError
     */
    public static getQuestionSubmitByIdUsingGet(
        id: number,
    ): CancelablePromise<BaseResponse_QuestionSubmit_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/inner/questionSubmit/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateQuestionSubmit
     * @param questionSubmit questionSubmit
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateQuestionSubmitUsingPost(
        questionSubmit: QuestionSubmit,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/inner/questionSubmit/update',
            body: questionSubmit,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
