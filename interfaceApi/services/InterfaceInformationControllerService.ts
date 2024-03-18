/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from "../models/BaseResponse_boolean_";
import type { BaseResponse_List_InterfaceInformation_ } from "../models/BaseResponse_List_InterfaceInformation_";
import type { BaseResponse_string_ } from "../models/BaseResponse_string_";
import type { DeleteRequest } from "../models/DeleteRequest";
import type { InterfaceInformation } from "../models/InterfaceInformation";
import type { InterfaceInformationAddRequest } from "../models/InterfaceInformationAddRequest";
import type { InterfaceInformationOfflineRequest } from "../models/InterfaceInformationOfflineRequest";
import type { InterfaceInformationOlineRequest } from "../models/InterfaceInformationOlineRequest";
import type { InterfaceInformationQueryRequest } from "../models/InterfaceInformationQueryRequest";
import type { InterfaceInformationUpdateRequest } from "../models/InterfaceInformationUpdateRequest";
import type { InterfaceInvokeTestRequest } from "../models/InterfaceInvokeTestRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class InterfaceInformationControllerService {
  /**
   * add
   * @param addRequest addRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static addUsingPost(
    addRequest: InterfaceInformationAddRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/interfaceInfo/add",
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
  public static deleteUsingPost(
    deleteRequest: DeleteRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/interfaceInfo/delete",
      body: deleteRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * downloadSDK
   * @param id id
   * @returns any OK
   * @throws ApiError
   */
  public static downloadSdkUsingGet(id?: number): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/API/interfaceInfo/downloadSDK",
      query: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * invoke
   * @param invokeTestRequest invokeTestRequest
   * @returns BaseResponse_string_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static invokeUsingPost(
    invokeTestRequest: InterfaceInvokeTestRequest
  ): CancelablePromise<BaseResponse_string_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/interfaceInfo/invoke",
      body: invokeTestRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * offline
   * @param offlineRequest offlineRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static offlineUsingPost(
    offlineRequest: InterfaceInformationOfflineRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/interfaceInfo/offline",
      body: offlineRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * online
   * @param olineRequest olineRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static onlineUsingPost(
    olineRequest: InterfaceInformationOlineRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/interfaceInfo/online",
      body: olineRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * query
   * @param method method
   * @param name name
   * @returns BaseResponse_List_InterfaceInformation_ OK
   * @throws ApiError
   */
  public static queryUsingGet(
    method?: string,
    name?: string
  ): CancelablePromise<BaseResponse_List_InterfaceInformation_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/API/interfaceInfo/query/list",
      query: {
        method: method,
        name: name,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * queryByUrl
   * @param queryRequest queryRequest
   * @returns InterfaceInformation OK
   * @returns any Created
   * @throws ApiError
   */
  public static queryByUrlUsingPost(
    queryRequest: InterfaceInformationQueryRequest
  ): CancelablePromise<InterfaceInformation | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/interfaceInfo/query/url",
      body: queryRequest,
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
  public static updateUsingPost(
    updateRequest: InterfaceInformationUpdateRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/interfaceInfo/update",
      body: updateRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * upLoadSDK
   * @param file
   * @param id
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static upLoadSdkUsingPost(
    file?: Blob,
    id?: number
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/API/interfaceInfo/uploadSDK",
      query: {
        file: file,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
