(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-view name=\"navigation\"></ui-view>\n<ui-view name=\"content\"></ui-view>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/partials/partials.module */ "./src/app/components/partials/partials.module.ts");
/* harmony import */ var _components_public_public_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/public/public.module */ "./src/app/components/public/public.module.ts");
/* harmony import */ var _components_users_users_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users/users.module */ "./src/app/components/users/users.module.ts");
/* harmony import */ var _components_projects_projects_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/projects.module */ "./src/app/components/projects/projects.module.ts");
/* harmony import */ var _components_payroll_payroll_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/payroll/payroll.module */ "./src/app/components/payroll/payroll.module.ts");
/* harmony import */ var _commons_services_interceptors_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commons/services/interceptors/token.service */ "./src/app/commons/services/interceptors/token.service.ts");
/* harmony import */ var _commons_utils_app_states__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./commons/utils/app.states */ "./src/app/commons/utils/app.states.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"].forRoot(_commons_utils_app_states__WEBPACK_IMPORTED_MODULE_11__["APP_STATES"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _components_partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _components_public_public_module__WEBPACK_IMPORTED_MODULE_6__["PublicModule"],
                _components_users_users_module__WEBPACK_IMPORTED_MODULE_7__["UsersModule"],
                _components_projects_projects_module__WEBPACK_IMPORTED_MODULE_8__["ProjectsModule"],
                _components_payroll_payroll_module__WEBPACK_IMPORTED_MODULE_9__["PayrollModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _commons_services_interceptors_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commons/constants/api.constants.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/constants/api.constants.ts ***!
  \****************************************************/
/*! exports provided: USERS, AUTH_USER, AUTH_LOGIN, PAYROLL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN", function() { return AUTH_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYROLL", function() { return PAYROLL; });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http.utils */ "./src/app/commons/utils/http.utils.ts");

/* USERS ENDPOINTS
 */
var USERS = '/api/users/';
/* AUTH ENDPOINTS
 */
var AUTH_USER = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'auth');
var AUTH_LOGIN = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'login');
/* PAYROLL ENDPOINTS
 */
var PAYROLL = '/api/payroll/';


/***/ }),

/***/ "./src/app/commons/constants/conf.constants.ts":
/*!*****************************************************!*\
  !*** ./src/app/commons/constants/conf.constants.ts ***!
  \*****************************************************/
/*! exports provided: AUTH_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
// TODO: make it dynamic. generate every login. (it looks cool)
// 18 random characters (alphanumeric + special characters + token)
var AUTH_KEY = 'NCqrSTxQCGMK2wDvRL';


/***/ }),

/***/ "./src/app/commons/forms/login.forms.ts":
/*!**********************************************!*\
  !*** ./src/app/commons/forms/login.forms.ts ***!
  \**********************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var LoginForm = /** @class */ (function () {
    function LoginForm(data) {
        this.err = null;
        /* Initialize the form builder
        */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    /* Check if form field is valid
     */
    LoginForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && this.form.get(f).touched);
    };
    /* Check if the form field has an error
     */
    LoginForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && this.form.get(f).touched;
    };
    return LoginForm;
}());



/***/ }),

/***/ "./src/app/commons/forms/user.forms.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/forms/user.forms.ts ***!
  \*********************************************/
/*! exports provided: UserForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return UserForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var UserForm = /** @class */ (function () {
    function UserForm(data) {
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.birthdate, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.position, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            date_started: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.date_started, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    /* Check if form field is valid
     */
    UserForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && this.form.get(f).touched);
    };
    /* Check if the form field has an error
     */
    UserForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && this.form.get(f).touched;
    };
    /* DEFAULT VALUE
     * set the value of the form fields if there is a default value.
     */
    UserForm.prototype.defaultValue = function (d) {
        // set a timeout just incase that the value is not yet ready.
        this.form.patchValue(d);
    };
    return UserForm;
}());



/***/ }),

/***/ "./src/app/commons/models/login.models.ts":
/*!************************************************!*\
  !*** ./src/app/commons/models/login.models.ts ***!
  \************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* Model class for signing in.
 */
