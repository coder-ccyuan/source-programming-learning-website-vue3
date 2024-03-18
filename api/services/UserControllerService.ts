/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_List_User_ } from '../models/BaseResponse_List_User_';
import type { BaseResponse_string_ } from '../models/BaseResponse_string_';
import type { BaseResponse_User_ } from '../models/BaseResponse_User_';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { UserSecretKeyRequest } from '../models/UserSecretKeyRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserControllerService {
    /**
     * getCurrentUser
     * @returns BaseResponse_User_ OK
     * @throws ApiError
     */
    public static getCurrentUserUsingGet(): CancelablePromise<BaseResponse_User_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/currentUser',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getSecretKey
     * @param request request
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getSecretKeyUsingPost(
        request: UserSecretKeyRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/get/secretKey',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * login
     * @param userLoginRequest userLoginRequest
     * @returns BaseResponse_User_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static loginUsingPost(
        userLoginRequest: UserLoginRequest,
    ): CancelablePromise<BaseResponse_User_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            body: userLoginRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * logout
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static logoutUsingGet(): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/logout',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * query
     * @param gender
     * @param nickname
     * @param state
     * @param username
     * @returns BaseResponse_List_User_ OK
     * @throws ApiError
     */
    public static queryUsingGet1(
        gender?: number,
        nickname?: string,
        state?: number,
        username?: string,
    ): CancelablePromise<BaseResponse_List_User_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/query',
            query: {
                'gender': gender,
                'nickname': nickname,
                'state': state,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * userRegister
     * @param userRegisterRequest userRegisterRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userRegisterUsingPost(
        userRegisterRequest: UserRegisterRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/register',
            body: userRegisterRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
