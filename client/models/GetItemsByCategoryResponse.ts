/**
 * Odd Giants Public API
 * Odd Giants Public API
 *
 * OpenAPI spec version: 0.0.1
 * Contact: ustice@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Item } from './Item';
import { HttpFile } from '../http/http';

export class GetItemsByCategoryResponse extends Array<Item> {

    static readonly discriminator: string | undefined = undefined;


    public constructor() {
        super();
    }
}