var Login = /** @class */ (function () {
    function Login(data) {
        if (data === void 0) { data = {}; }
        this.email = null;
        this.password = null;
        Object.assign(this, data);
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/commons/models/payroll.models.ts":
/*!**************************************************!*\
  !*** ./src/app/commons/models/payroll.models.ts ***!
  \**************************************************/
/*! exports provided: Plan, Deduction, Payroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plan", function() { return Plan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deduction", function() { return Deduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payroll", function() { return Payroll; });
/* harmony import */ var _user_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.models */ "./src/app/commons/models/user.models.ts");

/* Model class for plan
 */
var Plan = /** @class */ (function () {
    function Plan(data) {
        if (data === void 0) { data = {}; }
        this.id = null;
        this.name = null;
        this.amount = null;
        this.term = null;
        this.monthly_ammort = null;
        this.payment_count = null;
        this.date_from = null;
        this.date_to = null;
        this.date_created = null;
        this.date_updated = null;
        Object.assign(this, data);
    }
    return Plan;
}());

/* Model class for deduction
 */
var Deduction = /** @class */ (function () {
    function Deduction(data) {
        if (data === void 0) { data = {}; }
        this.name = null;
        this.description = null;
        this.tier = null;
        this.amount = null;
        this.er = null;
        this.ee = null;
        this.date_created = null;
        this.date_updated = null;
        Object.assign(this, data);
    }
    return Deduction;
}());

/* Model class for payroll
 */
var Payroll = /** @class */ (function () {
    function Payroll(data) {
        if (data === void 0) { data = {}; }
        this.id = null;
        this.user = new _user_models__WEBPACK_IMPORTED_MODULE_0__["User"];
        this.date_from = null;
        this.date_to = null;
        this.total_deduction = null;
        this.gross_pay = null;
        this.net_pay = null;
        this.date_created = null;
        this.date_updated = null;
        Object.assign(this, data);
    }
    return Payroll;
}());



/***/ }),

/***/ "./src/app/commons/models/user.models.ts":
/*!***********************************************!*\
  !*** ./src/app/commons/models/user.models.ts ***!
  \***********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* Model class for user
 */
var User = /** @class */ (function () {
    function User(data) {
        if (data === void 0) { data = {}; }
        this.id = null;
        this.email = null;
        this.first_name = null;
        this.last_name = null;
        this.birthdate = null;
        this.image = null;
        this.position = null;
        this.position_type = null;
        this.date_started = null;
        this.deductions = new Array();
        this.plans = new Array();
        Object.assign(this, data);
    }
    return User;
}());



/***/ }),

/***/ "./src/app/commons/services/auth/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/commons/services/auth/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
/* harmony import */ var _constants_conf_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/conf.constants */ "./src/app/commons/constants/conf.constants.ts");
/* harmony import */ var _models_user_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user.models */ "./src/app/commons/models/user.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.user = new _models_user_models__WEBPACK_IMPORTED_MODULE_5__["User"];
    }
    /* USER LOGIN
     * @desc : sends a request to the backend server to
     *         to check for the credentials and returns
     *         a generated token.
     */
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_LOGIN"], creds)
            .toPromise()
            .then(function (resp) { _this.setToken(resp); return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    /* MANAGE USER TOKEN
     * @desc : manage user token generated from the backend
     *         to be used on authenticated requests
     */
    AuthService.prototype.setToken = function (token) {
        // save the generated token to the local storage
        window.localStorage[_constants_conf_constants__WEBPACK_IMPORTED_MODULE_4__["AUTH_KEY"]] = JSON.stringify(token);
        return;
    };
    AuthService.prototype.getToken = function () {
        // fetch the generated token from the storage
        var d = window.localStorage[_constants_conf_constants__WEBPACK_IMPORTED_MODULE_4__["AUTH_KEY"]];
        if (!d)
            return null;
        return JSON.parse(d);
    };
    AuthService.prototype.rmToken = function () {
        // clear the token from the local storage.
        window.localStorage.removeItem(_constants_conf_constants__WEBPACK_IMPORTED_MODULE_4__["AUTH_KEY"]);
    };
    /* MANAGE USER INSTANCE
     * @desc : manage user instance.
     */
    AuthService.prototype.authenticated = function () {
        // check if the user is authenticated
        return this.getToken() ? true : false;
    };
    AuthService.prototype.setuser = function () {
        var _this = this;
        // save the user's instance
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_USER"])
            .toPromise()
            .then(function (resp) { _this.user = new _models_user_models__WEBPACK_IMPORTED_MODULE_5__["User"](resp); });
    };
    AuthService.prototype.getuser = function () {
        // fetch the user instance
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](this.user) || lodash__WEBPACK_IMPORTED_MODULE_0__["some"](this.user, lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])) {
            // sends a request from the backend to
            // get the data.
            this.setuser();
        }
        return this.user;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/commons/services/auth/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/commons/services/auth/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
