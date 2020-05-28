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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<app-title></app-title>\n\n<app-about></app-about>\n\n<app-skills></app-skills>\n\n<app-strengths></app-strengths>\n\n<app-experience></app-experience>\n\n<app-education></app-education>\n\n<app-passions></app-passions>\n\n<app-footer></app-footer>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'MC';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sections_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/hobbies/hobbies.component */ "./src/app/sections/hobbies/hobbies.component.ts");
/* harmony import */ var _sections_hobbies_hobby_hobby_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/hobbies/hobby/hobby.component */ "./src/app/sections/hobbies/hobby/hobby.component.ts");
/* harmony import */ var _sections_title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/title/title.component */ "./src/app/sections/title/title.component.ts");
/* harmony import */ var _sections_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/navbar/navbar.component */ "./src/app/sections/navbar/navbar.component.ts");
/* harmony import */ var _sections_passions_passions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/passions/passions.component */ "./src/app/sections/passions/passions.component.ts");
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/about/about.component */ "./src/app/sections/about/about.component.ts");
/* harmony import */ var _sections_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/footer/footer.component */ "./src/app/sections/footer/footer.component.ts");
/* harmony import */ var _sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/experience/experience.component */ "./src/app/sections/experience/experience.component.ts");
/* harmony import */ var _sections_education_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/education/education.component */ "./src/app/sections/education/education.component.ts");
/* harmony import */ var _sections_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/skills/skills.component */ "./src/app/sections/skills/skills.component.ts");
/* harmony import */ var _sections_strengths_strengths_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/strengths/strengths.component */ "./src/app/sections/strengths/strengths.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _sections_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_4__["HobbiesComponent"],
                _sections_hobbies_hobby_hobby_component__WEBPACK_IMPORTED_MODULE_5__["HobbyComponent"],
                _sections_title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"],
                _sections_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _sections_passions_passions_component__WEBPACK_IMPORTED_MODULE_8__["PassionsComponent"],
                _sections_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _sections_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"],
                _sections_education_education_component__WEBPACK_IMPORTED_MODULE_12__["EducationComponent"],
                _sections_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"],
                _sections_strengths_strengths_component__WEBPACK_IMPORTED_MODULE_14__["StrengthsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sections/about/about.component.html":
/*!*****************************************************!*\
  !*** ./src/app/sections/about/about.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"about\"></a>\n<section>\n  <p>\n    My firm belief is that software should implement both form and function. I use current technologies to efficiently\n    generate effective user experiences. Software should be highly accesible and needs to exist across multiple\n    platforms as users see fit. This is best implemented with a single code base developed through web technologies.\n  </p>\n</section>"

/***/ }),

