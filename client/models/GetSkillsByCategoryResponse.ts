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

import { Skill } from './Skill';
import { HttpFile } from '../http/http';

export class GetSkillsByCategoryResponse extends Array<Skill> {

    static readonly discriminator: string | undefined = undefined;


    public constructor() {
        super();
    }
}