/* harmony import */ var _models_user_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user.models */ "./src/app/commons/models/user.models.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    /* USER UPDATE
     * @desc : sends a request to the backend server to update
     *         the user's information.
     */
    UserService.prototype.update = function (data) {
        var _this = this;
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["AUTH_USER"], data)
            .toPromise()
            .then(function (resp) { _this.auth.user = new _models_user_models__WEBPACK_IMPORTED_MODULE_3__["User"](resp); return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/commons/services/interceptors/token.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/commons/services/interceptors/token.service.ts ***!
  \****************************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TokenService = /** @class */ (function () {
    function TokenService(auth, state) {
        this.auth = auth;
        this.state = state;
    }
    TokenService.prototype.intercept = function (r, n) {
        var _this = this;
        var req = r.clone({
            headers: r.headers.set('Authorization', this.token())
        });
        return n.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"])
                return resp;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"])
                _this.authenticate();
        }));
    };
    // Get user token from the local storage
    // and format if to be placed into the request header.
    TokenService.prototype.token = function () {
        var t = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](this.auth.getToken(), ['token'], null);
        return "Token " + t;
    };
    // Remove expired token. redirect the user to the login
    // page and re-authenticate.
    TokenService.prototype.authenticate = function () {
        this.auth.rmToken();
        this.state.go('login');
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/commons/services/payroll/payroll.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/commons/services/payroll/payroll.service.ts ***!
  \*************************************************************/
/*! exports provided: PayrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollService", function() { return PayrollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/http.utils */ "./src/app/commons/utils/http.utils.ts");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayrollService = /** @class */ (function () {
    function PayrollService(http) {
        this.http = http;
        this.plist = [];
    }
    /* Payroll detail
     */
    PayrollService.prototype.detail = function (id) {
        return this.http.get(Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_2__["urlsafe"])(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["PAYROLL"], id));
    };
    /* Payroll list
     */
    PayrollService.prototype.list = function (params) {
        if (params === void 0) { params = {}; }
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["PAYROLL"] + Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_2__["queryparams"])(params));
    };
    PayrollService.prototype.getList = function () {
        var _this = this;
        this.list()
            .subscribe(function (resp) { _this.plist = resp; });
    };
    PayrollService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PayrollService);
    return PayrollService;
}());



/***/ }),

/***/ "./src/app/commons/utils/app.states.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/utils/app.states.ts ***!
  \*********************************************/
/*! exports provided: APP_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_STATES", function() { return APP_STATES; });
/* harmony import */ var _components_public_public_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/public/public.states */ "./src/app/components/public/public.states.ts");
/* harmony import */ var _components_users_users_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/users/users.states */ "./src/app/components/users/users.states.ts");
/* harmony import */ var _components_projects_projects_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/projects/projects.states */ "./src/app/components/projects/projects.states.ts");
/* harmony import */ var _components_payroll_payroll_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/payroll/payroll.states */ "./src/app/components/payroll/payroll.states.ts");




var APP_STATES = {
    otherwise: '/',
    states: [].concat(_components_public_public_states__WEBPACK_IMPORTED_MODULE_0__["PUBLIC_STATES"], _components_users_users_states__WEBPACK_IMPORTED_MODULE_1__["USER_STATES"], _components_projects_projects_states__WEBPACK_IMPORTED_MODULE_2__["PROJECTS_STATES"], _components_payroll_payroll_states__WEBPACK_IMPORTED_MODULE_3__["PAYROLL_STATES"])
};


/***/ }),

/***/ "./src/app/commons/utils/http.utils.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/utils/http.utils.ts ***!
  \*********************************************/
/*! exports provided: urlsafe, queryparams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlsafe", function() { return urlsafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryparams", function() { return queryparams; });
/* Re-format the URL parameters for
 * readbility
 */
function urlsafe(url) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return url.concat(params.join("/"), '/');
}
function queryparams(data) {
    return "?" + Object.keys(data).map(function (key) { return key + "=" + encodeURIComponent(data[key]); }).join('&');
}


/***/ }),

/***/ "./src/app/commons/utils/layout.utils.ts":
/*!***********************************************!*\
  !*** ./src/app/commons/utils/layout.utils.ts ***!
  \***********************************************/
