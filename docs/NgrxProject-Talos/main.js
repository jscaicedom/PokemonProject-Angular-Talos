(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johanasaraicaicedo/Documents/NgrxProject-Talos/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ngrx/actions/pokemons.actions */ "6kDC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HeaderComponent {
    constructor(store) {
        this.store = store;
    }
    change(text) {
        console.log(text);
        this.store.dispatch(Object(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__["searchPokemon"])({ text }));
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 0, consts: [[1, "header"], [1, "header-text"], ["routerLink", "/home", 1, "header-title"], ["routerLink", "/pokemons", 1, "header-subtitle"], ["type", "search", "name", "buscar", "placeholder", "Search", 1, "header-input", 3, "input"], ["searchText", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pok\u00E9App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pokemons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeaderComponent_Template_input_input_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.change(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  width: 100vw;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1rem;\n}\n\n.header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 300;\n  margin: 0;\n  text-decoration: none;\n  color: black;\n}\n\n.header-text[_ngcontent-%COMP%]   .header-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: auto 0.8rem;\n  font-weight: 700;\n  text-decoration: none;\n  color: black;\n}\n\n.header-title[_ngcontent-%COMP%]:hover, .header-subtitle[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.header-title[_ngcontent-%COMP%]:focus, .header-subtitle[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.header-input[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  width: 12rem;\n  height: 2rem;\n  margin: 1rem;\n  border-radius: 5px;\n  border: 1px solid #d4d4d4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxNQUFNO0VBQ04sWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUNBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDFyZW07XG59XG4uaGVhZGVyLXRleHQgLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmhlYWRlci10ZXh0IC5oZWFkZXItc3VidGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogYXV0byAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmhlYWRlci10aXRsZTpob3Zlcixcbi5oZWFkZXItc3VidGl0bGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyLXRpdGxlOmZvY3VzLFxuLmhlYWRlci1zdWJ0aXRsZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oZWFkZXItaW5wdXQge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAxMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBtYXJnaW46IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "6kDC":
/*!**************************************************!*\
  !*** ./src/app/ngrx/actions/pokemons.actions.ts ***!
  \**************************************************/
/*! exports provided: fetchPokemons, fetchPokemonsSuccess, searchPokemon, showSearch, fetchSelectedPokemon, fetchDescription, selectedSuccess, comparePokemon, removeComparedPokemon, removeFavorite, addFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPokemons", function() { return fetchPokemons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPokemonsSuccess", function() { return fetchPokemonsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPokemon", function() { return searchPokemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSearch", function() { return showSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSelectedPokemon", function() { return fetchSelectedPokemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDescription", function() { return fetchDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedSuccess", function() { return selectedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparePokemon", function() { return comparePokemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeComparedPokemon", function() { return removeComparedPokemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFavorite", function() { return removeFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavorite", function() { return addFavorite; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const fetchPokemons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Pokemons] Load Pokemons', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const fetchPokemonsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Pokemons] Load Pokemons Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const searchPokemon = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search] Search Pokemons', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const showSearch = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search] Search Pokemons Show', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const fetchSelectedPokemon = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Select] fetch Pokemon', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const fetchDescription = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Select] fetch Description', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const selectedSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Select] Select Pokemon', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const comparePokemon = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compare] Compare Pokemon', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeComparedPokemon = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Compare] Remove Compared Pokemon');
const removeFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[favorite] remove favorite', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[favorite] add favorite', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "7YgY":
/*!****************************************!*\
  !*** ./src/app/ngrx/pokemons.state.ts ***!
  \****************************************/
/*! exports provided: default, initializeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeState", function() { return initializeState; });
class AppState {
}
const initializeState = () => {
    return {
        totalPokemons: [],
        offset: 0,
        searchedPokemons: [],
        favoritePokemons: [0, 1, 2],
        selectedPokemon: '',
        selectedPokemons: {
            id: 0,
            name: '',
            sprites: {
                front_default: '',
            },
            height: 0,
            weight: 0,
            types: [],
            abilities: [],
            stats: [],
            isFavorite: false,
        },
        descriptions: {
            flavor_text_entries: [],
            gender_rate: -1,
        },
        isCompared: false,
        pokemonToCompare: {
            id: 0,
            name: '',
            sprites: {
                front_default: '',
            },
            height: 0,
            weight: 0,
            types: [],
            abilities: [],
            stats: [],
            isFavorite: false,
        },
    };
};


/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ngrx/actions/pokemons.actions */ "6kDC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _graphics_graphics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../graphics/graphics.component */ "Mx09");
/* harmony import */ var _comparemodal_comparemodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comparemodal/comparemodal.component */ "SzPk");










function ModalComponent_h5_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 VS. ", ctx_r0.pokemonToCompare.name.toUpperCase(), " ");
} }
function ModalComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r8.activeModal.dismiss("Cross click"); return ctx_r8.compare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Compare to... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ModalComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comparemodal");
} }
function ModalComponent_ng_template_13_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.descriptions.flavor_text_entries[1].flavor_text, " ");
} }
function ModalComponent_ng_template_13_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ability_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ability_r13.ability.name, " ");
} }
function ModalComponent_ng_template_13_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r14.type.name, " ");
} }
function ModalComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_ng_template_13_p_4_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "f");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Abilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ModalComponent_ng_template_13_li_25_Template, 2, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ModalComponent_ng_template_13_li_30_Template, 2, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx_r7.selectedPokemon)("src", ctx_r7.selectedPokemons.sprites.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.descriptions.flavor_text_entries[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedPokemons.height, "m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedPokemons.weight, " kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.selectedPokemons.abilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.selectedPokemons.types);
} }
class ModalComponent {
    constructor(activeModal, modalService, store) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.store = store;
        this.state$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('state'));
    }
    ngOnInit() {
        this.pokemonSubscription = this.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => {
            this.selectedPokemon = state.selectedPokemon;
            this.selectedPokemons = state.selectedPokemons;
            this.descriptions = state.descriptions;
            this.isCompared = state.isCompared;
            this.pokemonToCompare = state.pokemonToCompare;
        }))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.pokemonSubscription) {
            this.pokemonSubscription.unsubscribe();
        }
    }
    compare() {
        this.store.dispatch(Object(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__["comparePokemon"])({ pokemonToCompare: this.selectedPokemons }));
    }
    removeCompare() {
        this.store.dispatch(Object(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__["removeComparedPokemon"])());
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { name: "name" }, decls: 16, vars: 6, consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["class", "modal-title", 4, "ngIf", "ngIfElse"], ["elseBlockHeader", ""], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "compare-button", 3, "click"], [1, "modal-body", "general-container"], [1, "image-container"], [1, "pokemon-image", 3, "alt", "src"], ["class", "description-container", 4, "ngIf"], [1, "data-container"], [1, "data-box"], [1, "modal-subtitle"], [4, "ngFor", "ngForOf"], [1, "description-container"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_h5_4_Template, 2, 1, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_7_listener() { ctx.activeModal.dismiss("Cross click"); return ctx.removeCompare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalComponent_div_10_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModalComponent_ng_template_11_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModalComponent_ng_template_13_Template, 31, 7, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-graphics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCompared)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCompared)("ngIfThen", _r4)("ngIfElse", _r6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _graphics_graphics_component__WEBPACK_IMPORTED_MODULE_6__["GraphicsComponent"], _comparemodal_comparemodal_component__WEBPACK_IMPORTED_MODULE_7__["ComparemodalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".modal-content[_ngcontent-%COMP%] {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 0.5s;\n  animation-name: fade;\n  animation-duration: 0.5s;\n}\n\n.compare-button[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 0.2rem 0.5rem;\n  font-weight: 300;\n  color: white;\n  margin: 0.1rem 0.7rem 0 0.7rem;\n  background: #697077;\n  border-radius: 3px;\n  border: none;\n  outline: none;\n}\n\n.compare-button[_ngcontent-%COMP%]:hover {\n  background: #5c6269;\n}\n\n.general-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.description-container[_ngcontent-%COMP%] {\n  margin: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #d4d4d4;\n}\n\n.data-container[_ngcontent-%COMP%] {\n  margin: 1rem 0 0 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.data-box[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n\n.modal-subtitle[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  width: 100vw;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.general-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.pokemons-container[_ngcontent-%COMP%] {\n  margin: 4rem 6rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  width: 100vw;\n}\n\n.pokemon-container[_ngcontent-%COMP%] {\n  border: 1px solid #d4d4d4;\n  border-radius: 5px;\n  margin: 0.7rem 1rem;\n  z-index: 5;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  width: 25rem;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.pokemon-image[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.pokemon-name[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  border-top: 1px solid #d4d4d4;\n  display: flex;\n  justify-content: center;\n}\n\n@keyframes fade {\n  from {\n    opacity: 0;\n    top: -0.5rem;\n  }\n  to {\n    opacity: 1;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBWUE7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7SUFDVixNQUFNO0VBQ1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250ZW50IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbi5jb21wYXJlLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMC4xcmVtIDAuN3JlbSAwIDAuN3JlbTtcbiAgYmFja2dyb3VuZDogIzY5NzA3NztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jb21wYXJlLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1YzYyNjk7XG59XG5cbi5nZW5lcmFsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xufVxuXG4uZGF0YS1jb250YWluZXIge1xuICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmRhdGEtYm94IHtcbiAgbWFyZ2luOiAwIDFyZW07XG59XG5cbi5tb2RhbC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmdlbmVyYWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBva2Vtb25zLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNHJlbSA2cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLnBva2Vtb24tY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDAuN3JlbSAxcmVtO1xuICB6LWluZGV4OiA1O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDI1cmVtO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnBva2Vtb24taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ucG9rZW1vbi1uYW1lIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAtMC41cmVtO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IC0wLjVyZW07XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAwO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8nfz":
/*!***********************************************************!*\
  !*** ./src/app/components/pokemons/pokemons.component.ts ***!
  \***********************************************************/
/*! exports provided: PokemonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsComponent", function() { return PokemonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/modal.component */ "7aL3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ngrx/actions/pokemons.actions */ "6kDC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function PokemonsComponent_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokemonsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonsComponent_div_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const pokemon_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.open(pokemon_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonsComponent_div_2_span_3_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonsComponent_div_2_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r3 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.favorite(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " favorite_border ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/", pokemon_r2.index, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.favoritePokemons.includes(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pokemon_r2.name.toUpperCase(), " ");
} }
function PokemonsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Comparing pokemon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.pokemonToCompare.name.toUpperCase(), " ");
} }
class PokemonsComponent {
    constructor(modalService, store) {
        this.modalService = modalService;
        this.store = store;
        this.state$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('state'));
    }
    ngOnInit() {
        this.pokemonSubscription = this.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => {
            if (state.offset === 0) {
                this.store.dispatch(Object(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_4__["fetchPokemons"])({ offset: 0 }));
            }
            this.pokemons = state.searchedPokemons;
            this.isCompared = state.isCompared;
            this.pokemonToCompare = state.pokemonToCompare;
            this.offset = state.offset;
            this.favoritePokemons = state.favoritePokemons;
        }))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.pokemonSubscription) {
            this.pokemonSubscription.unsubscribe();
        }
    }
    open(name) {
        this.store.dispatch(Object(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_4__["fetchSelectedPokemon"])({ name }));
        const modalRef = this.modalService.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]);
        modalRef.componentInstance.name = name;
    }
    onScroll() {
        this.store.dispatch(Object(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_4__["fetchPokemons"])({ offset: this.offset }));
    }
    favorite(index) {
        this.favoritePokemons.includes(index)
            ? this.store.dispatch(Object(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_4__["removeFavorite"])({ index }))
            : this.favoritePokemons.length === 5
                ? window.alert('You just can select 5 favorite Pokemons')
                : this.store.dispatch(Object(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_4__["addFavorite"])({ index }));
    }
}
PokemonsComponent.ɵfac = function PokemonsComponent_Factory(t) { return new (t || PokemonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
PokemonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonsComponent, selectors: [["app-pokemons"]], decls: 4, vars: 3, consts: [["infiniteScroll", "", 1, "general-content", 3, "infiniteScrollDistance", "scrolled"], [1, "pokemons-container"], ["class", "pokemon-container", 4, "ngFor", "ngForOf"], ["class", "compare-card", 4, "ngIf"], [1, "pokemon-container"], [1, "image-container"], ["alt", "pokemon.name", 1, "pokemon-image", 3, "src", "click"], ["class", "material-icons favorite", 4, "ngIf"], [1, "material-icons", "favorite-border", 3, "click"], [1, "pokemon-name"], [1, "name-text"], [1, "material-icons", "favorite"], [1, "compare-card"], [1, "compare-card-title"], [1, "compare-subtitle"]], template: function PokemonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function PokemonsComponent_Template_div_scrolled_0_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonsComponent_div_2_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonsComponent_div_3_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 0.2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCompared);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".general-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.pokemons-container[_ngcontent-%COMP%] {\n  margin: 4rem 6rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  width: 100vw;\n}\n\n.pokemon-container[_ngcontent-%COMP%] {\n  border: 1px solid #d4d4d4;\n  border-radius: 5px;\n  margin: 0.7rem 1rem;\n  z-index: 5;\n}\n\n.pokemon-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  width: 12rem;\n  position: relative;\n}\n\n.favorite-border[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: #9d9d9d;\n}\n\n.favorite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: #ecba31;\n}\n\n.pokemon-image[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.pokemon-name[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  border-top: 1px solid #d4d4d4;\n  display: flex;\n  justify-content: center;\n}\n\n.name-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.7rem;\n  letter-spacing: 0.04rem;\n  margin: 0.1rem 0;\n}\n\n.compare-card[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3rem;\n  right: 3rem;\n  margin: 3rem 0;\n  height: 4.5rem;\n  border: 1px solid #ebebeb;\n  border-radius: 3px;\n  box-shadow: 5px 5px 10px #ebebeb;\n}\n\n.compare-card-title[_ngcontent-%COMP%] {\n  width: 10rem;\n  padding: 0.3rem 0.5rem;\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #707479;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.compare-subtitle[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9ucy9wb2tlbW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZW1vbnMvcG9rZW1vbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lcmFsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wb2tlbW9ucy1jb250YWluZXIge1xuICBtYXJnaW46IDRyZW0gNnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5wb2tlbW9uLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwLjdyZW0gMXJlbTtcbiAgei1pbmRleDogNTtcbn1cblxuLnBva2Vtb24tY29udGFpbmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mYXZvcml0ZS1ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiAjOWQ5ZDlkO1xufVxuXG4uZmF2b3JpdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiAjZWNiYTMxO1xufVxuXG4ucG9rZW1vbi1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5wb2tlbW9uLW5hbWUge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uYW1lLXRleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRyZW07XG4gIG1hcmdpbjogMC4xcmVtIDA7XG59XG5cbi5jb21wYXJlLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3JlbTtcbiAgcmlnaHQ6IDNyZW07XG4gIG1hcmdpbjogM3JlbSAwO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2ViZWJlYjtcbn1cblxuLmNvbXBhcmUtY2FyZC10aXRsZSB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM3MDc0Nzk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xufVxuXG4uY29tcGFyZS1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemons',
                templateUrl: './pokemons.component.html',
                styleUrls: ['./pokemons.component.css'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    apiUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=',
    selectedUrl: 'https://pokeapi.co/api/v2/pokemon/',
    production: false,
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function HomeComponent_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const favorite_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/", favorite_r2 + 1, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Pokemon", favorite_r2, "");
} }
function HomeComponent_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_ngb_carousel_2_1_ng_template_0_Template, 2, 2, "ng-template", 4);
} }
function HomeComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ngb_carousel_2_1_Template, 1, 0, undefined, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.favoritePokemons);
} }
class HomeComponent {
    constructor(store) {
        this.store = store;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.state$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('state'));
    }
    ngOnInit() {
        this.pokemonSubscription = this.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => {
            this.favoritePokemons = state.favoritePokemons;
        }))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.pokemonSubscription) {
            this.pokemonSubscription.unsubscribe();
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 1, consts: [[1, "general"], ["class", "sliders-container", 4, "ngIf"], [1, "sliders-container"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper", "imageslider"], [1, "pokemon-image", 3, "src", "alt"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ngb_carousel_2_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.favoritePokemons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]], styles: [".general[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background: url('portada-pokemon.jpg') center/cover no-repeat\n    border-box;\n}\n\n.imageslider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background-color: rgba(25, 25, 21, 0.63);\n  border-radius: 3rem;\n  height: 20rem;\n}\n\n.pokemon-image[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0;\n}\n\n.sliders-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8rem;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2I7Y0FDWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbmVyYWwge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wb3J0YWRhLXBva2Vtb24uanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXRcbiAgICBib3JkZXItYm94O1xufVxuXG4uaW1hZ2VzbGlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjUsIDIxLCAwLjYzKTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgaGVpZ2h0OiAyMHJlbTtcbn1cblxuLnBva2Vtb24taW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zbGlkZXJzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "D/+i":
/*!***************************************************!*\
  !*** ./src/app/ngrx/reducers/pokemons.reducer.ts ***!
  \***************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/pokemons.actions */ "6kDC");
/* harmony import */ var _pokemons_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pokemons.state */ "7YgY");