/***/ "./src/app/sections/about/about.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/sections/about/about.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: #eee;\n  padding: 10rem; }\n  @media (max-width: 767.98px) {\n    section {\n      padding: 5rem; } }\n  section p {\n    font-family: \"Playfair Display\";\n    font-size: 3rem;\n    color: #222;\n    line-height: 3.6rem;\n    -moz-column-count: 2;\n         column-count: 2; }\n  @media (max-width: 767.98px) {\n      section p {\n        -moz-column-count: 1;\n             column-count: 1;\n        font-size: 2.5rem;\n        line-height: 2.8rem;\n        margin-bottom: 1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvYWJvdXQvQzpcXFVzZXJzXFxtaWNoYWVsLmNvbGxpdmVyXFxQaWN0dXJlc1xcUGVyc29uYWwgUHJvamVjdHNcXDIwMjAgLSBFeHBlcmllbmNlXFxleHBlcmllbmNlL3NyY1xcYXBwXFxzZWN0aW9uc1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy9hYm91dC9DOlxcVXNlcnNcXG1pY2hhZWwuY29sbGl2ZXJcXFBpY3R1cmVzXFxQZXJzb25hbCBQcm9qZWN0c1xcMjAyMCAtIEV4cGVyaWVuY2VcXGV4cGVyaWVuY2Uvc3JjXFxhc3NldHNcXHNhc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFnQjtFQUNoQixlQUFjLEVBbUJqQjtFQ2RHO0lEUEo7TUFJUSxjQUFhLEVBaUJwQixFQUFBO0VBckJEO0lBUVEsZ0NBQStCO0lBQy9CLGdCQUFlO0lBQ2YsWUFBVztJQUNYLG9CQUFtQjtJQUNuQixxQkFBZTtTQUFmLGdCQUFlLEVBUWxCO0VDYkQ7TURQSjtRQWVZLHFCQUFlO2FBQWYsZ0JBQWU7UUFDZixrQkFBaUI7UUFDakIsb0JBQW1CO1FBQ25CLG9CQUFtQixFQUUxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zXCI7XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAxMHJlbTtcclxuICAgIEBpbmNsdWRlIHNtYWxsIHtcclxuICAgICAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIjtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMuNnJlbTtcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDI7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsIHtcclxuICAgICAgICAgICAgY29sdW1uLWNvdW50OiAxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQG1peGluIHhzbWFsbCB7XHJcbi8vICAgICAvLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcclxuLy8gICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4vLyAgICAgICAgIEBjb250ZW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5AbWl4aW4gc21hbGwge1xyXG4gICAgLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gICAgLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExMDkuOThweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2Uge1xyXG4gICAgLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTEwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQG1peGluIHhsYXJnZSB7XHJcbi8vICAgICAvLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcclxuLy8gICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sections/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/sections/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/sections/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/sections/education/education.component.html":
/*!*************************************************************!*\
  !*** ./src/app/sections/education/education.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"education\"></a>\n<section>\n  <div>\n    <h5 class=\"year\">2008 - 2012</h5>\n    <h4>Bachelor of Science in Business Administration</h4>\n    <h5 class=\"school\">University of Louisville</h5>\n    <h6 class=\"major\">\n      <div></div>Major\n    </h6>\n    <h6 class=\"major-text\"><small>Computer Information Systems</small></h6>\n    <h6 class=\"emphasis\">\n      <div></div>Emphases\n    </h6>\n    <h6 class=\"emphasis-text\"><small>Web Development</small></h6>\n    <h6 class=\"emphasis-text\"><small>Information Security</small></h6>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/sections/education/education.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/sections/education/education.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  width: 100%;\n  height: 50rem;\n  background-image: url('bridge.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  @media (max-width: 767.98px) {\n    section {\n      height: 54rem; } }\n  section:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 33rem;\n    background: #222;\n    height: 100%; }\n  @media (max-width: 767.98px) {\n      section:before {\n        width: 100%;\n        opacity: 0.5; } }\n  section > div {\n    color: white;\n    padding: 5rem;\n    padding-top: 7rem;\n    height: 100%;\n    z-index: 9; }\n  section h4 {\n    font-family: playfair display;\n    font-size: 4rem;\n    line-height: 5rem;\n    width: 100%;\n    max-width: 50rem;\n    margin: 0; }\n  section .school {\n    top: 12rem;\n    font-family: Lato;\n    text-transform: uppercase;\n    color: #777;\n    margin-top: 1rem;\n    margin-bottom: 2rem; }\n  section .year {\n    font-family: Playfair Display;\n    top: 2rem;\n    margin: 0;\n    color: dodgerblue; }\n  section h6 {\n    margin: 0;\n    color: #777; }\n  section h6.major-text, section h6.emphasis-text {\n      font-weight: bold;\n      letter-spacing: 1px;\n      color: #aaa; }\n  section h6.major, section h6.emphasis {\n      text-transform: uppercase;\n      letter-spacing: 3px;\n      font-size: 1.2rem; }\n  section h6.major div, section h6.emphasis div {\n        z-index: -1; }\n  @media (max-width: 767.98px) {\n          section h6.major div, section h6.emphasis div {\n            display: none; } }\n  section h6.major div:before, section h6.emphasis div:before {\n          content: \"\";\n          width: 23rem;\n          height: 1px;\n          background: #777;\n          position: absolute;\n          margin-top: 1rem; }\n  section h6.major div:after, section h6.emphasis div:after {\n          content: \"\";\n          background: #222;\n          position: absolute;\n          height: 2rem; }\n  section h6.major div:after {\n      width: 6.5rem;\n      margin-left: -0.5rem; }\n  section h6.emphasis {\n      margin-top: 1rem; }\n  section h6.emphasis div:after {\n        width: 9.5rem;\n        margin-left: -0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvZWR1Y2F0aW9uL0M6XFxVc2Vyc1xcbWljaGFlbC5jb2xsaXZlclxcUGljdHVyZXNcXFBlcnNvbmFsIFByb2plY3RzXFwyMDIwIC0gRXhwZXJpZW5jZVxcZXhwZXJpZW5jZS9zcmNcXGFwcFxcc2VjdGlvbnNcXGVkdWNhdGlvblxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy9lZHVjYXRpb24vQzpcXFVzZXJzXFxtaWNoYWVsLmNvbGxpdmVyXFxQaWN0dXJlc1xcUGVyc29uYWwgUHJvamVjdHNcXDIwMjAgLSBFeHBlcmllbmNlXFxleHBlcmllbmNlL3NyY1xcYXNzZXRzXFxzYXNzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLG9DQUFpRTtFQUNqRSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLHVCQUFzQixFQXFHekI7RUNwR0c7SURQSjtNQVNRLGNBQWEsRUFrR3BCLEVBQUE7RUEzR0Q7SUFhUSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixRQUFPO0lBQ1AsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixhQUFZLEVBTWY7RUNsQkQ7TURQSjtRQXNCWSxZQUFXO1FBQ1gsYUFBWSxFQUVuQixFQUFBO0VBekJMO0lBNEJRLGFBQVk7SUFDWixjQUFhO0lBQ2Isa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixXQUFVLEVBQ2I7RUFqQ0w7SUFtQ1EsOEJBQTZCO0lBQzdCLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLFlBQVc7SUFDWCxpQkFBZ0I7SUFDaEIsVUFBUyxFQUNaO0VBekNMO0lBMkNRLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsMEJBQXlCO0lBQ3pCLFlBQVc7SUFDWCxpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBQ3RCO0VBakRMO0lBbURRLDhCQUE2QjtJQUM3QixVQUFTO0lBQ1QsVUFBUztJQUNULGtCQUFpQixFQUNwQjtFQXZETDtJQXlEUSxVQUFTO0lBQ1QsWUFBVyxFQWdEZDtFQTFHTDtNQThEWSxrQkFBaUI7TUFDakIsb0JBQW1CO01BQ25CLFlBQVcsRUFDZDtFQWpFVDtNQW9FWSwwQkFBeUI7TUFDekIsb0JBQW1CO01BQ25CLGtCQUFpQixFQXVCcEI7RUE3RlQ7UUF5RWdCLFlBQVcsRUFtQmQ7RUNyRlQ7VURQSjtZQTJFb0IsY0FBYSxFQWlCcEIsRUFBQTtFQTVGYjtVQStFb0IsWUFBVztVQUNYLGFBQVk7VUFDWixZQUFXO1VBQ1gsaUJBQWdCO1VBQ2hCLG1CQUFrQjtVQUNsQixpQkFBZ0IsRUFDbkI7RUFyRmpCO1VBdUZvQixZQUFXO1VBQ1gsaUJBQWdCO1VBQ2hCLG1CQUFrQjtVQUNsQixhQUFZLEVBQ2Y7RUEzRmpCO01BK0ZZLGNBQWE7TUFDYixxQkFBb0IsRUFDdkI7RUFqR1Q7TUFtR1ksaUJBQWdCLEVBTW5CO0VBekdUO1FBc0dnQixjQUFhO1FBQ2IscUJBQW9CLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVhdHVyZWQvYnJpZGdlLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDMzcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogNXJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogcGxheWZhaXIgZGlzcGxheTtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MHJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuc2Nob29sIHtcclxuICAgICAgICB0b3A6IDEycmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLnllYXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5O1xyXG4gICAgICAgIHRvcDogMnJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG5cclxuICAgICAgICAmLm1ham9yLXRleHQsXHJcbiAgICAgICAgJi5lbXBoYXNpcy10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1ham9yLFxyXG4gICAgICAgICYuZW1waGFzaXMge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuXHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5tYWpvciBkaXY6YWZ0ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNi41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5lbXBoYXNpcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gICAgICAgICAgICBkaXY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkuNXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIEBtaXhpbiB4c21hbGwge1xyXG4vLyAgICAgLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXHJcbi8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuQG1peGluIHNtYWxsIHtcclxuICAgIC8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaXVtIHtcclxuICAgIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMTA5Ljk4cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGxhcmdlIHtcclxuICAgIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTExMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEBtaXhpbiB4bGFyZ2Uge1xyXG4vLyAgICAgLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXHJcbi8vICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbi8vICAgICAgICAgQGNvbnRlbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sections/education/education.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/sections/education/education.component.ts ***!
  \***********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/sections/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/sections/education/education.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/sections/experience/experience.component.html":
/*!***************************************************************!*\
  !*** ./src/app/sections/experience/experience.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"experience\"></a>\n<section>\n  <div class=\"timeline\">\n    <div *ngFor=\"let item of data; let i = index\" class=\"container-timeline\"\n      [ngClass]=\"{'left': i % 2 == 0, 'right': i % 2 != 0}\">\n      <div class=\"content\">\n        <h5>{{item.time}}</h5>\n        <h4>{{item.title}}</h4>\n        <h6>{{item.company}}</h6>\n        <p>{{item.description}}</p>\n        <ul *ngIf=\"item.bullets\">\n          <li *ngFor=\"let bullet of item.bullets\">{{bullet}}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/sections/experience/experience.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/sections/experience/experience.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: #222;\n  box-shadow: inset 0px 0px 10px #000;\n  /* container-timeline around content */\n  /* Place the container-timeline to the left */\n  /* Place the container-timeline to the right */\n  /* Add arrows to the left container-timeline (pointing right) */\n  /* Add arrows to the right container-timeline (pointing left) */\n  /* Fix the circle for container-timelines on the right side */\n  /* The actual content */\n  /* Media queries - Responsive timeline on screens less than 600px wide */ }\n  section .timeline {\n    position: relative;\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 10rem 0;\n    /* The actual timeline (the vertical ruler) */ }\n  @media (max-width: 767.98px) {\n      section .timeline {\n        padding: 5rem 0; } }\n  section .timeline:after {\n      content: \"\";\n      position: absolute;\n      width: 1px;\n      background-color: #fff;\n      top: 0;\n      bottom: 0;\n      left: 50%;\n      margin-left: 0px; }\n  section .container-timeline {\n    padding: 10px 40px;\n    position: relative;\n    background-color: inherit;\n    width: 50%;\n    /* The circles on the timeline */ }\n  section .container-timeline:after {\n      content: \"\";\n      position: absolute;\n      width: 10px;\n      height: 4rem;\n      right: -5px;\n      background-color: white;\n      top: 10px;\n      z-index: 1; }\n  section .left {\n    left: 0; }\n  @media (min-width: 768px) and (max-width: 1109.98px) {\n      section .left .content {\n        border-left: 10px solid dodgerblue; } }\n  @media (min-width: 1110px) {\n      section .left .content {\n        border-left: 10px solid dodgerblue; } }\n  @media (max-width: 767.98px) {\n      section .left .content {\n        border-right: 10px solid dodgerblue; } }\n  section .right {\n    left: 50%; }\n  section .right .content {\n      border-right: 10px solid dodgerblue; }\n  section .left::before {\n    content: \" \";\n    height: 0;\n    position: absolute;\n    top: 22px;\n    width: 0;\n    z-index: 1;\n    right: 30px;\n    border: medium solid #eee;\n    border-width: 10px 0 10px 10px;\n    border-color: transparent transparent transparent #eee; }\n  section .right::before {\n    content: \" \";\n    height: 0;\n    position: absolute;\n    top: 22px;\n    width: 0;\n    z-index: 1;\n    left: 30px;\n    border: medium solid #eee;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent #eee transparent transparent; }\n  section .right::after {\n    left: -5px; }\n  section .content {\n    padding: 2rem;\n    background-color: #eee;\n    position: relative; }\n  section .content h5 {\n      color: dodgerblue;\n      font-family: \"Playfair Display\";\n      font-size: 2rem;\n      margin: 0;\n      font-weight: bold; }\n  section .content h4 {\n      margin: 0;\n      margin-top: 1rem;\n      font-weight: bold;\n      letter-spacing: 2px; }\n  section .content h6 {\n      margin: 0;\n      color: #777;\n      margin-bottom: 1rem; }\n  section .content p {\n      margin-bottom: 0.5rem; }\n  @media (max-width: 767.98px) {\n    section {\n      /* Place the timelime to the left */\n      /* Full-width container-timelines */\n      /* Make sure that all arrows are pointing leftwards */\n      /* Make sure all circles are at the same spot */\n      /* Make all right container-timelines behave like the left ones */ }\n      section .timeline::after {\n        left: 31px; }\n      section .container-timeline {\n        width: 100%;\n        padding-left: 70px;\n        padding-right: 25px; }\n      section .container-timeline::before {\n        left: 60px;\n        border: medium solid white;\n        border-width: 10px 10px 10px 0;\n        border-color: transparent white transparent transparent; }\n      section .left::after,\n      section .right::after {\n        left: 26px; }\n      section .right {\n        left: 0%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvZXhwZXJpZW5jZS9DOlxcVXNlcnNcXG1pY2hhZWwuY29sbGl2ZXJcXFBpY3R1cmVzXFxQZXJzb25hbCBQcm9qZWN0c1xcMjAyMCAtIEV4cGVyaWVuY2VcXGV4cGVyaWVuY2Uvc3JjXFxhcHBcXHNlY3Rpb25zXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy9leHBlcmllbmNlL0M6XFxVc2Vyc1xcbWljaGFlbC5jb2xsaXZlclxcUGljdHVyZXNcXFBlcnNvbmFsIFByb2plY3RzXFwyMDIwIC0gRXhwZXJpZW5jZVxcZXhwZXJpZW5jZS9zcmNcXGFzc2V0c1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQWdCO0VBQ2hCLG9DQUFtQztFQXdCbkMsdUNBQXVDO0VBb0J2Qyw4Q0FBOEM7RUFrQjlDLCtDQUErQztFQVEvQyxnRUFBZ0U7RUFjaEUsZ0VBQWdFO0VBY2hFLDhEQUE4RDtFQUs5RCx3QkFBd0I7RUE2QnhCLHlFQUF5RSxFQWlDNUU7RUF2S0Q7SUFLUSxtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLGVBQWM7SUFDZCxpQkFBZ0I7SUFLaEIsOENBQThDLEVBV2pEO0VDakJEO01EUEo7UUFVWSxnQkFBZSxFQWN0QixFQUFBO0VBeEJMO01BZVksWUFBVztNQUNYLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsdUJBQXNCO01BQ3RCLE9BQU07TUFDTixVQUFTO01BQ1QsVUFBUztNQUNULGlCQUFnQixFQUNuQjtFQXZCVDtJQTRCUSxtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLDBCQUF5QjtJQUN6QixXQUFVO0lBRVYsaUNBQWlDLEVBV3BDO0VBNUNMO01BbUNZLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsWUFBVztNQUNYLGFBQVk7TUFDWixZQUFXO01BQ1gsd0JBQXVCO01BQ3ZCLFVBQVM7TUFDVCxXQUFVLEVBQ2I7RUEzQ1Q7SUFnRFEsUUFBTyxFQWNWO0VDaEREO01EZEo7UUFvRGdCLG1DQUFrQyxFQVN6QyxFQUFBO0VDeENMO01EckJKO1FBdURnQixtQ0FBa0MsRUFNekMsRUFBQTtFQ3RETDtNRFBKO1FBMkRnQixvQ0FBbUMsRUFFMUMsRUFBQTtFQTdEVDtJQWtFUSxVQUFTLEVBSVo7RUF0RUw7TUFvRVksb0NBQW1DLEVBQ3RDO0VBckVUO0lBMEVRLGFBQVk7SUFDWixVQUFTO0lBQ1QsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxTQUFRO0lBQ1IsV0FBVTtJQUNWLFlBQVc7SUFDWCwwQkFBeUI7SUFDekIsK0JBQThCO0lBQzlCLHVEQUFzRCxFQUN6RDtFQXBGTDtJQXdGUSxhQUFZO0lBQ1osVUFBUztJQUNULG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsU0FBUTtJQUNSLFdBQVU7SUFDVixXQUFVO0lBQ1YsMEJBQXlCO0lBQ3pCLCtCQUE4QjtJQUM5Qix1REFBc0QsRUFDekQ7RUFsR0w7SUFzR1EsV0FBVSxFQUNiO0VBdkdMO0lBMkdRLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsbUJBQWtCLEVBdUJyQjtFQXBJTDtNQWdIWSxrQkFBaUI7TUFDakIsZ0NBQStCO01BQy9CLGdCQUFlO01BQ2YsVUFBUztNQUNULGtCQUFpQixFQUNwQjtFQXJIVDtNQXVIWSxVQUFTO01BQ1QsaUJBQWdCO01BQ2hCLGtCQUFpQjtNQUNqQixvQkFBbUIsRUFDdEI7RUEzSFQ7TUE2SFksVUFBUztNQUNULFlBQVc7TUFDWCxvQkFBbUIsRUFDdEI7RUFoSVQ7TUFrSVksc0JBQXFCLEVBQ3hCO0VDNUhMO0lEUEo7TUF3SVEsb0NBQW9DO01BS3BDLG9DQUFvQztNQU9wQyxzREFBc0Q7TUFRdEQsZ0RBQWdEO01BTWhELGtFQUFrRSxFQUt6RTtNQXZLRDtRQTBJWSxXQUFVLEVBQ2I7TUEzSVQ7UUErSVksWUFBVztRQUNYLG1CQUFrQjtRQUNsQixvQkFBbUIsRUFDdEI7TUFsSlQ7UUFzSlksV0FBVTtRQUNWLDJCQUEwQjtRQUMxQiwrQkFBOEI7UUFDOUIsd0RBQXVELEVBQzFEO01BMUpUOztRQStKWSxXQUFVLEVBQ2I7TUFoS1Q7UUFvS1ksU0FBUSxFQUNYLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zXCI7XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggIzAwMDtcclxuXHJcbiAgICAudGltZWxpbmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHJlbSAwO1xyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGNvbnRhaW5lci10aW1lbGluZSBhcm91bmQgY29udGVudCAqL1xyXG4gICAgLmNvbnRhaW5lci10aW1lbGluZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgIC8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQbGFjZSB0aGUgY29udGFpbmVyLXRpbWVsaW5lIHRvIHRoZSBsZWZ0ICovXHJcbiAgICAubGVmdCB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpdW0ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBsYXJnZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQbGFjZSB0aGUgY29udGFpbmVyLXRpbWVsaW5lIHRvIHRoZSByaWdodCAqL1xyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGFycm93cyB0byB0aGUgbGVmdCBjb250YWluZXItdGltZWxpbmUgKHBvaW50aW5nIHJpZ2h0KSAqL1xyXG4gICAgLmxlZnQ6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZWVlO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTBweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlZWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRkIGFycm93cyB0byB0aGUgcmlnaHQgY29udGFpbmVyLXRpbWVsaW5lIChwb2ludGluZyBsZWZ0KSAqL1xyXG4gICAgLnJpZ2h0OjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZWVlO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlZWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRml4IHRoZSBjaXJjbGUgZm9yIGNvbnRhaW5lci10aW1lbGluZXMgb24gdGhlIHJpZ2h0IHNpZGUgKi9cclxuICAgIC5yaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IC01cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogVGhlIGFjdHVhbCBjb250ZW50ICovXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzIC0gUmVzcG9uc2l2ZSB0aW1lbGluZSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA2MDBweCB3aWRlICovXHJcbiAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbiAgICAgICAgLnRpbWVsaW5lOjphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDMxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBGdWxsLXdpZHRoIGNvbnRhaW5lci10aW1lbGluZXMgKi9cclxuICAgICAgICAuY29udGFpbmVyLXRpbWVsaW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIE1ha2Ugc3VyZSB0aGF0IGFsbCBhcnJvd3MgYXJlIHBvaW50aW5nIGxlZnR3YXJkcyAqL1xyXG4gICAgICAgIC5jb250YWluZXItdGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuICAgICAgICAubGVmdDo6YWZ0ZXIsXHJcbiAgICAgICAgLnJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBNYWtlIGFsbCByaWdodCBjb250YWluZXItdGltZWxpbmVzIGJlaGF2ZSBsaWtlIHRoZSBsZWZ0IG9uZXMgKi9cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQG1peGluIHhzbWFsbCB7XHJcbi8vICAgICAvLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcclxuLy8gICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4vLyAgICAgICAgIEBjb250ZW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5AbWl4aW4gc21hbGwge1xyXG4gICAgLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gICAgLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExMDkuOThweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2Uge1xyXG4gICAgLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTEwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQG1peGluIHhsYXJnZSB7XHJcbi8vICAgICAvLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcclxuLy8gICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sections/experience/experience.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/sections/experience/experience.component.ts ***!
  \*************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
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

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.data = [
            {
                time: '2017 - present',
                title: 'Software Engineer',
                company: 'Computer Services Inc.',
                description: 'Currently lead front end development for a large financial application',
                bullets: [
                    'Used by hundreds of banks',
                    'User base totaling in the millions',
                    'Trained 13+ developers on current front end technologies'
                ]
            },
            {
                time: '2012 - 2014',
                title: 'Full Stack Web Developer',
                company: 'Intersect Creative (Bluegrass Mailing)',
                // tslint:disable-next-line: max-line-length
                description: 'Led web development with emphases on responsive web design, site performance, search engine optimization, and equality of form & function'
            },
            {
                time: '2012',
                title: 'IT Intern',
                company: 'Bluegrass Mailing',
                description: 'Developed several programs to automate business practices while regularly assisting users'
            },
            {
                time: '2011',
                title: 'Developer / Systems Analyst',
                company: 'University of Louisville | College of Business',
                description: 'Implemented a working system to meet client specifications'
            },
            {
                time: '2011',
                title: 'Technical Writer',
                company: 'University of Louisville | College of Business',
                description: 'Provided written use cases to match system requirements'
            }
        ];
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/sections/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/sections/experience/experience.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/sections/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/sections/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"contact\"></a>\n<footer>\n    <h6>Thanks for your time!</h6>\n\n    <div>\n        <h3>Michael Colliver</h3>\n        <h3>contact@michaelcolliver.me</h3>\n        <h3>859.559.7233</h3>\n    </div>\n</footer>\nname\nphone number\nemail\nthanks"

/***/ }),