/*! exports provided: ContentOnly, NavContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOnly", function() { return ContentOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContent", function() { return NavContent; });
/* harmony import */ var _components_partials_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/partials/navigation/navigation.component */ "./src/app/components/partials/navigation/navigation.component.ts");

function ContentOnly(content) {
    return { content: content };
}
function NavContent(content) {
    return { navigation: _components_partials_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__["NavigationComponent"], content: content };
}


/***/ }),

/***/ "./src/app/commons/utils/security.utils.ts":
/*!*************************************************!*\
  !*** ./src/app/commons/utils/security.utils.ts ***!
  \*************************************************/
/*! exports provided: LoginRequired, Disconnect, PayrollRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequired", function() { return LoginRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disconnect", function() { return Disconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollRedirect", function() { return PayrollRedirect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/payroll/payroll.service */ "./src/app/commons/services/payroll/payroll.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/* LOGIN REQUIRED
 * @desc : callback function that will check and will not pass
 *         users that are not logged in.
 */
function LoginRequired(t) {
    var auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), state = t.router.stateService;
    if (!auth.authenticated())
        return state.target('login');
}
/* DISCONNECT
 * @desc : callback function that will log user out.
 *         (removes/clear the user token)
 */
function Disconnect(t) {
    var auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), state = t.router.stateService;
    if (auth.authenticated())
        auth.rmToken();
    return state.target('login');
}
/* PAYROLL REDIRECT
 */
function PayrollRedirect(t) {
    return __awaiter(this, void 0, void 0, function () {
        var auth, payroll, state;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), payroll = t.injector().get(_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_2__["PayrollService"]), state = t.router.stateService;
                    if (!auth.authenticated())
                        return [2 /*return*/, state.target('login')];
                    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](payroll.plist)) return [3 /*break*/, 2];
                    // TODO: improve this part. it looks good but messy.
                    // `payroll.plist` shouldn't be assigned in this function
                    return [4 /*yield*/, payroll.list()
                            .toPromise()
                            .then(function (resp) { payroll.plist = resp; return resp; })];
                case 1:
                    // TODO: improve this part. it looks good but messy.
                    // `payroll.plist` shouldn't be assigned in this function
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (payroll.plist.length !== 0) {
                        return [2 /*return*/, state.target('payroll-detail', { id: payroll.plist[0].id })];
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/components/partials/navigation/navigation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/partials/navigation/navigation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/navigation/navigation.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/partials/navigation/navigation.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <div class=\"container d-flex align-items-center justify-content-between py-1\">\n    <a class=\"navbar-brand\" uiSref=\"dashboard\">Workflow</a>\n\n    <form class=\"navbar-search\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\" id=\"btnGroupAddon\">@</div>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n      </div>\n    </form>\n\n    <ul class=\"nav navbar-nav\">\n      <li><a uiSref=\"dashboard\"><i class=\"far fa-home\"></i>Home</a></li>\n      <li><a uiSref=\"projects\"><i class=\"far fa-project-diagram\"></i>Projects</a></li>\n      <li><a uiSref=\"payroll\"><i class=\"far fa-cash-register\"></i>Payroll</a></li>\n    </ul>\n\n    <div class=\"navbar-user\" ngbDropdown>\n      <button ngbDropdownToggle>\n        <div class=\"image\" [ngStyle]=\"{'background-image': 'url('+ auth.user.image +')'}\"></div>\n        <span>{{ auth.user.first_name }}</span>\n      </button>\n      <div ngbDropdownMenu>\n        <a class=\"dropdown-item\" uiSref=\"user-settings\">Account Settings</a>\n        <a class=\"dropdown-item\" uiSref=\"messages\">Messages</a>\n        <a class=\"dropdown-item\" uiSref=\"logout\">Log out</a>\n      </div>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/partials/navigation/navigation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/partials/navigation/navigation.component.ts ***!
  \************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(bconfig, auth) {
        this.bconfig = bconfig;
        this.auth = auth;
        bconfig.placement = 'bottom-right';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.auth.getuser();
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/partials/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/partials/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"],
            _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/partials.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/partials/partials.module.ts ***!
  \********************************************************/
/*! exports provided: PartialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsModule", function() { return PartialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/partials/navigation/navigation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PartialsModule = /** @class */ (function () {
    function PartialsModule() {
    }
    PartialsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"]
            ],
            declarations: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]]
        })
    ], PartialsModule);
    return PartialsModule;
}());



