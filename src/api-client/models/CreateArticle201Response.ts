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
import type { Article } from './Article';
import {
    ArticleFromJSON,
    ArticleFromJSONTyped,
    ArticleToJSON,
} from './Article';

/**
 * 
 * @export
 * @interface CreateArticle201Response
 */
export interface CreateArticle201Response {
    /**
     * 
     * @type {Article}
     * @memberof CreateArticle201Response
     */
    article: Article;
}

/**
 * Check if a given object implements the CreateArticle201Response interface.
 */
export function instanceOfCreateArticle201Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "article" in value;

    return isInstance;
}

export function CreateArticle201ResponseFromJSON(json: any): CreateArticle201Response {
    return CreateArticle201ResponseFromJSONTyped(json, false);
}

export function CreateArticle201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateArticle201Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'article': ArticleFromJSON(json['article']),
    };
}

export function CreateArticle201ResponseToJSON(value?: CreateArticle201Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'article': ArticleToJSON(value.article),
    };
}

