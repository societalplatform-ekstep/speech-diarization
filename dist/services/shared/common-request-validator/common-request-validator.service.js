"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let CommonRequestValidatorService = class CommonRequestValidatorService {
    constructor() { }
    validateBodyObject(bodyObject) {
        let isValid = false;
        if (!!bodyObject && bodyObject.constructor === Object) {
            if (Object.keys(bodyObject).length) {
                isValid = true;
            }
            else {
                console.log('Body object validation failed : No keys present inside the body object');
            }
        }
        else {
            console.log('Body object validation failed : Body is not of object type');
        }
        return isValid;
    }
    validateZoomBodyObject(bodyObjectString) {
        let isValid = false;
        try {
            const parsedDataToCheck = Object.assign({}, bodyObjectString);
            if (this.validateBodyObject(parsedDataToCheck)) {
                if (parsedDataToCheck.hasOwnProperty('data') && Array.isArray(parsedDataToCheck['data'])) {
                    console.log('body is valid for zoom parser');
                    isValid = true;
                }
                else {
                    console.log('body is not valid for zoom parser, data key is either absent or it is not of array type');
                }
            }
            else {
                console.log(`bodyObject doesn't seem to be a valid generic object`);
            }
        }
        catch (e) {
            console.log('error while checking validity of the bodyObject ', e);
        }
        return isValid;
    }
};
CommonRequestValidatorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], CommonRequestValidatorService);
exports.CommonRequestValidatorService = CommonRequestValidatorService;
//# sourceMappingURL=common-request-validator.service.js.map