/***/ "./src/app/sections/footer/footer.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/sections/footer/footer.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background: #eee;\n  width: 100%;\n  position: relative;\n  padding: 5rem;\n  background: radial-gradient(circle farthest-side at 0% 50%, #eee 23.5%, rgba(240, 166, 17, 0) 0) 21px 30px, radial-gradient(circle farthest-side at 0% 50%, #dedede 24%, rgba(240, 166, 17, 0) 0) 19px 30px, linear-gradient(#eee 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #eee 0) 0 0, linear-gradient(150deg, #eee 24%, #dedede 0, #dedede 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #dedede 0, #dedede 76%, #eee 0) 0 0, linear-gradient(30deg, #eee 24%, #dedede 0, #dedede 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #dedede 0, #dedede 76%, #eee 0) 0 0, linear-gradient(90deg, #dedede 2%, #eee 0, #eee 98%, #dedede 0%) 0 0 #eee;\n  background-size: 40px 60px; }\n  @media (min-width: 1110px) {\n    footer {\n      padding: 10rem; } }\n  footer h6 {\n    text-align: center;\n    font-family: \"Petit Formal Script\";\n    font-size: 4rem;\n    line-height: 4.2rem;\n    margin: 0;\n    margin-bottom: 5rem; }\n  @media (min-width: 768px) and (max-width: 1109.98px) {\n      footer h6 {\n        font-size: 6rem;\n        line-height: 6.2rem;\n        margin-bottom: 5rem; } }\n  @media (min-width: 1110px) {\n      footer h6 {\n        font-size: 6rem;\n        line-height: 6.2rem;\n        margin-bottom: 10rem; } }\n  footer div {\n    -moz-column-count: 1;\n         column-count: 1; }\n  @media (min-width: 1110px) {\n      footer div {\n        -moz-column-count: 3;\n             column-count: 3; } }\n  footer div h3 {\n      text-align: center;\n      margin: 0;\n      font-size: 1.6rem;\n      letter-spacing: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvZm9vdGVyL0M6XFxVc2Vyc1xcbWljaGFlbC5jb2xsaXZlclxcUGljdHVyZXNcXFBlcnNvbmFsIFByb2plY3RzXFwyMDIwIC0gRXhwZXJpZW5jZVxcZXhwZXJpZW5jZS9zcmNcXGFwcFxcc2VjdGlvbnNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy9mb290ZXIvQzpcXFVzZXJzXFxtaWNoYWVsLmNvbGxpdmVyXFxQaWN0dXJlc1xcUGVyc29uYWwgUHJvamVjdHNcXDIwMjAgLSBFeHBlcmllbmNlXFxleHBlcmllbmNlL3NyY1xcYXNzZXRzXFxzYXNzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLG1CQUFrQjtFQUVsQixjQUFhO0VBUWIsdXBCQUhXO0VBK0JYLDJCQUEwQixFQW1DN0I7RUN2REc7SURyQko7TUFPUSxlQUFjLEVBcUVyQixFQUFBO0VBNUVEO0lBNENRLG1CQUFrQjtJQUNsQixtQ0FBa0M7SUFDbEMsZ0JBQWU7SUFDZixvQkFBbUI7SUFDbkIsVUFBUztJQUNULG9CQUFtQixFQVl0QjtFQy9DRDtNRGRKO1FBb0RZLGdCQUFlO1FBQ2Ysb0JBQW1CO1FBQ25CLG9CQUFtQixFQU8xQixFQUFBO0VDeENEO01EckJKO1FBeURZLGdCQUFlO1FBQ2Ysb0JBQW1CO1FBQ25CLHFCQUFvQixFQUUzQixFQUFBO0VBN0RMO0lBK0RRLHFCQUFlO1NBQWYsZ0JBQWUsRUFZbEI7RUN0REQ7TURyQko7UUFrRVkscUJBQWU7YUFBZixnQkFBZSxFQVN0QixFQUFBO0VBM0VMO01Bc0VZLG1CQUFrQjtNQUNsQixVQUFTO01BQ1Qsa0JBQWlCO01BQ2pCLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbWl4aW5zXCI7XHJcblxyXG5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHBhZGRpbmc6IDVyZW07XHJcbiAgICBAaW5jbHVkZSBsYXJnZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTByZW07XHJcbiAgICB9XHJcblxyXG4gICAgJGJhY2s6ICNlZWU7XHJcbiAgICAkbGluZXM6ICNkZWRlZGU7XHJcblxyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1zaWRlIGF0IDAlIDUwJSwgJGJhY2sgMjMuNSUsIHJnYmEoMjQwLCAxNjYsIDE3LCAwKSAwKSAyMXB4IDMwcHgsXHJcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1zaWRlIGF0IDAlIDUwJSwgJGxpbmVzIDI0JSwgcmdiYSgyNDAsIDE2NiwgMTcsIDApIDApIDE5cHggMzBweCxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoJGJhY2sgMTQlLCByZ2JhKDI0MCwgMTY2LCAxNywgMCkgMCwgcmdiYSgyNDAsIDE2NiwgMTcsIDApIDg1JSwgJGJhY2sgMCkgMCAwLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIDE1MGRlZyxcclxuICAgICAgICAgICAgICAgICRiYWNrIDI0JSxcclxuICAgICAgICAgICAgICAgICRsaW5lcyAwLFxyXG4gICAgICAgICAgICAgICAgJGxpbmVzIDI2JSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjQwLCAxNjYsIDE3LCAwKSAwLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyNDAsIDE2NiwgMTcsIDApIDc0JSxcclxuICAgICAgICAgICAgICAgICRsaW5lcyAwLFxyXG4gICAgICAgICAgICAgICAgJGxpbmVzIDc2JSxcclxuICAgICAgICAgICAgICAgICRiYWNrIDBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAwIDAsXHJcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMzBkZWcsXHJcbiAgICAgICAgICAgICAgICAkYmFjayAyNCUsXHJcbiAgICAgICAgICAgICAgICAkbGluZXMgMCxcclxuICAgICAgICAgICAgICAgICRsaW5lcyAyNiUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDI0MCwgMTY2LCAxNywgMCkgMCxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjQwLCAxNjYsIDE3LCAwKSA3NCUsXHJcbiAgICAgICAgICAgICAgICAkbGluZXMgMCxcclxuICAgICAgICAgICAgICAgICRsaW5lcyA3NiUsXHJcbiAgICAgICAgICAgICAgICAkYmFjayAwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgMCAwLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGxpbmVzIDIlLCAkYmFjayAwLCAkYmFjayA5OCUsICRsaW5lcyAwJSkgMCAwICRiYWNrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDYwcHg7XHJcblxyXG4gICAgaDYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQZXRpdCBGb3JtYWwgU2NyaXB0XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0LjJyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGl1bSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgbGFyZ2Uge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2LjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiAxO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBsYXJnZSB7XHJcbiAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBAbWl4aW4geHNtYWxsIHtcclxuLy8gICAgIC8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG4vLyAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbi8vICAgICAgICAgQGNvbnRlbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbkBtaXhpbiBzbWFsbCB7XHJcbiAgICAvLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1lZGl1bSB7XHJcbiAgICAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTEwOS45OHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsYXJnZSB7XHJcbiAgICAvLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExMTBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBAbWl4aW4geGxhcmdlIHtcclxuLy8gICAgIC8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxyXG4vLyAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4vLyAgICAgICAgIEBjb250ZW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sections/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/sections/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/sections/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/sections/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/sections/hobbies/hobbies.component.html":
/*!*********************************************************!*\
  !*** ./src/app/sections/hobbies/hobbies.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h3>Hobbies</h3>\n\n\n</section>"

/***/ }),

