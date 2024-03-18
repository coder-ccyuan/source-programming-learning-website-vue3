/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from "../models/BaseResponse_boolean_";
import type { BaseResponse_List_UserInterfaceInfo_ } from "../models/BaseResponse_List_UserInterfaceInfo_";
import type { DeleteRequest } from "../models/DeleteRequest";
import type { UserInterfaceInfoAddRequest } from "../models/UserInterfaceInfoAddRequest";
import type { UserInterfaceInfoUpdateRequest } from "../models/UserInterfaceInfoUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class UserInterfaceInfoControllerService {
  /**
   * add
   * @param addRequest addRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static addUsingPost1(
    addRequest: UserInterfaceInfoAddRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/user_Interface/add",
      body: addRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * delete
   * @param deleteRequest deleteRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static deleteUsingPost1(
    deleteRequest: DeleteRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/user_Interface/delete",
      body: deleteRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * query
   * @param id
   * @param interfaceId
   * @param status
   * @param userId
   * @returns BaseResponse_List_UserInterfaceInfo_ OK
   * @throws ApiError
   */
  public static queryUsingGet1(
    id?: number,
    interfaceId?: number,
    status?: number,
    userId?: number
  ): CancelablePromise<BaseResponse_List_UserInterfaceInfo_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/API/user_Interface/query",
      query: {
        id: id,
        interfaceId: interfaceId,
        status: status,
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
   * update
   * @param updateRequest updateRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateUsingPost1(
    updateRequest: UserInterfaceInfoUpdateRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/user_Interface/update",
      body: updateRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
