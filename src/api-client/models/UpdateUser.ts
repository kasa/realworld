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
 * @interface UpdateUser
 */
export interface UpdateUser {
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    bio?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    image?: string;
}

/**
 * Check if a given object implements the UpdateUser interface.
 */
export function instanceOfUpdateUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateUserFromJSON(json: any): UpdateUser {
    return UpdateUserFromJSONTyped(json, false);
}

export function UpdateUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'bio': !exists(json, 'bio') ? undefined : json['bio'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function UpdateUserToJSON(value?: UpdateUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
        'username': value.username,
        'bio': value.bio,
        'image': value.image,
    };
}

