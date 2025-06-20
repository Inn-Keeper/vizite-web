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
import type { Client } from './Client';
import {
    ClientFromJSON,
    ClientFromJSONTyped,
    ClientToJSON,
    ClientToJSONTyped,
} from './Client';

/**
 * 
 * @export
 * @interface ApiV1ClientsIdGet200Response
 */
export interface ApiV1ClientsIdGet200Response {
    /**
     * 
     * @type {Client}
     * @memberof ApiV1ClientsIdGet200Response
     */
    data?: Client;
    /**
     * 
     * @type {Array<object>}
     * @memberof ApiV1ClientsIdGet200Response
     */
    included?: Array<object>;
}

/**
 * Check if a given object implements the ApiV1ClientsIdGet200Response interface.
 */
export function instanceOfApiV1ClientsIdGet200Response(value: object): value is ApiV1ClientsIdGet200Response {
    return true;
}

export function ApiV1ClientsIdGet200ResponseFromJSON(json: any): ApiV1ClientsIdGet200Response {
    return ApiV1ClientsIdGet200ResponseFromJSONTyped(json, false);
}

export function ApiV1ClientsIdGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ClientsIdGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ClientFromJSON(json['data']),
        'included': json['included'] == null ? undefined : json['included'],
    };
}

export function ApiV1ClientsIdGet200ResponseToJSON(json: any): ApiV1ClientsIdGet200Response {
    return ApiV1ClientsIdGet200ResponseToJSONTyped(json, false);
}

export function ApiV1ClientsIdGet200ResponseToJSONTyped(value?: ApiV1ClientsIdGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ClientToJSON(value['data']),
        'included': value['included'],
    };
}

