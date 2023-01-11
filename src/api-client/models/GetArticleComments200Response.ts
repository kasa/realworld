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
import type { Comment } from './Comment';
import {
    CommentFromJSON,
    CommentFromJSONTyped,
    CommentToJSON,
} from './Comment';

/**
 * 
 * @export
 * @interface GetArticleComments200Response
 */
export interface GetArticleComments200Response {
    /**
     * 
     * @type {Array<Comment>}
     * @memberof GetArticleComments200Response
     */
    comments: Array<Comment>;
}

/**
 * Check if a given object implements the GetArticleComments200Response interface.
 */
export function instanceOfGetArticleComments200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "comments" in value;

    return isInstance;
}

export function GetArticleComments200ResponseFromJSON(json: any): GetArticleComments200Response {
    return GetArticleComments200ResponseFromJSONTyped(json, false);
}

export function GetArticleComments200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetArticleComments200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comments': ((json['comments'] as Array<any>).map(CommentFromJSON)),
    };
}

export function GetArticleComments200ResponseToJSON(value?: GetArticleComments200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comments': ((value.comments as Array<any>).map(CommentToJSON)),
    };
}