/***/ "./src/app/sections/hobbies/hobbies.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/sections/hobbies/hobbies.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2hvYmJpZXMvaG9iYmllcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/hobbies/hobbies.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/sections/hobbies/hobbies.component.ts ***!
  \*******************************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
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

var HobbiesComponent = /** @class */ (function () {
    function HobbiesComponent() {
    }
    HobbiesComponent.prototype.ngOnInit = function () {
    };
    HobbiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hobbies',
            template: __webpack_require__(/*! ./hobbies.component.html */ "./src/app/sections/hobbies/hobbies.component.html"),
            styles: [__webpack_require__(/*! ./hobbies.component.scss */ "./src/app/sections/hobbies/hobbies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HobbiesComponent);
    return HobbiesComponent;
}());



/***/ }),

/***/ "./src/app/sections/hobbies/hobby/hobby.component.html":
/*!*************************************************************!*\
  !*** ./src/app/sections/hobbies/hobby/hobby.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hobby works!\n</p>\n"

/***/ }),

/***/ "./src/app/sections/hobbies/hobby/hobby.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/sections/hobbies/hobby/hobby.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2hvYmJpZXMvaG9iYnkvaG9iYnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/hobbies/hobby/hobby.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/sections/hobbies/hobby/hobby.component.ts ***!
  \***********************************************************/
