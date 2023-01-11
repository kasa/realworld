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
import type { UpdateArticle } from './UpdateArticle';
import {
    UpdateArticleFromJSON,
    UpdateArticleFromJSONTyped,
    UpdateArticleToJSON,
} from './UpdateArticle';

/**
 * 
 * @export
 * @interface UpdateArticleRequest
 */
export interface UpdateArticleRequest {
    /**
     * 
     * @type {UpdateArticle}
     * @memberof UpdateArticleRequest
     */
    article: UpdateArticle;
}

/**
 * Check if a given object implements the UpdateArticleRequest interface.
 */
export function instanceOfUpdateArticleRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "article" in value;

    return isInstance;
}

export function UpdateArticleRequestFromJSON(json: any): UpdateArticleRequest {
    return UpdateArticleRequestFromJSONTyped(json, false);
}

export function UpdateArticleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateArticleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'article': UpdateArticleFromJSON(json['article']),
    };
}

export function UpdateArticleRequestToJSON(value?: UpdateArticleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'article': UpdateArticleToJSON(value.article),
    };
}
