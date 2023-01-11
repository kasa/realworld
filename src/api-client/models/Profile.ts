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
 * @interface Profile
 */
export interface Profile {
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    bio: string;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    image: string;
    /**
     * 
     * @type {boolean}
     * @memberof Profile
     */
    following: boolean;
}

/**
 * Check if a given object implements the Profile interface.
 */
export function instanceOfProfile(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "bio" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "following" in value;

    return isInstance;
}

export function ProfileFromJSON(json: any): Profile {
    return ProfileFromJSONTyped(json, false);
}

export function ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): Profile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'bio': json['bio'],
        'image': json['image'],
        'following': json['following'],
    };
}

export function ProfileToJSON(value?: Profile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'bio': value.bio,
        'image': value.image,
        'following': value.following,
    };
}