/*! exports provided: HobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbyComponent", function() { return HobbyComponent; });
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

var HobbyComponent = /** @class */ (function () {
    function HobbyComponent() {
    }
    HobbyComponent.prototype.ngOnInit = function () {
    };
    HobbyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hobby',
            template: __webpack_require__(/*! ./hobby.component.html */ "./src/app/sections/hobbies/hobby/hobby.component.html"),
            styles: [__webpack_require__(/*! ./hobby.component.scss */ "./src/app/sections/hobbies/hobby/hobby.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HobbyComponent);
    return HobbyComponent;
}());



/***/ }),

/***/ "./src/app/sections/navbar/navbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/sections/navbar/navbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\"><img src=\"assets/images/logos/logo.svg\"></a>\n<h5>Michael Colliver</h5>\n\n<nav>\n  <a href=\"#about\">About</a>\n  <a href=\"#skills\">Skills</a>\n  <a href=\"#strengths\">Strengths</a>\n  <a href=\"#experience\">Experience</a>\n  <a href=\"#education\">Education</a>\n  <a href=\"#passions\">Passions</a>\n  <a href=\"#contact\">Contact</a>\n</nav>"

/***/ }),

/***/ "./src/app/sections/navbar/navbar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/sections/navbar/navbar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 8rem;\n  background: rgba(0, 0, 0, 0.9);\n  width: 100%;\n  padding: 1rem;\n  z-index: 999; }\n  :host img {\n    width: 9rem;\n    position: absolute;\n    top: 1rem;\n    left: 5rem; }\n  @media (max-width: 767.98px) {\n      :host img {\n        left: 50%;\n        margin-left: -4.5rem; } }\n  @media (min-width: 768px) and (max-width: 1109.98px) {\n      :host img {\n        left: 3rem; } }\n  :host nav {\n    position: absolute;\n    top: 3rem;\n    right: 5rem; }\n  @media (max-width: 767.98px) {\n      :host nav {\n        display: none; } }\n  @media (min-width: 768px) and (max-width: 1109.98px) {\n      :host nav {\n        right: 3rem;\n        top: 3.3rem; } }\n  :host nav a {\n      font-family: \"Lato\";\n      font-weight: 200;\n      font-size: 1.5rem;\n      text-transform: uppercase;\n      color: #fff;\n      margin-left: 2rem;\n      letter-spacing: 1px;\n      padding: 0.5rem;\n      border: 1px solid transparent; }\n  @media (min-width: 768px) and (max-width: 1109.98px) {\n        :host nav a {\n          font-size: 1.2rem;\n          margin-left: 0.5rem; } }\n  :host nav a:hover, :host nav a:active {\n        border-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvbmF2YmFyL0M6XFxVc2Vyc1xcbWljaGFlbC5jb2xsaXZlclxcUGljdHVyZXNcXFBlcnNvbmFsIFByb2plY3RzXFwyMDIwIC0gRXhwZXJpZW5jZVxcZXhwZXJpZW5jZS9zcmNcXGFwcFxcc2VjdGlvbnNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy9uYXZiYXIvQzpcXFVzZXJzXFxtaWNoYWVsLmNvbGxpdmVyXFxQaWN0dXJlc1xcUGVyc29uYWwgUHJvamVjdHNcXDIwMjAgLSBFeHBlcmllbmNlXFxleHBlcmllbmNlL3NyY1xcYXNzZXRzXFxzYXNzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsYUFBWTtFQUNaLCtCQUE4QjtFQUM5QixZQUFXO0VBQ1gsY0FBYTtFQUNiLGFBQVksRUFvRGY7RUE1REQ7SUFXUSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxXQUFVLEVBU2I7RUNoQkQ7TURQSjtRQWlCWSxVQUFTO1FBQ1QscUJBQW9CLEVBSzNCLEVBQUE7RUNURDtNRGRKO1FBcUJZLFdBQVUsRUFFakIsRUFBQTtFQXZCTDtJQTBCUSxtQkFBa0I7SUFDbEIsVUFBUztJQUNULFlBQVcsRUErQmQ7RUNwREQ7TURQSjtRQStCWSxjQUFhLEVBNEJwQixFQUFBO0VDN0NEO01EZEo7UUFrQ1ksWUFBVztRQUNYLFlBQVcsRUF3QmxCLEVBQUE7RUEzREw7TUF1Q1ksb0JBQW1CO01BQ25CLGlCQUFnQjtNQUNoQixrQkFBaUI7TUFDakIsMEJBQXlCO01BQ3pCLFlBQVc7TUFDWCxrQkFBaUI7TUFDakIsb0JBQW1CO01BQ25CLGdCQUFlO01BQ2YsOEJBQTZCLEVBV2hDO0VDNUNMO1FEZEo7VUFrRGdCLGtCQUFpQjtVQUNqQixvQkFBbUIsRUFPMUIsRUFBQTtFQTFEVDtRQXdEZ0IsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogOXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICAgIGxlZnQ6IDVyZW07XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsIHtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaXVtIHtcclxuICAgICAgICAgICAgbGVmdDogM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmF2IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzcmVtO1xyXG4gICAgICAgIHJpZ2h0OiA1cmVtO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGl1bSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICB0b3A6IDMuM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpdW0ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQG1peGluIHhzbWFsbCB7XHJcbi8vICAgICAvLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcclxuLy8gICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4vLyAgICAgICAgIEBjb250ZW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5AbWl4aW4gc21hbGwge1xyXG4gICAgLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gICAgLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExMDkuOThweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2Uge1xyXG4gICAgLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTEwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQG1peGluIHhsYXJnZSB7XHJcbi8vICAgICAvLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcclxuLy8gICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sections/navbar/navbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/sections/navbar/navbar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/sections/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/sections/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sections/passions/passions.component.html":
/*!***********************************************************!*\
  !*** ./src/app/sections/passions/passions.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"passions\"></a>\n<section>\n    <h3>Passions</h3>\n\n    <div>Faith</div>\n    <div>Family</div>\n    <div>Golf</div>\n    <div>Basketball</div>\n    <div>Games</div>\n    <div>Cooking</div>\n</section>"

/***/ }),