/***/ }),

/***/ "./src/app/components/payroll/payroll-list/payroll-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/payroll/payroll-list/payroll-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payroll/payroll-list/payroll-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/payroll/payroll-list/payroll-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"payrollservice.plist.length > 0\">\n  <li *ngFor=\"let p of payrollservice.plist\">\n    <a uiSref=\"payroll-detail\" [uiParams]=\"{id:p.id}\" uiSrefActive=\"active\">{{ p.id }}</a>\n  </li>\n</ul>\n\n<p [hidden]=\"payrollservice.plist.length > 0\">No payroll list</p>"

/***/ }),

/***/ "./src/app/components/payroll/payroll-list/payroll-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/payroll/payroll-list/payroll-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: PayrollListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollListComponent", function() { return PayrollListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/services/payroll/payroll.service */ "./src/app/commons/services/payroll/payroll.service.ts");
/* harmony import */ var _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayrollListComponent = /** @class */ (function () {
    function PayrollListComponent(state, auth, payrollservice) {
        this.state = state;
        this.auth = auth;
        this.payrollservice = payrollservice;
        this.plist = [];
    }
    PayrollListComponent.prototype.ngOnInit = function () {
        // get the list of payrolls for the
        // authenticated user.
        this.payrollservice.getList();
    };
    PayrollListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payroll-list',
            template: __webpack_require__(/*! ./payroll-list.component.html */ "./src/app/components/payroll/payroll-list/payroll-list.component.html"),
            styles: [__webpack_require__(/*! ./payroll-list.component.css */ "./src/app/components/payroll/payroll-list/payroll-list.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _commons_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_2__["PayrollService"]])
    ], PayrollListComponent);
    return PayrollListComponent;
}());



/***/ }),

/***/ "./src/app/components/payroll/payroll.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/payroll/payroll.module.ts ***!
  \******************************************************/
/*! exports provided: PayrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollModule", function() { return PayrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payroll/payroll.component */ "./src/app/components/payroll/payroll/payroll.component.ts");
/* harmony import */ var _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payroll-list/payroll-list.component */ "./src/app/components/payroll/payroll-list/payroll-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PayrollModule = /** @class */ (function () {
    function PayrollModule() {
    }
    PayrollModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"]
            ],
            declarations: [_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_4__["PayrollComponent"], _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_5__["PayrollListComponent"]]
        })
    ], PayrollModule);
    return PayrollModule;
}());



/***/ }),

/***/ "./src/app/components/payroll/payroll.states.ts":
/*!******************************************************!*\
  !*** ./src/app/components/payroll/payroll.states.ts ***!
  \******************************************************/
/*! exports provided: PAYROLL_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYROLL_STATES", function() { return PAYROLL_STATES; });
/* harmony import */ var _commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll/payroll.component */ "./src/app/components/payroll/payroll/payroll.component.ts");



var PAYROLL_STATES = [
    {
        name: 'payroll',
        url: '/payroll/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_2__["PayrollComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["PayrollRedirect"]
    },
    {
        name: 'payroll-detail',
        url: '/payroll/:id/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_payroll_payroll_component__WEBPACK_IMPORTED_MODULE_2__["PayrollComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    }
];


/***/ }),

/***/ "./src/app/components/payroll/payroll/payroll.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/payroll/payroll/payroll.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payroll/payroll/payroll.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/payroll/payroll/payroll.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5 payroll\">\n\n  <section class=\"payroll-list\">\n    <app-payroll-list></app-payroll-list>\n  </section>\n\n  <section class=\"payroll-detail\" *ngIf=\"state.params.id\">\n    <p>Name : {{ payroll.user.first_name }} {{ payroll.user.last_name }}</p>\n    <p>Email: {{ payroll.user.email }}</p>\n    <p>Job : {{ payroll.user.position }}</p>\n    <p>Date: {{ payroll.date_from }} to {{ payroll.date_to }}</p>\n    <p>Payroll number: {{ payroll.id }}</p>\n\n    <table>\n      <thead>\n        <tr>\n          <th style=\"width: 145px\">Items:</th>\n          <th>Amount:</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Gross Amount:</td>\n          <td>{{ payroll.gross_pay }}</td>\n        </tr>\n        <tr>\n          <td>Deductions:</td>\n          <td>\n            <div *ngFor=\"let d of payroll.user.deductions\">\n              {{ d.name }} : {{ d.ee }}\n            </div>\n            <div *ngFor=\"let d of payroll.user.plans\">\n              {{ d.name }} : {{ d.monthly_ammort }}\n            </div>\n          </td>\n        </tr>\n\n        <tr>\n          <td>Total Deductions:</td>\n          <td>{{ payroll.total_deduction }}</td>\n        </tr>\n        <tr>\n          <td>Net Amount:</td>\n          <td>{{ payroll.net_pay }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n  <div class=\"payroll-detail\" [hidden]=\"state.params.id\">\n    No payroll atm..\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/payroll/payroll/payroll.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/payroll/payroll/payroll.component.ts ***!
  \*****************************************************************/