const initialState = Object(_pokemons_state__WEBPACK_IMPORTED_MODULE_2__["initializeState"])();
const pokemonsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__["fetchPokemonsSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { totalPokemons: state.totalPokemons.concat(action.allPokemons.map((pokemon, fetchIndex) => {
            const index = fetchIndex + state.totalPokemons.length + 1;
            let isFavorite = false;
            return Object.assign(Object.assign({}, pokemon), { index, isFavorite });
        })), searchedPokemons: state.totalPokemons.concat(action.allPokemons.map((pokemon, fetchIndex) => {
            const index = fetchIndex + state.totalPokemons.length + 1;
            let isFavorite = false;
            return Object.assign(Object.assign({}, pokemon), { index, isFavorite });
        })), offset: state.offset + 20 });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__["searchPokemon"], (state, action) => {
    return Object.assign(Object.assign({}, state), { searchedPokemons: state.totalPokemons.filter((pokemon) => {
            if (pokemon.name.startsWith(action.text))
                return pokemon;
        }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__["selectedSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { selectedPokemon: action.name, selectedPokemons: action.general, descriptions: action.description });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__["comparePokemon"], (state, action) => {
    return Object.assign(Object.assign({}, state), { pokemonToCompare: action.pokemonToCompare, isCompared: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__["removeComparedPokemon"], (state) => {
    return Object.assign(Object.assign({}, state), { isCompared: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__["removeFavorite"], (state, action) => {
    return Object.assign(Object.assign({}, state), { favoritePokemons: state.favoritePokemons.filter((index) => {
            return index != action.index;
        }) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_1__["addFavorite"], (state, action) => {
    return Object.assign(Object.assign({}, state), { favoritePokemons: state.favoritePokemons.concat(action.index) });
}));
function reducer(state, action) {
    return pokemonsReducer(state, action);
}


/***/ }),

/***/ "Mx09":
/*!***********************************************************!*\
  !*** ./src/app/components/graphics/graphics.component.ts ***!
  \***********************************************************/
/*! exports provided: GraphicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsComponent", function() { return GraphicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");






class GraphicsComponent {
    constructor(store) {
        this.store = store;
        this.chartType = 'bar';
        this.chartColors = [
            {
                backgroundColor: [
                    'rgba(56,120,107,0.5)',
                    'rgba(70,120,107,0.5)',
                    'rgba(80,120,107,0.5)',
                    'rgba(90,120,107,0.5)',
                    'rgba(100,120,107,0.5)',
                    'rgba(110,120,107,0.5)',
                ],
                borderColor: [
                    'rgba(56,120,107,1)',
                    'rgba(70,120,107,1)',
                    'rgba(80,120,107,1)',
                    'rgba(90,120,107,1)',
                    'rgba(100,120,107,1)',
                    'rgba(110,120,107,1)',
                ],
                borderWidth: 2,
            },
        ];
        this.chartOptions = {
            responsive: true,
            title: {
                display: true,
                text: 'Stats',
                fontSize: 20,
                fontColor: 'black',
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        };
        this.state$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('state'));
    }
    ngOnInit() {
        this.pokemonSubscription = this.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => {
            this.chartLabels = state.selectedPokemons.stats.map((stat) => {
                return stat.stat.name;
            });
            this.chartDatasets = [
                {
                    data: state.selectedPokemons.stats.map((stat) => {
                        return stat.base_stat;
                    }),
                },
            ];
            if (state.isCompared) {
                this.chartDatasets.push({
                    data: state.pokemonToCompare.stats.map((stat) => {
                        return stat.base_stat;
                    }),
                });
                this.chartColors.push({
                    backgroundColor: [
                        'rgba(56,80,107,0.5)',
                        'rgba(70,80,107,0.5)',
                        'rgba(80,80,107,0.5)',
                        'rgba(90,80,107,0.5)',
                        'rgba(100,80,107,0.5)',
                        'rgba(110,80,107,0.5)',
                    ],
                    borderColor: [
                        'rgba(56,80,107,1)',
                        'rgba(70,80,107,1)',
                        'rgba(80,80,107,1)',
                        'rgba(90,80,107,1)',
                        'rgba(100,80,107,1)',
                        'rgba(110,80,107,1)',
                    ],
                    borderWidth: 2,
                });
            }
        }))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.pokemonSubscription) {
            this.pokemonSubscription.unsubscribe();
        }
    }
}
GraphicsComponent.ɵfac = function GraphicsComponent_Factory(t) { return new (t || GraphicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
GraphicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphicsComponent, selectors: [["app-graphics"]], decls: 2, vars: 6, consts: [[1, "modal-footer", 2, "display", "block"], ["mdbChart", "", 3, "chartType", "datasets", "labels", "colors", "options", "legend"]], template: function GraphicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.chartType)("datasets", ctx.chartDatasets)("labels", ctx.chartLabels)("colors", ctx.chartColors)("options", ctx.chartOptions)("legend", false);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".graphics[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaGljcy9ncmFwaGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGhpY3MvZ3JhcGhpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaGljcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graphics',
                templateUrl: './graphics.component.html',
                styleUrls: ['./graphics.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'NgrxProject-Talos';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "SzPk":
/*!*******************************************************************!*\
  !*** ./src/app/components/comparemodal/comparemodal.component.ts ***!
  \*******************************************************************/
/*! exports provided: ComparemodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparemodalComponent", function() { return ComparemodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ComparemodalComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ability_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ability_r2.ability.name, " ");
} }
function ComparemodalComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ability_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ability_r3.ability.name, " ");
} }
class ComparemodalComponent {
    constructor(store) {
        this.store = store;
        this.state$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('state'));
    }
    ngOnInit() {
        this.pokemonSubscription = this.state$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => {
            this.pokemonToCompare = state.pokemonToCompare;
            this.pokemonSelected = state.selectedPokemons;
        }))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.pokemonSubscription) {
            this.pokemonSubscription.unsubscribe();
        }
    }
}
ComparemodalComponent.ɵfac = function ComparemodalComponent_Factory(t) { return new (t || ComparemodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ComparemodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComparemodalComponent, selectors: [["app-comparemodal"]], decls: 31, vars: 10, consts: [[1, "modal-body"], [1, "images-container", "general-container"], [1, "image-container"], [1, "pokemon-image", 3, "alt", "src"], [1, "compare-container"], [1, "compare-text"], [1, "modal-subtitle", "compare-space"], [1, "compare-abilities"], ["class", "compare-text", 4, "ngFor", "ngForOf"]], template: function ComparemodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Height ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Weight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " femenino ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "femenino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ComparemodalComponent_div_26_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Abilities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ComparemodalComponent_div_30_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.pokemonSelected.name)("src", ctx.pokemonSelected.sprites.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.pokemonToCompare.name)("src", ctx.pokemonToCompare.sprites.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pokemonSelected.height, "m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pokemonToCompare.height, "m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pokemonSelected.weight, " kg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pokemonToCompare.weight, " kg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemonSelected.abilities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemonToCompare.abilities);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".compare-button[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 0.2rem 0.5rem;\n  font-weight: 300;\n  color: white;\n  margin: 0.1rem 0.7rem 0 0.7rem;\n  background: #697077;\n  border-radius: 3px;\n  border: none; }\n\n.compare-button[_ngcontent-%COMP%]:hover {\n  background: #5c6269; }\n\n.general-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between; }\n\n.images-container[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d4d4d4; }\n\n.image-container[_ngcontent-%COMP%] {\n  width: 25rem; }\n\n.data-container[_ngcontent-%COMP%] {\n  margin: 1rem 0 0 0;\n  display: flex;\n  flex-wrap: wrap; }\n\n.modal-subtitle[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0; }\n\n.compare-space[_ngcontent-%COMP%] {\n  margin: 0 3rem; }\n\n.compare-container[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 1rem;\n  grid-template-columns: auto auto auto;\n  justify-items: center; }\n\n.compare-abilities[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.compare-text[_ngcontent-%COMP%] {\n  margin: 0; }\n\n.image-container[_ngcontent-%COMP%] {\n  width: 12rem; }\n\n.pokemon-image[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYXJlbW9kYWwvY29tcGFyZW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFFOztBQUVoQjtFQUNFLG1CQUFtQixFQUFFOztBQUV2QjtFQUNFLGFBQWE7RUFDYiw4QkFBOEIsRUFBRTs7QUFFbEM7RUFDRSxnQ0FBZ0MsRUFBRTs7QUFFcEM7RUFDRSxZQUFZLEVBQUU7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBRTs7QUFFYjtFQUNFLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxxQkFBcUIsRUFBRTs7QUFFekI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFFOztBQUV2QjtFQUNFLFNBQVMsRUFBRTs7QUFHYjtFQUNFLFlBQVksRUFBRTs7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYXJlbW9kYWwvY29tcGFyZW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFyZS1idXR0b24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDAuMXJlbSAwLjdyZW0gMCAwLjdyZW07XG4gIGJhY2tncm91bmQ6ICM2OTcwNzc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiBub25lOyB9XG5cbi5jb21wYXJlLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1YzYyNjk7IH1cblxuLmdlbmVyYWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG5cbi5pbWFnZXMtY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7IH1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyNXJlbTsgfVxuXG4uZGF0YS1jb250YWluZXIge1xuICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuXG4ubW9kYWwtc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDA7IH1cblxuLmNvbXBhcmUtc3BhY2Uge1xuICBtYXJnaW46IDAgM3JlbTsgfVxuXG4uY29tcGFyZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW46IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgfVxuXG4uY29tcGFyZS1hYmlsaXRpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5jb21wYXJlLXRleHQge1xuICBtYXJnaW46IDA7IH1cblxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEycmVtOyB9XG5cbi5wb2tlbW9uLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTsgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComparemodalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comparemodal',
                templateUrl: './comparemodal.component.html',
                styleUrls: ['./comparemodal.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "VH+H":
/*!**************************************************!*\
  !*** ./src/app/ngrx/effects/pokemons.effects.ts ***!
  \**************************************************/
/*! exports provided: PokemonsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsEffects", function() { return PokemonsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ngrx/actions/pokemons.actions */ "6kDC");
/* harmony import */ var src_app_services_pokemons_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pokemons-http.service */ "XBJ+");







class PokemonsEffects {
    constructor(actions$, httpService) {
        this.actions$ = actions$;
        this.httpService = httpService;
        this.fethcPokemons$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__["fetchPokemons"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.httpService.getPokemons(action.offset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return _ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__["fetchPokemonsSuccess"]({
                allPokemons: data['results'],
                offset: action.offset,
            });
        })))));
        this.fethcSelectedPokemons$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__["fetchSelectedPokemon"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.httpService.getSelectedPokemon(action.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return _ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__["fetchDescription"]({
                general: {
                    id: data['id'],
                    name: data['name'],
                    sprites: {
                        front_default: data['sprites']['front_default'],
                    },
                    height: data['height'],
                    weight: data['weight'],
                    types: data['types'],
                    abilities: data['abilities'],
                    stats: data['stats'],
                    isFavorite: false,
                },
                url: data['species']['url'],
                name: action.name,
            });
        })))));
        this.selectedSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__["fetchDescription"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((action) => this.httpService.getDescription(action.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return _ngrx_actions_pokemons_actions__WEBPACK_IMPORTED_MODULE_3__["selectedSuccess"]({
                general: action.general,
                description: {
                    flavor_text_entries: data['flavor_text_entries'],
                    gender_rate: data['gender_rate'],
                },
                name: action.name,
            });
        })))));
    }
}
PokemonsEffects.ɵfac = function PokemonsEffects_Factory(t) { return new (t || PokemonsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_pokemons_http_service__WEBPACK_IMPORTED_MODULE_4__["PokemonsHttpService"])); };
PokemonsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonsEffects, factory: PokemonsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_services_pokemons_http_service__WEBPACK_IMPORTED_MODULE_4__["PokemonsHttpService"] }]; }, null); })();