/***/ "./src/app/sections/passions/passions.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/sections/passions/passions.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: #111; }\n  section h3 {\n    text-transform: uppercase;\n    text-align: center;\n    color: #fff;\n    letter-spacing: 20px;\n    margin: 0;\n    padding: 10rem 0; }\n  section div {\n    height: 20rem;\n    font-size: 4rem;\n    color: #fff;\n    display: inline-block;\n    text-align: center;\n    line-height: 20rem;\n    font-family: \"Playfair Display\";\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-shadow: 1px 1px 0px #000;\n    position: relative; }\n  @media (max-width: 767.98px) {\n      section div {\n        width: 100%; } }\n  @media (min-width: 768px) and (max-width: 1109.98px) {\n      section div {\n        width: 50%; } }\n  @media (min-width: 1110px) {\n      section div {\n        width: 33.33%; } }\n  section div:before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n  section div:nth-of-type(1) {\n      background-image: url('faith.jpg'); }\n  section div:nth-of-type(2) {\n      background-image: url('family1.jpg'); }\n  section div:nth-of-type(3) {\n      background-image: url('golf.jpg'); }\n  section div:nth-of-type(4) {\n      background-image: url('basketball.jpg'); }\n  section div:nth-of-type(5) {\n      background-image: url('board-games.jpg'); }\n  section div:nth-of-type(6) {\n      background-image: url('cooking.jpg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvcGFzc2lvbnMvQzpcXFVzZXJzXFxtaWNoYWVsLmNvbGxpdmVyXFxQaWN0dXJlc1xcUGVyc29uYWwgUHJvamVjdHNcXDIwMjAgLSBFeHBlcmllbmNlXFxleHBlcmllbmNlL3NyY1xcYXBwXFxzZWN0aW9uc1xccGFzc2lvbnNcXHBhc3Npb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy9wYXNzaW9ucy9DOlxcVXNlcnNcXG1pY2hhZWwuY29sbGl2ZXJcXFBpY3R1cmVzXFxQZXJzb25hbCBQcm9qZWN0c1xcMjAyMCAtIEV4cGVyaWVuY2VcXGV4cGVyaWVuY2Uvc3JjXFxhc3NldHNcXHNhc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFnQixFQThEbkI7RUEvREQ7SUFJUSwwQkFBeUI7SUFDekIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxxQkFBb0I7SUFDcEIsVUFBUztJQUNULGlCQUFnQixFQUNuQjtFQVZMO0lBWVEsY0FBYTtJQUNiLGdCQUFlO0lBQ2YsWUFBVztJQUNYLHNCQUFxQjtJQUNyQixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGdDQUErQjtJQUMvQiw0QkFBMkI7SUFDM0IsNkJBQTRCO0lBQzVCLHVCQUFzQjtJQUN0Qiw4QkFBNkI7SUFDN0IsbUJBQWtCLEVBdUNyQjtFQ3ZERDtNRFBKO1FBMEJZLFlBQVcsRUFvQ2xCLEVBQUE7RUNoREQ7TURkSjtRQTZCWSxXQUFVLEVBaUNqQixFQUFBO0VDekNEO01EckJKO1FBZ0NZLGNBQWEsRUE4QnBCLEVBQUE7RUE5REw7TUFvQ1ksWUFBVztNQUNYLG1CQUFrQjtNQUNsQixPQUFNO01BQ04sUUFBTztNQUNQLFNBQVE7TUFDUixVQUFTLEVBQ1o7RUExQ1Q7TUE2Q1ksbUNBQThFLEVBQ2pGO0VBOUNUO01BZ0RZLHFDQUFnRixFQUNuRjtFQWpEVDtNQW1EWSxrQ0FBNkUsRUFDaEY7RUFwRFQ7TUFzRFksd0NBQW1GLEVBQ3RGO0VBdkRUO01BeURZLHlDQUFvRixFQUN2RjtFQTFEVDtNQTREWSxxQ0FBZ0YsRUFDbkYiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9wYXNzaW9ucy9wYXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9taXhpbnNcIjtcclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogIzExMTtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcmVtIDA7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGhlaWdodDogMjByZW07XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCAjMDAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgc21hbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaXVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgbGFyZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXNzaW9ucy9jb21wcmVzc2VkLWJ3L2ZhaXRoLmpwZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXNzaW9ucy9jb21wcmVzc2VkLWJ3L2ZhbWlseTEuanBnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Bhc3Npb25zL2NvbXByZXNzZWQtYncvZ29sZi5qcGcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFzc2lvbnMvY29tcHJlc3NlZC1idy9iYXNrZXRiYWxsLmpwZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXNzaW9ucy9jb21wcmVzc2VkLWJ3L2JvYXJkLWdhbWVzLmpwZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoNikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXNzaW9ucy9jb21wcmVzc2VkLWJ3L2Nvb2tpbmcuanBnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQG1peGluIHhzbWFsbCB7XHJcbi8vICAgICAvLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcclxuLy8gICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4vLyAgICAgICAgIEBjb250ZW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5AbWl4aW4gc21hbGwge1xyXG4gICAgLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gICAgLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExMDkuOThweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2Uge1xyXG4gICAgLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTEwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQG1peGluIHhsYXJnZSB7XHJcbi8vICAgICAvLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcclxuLy8gICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sections/passions/passions.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/sections/passions/passions.component.ts ***!
  \*********************************************************/
/*! exports provided: PassionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassionsComponent", function() { return PassionsComponent; });
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

var PassionsComponent = /** @class */ (function () {
    function PassionsComponent() {
        this.data = [
            {
                name: 'Faith',
                file: 'faith'
            },
            {
                name: 'Family',
                file: 'family'
            },
            {
                name: 'Golf',
                file: 'golf'
            },
            {
                name: 'Basketball',
                file: 'basketball'
            },
            {
                name: 'Board Games',
                file: 'games'
            },
            {
                name: 'Cooking',
                file: 'cooking'
            }
        ];
    }
    PassionsComponent.prototype.ngOnInit = function () {
    };
    PassionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passions',
            template: __webpack_require__(/*! ./passions.component.html */ "./src/app/sections/passions/passions.component.html"),
            styles: [__webpack_require__(/*! ./passions.component.scss */ "./src/app/sections/passions/passions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PassionsComponent);
    return PassionsComponent;
}());



/***/ }),

/***/ "./src/app/sections/skills/skills.component.html":
/*!*******************************************************!*\
  !*** ./src/app/sections/skills/skills.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"skills\"></a>\n<section>\n  <h2>Skills</h2>\n\n  <span *ngFor=\"let item of data\">{{item}}</span>\n</section>"

/***/ }),

