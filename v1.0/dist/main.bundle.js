webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ejemplo con API - reqres.in';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_app_resolve_service__ = __webpack_require__("../../../../../src/app/services/app.resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
    { path: 'usuarios', component: __WEBPACK_IMPORTED_MODULE_3__components_users_users_component__["a" /* UsersComponent */], data: { url: 'users' }, resolve: { data: __WEBPACK_IMPORTED_MODULE_0__services_app_resolve_service__["a" /* AppResolveService */] } },
    { path: 'usuario/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_user_user_component__["a" /* UserComponent */], data: { url: 'users' }, resolve: { data: __WEBPACK_IMPORTED_MODULE_0__services_app_resolve_service__["a" /* AppResolveService */] } },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
var AppModuleRouting = (function () {
    function AppModuleRouting() {
    }
    AppModuleRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_app_resolve_service__["a" /* AppResolveService */]]
        })
    ], AppModuleRouting);
    return AppModuleRouting;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_module_routing__ = __webpack_require__("../../../../../src/app/app.module.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_custom_input_custom_input_component__ = __webpack_require__("../../../../../src/app/components/custom-input/custom-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Rutas

// Importar Componentes





// Decorador
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_custom_input_custom_input_component__["a" /* CustomInputComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_user_component__["a" /* UserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_module_routing__["a" /* AppModuleRouting */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* CRUDService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/custom-input/custom-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-field col s12\">\n  <input type=\"text\" class=\"validate active\" [ngModel]=\"value\" (ngModelChange)=propagateChange($event) placeholder=\"...\">\n  <label>{{contentLabel}}</label>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/custom-input/custom-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomInputComponent = (function () {
    function CustomInputComponent() {
        this.propagateChange = function (_) { };
    }
    CustomInputComponent_1 = CustomInputComponent;
    CustomInputComponent.prototype.ngOnInit = function () {
        Materialize.updateTextFields();
    };
    CustomInputComponent.prototype.writeValue = function (val) {
        this.value = val;
    };
    CustomInputComponent.prototype.registerOnChange = function (fn) { this.propagateChange = fn; };
    CustomInputComponent.prototype.registerOnTouched = function (fn) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CustomInputComponent.prototype, "contentLabel", void 0);
    CustomInputComponent = CustomInputComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-custom-input',
            template: __webpack_require__("../../../../../src/app/components/custom-input/custom-input.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: CustomInputComponent_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], CustomInputComponent);
    return CustomInputComponent;
    var CustomInputComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"fondo\">\n    <div class=\"nav-wrapper\">\n        <a routerLink=\"/usuarios\" ><img class=\"logo left\" src=\"../../assets/img/logo.svg\"></a>\n        <h3 class=\"float-right m-2\">Ejemplo de CRUd en angular con la API reqres.in</h3>        \n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tcenter {\n  text-align: center; }\n\n.bold {\n  font-weight: bold; }\n\n.fondo {\n  background-image: linear-gradient(#d4251d, #bf1818, #ad1012); }\n\nnav {\n  color: #fff;\n  background-color: transparent;\n  width: 100%;\n  height: 56px;\n  line-height: 50px; }\n\nnav ul a:hover {\n  background-color: transparent; }\n\n.logo {\n  width: 85px;\n  height: 45px;\n  margin: 5px; }\n\nli a:hover {\n  color: white;\n  text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        jQuery('.button-collapse').sideNav();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row card noFlex\">\n    <div class=\"col-sm-10\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n              <app-custom-input contentLabel=\"Primer Nombre\" [(ngModel)]=\"user.first_name\"></app-custom-input>\n              <app-custom-input contentLabel=\"Primer Apellido\" [(ngModel)]=\"user.last_name\"></app-custom-input>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"card-image\">\n        <img [src]=\"user.avatar\">\n      </div>  \n    </div>\n    <div class=\"card-action center-align col-sm-12\">\n      <div class=\"left\"><button class=\"btn red lighten-1 waves-effect waves-light\" routerLink=\"/usuarios\">Cancelar</button></div>\n      <div class=\"right\"><button class=\"btn green lighten-1 waves-effect waves-light\" (click)=\"updateRegister(user.id)\">Guardar</button></div>\n    </div>  \n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".noFlex {\n  -ms-flex-direction: inherit;\n      flex-direction: inherit; }\n\nimg {\n  max-width: 128px;\n  max-height: 128px;\n  margin: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(route, router, crud) {
        this.route = route;
        this.router = router;
        this.crud = crud;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route['data'].subscribe(function (response) {
            _this.user = response['data']['data'];
            _this.currentUrl = response['url'];
        });
    };
    UserComponent.prototype.updateRegister = function (id) {
        this.crud.put(this.currentUrl + "/" + id, this.user).subscribe(function (response) {
            // return this.http.post(this.currentUrl + "api/users", params, {headers: headers} );
            // console.log(this.user);
            Materialize.toast('El registro fue actualizado', 4000);
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__services_app_service__["a" /* CRUDService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\" *ngFor=\"let item of data\">\n  <div class=\"list-group-item list-group-item-action margin10\" >\n    <div class=\"fleft\" (click)=\"getUser(item.id)\">\n      <img [src]=\"item.avatar ? item.avatar : 'https://www.w3schools.com/howto/img_avatar.png'\" width=\"128\" height=\"128\">\n    </div>\n    <div class=\"fleft\">\n      <p class=\"posicionar\">{{item.first_name}} {{item.last_name}}</p>\n    </div>\n    <div class=\"fright\">\n      <button class=\"btn posicionar red darken-2 lighten-1 waves-effect waves-light\" (click)=\"deleteRegister(item.id)\">Eliminar</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"fixed-action-btn toolbar\">\n  <a class=\"btn-floating btn-large red darken-2\">\n    <i class=\"large material-icons\">add</i>\n  </a>\n  <ul class=\"row white\">\n    <li class=\"col s12\">\n      <app-custom-input contentLabel=\"Usuario\" [(ngModel)]=\"user.first_name\"></app-custom-input>\n    </li>\n    <li class=\"col s12\">\n      <app-custom-input contentLabel=\"Nombre\" [(ngModel)]=\"user.last_name\"></app-custom-input>\n    </li>\n    <li class=\"red darken-2 waves-effect waves-light\"><a (click)=\"saveRegister()\"><i class=\"material-icons\">send</i></a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fleft {\n  float: left; }\n\n.fright {\n  float: right; }\n\n.posicionar {\n  margin: 50px; }\n\n.red.darken-2 {\n  background-image: linear-gradient(#d4251d, #bf1818, #ad1012);\n  color: white; }\n\n.margin10 {\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(route, router, crud) {
        this.route = route;
        this.router = router;
        this.crud = crud;
        this.user = { id: 0, avatar: '', first_name: '', last_name: '' };
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route['data'].subscribe(function (response) {
            _this.data = response['data']['data'];
            _this.currentUrl = response['url'];
        });
    };
    UsersComponent.prototype.deleteRegister = function (id) {
        var _this = this;
        this.crud.delete(this.currentUrl + "/" + id).subscribe(function (response) {
            _this.data = _this.data.filter(function (value) { return value.id !== id; });
            Materialize.toast('El registro fue eliminado', 4000);
        });
    };
    UsersComponent.prototype.getUser = function (id) {
        this.router.navigate(['usuario', id]);
    };
    UsersComponent.prototype.saveRegister = function () {
        var _this = this;
        this.crud.post('register', this.user).subscribe(function (response) {
            _this.data.push(_this.user);
            Materialize.toast('El registro fue guardado exitosamente', 4000);
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/users.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__services_app_service__["a" /* CRUDService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/app.resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppResolveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppResolveService = (function () {
    function AppResolveService(crud, router) {
        this.crud = crud;
        this.router = router;
    }
    AppResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        var idRegister = route.paramMap.get('id');
        var url = route['data'];
        if (!idRegister) {
            return this.crud.get(url['url']).map(function (response) {
                if (response) {
                    return response;
                }
                else {
                    _this.router.navigate(['']);
                }
            });
        }
        else {
            return this.crud.get(url['url'] + "/" + idRegister).map(function (response) {
                if (response) {
                    return response;
                }
                else {
                    _this.router.navigate(['']);
                }
            });
        }
    };
    AppResolveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* CRUDService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AppResolveService);
    return AppResolveService;
}());



/***/ }),

/***/ "../../../../../src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CRUDService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CRUDService = (function () {
    function CRUDService(http) {
        this.http = http;
        this.uri = 'https://reqres.in/api/';
    }
    CRUDService.prototype.get = function (url) {
        return this.http.get(this.uri + url).map(function (data) { return data; });
    };
    CRUDService.prototype.delete = function (url) {
        return this.http.delete(this.uri + url).map(function (data) { return data; });
    };
    CRUDService.prototype.put = function (url, data) {
        return this.http.put(this.uri + url, data).map(function (response) { return response; });
    };
    CRUDService.prototype.post = function (url, data) {
        return this.http.put(this.uri + url, data).map(function (response) { return response; });
    };
    CRUDService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CRUDService);
    return CRUDService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map