/***/ }),

/***/ "XBJ+":
/*!***************************************************!*\
  !*** ./src/app/services/pokemons-http.service.ts ***!
  \***************************************************/
/*! exports provided: PokemonsHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsHttpService", function() { return PokemonsHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PokemonsHttpService {
    constructor(http) {
        this.http = http;
    }
    getPokemons(offset) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + offset);
    }
    getSelectedPokemon(name) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].selectedUrl + name);
    }
    getDescription(url) {
        return this.http.get(url);
    }
}
PokemonsHttpService.ɵfac = function PokemonsHttpService_Factory(t) { return new (t || PokemonsHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PokemonsHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonsHttpService, factory: PokemonsHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonsHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal/modal.component */ "7aL3");
/* harmony import */ var _components_comparemodal_comparemodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/comparemodal/comparemodal.component */ "SzPk");
/* harmony import */ var _components_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/graphics/graphics.component */ "Mx09");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pokemons/pokemons.component */ "8nfz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_pokemons_http_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/pokemons-http.service */ "XBJ+");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_reducers_pokemons_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ngrx/reducers/pokemons.reducer */ "D/+i");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_effects_pokemons_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ngrx/effects/pokemons.effects */ "VH+H");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_pokemons_http_service__WEBPACK_IMPORTED_MODULE_16__["PokemonsHttpService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__["StoreRouterConnectingModule"].forRoot(),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({ state: _ngrx_reducers_pokemons_reducer__WEBPACK_IMPORTED_MODULE_18__["reducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__["EffectsModule"].forRoot([_ngrx_effects_pokemons_effects__WEBPACK_IMPORTED_MODULE_20__["PokemonsEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
        _components_comparemodal_comparemodal_component__WEBPACK_IMPORTED_MODULE_11__["ComparemodalComponent"],
        _components_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_12__["GraphicsComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _components_pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_14__["PokemonsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBRootModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__["StoreRouterConnectingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                    _components_comparemodal_comparemodal_component__WEBPACK_IMPORTED_MODULE_11__["ComparemodalComponent"],
                    _components_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_12__["GraphicsComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _components_pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_14__["PokemonsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__["StoreRouterConnectingModule"].forRoot(),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({ state: _ngrx_reducers_pokemons_reducer__WEBPACK_IMPORTED_MODULE_18__["reducer"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__["EffectsModule"].forRoot([_ngrx_effects_pokemons_effects__WEBPACK_IMPORTED_MODULE_20__["PokemonsEffects"]]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                    }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                ],
                providers: [_services_pokemons_http_service__WEBPACK_IMPORTED_MODULE_16__["PokemonsHttpService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pokemons/pokemons.component */ "8nfz");






const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'pokemons', component: _components_pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_3__["PokemonsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map