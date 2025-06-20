// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * API Vizite
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiV1ResetPasswordPost200Response
 */
export interface ApiV1ResetPasswordPost200Response {
    /**
     * 
     * @type {string}
     * @memberof ApiV1ResetPasswordPost200Response
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1ResetPasswordPost200Response
     */
    status?: string;
}

/**
 * Check if a given object implements the ApiV1ResetPasswordPost200Response interface.
 */
export function instanceOfApiV1ResetPasswordPost200Response(value: object): value is ApiV1ResetPasswordPost200Response {
    return true;
}

export function ApiV1ResetPasswordPost200ResponseFromJSON(json: any): ApiV1ResetPasswordPost200Response {
    return ApiV1ResetPasswordPost200ResponseFromJSONTyped(json, false);
}

export function ApiV1ResetPasswordPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ResetPasswordPost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function ApiV1ResetPasswordPost200ResponseToJSON(json: any): ApiV1ResetPasswordPost200Response {
    return ApiV1ResetPasswordPost200ResponseToJSONTyped(json, false);
}

export function ApiV1ResetPasswordPost200ResponseToJSONTyped(value?: ApiV1ResetPasswordPost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'status': value['status'],
    };
}

