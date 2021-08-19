(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Tomas\github\nasaSvadba\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2RbJ":
    /*!***************************************************************************!*\
      !*** ./src/app/components/time-line-moment/time-line-moment.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TimeLineMomentComponent */

    /***/
    function RbJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeLineMomentComponent", function () {
        return TimeLineMomentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TimeLineMomentComponent = /*#__PURE__*/function () {
        function TimeLineMomentComponent() {
          _classCallCheck(this, TimeLineMomentComponent);
        }

        _createClass(TimeLineMomentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TimeLineMomentComponent;
      }();

      TimeLineMomentComponent.ɵfac = function TimeLineMomentComponent_Factory(t) {
        return new (t || TimeLineMomentComponent)();
      };

      TimeLineMomentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimeLineMomentComponent,
        selectors: [["app-time-line-moment"]],
        inputs: {
          photoImg: "photoImg",
          yearData: "yearData",
          description: "description"
        },
        decls: 10,
        vars: 3,
        consts: [[1, "moment"], [1, "moment-image"], ["alt", "mmntImg", 3, "src"], [1, "moment-description"], [1, "text"], [1, "line"]],
        template: function TimeLineMomentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.photoImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.yearData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
          }
        },
        styles: [".moment[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  position: relative;\r\n  align-items: center;\r\n}\r\n\r\n.moment-image[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  flex: 1;\r\n  width: 180px;\r\n  height: 180px;\r\n}\r\n\r\n.line[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 5px;\r\n  background-color: #c9a952;\r\n  margin-left: 23%;\r\n  position: absolute;\r\n}\r\n\r\n.moment-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: white;\r\n  border: 5px solid #c9a952;\r\n  border-radius: 50%;\r\n}\r\n\r\n.moment-description[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.moment-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .moment-description[_ngcontent-%COMP%] {\r\n    flex: 3;\r\n  }\r\n\r\n  .moment-image[_ngcontent-%COMP%] {\r\n    flex: none;\r\n    width: 290px;\r\n    height: 290px;\r\n  }\r\n\r\n  .line[_ngcontent-%COMP%] {\r\n    margin-left: 140px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtbGluZS1tb21lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJ0aW1lLWxpbmUtbW9tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9tZW50IHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vbWVudC1pbWFnZSB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWE5NTI7XHJcbiAgbWFyZ2luLWxlZnQ6IDIzJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5tb21lbnQtaW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjYzlhOTUyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm1vbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm1vbWVudC1kZXNjcmlwdGlvbiBkaXYge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAzO1xyXG4gIH1cclxuXHJcbiAgLm1vbWVudC1pbWFnZSB7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgaGVpZ2h0OiAyOTBweDtcclxuICB9XHJcblxyXG4gIC5saW5lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "7s6r":
    /*!************************************!*\
      !*** ./src/assets/lang/english.ts ***!
      \************************************/

    /*! exports provided: English */

    /***/
    function s6r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "English", function () {
        return English;
      });

      var English = function English() {
        _classCallCheck(this, English);
      };

      English.navItem1 = 'About Us';
      English.navItem2 = 'Time and Place';
      English.navItem3 = 'Wedding Form';
      English.navItem4 = 'Contact';
      English.bigMainTitle = 'We are married';
      English.motoText = 'You are my today and all of my tomorrows';
      English.desc1 = "We started dating";
      English.desc2 = "Our first home";
      English.desc3 = "Loki moved in with us";
      English.desc4 = "We got engaged";
      English.desc5 = 'We will say "YES"';
      English.timeLocationTitle1 = "Wedding Ceremony";
      English.timeLocationTitle2 = "Wedding Reception";
      English.timeLocationDescription1 = 'In the Church "Krista Kráľa" v Chorvátskom Grobe';
      English.timeLocationDescription2 = 'In the "Agátka Hotel" v Chorvátskom Grobe';
      English.timeLocationTime1 = "at 15:00 o'clock";
      English.timeLocationTime2 = "at 17:00 o'clock";
      English.questName = "Wedding Guests";
      English.placeholderName = "Last name";
      English.come = "Will you attend?";
      English.option1 = "Yes";
      English.option2 = "No";
      English.contact = "Contact";
      English.placeholderContact = "Your E-mail/Tel";
      English.classicMenu = "Classic Menu";
      English.childrenMenu = "Kid's Menu";
      English.vegieMenu = "Veggie Menu";
      English.placeholderMenu = "For Who? (write names)";
      English.music = "Song requests";
      English.placeholderMusic = "Song names";
      English.buttonText = "Send";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "BRre":
    /*!*******************************************************!*\
      !*** ./src/app/sections/contact/contact.component.ts ***!
      \*******************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function BRre(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 3,
        vars: 0,
        consts: [[1, "section"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "marinahrudka@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "CJ5W":
    /*!*********************************************************!*\
      !*** ./src/app/sections/about-us/about-us.component.ts ***!
      \*********************************************************/

    /*! exports provided: AboutUsComponent */

    /***/
    function CJ5W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
        return AboutUsComponent;
      });
      /* harmony import */


      var _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../assets/lang/slovak */
      "vYnd");
      /* harmony import */


      var _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../assets/lang/english */
      "7s6r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_time_line_moment_time_line_moment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/time-line-moment/time-line-moment.component */
      "2RbJ");

      var AboutUsComponent = /*#__PURE__*/function () {
        function AboutUsComponent() {
          _classCallCheck(this, AboutUsComponent);

          this.photo1 = "assets/img/2014.jpg";
          this.photo2 = "assets/img/2017.jpg";
          this.photo3 = "assets/img/loki.jpg";
          this.photo4 = "assets/img/2020.jpg";
          this.photo5 = "assets/img/2021.jpg";
          this.desc1 = "";
          this.desc2 = "";
          this.desc3 = "";
          this.desc4 = "";
          this.desc5 = "";
        }

        _createClass(AboutUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var currentLanguage = localStorage.getItem('language');

            if (currentLanguage === 'eng') {
              this.desc1 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].desc1;
              this.desc2 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].desc2;
              this.desc3 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].desc3;
              this.desc4 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].desc4;
              this.desc5 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].desc5;
            } else {
              this.desc1 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].desc1;
              this.desc2 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].desc2;
              this.desc3 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].desc3;
              this.desc4 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].desc4;
              this.desc5 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].desc5;
            }
          }
        }]);

        return AboutUsComponent;
      }();

      AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
        return new (t || AboutUsComponent)();
      };

      AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AboutUsComponent,
        selectors: [["app-about-us"]],
        decls: 7,
        vars: 15,
        consts: [[1, "section"], [1, "time-line"], [3, "yearData", "photoImg", "description"]],
        template: function AboutUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-time-line-moment", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-time-line-moment", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-time-line-moment", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-time-line-moment", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-time-line-moment", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("yearData", 2014)("photoImg", ctx.photo1)("description", ctx.desc1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("yearData", 2017)("photoImg", ctx.photo2)("description", ctx.desc2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("yearData", 2018)("photoImg", ctx.photo3)("description", ctx.desc3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("yearData", 2020)("photoImg", ctx.photo4)("description", ctx.desc4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("yearData", 2021)("photoImg", ctx.photo5)("description", ctx.desc5);
          }
        },
        directives: [_components_time_line_moment_time_line_moment_component__WEBPACK_IMPORTED_MODULE_3__["TimeLineMomentComponent"]],
        styles: [".time-line[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: relative;\r\n  margin: auto;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .time-line[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lLWxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC50aW1lLWxpbmUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "FVj5":
    /*!*************************************************************!*\
      !*** ./src/app/components/separator/separator.component.ts ***!
      \*************************************************************/

    /*! exports provided: SeparatorComponent */

    /***/
    function FVj5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeparatorComponent", function () {
        return SeparatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SeparatorComponent = /*#__PURE__*/function () {
        function SeparatorComponent() {
          _classCallCheck(this, SeparatorComponent);
        }

        _createClass(SeparatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SeparatorComponent;
      }();

      SeparatorComponent.ɵfac = function SeparatorComponent_Factory(t) {
        return new (t || SeparatorComponent)();
      };

      SeparatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SeparatorComponent,
        selectors: [["app-separator"]],
        inputs: {
          parentData: "parentData"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "separator"]],
        template: function SeparatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parentData);
          }
        },
        styles: [".separator[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  padding: 100px 25px;\r\n  color: white;\r\n}\r\n\r\n.separator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 4em\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .separator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 7em\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcGFyYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7SUFDRTtFQUNGO0FBQ0YiLCJmaWxlIjoic2VwYXJhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VwYXJhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAxMDBweCAyNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlcGFyYXRvciBzcGFuIHtcclxuICBmb250LXNpemU6IDRlbVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc2VwYXJhdG9yIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiA3ZW1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../assets/lang/slovak */
      "vYnd");
      /* harmony import */


      var _assets_lang_english__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../assets/lang/english */
      "7s6r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navigation/navigation.component */
      "k5x5");
      /* harmony import */


      var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/separator/separator.component */
      "FVj5");
      /* harmony import */


      var _sections_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sections/about-us/about-us.component */
      "CJ5W");
      /* harmony import */


      var _sections_time_location_time_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sections/time-location/time-location.component */
      "t4U1");
      /* harmony import */


      var _sections_wedding_form_wedding_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./sections/wedding-form/wedding-form.component */
      "aoLv");
      /* harmony import */


      var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./sections/contact/contact.component */
      "BRre");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'Budeme sa brať';
          this.weddingTime = "";
          this.separator1 = "";
          this.separator2 = "";
          this.separator3 = "";
          this.separator4 = "";
          this.motoText = "";
          this.countDownDate = new Date("July 17, 2021 00:00:00").getTime();
          this.now = new Date().getTime();
          this.distance = 0;
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000).subscribe(function (x) {
              _this.counter();
            });
            var currentLanguage = localStorage.getItem('language');

            if (currentLanguage === 'eng') {
              this.title = _assets_lang_english__WEBPACK_IMPORTED_MODULE_2__["English"].bigMainTitle;
              this.motoText = _assets_lang_english__WEBPACK_IMPORTED_MODULE_2__["English"].motoText;
              this.separator1 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_2__["English"].navItem1;
              this.separator2 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_2__["English"].navItem2;
              this.separator3 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_2__["English"].navItem3;
              this.separator4 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_2__["English"].navItem4;
            } else {
              this.title = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_1__["Slovak"].bigMainTitle;
              this.motoText = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_1__["Slovak"].motoText;
              this.separator1 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_1__["Slovak"].navItem1;
              this.separator2 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_1__["Slovak"].navItem2;
              this.separator3 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_1__["Slovak"].navItem3;
              this.separator4 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_1__["Slovak"].navItem4;
            }
          }
        }, {
          key: "counter",
          value: function counter() {
            this.now = new Date().getTime();
            this.distance = this.countDownDate - this.now;
            this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
            this.hours = Math.floor(this.distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            this.minutes = Math.floor(this.distance % (1000 * 60 * 60) / (1000 * 60));
            this.seconds = Math.floor(this.distance % (1000 * 60) / 1000);
            this.weddingTime = this.days + "d " + this.hours + "h " + this.minutes + "m " + this.seconds + "s";
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 23,
        vars: 6,
        consts: [[1, "content"], [1, "preview"], [1, "title"], [1, "wedding-time"], ["controls", ""], ["src", "assets/videos/Highlight.mp4", "type", "video/mp4"], [1, "forever-title"], ["src", "assets/img/forever-top.png", "alt", ""], ["src", "assets/img/forever-bottom.png", "alt", ""], ["id", "item1", 3, "parentData"], ["id", "item2", 3, "parentData"], ["id", "item3", 3, "parentData"], ["id", "item4", 3, "parentData"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "video", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "source", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-separator", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-about-us");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-separator", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-time-location");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-separator", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-wedding-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "app-separator", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "app-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.motoText);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parentData", ctx.separator1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parentData", ctx.separator2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parentData", ctx.separator3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parentData", ctx.separator4);
          }
        },
        directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_5__["SeparatorComponent"], _sections_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"], _sections_time_location_time_location_component__WEBPACK_IMPORTED_MODULE_7__["TimeLocationComponent"], _sections_wedding_form_wedding_form_component__WEBPACK_IMPORTED_MODULE_8__["WeddingFormComponent"], _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 25px;\r\n  height: 100%;\r\n  overflow: auto;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.preview[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-direction: column;\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: center;\r\n  color: white;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n}\r\n\r\n.wedding-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  border-bottom: 1px solid white;\r\n  border-top: 1px solid white;\r\n  padding: 20px;\r\n}\r\n\r\n.wedding-time[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n  width: 320px;\r\n  height: 240px;\r\n}\r\n\r\n.forever-title[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.forever-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  flex: 1;\r\n}\r\n\r\n.forever-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 80px;\r\n  }\r\n\r\n  .wedding-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .wedding-time[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    width: 640px;\r\n    height: 400px;\r\n  }\r\n\r\n  .forever-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n  }\r\n\r\n  .forever-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    width: 50%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi5wcmV2aWV3IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnRpdGxlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLndlZGRpbmctdGltZSBzcGFuIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ud2VkZGluZy10aW1lIHZpZGVvIHtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG5cclxuLmZvcmV2ZXItdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JldmVyLXRpdGxlIGltZyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9yZXZlci10aXRsZSBzcGFuIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRpdGxlIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgLndlZGRpbmctdGltZSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcblxyXG4gIC53ZWRkaW5nLXRpbWUgdmlkZW8ge1xyXG4gICAgd2lkdGg6IDY0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcblxyXG4gIC5mb3JldmVyLXRpdGxlIGltZyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuXHJcbiAgLmZvcmV2ZXItdGl0bGUgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @videogular/ngx-videogular/core */
      "4w57");
      /* harmony import */


      var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @videogular/ngx-videogular/controls */
      "v2j/");
      /* harmony import */


      var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @videogular/ngx-videogular/overlay-play */
      "cqME");
      /* harmony import */


      var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @videogular/ngx-videogular/buffering */
      "VKRg");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./navigation/navigation.component */
      "k5x5");
      /* harmony import */


      var _sections_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./sections/about-us/about-us.component */
      "CJ5W");
      /* harmony import */


      var _sections_time_location_time_location_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./sections/time-location/time-location.component */
      "t4U1");
      /* harmony import */


      var _sections_wedding_form_wedding_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./sections/wedding-form/wedding-form.component */
      "aoLv");
      /* harmony import */


      var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./sections/contact/contact.component */
      "BRre");
      /* harmony import */


      var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/separator/separator.component */
      "FVj5");
      /* harmony import */


      var _components_time_line_moment_time_line_moment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/time-line-moment/time-line-moment.component */
      "2RbJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_4__["VgControlsModule"], _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_5__["VgOverlayPlayModule"], _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_6__["VgBufferingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _sections_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"], _sections_time_location_time_location_component__WEBPACK_IMPORTED_MODULE_11__["TimeLocationComponent"], _sections_wedding_form_wedding_form_component__WEBPACK_IMPORTED_MODULE_12__["WeddingFormComponent"], _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_14__["SeparatorComponent"], _components_time_line_moment_time_line_moment_component__WEBPACK_IMPORTED_MODULE_15__["TimeLineMomentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_4__["VgControlsModule"], _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_5__["VgOverlayPlayModule"], _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_6__["VgBufferingModule"]]
        });
      })();
      /***/

    },

    /***/
    "aoLv":
    /*!*****************************************************************!*\
      !*** ./src/app/sections/wedding-form/wedding-form.component.ts ***!
      \*****************************************************************/

    /*! exports provided: WeddingFormComponent */

    /***/
    function aoLv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeddingFormComponent", function () {
        return WeddingFormComponent;
      });
      /* harmony import */


      var _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../assets/lang/slovak */
      "vYnd");
      /* harmony import */


      var _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../assets/lang/english */
      "7s6r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var WeddingFormComponent = /*#__PURE__*/function () {
        function WeddingFormComponent() {
          _classCallCheck(this, WeddingFormComponent);

          this.name = "";
          this.placeholderName = "";
          this.come = "";
          this.option1 = "";
          this.option2 = "";
          this.contact = "";
          this.placeholderContact = "";
          this.classicMenu = "";
          this.childrenMenu = "";
          this.vegieMenu = "";
          this.placeholderMenu = "";
          this.music = "";
          this.placeholderMusic = "";
          this.buttonText = "";
        }

        _createClass(WeddingFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var currentLanguage = localStorage.getItem('language');

            if (currentLanguage === 'eng') {
              this.name = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].questName;
              this.placeholderName = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].placeholderName;
              this.come = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].come;
              this.option1 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].option1;
              this.option2 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].option2;
              this.contact = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].contact;
              this.placeholderContact = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].placeholderContact;
              this.classicMenu = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].classicMenu;
              this.childrenMenu = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].childrenMenu;
              this.vegieMenu = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].vegieMenu;
              this.placeholderMenu = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].placeholderMenu;
              this.music = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].music;
              this.placeholderMusic = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].placeholderMusic;
              this.buttonText = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].buttonText;
            } else {
              this.name = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].questName;
              this.placeholderName = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].placeholderName;
              this.come = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].come;
              this.option1 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].option1;
              this.option2 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].option2;
              this.contact = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].contact;
              this.placeholderContact = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].placeholderContact;
              this.classicMenu = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].classicMenu;
              this.childrenMenu = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].childrenMenu;
              this.vegieMenu = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].vegieMenu;
              this.placeholderMenu = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].placeholderMenu;
              this.music = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].music;
              this.placeholderMusic = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].placeholderMusic;
              this.buttonText = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].buttonText;
            }
          }
        }]);

        return WeddingFormComponent;
      }();

      WeddingFormComponent.ɵfac = function WeddingFormComponent_Factory(t) {
        return new (t || WeddingFormComponent)();
      };

      WeddingFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: WeddingFormComponent,
        selectors: [["app-wedding-form"]],
        decls: 42,
        vars: 16,
        consts: [[1, "section"], [1, "container"], ["action", "https://mailthis.to/svadbaMariTomo", "method", "POST"], [1, "first-info"], [1, "form-group"], ["for", "Name"], ["type", "text", "name", "Name", 1, "form-control", 3, "placeholder"], ["for", "come"], ["type", "radio", "value", "yes", "name", "come"], ["type", "radio", "value", "no", "name", "come"], ["for", "contact"], ["type", "text", "name", "contact", 1, "form-control", 3, "placeholder"], [1, "second-info"], ["for", "clasic"], ["name", "clasic", 2, "height", "90px", 3, "placeholder"], ["for", "children"], ["name", "children", 2, "height", "90px", 3, "placeholder"], ["for", "vegie"], ["name", "vegie", 2, "height", "90px", 3, "placeholder"], [1, "third-info"], ["for", "music"], ["name", "music", 2, "height", "90px", 3, "placeholder"], ["type", "submit", 3, "value"]],
        template: function WeddingFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "textarea", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "textarea", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "textarea", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "textarea", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholderName);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.come);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.option1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.option2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.contact);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholderContact);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.classicMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholderMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.childrenMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholderMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.vegieMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholderMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.music);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholderMusic);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.buttonText);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"]],
        styles: [".first-info[_ngcontent-%COMP%], .second-info[_ngcontent-%COMP%], .third-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .first-info[_ngcontent-%COMP%], .second-info[_ngcontent-%COMP%], .third-info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZGRpbmctZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOzs7SUFHRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoid2VkZGluZy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3QtaW5mbyxcclxuLnNlY29uZC1pbmZvLFxyXG4udGhpcmQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEsXHJcbi5mb3JtLWdyb3VwIGlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuZmlyc3QtaW5mbyxcclxuICAuc2Vjb25kLWluZm8sXHJcbiAgLnRoaXJkLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "k5x5":
    /*!****************************************************!*\
      !*** ./src/app/navigation/navigation.component.ts ***!
      \****************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function k5x5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../assets/lang/slovak */
      "vYnd");
      /* harmony import */


      var _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../assets/lang/english */
      "7s6r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0, a1) {
        return {
          "close-menu": a0,
          "open-menu": a1
        };
      };

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent() {
          _classCallCheck(this, NavigationComponent);

          this.isOpen = false;
          this.isMobile = false;
          this.nav1 = "";
          this.nav2 = "";
          this.nav3 = "";
          this.nav4 = "";
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            innerWidth = window.innerWidth;

            if (this.innerWidth > 768) {
              this.isMobile = false;
            } else {
              this.isMobile = true;
            }

            var currentLanguage = localStorage.getItem('language');

            if (currentLanguage === 'eng') {
              this.nav1 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].navItem1;
              this.nav2 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].navItem2;
              this.nav3 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].navItem3;
              this.nav4 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].navItem4;
            } else {
              this.nav1 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].navItem1;
              this.nav2 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].navItem2;
              this.nav3 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].navItem3;
              this.nav4 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].navItem4;
            }
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.isOpen = !this.isOpen;
          }
        }, {
          key: "changeLang",
          value: function changeLang(choosedLang) {
            localStorage.setItem('language', choosedLang);
            location.reload();
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)();
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        decls: 28,
        vars: 10,
        consts: [[1, "top-nav"], [1, "logo-img"], ["href", "#home", 1, "active"], ["src", "assets/img/logo.jpg", "alt", "logo"], [1, "my-select"], ["id", "nav-icon3", 3, "click"], ["id", "myLinks", 1, "nav-links", 3, "ngClass"], [1, "nav-item"], ["href", "#item1", 3, "click"], ["href", "#item2", 3, "click"], ["href", "#item3", 3, "click"], ["href", "#item4", 3, "click"], [1, "nav-lang"], ["src", "assets/img/svk.jpg", "alt", "svk", 3, "click"], ["src", "assets/img/eng.png", "alt", "eng", 3, "click"], ["href", "javascript:void(0);", "onclick", "myFunction()", 1, "icon"], [1, "fa", "fa-bars"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_5_listener() {
              return ctx.openMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_12_listener() {
              return ctx.openMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_15_listener() {
              return ctx.openMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_18_listener() {
              return ctx.openMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_21_listener() {
              return ctx.openMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_img_click_24_listener() {
              return ctx.changeLang("svk");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_img_click_25_listener() {
              return ctx.changeLang("eng");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.isOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, !ctx.isOpen, ctx.isOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nav1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nav2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nav3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nav4);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".top-nav[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  transition: 0.2s linear all;\r\n   background-color: white;\r\n   z-index: 900;\r\n}\r\n\r\n.nav-links[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  flex-direction: column;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(250, 250, 250, 0.8);\r\n  width: 100%;\r\n  padding: 50% 20px;\r\n  z-index: 1000;\r\n}\r\n\r\n.open-menu[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.close-menu[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  text-align: center;\r\n  padding: 10px;\r\n  align-self: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 24px;\r\n}\r\n\r\n.my-select[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex: 1;\r\n  justify-content: flex-end;\r\n  align-self: center;\r\n  padding-right: 10px;\r\n}\r\n\r\n.nav-lang[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  align-self: center;\r\n}\r\n\r\n.nav-lang[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  padding: 5px 10px;\r\n  height: 70px;\r\n}\r\n\r\n#nav-icon3[_ngcontent-%COMP%] {\r\n  z-index: 1100;\r\n  width: 60px;\r\n  height: 45px;\r\n  position: relative;\r\n  transform: rotate(0deg);\r\n  transition: .5s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#nav-icon3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  height: 9px;\r\n  width: 100%;\r\n  background: black;\r\n  border-radius: 9px;\r\n  opacity: 1;\r\n  left: 0;\r\n  transform: rotate(0deg);\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#nav-icon3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  top: 0px;\r\n}\r\n\r\n#nav-icon3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2), #nav-icon3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n  top: 18px;\r\n}\r\n\r\n#nav-icon3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n  top: 36px;\r\n}\r\n\r\n#nav-icon3.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  top: 18px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n#nav-icon3.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n#nav-icon3.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n#nav-icon3.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n  top: 18px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .top-nav[_ngcontent-%COMP%] {\r\n    padding: 5px 20px;\r\n  }\r\n\r\n  .my-select[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .nav-item[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: inherit;\r\n  }\r\n\r\n  .nav-links[_ngcontent-%COMP%] {\r\n    flex: 3;\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-size: 16px;\r\n    background: transparent;\r\n    padding: 10px;\r\n    position: relative;\r\n  }\r\n\r\n  .nav-lang[_ngcontent-%COMP%] {\r\n    flex: 0;\r\n    align-self: center;\r\n  }\r\n\r\n  .nav-lang[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    margin: 5px 0;\r\n    height: 30px;\r\n  }\r\n\r\n  .nav-lang[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFJViwyQkFBMkI7R0FDM0IsdUJBQXVCO0dBQ3ZCLFlBQVk7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLE1BQU07RUFDTixPQUFPO0VBQ1Asb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBSWxCLHVCQUF1QjtFQUl2QiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBSVAsdUJBQXVCO0VBSXZCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBSUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBSUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBSUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxPQUFPO0lBQ1Asa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1uYXYge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBsaW5lYXIgYWxsO1xyXG4gICAtbW96LXRyYW5zaXRpb246IDAuMnMgbGluZWFyIGFsbDtcclxuICAgLW8tdHJhbnNpdGlvbjogMC4ycyBsaW5lYXIgYWxsO1xyXG4gICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhciBhbGw7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICB6LWluZGV4OiA5MDA7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDUwJSAyMHB4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5vcGVuLW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNsb3NlLW1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvLWltZyBpbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBmbGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4ubXktc2VsZWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm5hdi1sYW5nIHtcclxuICBmbGV4OiAxO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1sYW5nIGltZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuI25hdi1pY29uMyB7XHJcbiAgei1pbmRleDogMTEwMDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI25hdi1pY29uMyBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA5cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbGVmdDogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNuYXYtaWNvbjMgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4jbmF2LWljb24zIHNwYW46bnRoLWNoaWxkKDIpLCNuYXYtaWNvbjMgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gIHRvcDogMThweDtcclxufVxyXG5cclxuI25hdi1pY29uMyBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgdG9wOiAzNnB4O1xyXG59XHJcblxyXG4jbmF2LWljb24zLm9wZW4gc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gIHRvcDogMThweDtcclxuICB3aWR0aDogMCU7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4jbmF2LWljb24zLm9wZW4gc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbiNuYXYtaWNvbjMub3BlbiBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbiNuYXYtaWNvbjMub3BlbiBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgdG9wOiAxOHB4O1xyXG4gIHdpZHRoOiAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRvcC1uYXYge1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubXktc2VsZWN0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmF2LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmtzIHtcclxuICAgIGZsZXg6IDM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGFuZyB7XHJcbiAgICBmbGV4OiAwO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1sYW5nIGltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWxhbmcgaW1nOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "t4U1":
    /*!*******************************************************************!*\
      !*** ./src/app/sections/time-location/time-location.component.ts ***!
      \*******************************************************************/

    /*! exports provided: TimeLocationComponent */

    /***/
    function t4U1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeLocationComponent", function () {
        return TimeLocationComponent;
      });
      /* harmony import */


      var _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../assets/lang/slovak */
      "vYnd");
      /* harmony import */


      var _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../assets/lang/english */
      "7s6r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TimeLocationComponent = /*#__PURE__*/function () {
        function TimeLocationComponent() {
          _classCallCheck(this, TimeLocationComponent);

          this.title1 = "";
          this.title2 = "";
          this.description1 = "";
          this.description2 = "";
          this.time1 = "";
          this.time2 = "";
        }

        _createClass(TimeLocationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var currentLanguage = localStorage.getItem('language');

            if (currentLanguage === 'eng') {
              this.title1 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].timeLocationTitle1;
              this.title2 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].timeLocationTitle2;
              this.description1 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].timeLocationDescription1;
              this.description2 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].timeLocationDescription2;
              this.time1 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].timeLocationTime1;
              this.time2 = _assets_lang_english__WEBPACK_IMPORTED_MODULE_1__["English"].timeLocationTime2;
            } else {
              this.title1 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].timeLocationTitle1;
              this.title2 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].timeLocationTitle2;
              this.description1 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].timeLocationDescription1;
              this.description2 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].timeLocationDescription2;
              this.time1 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].timeLocationTime1;
              this.time2 = _assets_lang_slovak__WEBPACK_IMPORTED_MODULE_0__["Slovak"].timeLocationTime2;
            }
          }
        }]);

        return TimeLocationComponent;
      }();

      TimeLocationComponent.ɵfac = function TimeLocationComponent_Factory(t) {
        return new (t || TimeLocationComponent)();
      };

      TimeLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimeLocationComponent,
        selectors: [["app-time-location"]],
        decls: 18,
        vars: 6,
        consts: [[1, "section", "location"], [1, "map"], ["src", "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21262.395575790655!2d17.244567836872218!3d48.229736258794226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x476c9ac79acca8c7%3A0xc9932710f0284c1e!2sKostol%20Krista%20Kr%C3%A1%C4%BEa%2C%20Hlbok%C3%A1%20cesta%20551%2C%20900%2025%20Chorv%C3%A1tsky%20Grob!3m2!1d48.2273509!2d17.2921337!4m5!1s0x476c8fe00639dc71%3A0x667791efd0aaa47d!2sRestaurant%20Hotel%20Agatka%2C%20Pezinsk%C3%A1%2C%20Chorv%C3%A1tsky%20Grob!3m2!1d48.224866899999995!2d17.2320627!5e0!3m2!1ssk!2ssk!4v1615318771887!5m2!1ssk!2ssk", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 1, "my-map", 2, "border", "0"], [1, "loccation-description"], [1, "text"]],
        template: function TimeLocationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "iframe", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.title1, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.description1, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.time1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.title2, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.description2, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.time2);
          }
        },
        styles: [".location[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n.map[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  margin-top: 10px;\r\n}\r\n\r\n.loccation-description[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 100%;\r\n  font-size: 20px;\r\n}\r\n\r\n.my-map[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .location[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .my-map[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: 450px;\r\n  }\r\n\r\n  .map[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoidGltZS1sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxufVxyXG5cclxuLm1hcCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubG9jY2F0aW9uLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5teS1tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5sb2NhdGlvbiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLm15LW1hcCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICB9XHJcblxyXG4gIC5tYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vYnd":
    /*!***********************************!*\
      !*** ./src/assets/lang/slovak.ts ***!
      \***********************************/

    /*! exports provided: Slovak */

    /***/
    function vYnd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Slovak", function () {
        return Slovak;
      });

      var Slovak = function Slovak() {
        _classCallCheck(this, Slovak);
      };

      Slovak.navItem1 = 'O nás';
      Slovak.navItem2 = 'Miesto a cas';
      Slovak.navItem3 = 'Svadobný formulár';
      Slovak.navItem4 = 'Kontakt';
      Slovak.bigMainTitle = 'Vzali sme sa';
      Slovak.motoText = 'Si môj dnešok a všetky moje zajtrajšky';
      Slovak.desc1 = "Začali sme randit";
      Slovak.desc2 = "Naše prvé spoločné bývanie";
      Slovak.desc3 = "Nasťahoval sa k nám Loki";
      Slovak.desc4 = "Zasnúbili sme sa";
      Slovak.desc5 = "Povieme si ÁNO";
      Slovak.timeLocationTitle1 = "Sobáš";
      Slovak.timeLocationTitle2 = "Hostina";
      Slovak.timeLocationDescription1 = "V kostole Krista Kráľa v Chorvátskom Grobe";
      Slovak.timeLocationDescription2 = "V hoteli Agátka v Chorvátskom Grobe";
      Slovak.timeLocationTime1 = "o 15:00 hod";
      Slovak.timeLocationTime2 = "o 17:00 hod";
      Slovak.questName = "Svadobčania";
      Slovak.placeholderName = "Priezvisko";
      Slovak.come = "Zúčastníte sa?";
      Slovak.option1 = "áno";
      Slovak.option2 = "nie";
      Slovak.contact = "Kontakt";
      Slovak.placeholderContact = "Váš E-mail/Tel";
      Slovak.classicMenu = "Klasické menu";
      Slovak.childrenMenu = "Detské menu";
      Slovak.vegieMenu = "Vegetariánske menu";
      Slovak.placeholderMenu = "Pre koho? (napísať mená)";
      Slovak.music = "Piesne na želanie";
      Slovak.placeholderMusic = "Názvy piesní";
      Slovak.buttonText = "Odoslať";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map