/*! exports provided: PayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollComponent", function() { return PayrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/services/payroll/payroll.service */ "./src/app/commons/services/payroll/payroll.service.ts");
/* harmony import */ var _commons_models_payroll_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/models/payroll.models */ "./src/app/commons/models/payroll.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayrollComponent = /** @class */ (function () {
    function PayrollComponent(state, payrollservice) {
        this.state = state;
        this.payrollservice = payrollservice;
        this.payroll = new _commons_models_payroll_models__WEBPACK_IMPORTED_MODULE_3__["Payroll"];
    }
    PayrollComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.state.params.id) {
            // get payroll details from the backend
            this.payrollservice.detail(this.state.params.id)
                .subscribe(function (resp) { _this.payroll = new _commons_models_payroll_models__WEBPACK_IMPORTED_MODULE_3__["Payroll"](resp); });
        }
    };
    PayrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payroll',
            template: __webpack_require__(/*! ./payroll.component.html */ "./src/app/components/payroll/payroll/payroll.component.html"),
            styles: [__webpack_require__(/*! ./payroll.component.css */ "./src/app/components/payroll/payroll/payroll.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _commons_services_payroll_payroll_service__WEBPACK_IMPORTED_MODULE_2__["PayrollService"]])
    ], PayrollComponent);
    return PayrollComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/projects/projects.module.ts ***!
  \********************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/components/projects/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.states.ts":
/*!********************************************************!*\
  !*** ./src/app/components/projects/projects.states.ts ***!
  \********************************************************/
/*! exports provided: PROJECTS_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS_STATES", function() { return PROJECTS_STATES; });
/* harmony import */ var _commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/components/projects/projects/projects.component.ts");



var PROJECTS_STATES = [
    {
        name: 'projects',
        url: '/projects/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    }
];


/***/ }),

/***/ "./src/app/components/projects/projects/projects.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/projects/projects/projects.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/projects/projects/projects.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/projects/projects/projects.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/projects/projects/projects.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/projects/projects/projects.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/public/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/public/login/login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/public/login/login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/public/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\n    <span [hidden]=\"!form.err\">Invalid Email/Password. Please try again.</span>\n    <div>\n        <label>Email:</label>\n        <input formControlName=\"email\" type=\"text\">\n        <span [hidden]=\"form.valid('email')\">Invalid email format.</span>\n    </div>\n    <div>\n        <label>Password:</label>\n        <input formControlName=\"password\" type=\"password\">\n        <span [hidden]=\"form.valid('password')\">Password is required.</span>\n    </div>\n    <button type=\"submit\">Login</button>\n</form>"

/***/ }),

