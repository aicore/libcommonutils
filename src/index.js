/*
 * GNU AGPL-3.0 License
 *
 * Copyright (c) 2021 - present core.ai . All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see https://opensource.org/licenses/AGPL-3.0.
 *
 */

// @INCLUDE_IN_API_DOCS

/**
 * Write your module docs here. tell something about this module in markdown.
 *
 * See https://github.com/aicore/template-nodejs/wiki/How-To-Write-Docs for more details on how to style docs.
 * ### Use markdown headings!
 * and markdown code!
 * ```
 * // usage within core:
 * const Metrics = require("utils/Metrics");
 *
 * // usage within default extensions:
 * const Metrics = brackets.getModule("utils/Metrics");
 * ```
 *
 * @module  libcommonutils
 *
 */

export {isNumber, isString, isObject, isBoolean, isObjectEmpty, isStringEmpty} from './utils/common.js';
export {getMySqlConfigs} from './utils/configs.js';
export {HTTP_STATUS_CODES} from './const/http.js';
export {COCO_DB_FUNCTIONS} from './const/cocoDBWSAPI.js';
