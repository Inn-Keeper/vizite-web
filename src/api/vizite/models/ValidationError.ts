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
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    message?: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ValidationError
     */
    errors?: { [key: string]: Array<string>; };
}

/**
 * Check if a given object implements the ValidationError interface.
 */
export function instanceOfValidationError(value: object): value is ValidationError {
    return true;
}

export function ValidationErrorFromJSON(json: any): ValidationError {
    return ValidationErrorFromJSONTyped(json, false);
}

export function ValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationError {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'errors': json['errors'] == null ? undefined : json['errors'],
    };
}

export function ValidationErrorToJSON(json: any): ValidationError {
    return ValidationErrorToJSONTyped(json, false);
}

export function ValidationErrorToJSONTyped(value?: ValidationError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'errors': value['errors'],
    };
}