/***/ "./src/app/components/public/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/public/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_models_login_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/models/login.models */ "./src/app/commons/models/login.models.ts");
/* harmony import */ var _commons_forms_login_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/forms/login.forms */ "./src/app/commons/forms/login.forms.ts");
/* harmony import */ var _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, state) {
        this.auth = auth;
        this.state = state;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // initialize the form.
        this.form = new _commons_forms_login_forms__WEBPACK_IMPORTED_MODULE_3__["LoginForm"](new _commons_models_login_models__WEBPACK_IMPORTED_MODULE_2__["Login"]);
    };
    LoginComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // send the form data to the backend if the value
        // format are valid.
        if (valid) {
            this.auth.login(value)
                .then(function (resp) {
                _this.state.go('dashboard');
            })
                .catch(function (err) {
                _this.form.err = err;
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/public/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/public/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/public/public.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/public/public.module.ts ***!
  \****************************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/public/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "./src/app/components/public/public.states.ts":
/*!****************************************************!*\
  !*** ./src/app/components/public/public.states.ts ***!
  \****************************************************/
/*! exports provided: PUBLIC_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLIC_STATES", function() { return PUBLIC_STATES; });
/* harmony import */ var _commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/public/login/login.component.ts");



var PUBLIC_STATES = [
    {
        name: 'login',
        url: '/login/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"])
    },
    {
        name: 'logout',
        url: '/logout/',
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["Disconnect"]
    }
];


/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\">\n\n    <section class=\"left\">\n      <div class=\"feed\">\n        <h5>Recent news</h5>\n\n        <div class=\"item\">\n          item 1\n        </div>\n\n        <div class=\"item\">\n          item 1\n        </div>\n\n        <div class=\"item\">\n          item 1\n        </div>\n\n        <div class=\"item\">\n          item 1\n        </div>\n\n        <div class=\"item\">\n          item 1\n        </div>\n\n      </div>\n    </section>\n\n    <section class=\"right\">\n      <div class=\"calendar\">\n        <h5>Calendar</h5>\n      </div>\n\n      <div class=\"stats\">\n        <h5>Statistics</h5>\n      </div>\n    </section>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/users/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/users/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/users/setting/setting.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users/setting/setting.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/setting/setting.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/setting/setting.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n  <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\n    \n    <div>\n      <label>First Name:</label>\n      <input type=\"text\" formControlName=\"first_name\">\n      <span [hidden]=\"form.valid('first_name')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Last Name:</label>\n      <input type=\"text\" formControlName=\"last_name\">\n      <span [hidden]=\"form.valid('last_name')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Email:</label>\n      <input type=\"text\" formControlName=\"email\">\n      <span [hidden]=\"form.valid('email')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Birthdate:</label>\n      <input type=\"date\" formControlName=\"birthdate\">\n      <span [hidden]=\"form.valid('birthdate')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Position:</label>\n      <input type=\"text\" formControlName=\"position\">\n      <span [hidden]=\"form.valid('position')\">This field is required.</span>\n    </div>\n\n    <div>\n      <label>Date Started:</label>\n      <input type=\"date\" formControlName=\"date_started\">\n      <span [hidden]=\"form.valid('date_started')\">This field is required.</span>\n    </div>\n\n    <button type=\"submit\">Save Changes</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/users/setting/setting.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users/setting/setting.component.ts ***!
  \***************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _commons_forms_user_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/forms/user.forms */ "./src/app/commons/forms/user.forms.ts");
/* harmony import */ var _commons_models_user_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/models/user.models */ "./src/app/commons/models/user.models.ts");
/* harmony import */ var _commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _commons_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../commons/services/auth/user.service */ "./src/app/commons/services/auth/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingComponent = /** @class */ (function () {
    function SettingComponent(auth, state, userservice) {
        this.auth = auth;
        this.state = state;
        this.userservice = userservice;
    }
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize the form.
        this.form = new _commons_forms_user_forms__WEBPACK_IMPORTED_MODULE_2__["UserForm"](new _commons_models_user_models__WEBPACK_IMPORTED_MODULE_3__["User"]);
        // TODO: improve this part by removing the setTimeout hack.
        // this is working but in efficient as i set 30millisecond
        // to wait for the user data to load. (will not work on slow
        // speed internet connection). Use async/await method and
        // find the right/more accurate timing.
        setTimeout(function () {
            _this.form.defaultValue(_this.auth.user);
        }, 60);
    };
    SettingComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // send the form data to the backend if the value
        // format are valid.
        if (valid) {
            this.userservice.update(value)
                .then(function (resp) { _this.state.go('user-settings'); })
                .catch(function (err) { console.log(err); });
        }
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/components/users/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/components/users/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _commons_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/users/users.module.ts ***!
  \**************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/users/dashboard/dashboard.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/components/users/setting/setting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"]
            ],
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/components/users/users.states.ts":
/*!**************************************************!*\
  !*** ./src/app/components/users/users.states.ts ***!
  \**************************************************/
/*! exports provided: USER_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATES", function() { return USER_STATES; });
/* harmony import */ var _commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/users/dashboard/dashboard.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/components/users/setting/setting.component.ts");




var USER_STATES = [
    {
        name: 'dashboard',
        url: '/dashboard/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    },
    {
        name: 'user-settings',
        url: '/users/settings/',
        views: Object(_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]),
        onEnter: _commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/earvingemenez/Platforms/swiftkind/console/env/core/assets/scripts/fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map