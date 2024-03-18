/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_List_User_ } from "../models/BaseResponse_List_User_";
import type { BaseResponse_string_ } from "../models/BaseResponse_string_";
import type { BaseResponse_User_ } from "../models/BaseResponse_User_";
import type { BaseResponse_UserVO_ } from "../models/BaseResponse_UserVO_";
import type { User } from "../models/User";
import type { UserSecretKeyRequest } from "../models/UserSecretKeyRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class InnerUserControllerService {
  /**
   * getLoginUser
   * @returns BaseResponse_User_ OK
   * @throws ApiError
   */
  public static getLoginUserUsingGet(): CancelablePromise<BaseResponse_User_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/user/inner/user/get/login",
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getSecretKeyByAccessKey
   * @param request request
   * @returns BaseResponse_string_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static getSecretKeyByAccessKeyUsingPost(
    request: UserSecretKeyRequest
  ): CancelablePromise<BaseResponse_string_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/inner/user/get/secretKey",
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getById
   * @param userId userId
   * @returns BaseResponse_User_ OK
   * @throws ApiError
   */
  public static getByIdUsingGet(
    userId: number
  ): CancelablePromise<BaseResponse_User_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/user/inner/user/get/user",
      query: {
        userId: userId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getLoginUserPermitNull
   * @returns BaseResponse_User_ OK
   * @throws ApiError
   */
  public static getLoginUserPermitNullUsingGet(): CancelablePromise<BaseResponse_User_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/user/inner/user/get/userPermitNull",
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getUserVO
   * @param user user
   * @returns BaseResponse_UserVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static getUserVoUsingPost(
    user: User
  ): CancelablePromise<BaseResponse_UserVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/inner/user/get/userVo",
      body: user,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listByIds
   * @param userIdSet userIdSet
   * @returns BaseResponse_List_User_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listByIdsUsingPost(
    userIdSet: Array<number>
  ): CancelablePromise<BaseResponse_List_User_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/inner/user/list/userId",
      body: userIdSet,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