/***/ "./src/app/sections/skills/skills.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/sections/skills/skills.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: linear-gradient(115deg, dodgerblue, #0040af);\n  padding: 10rem;\n  color: white;\n  text-align: center; }\n  @media (max-width: 767.98px) {\n    section {\n      text-align: left; } }\n  @media (max-width: 767.98px) {\n    section {\n      padding: 5rem 2rem; } }\n  section h2 {\n    margin: 0;\n    text-align: center;\n    font-family: \"petit formal script\";\n    font-size: 4rem;\n    margin-bottom: 5rem; }\n  section span {\n    font-size: 2.2rem;\n    font-family: lato;\n    letter-spacing: 3px;\n    background: #0e80ef;\n    padding: 0.5rem;\n    display: inline-block;\n    margin: 1rem 2rem;\n    position: relative; }\n  @media (max-width: 767.98px) {\n      section span {\n        font-size: 1.8rem; } }\n  section span:before {\n      content: \"\";\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 0 36px 14px;\n      border-color: transparent transparent #0e80ef transparent;\n      left: -14px;\n      top: 0; }\n  @media (max-width: 767.98px) {\n        section span:before {\n          border-width: 0 0 32px 14px; } }\n  section span:after {\n      content: \"\";\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 36px 14px 0 0;\n      border-color: #0e80ef transparent transparent transparent;\n      top: 0;\n      right: -14px; }\n  @media (max-width: 767.98px) {\n        section span:after {\n          border-width: 32px 14px 0 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2tpbGxzL0M6XFxVc2Vyc1xcbWljaGFlbC5jb2xsaXZlclxcUGljdHVyZXNcXFBlcnNvbmFsIFByb2plY3RzXFwyMDIwIC0gRXhwZXJpZW5jZVxcZXhwZXJpZW5jZS9zcmNcXGFwcFxcc2VjdGlvbnNcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy9za2lsbHMvQzpcXFVzZXJzXFxtaWNoYWVsLmNvbGxpdmVyXFxQaWN0dXJlc1xcUGVyc29uYWwgUHJvamVjdHNcXDIwMjAgLSBFeHBlcmllbmNlXFxleHBlcmllbmNlL3NyY1xcYXNzZXRzXFxzYXNzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5REFBd0Q7RUFDeEQsZUFBYztFQUNkLGFBQVk7RUFDWixtQkFBa0IsRUErRHJCO0VDNURHO0lEUEo7TUFNUSxpQkFBZ0IsRUE2RHZCLEVBQUE7RUM1REc7SURQSjtNQVVRLG1CQUFrQixFQXlEekIsRUFBQTtFQW5FRDtJQWNRLFVBQVM7SUFDVCxtQkFBa0I7SUFDbEIsbUNBQWtDO0lBQ2xDLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBQ3RCO0VBbkJMO0lBdUJRLGtCQUFpQjtJQUNqQixrQkFBaUI7SUFDakIsb0JBQW1CO0lBQ25CLG9CQUxVO0lBTVYsZ0JBQWU7SUFDZixzQkFBcUI7SUFDckIsa0JBQWlCO0lBQ2pCLG1CQUFrQixFQW9DckI7RUMzREQ7TURQSjtRQWlDWSxrQkFBaUIsRUFpQ3hCLEVBQUE7RUFsRUw7TUFxQ1ksWUFBVztNQUNYLG1CQUFrQjtNQUNsQixTQUFRO01BQ1IsVUFBUztNQUNULG9CQUFtQjtNQUNuQiw0QkFBMkI7TUFDM0IsMERBQXVEO01BQ3ZELFlBQVc7TUFDWCxPQUFNLEVBS1Q7RUMzQ0w7UURQSjtVQWdEZ0IsNEJBQTJCLEVBRWxDLEVBQUE7RUFsRFQ7TUFvRFksWUFBVztNQUNYLG1CQUFrQjtNQUNsQixTQUFRO01BQ1IsVUFBUztNQUNULG9CQUFtQjtNQUNuQiw0QkFBMkI7TUFDM0IsMERBQXVEO01BQ3ZELE9BQU07TUFDTixhQUFZLEVBS2Y7RUMxREw7UURQSjtVQStEZ0IsNEJBQTJCLEVBRWxDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCBkb2RnZXJibHVlLCAjMDA0MGFmKTtcclxuICAgIHBhZGRpbmc6IDEwcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgQGluY2x1ZGUgc21hbGwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgc21hbGwge1xyXG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJwZXRpdCBmb3JtYWwgc2NyaXB0XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJHNwYW46ICMwZTgwZWY7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogbGF0bztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRzcGFuO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDJyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAwIDM2cHggMTRweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkc3BhbiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgbGVmdDogLTE0cHg7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAwIDMycHggMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDM2cHggMTRweCAwIDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNwYW4gdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IC0xNHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzMnB4IDE0cHggMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIEBtaXhpbiB4c21hbGwge1xyXG4vLyAgICAgLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXHJcbi8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuQG1peGluIHNtYWxsIHtcclxuICAgIC8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaXVtIHtcclxuICAgIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMTA5Ljk4cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGxhcmdlIHtcclxuICAgIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTExMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEBtaXhpbiB4bGFyZ2Uge1xyXG4vLyAgICAgLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXHJcbi8vICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbi8vICAgICAgICAgQGNvbnRlbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sections/skills/skills.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/sections/skills/skills.component.ts ***!
  \*****************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.data = [
            'HTML5', 'CSS3', 'JavaScript',
            'Angular', 'AngularJS', 'SCSS',
            'C#', 'SQL', 'MySQL', 'PHP', 'JQuery',
            'Photoshop', 'Illustrator', 'Adobe XD',
            'Excel', 'PowerPoint', 'Word', 'AutoCAD',
            'VS Code', 'Visual Studio'
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/sections/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/sections/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/sections/strengths/strengths.component.html":
/*!*************************************************************!*\
  !*** ./src/app/sections/strengths/strengths.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"strengths\"></a>\n<section>\n  <h2>Strengths</h2>\n\n  <h3>Professional</h3>\n  <div *ngFor=\"let item of professional\" class=\"strength\">\n    <h6>{{item.name}}</h6>\n    <img src=\"{{item.file}}\">\n  </div>\n\n  <h2 class=\"second\">Strengths</h2>\n\n  <h3>Discipline</h3>\n  <div *ngFor=\"let item of coding\" class=\"strength\">\n    <h6>{{item.name}}</h6>\n    <img src=\"{{item.file}}\">\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/sections/strengths/strengths.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/sections/strengths/strengths.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: #eee;\n  padding: 10rem;\n  padding-bottom: 5rem; }\n  @media (max-width: 767.98px) {\n    section {\n      padding: 5rem 2rem;\n      padding-top: 7rem; } }\n  section h2 {\n    font-family: \"Playfair Display\";\n    font-weight: lighter;\n    text-transform: uppercase;\n    margin: 0;\n    color: #aaa;\n    letter-spacing: -6px;\n    font-size: 10rem;\n    line-height: 6rem;\n    text-align: center; }\n  section h2.second {\n      margin-top: 4rem; }\n  @media (max-width: 767.98px) {\n        section h2.second {\n          margin-top: 2rem; } }\n  @media (max-width: 767.98px) {\n      section h2 {\n        font-size: 6rem;\n        line-height: 2.5rem;\n        letter-spacing: -3px; } }\n  section h3 {\n    font-family: \"Lato\";\n    font-weight: bolder;\n    text-transform: uppercase;\n    font-size: 4rem;\n    text-align: center;\n    margin: 0;\n    margin-bottom: 5rem;\n    letter-spacing: 2px;\n    z-index: 9;\n    position: relative; }\n  @media (max-width: 767.98px) {\n      section h3 {\n        font-size: 3rem; } }\n  section .strength {\n    height: 15rem;\n    display: inline-block;\n    text-align: center;\n    position: relative;\n    margin-bottom: 10rem;\n    vertical-align: top;\n    width: 33.33%; }\n  @media (max-width: 767.98px) {\n      section .strength {\n        width: 50%; } }\n  section .strength h6 {\n      margin: 0;\n      z-index: 9;\n      position: relative;\n      margin-bottom: 2rem; }\n  section .strength img {\n      width: 10rem;\n      z-index: 9;\n      margin-top: 2rem;\n      position: absolute;\n      left: 50%;\n      margin-left: -5rem;\n      bottom: -1rem; }\n  section .strength:before {\n      content: \"\";\n      background: #dedede;\n      width: 10rem;\n      height: 10rem;\n      border-radius: 50%;\n      position: absolute;\n      top: 4rem;\n      left: 50%;\n      margin-left: -5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc3RyZW5ndGhzL0M6XFxVc2Vyc1xcbWljaGFlbC5jb2xsaXZlclxcUGljdHVyZXNcXFBlcnNvbmFsIFByb2plY3RzXFwyMDIwIC0gRXhwZXJpZW5jZVxcZXhwZXJpZW5jZS9zcmNcXGFwcFxcc2VjdGlvbnNcXHN0cmVuZ3Roc1xcc3RyZW5ndGhzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy9zdHJlbmd0aHMvQzpcXFVzZXJzXFxtaWNoYWVsLmNvbGxpdmVyXFxQaWN0dXJlc1xcUGVyc29uYWwgUHJvamVjdHNcXDIwMjAgLSBFeHBlcmllbmNlXFxleHBlcmllbmNlL3NyY1xcYXNzZXRzXFxzYXNzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLHFCQUFvQixFQTRGdkI7RUN4Rkc7SURQSjtNQU1RLG1CQUFrQjtNQUNsQixrQkFBaUIsRUF3RnhCLEVBQUE7RUEvRkQ7SUFXUSxnQ0FBK0I7SUFDL0IscUJBQW9CO0lBQ3BCLDBCQUF5QjtJQUN6QixVQUFTO0lBRVQsWUFBVztJQUNYLHFCQUFvQjtJQUNwQixpQkFBZ0I7SUFFaEIsa0JBQWlCO0lBRWpCLG1CQUFrQixFQWVyQjtFQXJDTDtNQXlCWSxpQkFBZ0IsRUFLbkI7RUN2Qkw7UURQSjtVQTRCZ0IsaUJBQWdCLEVBRXZCLEVBQUE7RUN2Qkw7TURQSjtRQWlDWSxnQkFBZTtRQUNmLG9CQUFtQjtRQUNuQixxQkFBb0IsRUFFM0IsRUFBQTtFQXJDTDtJQXVDUSxvQkFBbUI7SUFDbkIsb0JBQW1CO0lBQ25CLDBCQUF5QjtJQUN6QixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1Qsb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQixXQUFVO0lBQ1YsbUJBQWtCLEVBS3JCO0VDOUNEO01EUEo7UUFtRFksZ0JBQWUsRUFFdEIsRUFBQTtFQXJETDtJQXVEUSxjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIscUJBQW9CO0lBQ3BCLG9CQUFtQjtJQUVuQixjQUFhLEVBZ0NoQjtFQ3ZGRDtNRFBKO1FBZ0VZLFdBQVUsRUE4QmpCLEVBQUE7RUE5Rkw7TUFvRVksVUFBUztNQUNULFdBQVU7TUFDVixtQkFBa0I7TUFDbEIsb0JBQW1CLEVBQ3RCO0VBeEVUO01BMEVZLGFBQVk7TUFDWixXQUFVO01BQ1YsaUJBQWdCO01BQ2hCLG1CQUFrQjtNQUNsQixVQUFTO01BQ1QsbUJBQWtCO01BQ2xCLGNBQWEsRUFDaEI7RUFqRlQ7TUFvRlksWUFBVztNQUNYLG9CQUFtQjtNQUNuQixhQUFZO01BQ1osY0FBYTtNQUNiLG1CQUFrQjtNQUNsQixtQkFBa0I7TUFDbEIsVUFBUztNQUNULFVBQVM7TUFDVCxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9zdHJlbmd0aHMvc3RyZW5ndGhzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgcGFkZGluZzogMTByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuXHJcbiAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgcGFkZGluZzogNXJlbSAycmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA3cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICAgICAgLy8gdG9wOiA1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgIC8vIGxlZnQ6IDVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAmLnNlY29uZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3RyZW5ndGgge1xyXG4gICAgICAgIGhlaWdodDogMTVyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICBAaW5jbHVkZSBzbWFsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVyZW07XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNHJlbTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIEBtaXhpbiB4c21hbGwge1xyXG4vLyAgICAgLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXHJcbi8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuQG1peGluIHNtYWxsIHtcclxuICAgIC8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaXVtIHtcclxuICAgIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMTA5Ljk4cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGxhcmdlIHtcclxuICAgIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTExMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEBtaXhpbiB4bGFyZ2Uge1xyXG4vLyAgICAgLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXHJcbi8vICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbi8vICAgICAgICAgQGNvbnRlbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sections/strengths/strengths.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/sections/strengths/strengths.component.ts ***!
  \***********************************************************/
/*! exports provided: StrengthsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthsComponent", function() { return StrengthsComponent; });
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

var StrengthsComponent = /** @class */ (function () {
    function StrengthsComponent() {
        this.coding = [
            {
                name: 'User Interface',
                file: '../../../assets/images/discipline-icons/website.svg'
            },
            {
                name: 'Responsive Web Development',
                file: '../../../assets/images/discipline-icons/responsive.svg'
            },
            {
                name: 'Creative Design',
                file: '../../../assets/images/discipline-icons/box.svg'
            },
            {
                name: 'User Experience',
                file: '../../../assets/images/discipline-icons/experience.svg'
            },
            {
                name: 'Single Codebase Architecture',
                file: '../../../assets/images/discipline-icons/blueprint.svg'
            },
            {
                name: 'Branding',
                file: '../../../assets/images/discipline-icons/flag.svg'
            }
        ];
        this.professional = [
            {
                name: 'Detail-Oriented',
                file: '../../../assets/images/professional-icons/star.svg'
            },
            {
                name: 'Reliable',
                file: '../../../assets/images/professional-icons/security.svg'
            },
            {
                name: 'Forward-Thinking',
                file: '../../../assets/images/professional-icons/rocket.svg'
            },
            {
                name: 'Organized',
                file: '../../../assets/images/professional-icons/list.svg'
            },
            {
                name: 'Fast Learner',
                file: '../../../assets/images/professional-icons/fast.svg'
            },
            {
                name: 'Hardworking',
                file: '../../../assets/images/professional-icons/computer.svg'
            }
        ];
    }
    StrengthsComponent.prototype.ngOnInit = function () {
    };
    StrengthsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-strengths',
            template: __webpack_require__(/*! ./strengths.component.html */ "./src/app/sections/strengths/strengths.component.html"),
            styles: [__webpack_require__(/*! ./strengths.component.scss */ "./src/app/sections/strengths/strengths.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StrengthsComponent);
    return StrengthsComponent;
}());



/***/ }),

/***/ "./src/app/sections/title/title.component.html":
/*!*****************************************************!*\
  !*** ./src/app/sections/title/title.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-title demo\">\n  <div class=\"content\">\n    <div id=\"large-header\" class=\"large-header\">\n      <canvas id=\"demo-canvas\"></canvas>\n      <h1 class=\"main-title\">\n        The <strong>pursuit</strong> of a more<br><strong>effecient</strong> and <strong>beautiful</strong> web\n      </h1>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sections/title/title.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/sections/title/title.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-title {\n  cursor: default; }\n\n.large-header {\n  position: relative;\n  width: 100%;\n  background: #222;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center center;\n  z-index: 1; }\n\n.demo .large-header {\n  background-image: url('keyboard.jpg'); }\n\n.main-title {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  color: #f9f1e9;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  margin-top: 4rem;\n  transform: translate3d(-50%, -50%, 0);\n  font-family: \"Lato\";\n  width: 50%;\n  font-weight: 200;\n  padding: 6rem 3rem;\n  border: 3px solid dodgerblue;\n  line-height: 6rem; }\n\n@media (max-width: 767.98px) {\n    .main-title {\n      width: 85%;\n      padding: 6rem 2rem; } }\n\n.main-title strong {\n    font-family: \"Petit Formal Script\";\n    text-transform: initial;\n    font-weight: 500;\n    font-size: 3.5rem;\n    padding-left: 0.5rem; }\n\n.demo .main-title {\n  text-transform: uppercase;\n  letter-spacing: 0.1em; }\n\n.main-title .thin {\n  font-weight: 200; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvdGl0bGUvQzpcXFVzZXJzXFxtaWNoYWVsLmNvbGxpdmVyXFxQaWN0dXJlc1xcUGVyc29uYWwgUHJvamVjdHNcXDIwMjAgLSBFeHBlcmllbmNlXFxleHBlcmllbmNlL3NyY1xcYXBwXFxzZWN0aW9uc1xcdGl0bGVcXHRpdGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy90aXRsZS9DOlxcVXNlcnNcXG1pY2hhZWwuY29sbGl2ZXJcXFBpY3R1cmVzXFxQZXJzb25hbCBQcm9qZWN0c1xcMjAyMCAtIEV4cGVyaWVuY2VcXGV4cGVyaWVuY2Uvc3JjXFxhc3NldHNcXHNhc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLHVCQUFzQjtFQUN0QixtQ0FBa0M7RUFDbEMsV0FBVSxFQUNiOztBQUVEO0VBQ0ksc0NBQXFFLEVBQ3hFOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsVUFBUztFQUNULGlCQUFnQjtFQUVoQixzQ0FBcUM7RUFDckMsb0JBQW1CO0VBQ25CLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLDZCQUE0QjtFQUM1QixrQkFBaUIsRUFjcEI7O0FDekNHO0lEV0o7TUFtQlEsV0FBVTtNQUNWLG1CQUFrQixFQVV6QixFQUFBOztBQTlCRDtJQXdCUSxtQ0FBa0M7SUFDbEMsd0JBQXVCO0lBQ3ZCLGlCQUFnQjtJQUNoQixrQkFBaUI7SUFDakIscUJBQW9CLEVBQ3ZCOztBQUdMO0VBQ0ksMEJBQXlCO0VBRXpCLHNCQUFxQixFQUN4Qjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3RpdGxlL3RpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGluc1wiO1xyXG5cclxuLmNvbnRhaW5lci10aXRsZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5sYXJnZS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRlbW8gLmxhcmdlLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZlYXR1cmVkL2tleWJvYXJkLmpwZ1wiKTtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjZjlmMWU5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgcGFkZGluZzogNnJlbSAzcmVtO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xyXG5cclxuICAgIEBpbmNsdWRlIHNtYWxsIHtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDZyZW0gMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJvbmcge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBldGl0IEZvcm1hbCBTY3JpcHRcIjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGVtbyAubWFpbi10aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLy8gZm9udC1zaXplOiA0LjJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuLm1haW4tdGl0bGUgLnRoaW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG4iLCIvLyBAbWl4aW4geHNtYWxsIHtcclxuLy8gICAgIC8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG4vLyAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbi8vICAgICAgICAgQGNvbnRlbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbkBtaXhpbiBzbWFsbCB7XHJcbiAgICAvLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1lZGl1bSB7XHJcbiAgICAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTEwOS45OHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsYXJnZSB7XHJcbiAgICAvLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExMTBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBAbWl4aW4geGxhcmdlIHtcclxuLy8gICAgIC8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxyXG4vLyAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4vLyAgICAgICAgIEBjb250ZW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sections/title/title.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/title/title.component.ts ***!
  \***************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
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

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/sections/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.scss */ "./src/app/sections/title/title.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\michael.colliver\Pictures\Personal Projects\2020 - Experience\experience\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map