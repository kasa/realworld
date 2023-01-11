/* tslint:disable */
/* eslint-disable */
/**
 * Conduit API
 * Conduit API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GenericErrorModelErrors
 */
export interface GenericErrorModelErrors {
    /**
     * 
     * @type {Array<string>}
     * @memberof GenericErrorModelErrors
     */
    body: Array<string>;
}

/**
 * Check if a given object implements the GenericErrorModelErrors interface.
 */
export function instanceOfGenericErrorModelErrors(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "body" in value;

    return isInstance;
}

export function GenericErrorModelErrorsFromJSON(json: any): GenericErrorModelErrors {
    return GenericErrorModelErrorsFromJSONTyped(json, false);
}

export function GenericErrorModelErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericErrorModelErrors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': json['body'],
    };
}

export function GenericErrorModelErrorsToJSON(value?: GenericErrorModelErrors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': value.body,
    };
}
