webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/css/main.css ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\r\n  overflow-x: hidden; /* Hide scrollbars */\r\n}\r\n\r\n#element::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n\r\n#portfolio {\r\n\tbackground: #FFFFFF;\r\n\tpadding-top: 8rem;\r\n\tpadding-bottom: 3rem;\r\n}\r\n#portfolio .folio-item {\r\n\tpadding: 0;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tfloat: left;\r\n\tzoom: 0.5;\r\n\tmargin: 15px;\r\n}\r\n#portfolio .folio-item img {\r\n\tvertical-align: middle;\r\n\ttransition: all 0.5s ease-in-out;\r\n\twidth: 690px;\r\n\theight: 500px;\r\n}\r\n\r\n#portfolio .overlay {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: transparent;\r\n\ttransition: all 0.5s ease-in-out;\r\n}\r\n\r\n#portfolio .folio-item-table {\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttext-decoration: none;\r\n\r\n}\r\n#portfolio .folio-item-cell {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\ttext-align: center;\r\n\ttransition: all 0.5s ease-in-out;\r\n\tposition: relative;\r\n\ttext-decoration: none;\r\n\tleft: -100%;\r\n}\r\n\r\n#portfolio .folio-title {\r\n\tcolor: #FFFFFF;\r\n\tfont-size: 3.3rem;\r\n\tpadding: 0 3rem;\r\n\tmargin-bottom: 0;\r\n\ttext-decoration: none;\r\n}\r\n#portfolio .folio-types {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttext-transform: uppercase;\r\n\tfont-family: \"poppins-regular\", sans-serif;\r\n\tfont-size: 1.2rem;\r\n\tletter-spacing: .1rem;\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n}\r\n#portfolio .folio-item:hover .overlay {\r\n\tbackground: rgba(0, 0, 0, 0.8);\r\n}\r\n#portfolio .folio-item:hover .folio-item-cell {\r\n\tleft: 0;\r\n}\r\n#portfolio .folio-item:hover img {\r\n\ttransform: scale(1.05);\r\n}\r\n\r\n/**\r\n * responsive:\r\n * portfolio\r\n * -------------------------------------------------------------------\r\n */\r\n@media only screen and (max-width:1024px) {\r\n\t#portfolio .folio-title {\r\n\t\tfont-size: 3.1rem;\r\n\t}\r\n}\r\n@media only screen and (max-width:768px) {\r\n\t#portfolio .folio-title {\r\n\t\tfont-size: 2.5rem;\r\n\t\ttext-decoration: none;\r\n\t}\r\n}\r\n@media only screen and (max-width:400px) {\r\n\t#portfolio .folio-title {\r\n\t\tfont-size: 2.2rem;\r\n\t}\r\n}\r\n\r\n/**\r\n * Popup Modal - (_layout.scss)\r\n * ------------------------------------------------------------------\r\n */\r\n.popup-modal {\r\n\tmax-width: 550px;\r\n\tbackground: #FFFFFF;\r\n\tposition: relative;\r\n\tmargin: 0 auto;\r\n}\r\n.popup-modal .media {\r\n\tposition: relative;\r\n}\r\n.popup-modal img {\r\n\tvertical-align: bottom;\r\n}\r\n.popup-modal .description-box {\r\n\tpadding: 1.8rem 3.6rem 3rem;\r\n}\r\n.popup-modal .description-box h4 {\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tfont-size: 1.5rem;\r\n\tline-height: 2.4rem;\r\n\tmargin-bottom: .6rem;\r\n}\r\n.popup-modal .description-box p {\r\n\tfont-family: \"poppins-regular\", sans-serif;\r\n\tfont-size: 1.4rem;\r\n\tline-height: 2.4rem;\r\n\tmargin-bottom: 12px;\r\n}\r\n.popup-modal .categories {\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tfont-size: 1.1rem;\r\n\tline-height: 1.8rem;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: .1rem;\r\n\tdisplay: block;\r\n\ttext-align: left;\r\n\tcolor: rgba(0, 0, 0, 0.5);\r\n}\r\n.popup-modal .link-box {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tbackground: #000000;\r\n}\r\n.popup-modal .link-box a {\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tfont-size: 1.2rem;\r\n\tline-height: 6rem;\r\n\tcolor: #FFFFFF;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 3px;\r\n\tcursor: pointer;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n\twidth: 50%;\r\n\ttransition: all 0.3s ease-in-out;\r\n}\r\n.popup-modal .link-box a:first-child {\r\n\tborder-right: 1px solid rgba(200, 200, 200, 0.1);\r\n}\r\n.popup-modal .link-box a:hover {\r\n\tbackground: #cc005f;\r\n\tborder: none;\r\n}\r\n@media only screen and (max-width:600px) {\r\n\t.popup-modal {\r\n\t\twidth: auto;\r\n\t\tmargin: 0 20px;\r\n\t}\r\n}\r\n/**\r\n * ===================================================================\r\n * 17. contact - (_layout.scss)\r\n *\r\n * -------------------------------------------------------------------\r\n */\r\n#contact {\r\n\tbackground: #151515;\r\n\tpadding-top: 12rem;\r\n\tpadding-bottom: 7.2rem;\r\n}\r\n#contact .section-intro h1 {\r\n\tcolor: white;\r\n}\r\n#contact .section-intro h5 {\r\n\tcolor: #FF0077;\r\n}\r\n#contact .section-intro p {\r\n\tcolor: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* contact form */\r\n.contact-form {\r\n\tmax-width: 740px;\r\n}\r\n\r\n.contact-form ::-webkit-input-placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3);\r\n}\r\n.contact-form :-moz-placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3);  /* Firefox 18- */\r\n}\r\n.contact-form ::-moz-placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3);  /* Firefox 19+ */\r\n}\r\n.contact-form :-ms-input-placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3);\r\n}\r\n.contact-form .placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3) !important;\r\n}\r\n\r\n#contact form {\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 3rem;\r\n}\r\n#contact form .form-field {\r\n\tposition: relative;\r\n}\r\n#contact form .form-field:before, #contact form .form-field:after {\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n}\r\n#contact form .form-field:after {\r\n\tclear: both;\r\n}\r\n#contact form .form-field label {\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tfont-size: 1.1rem;\r\n\tline-height: 2.4rem;\r\n\tposition: absolute;\r\n\tbottom: -1.2rem;\r\n\tright: .6rem;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: .1rem;\r\n\tpadding: 0 2rem;\r\n\tmargin: 0;\r\n\tcolor: #FFFFFF;\r\n\tbackground: #FF0077;\r\n}\r\n#contact form .form-field label::after {\r\n\tposition: absolute;\r\n\tleft: -5px;\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\tborder-top: 5px solid transparent;\r\n\tborder-bottom: 5px solid transparent;\r\n\tborder-right: 5px solid #FF0077;\r\n\tcontent: \"\";\r\n}\r\n#contact input[type=\"text\"],\r\n#contact input[type=\"password\"],\r\n#contact input[type=\"email\"],\r\n#contact textarea {\r\n\twidth: 100%;\r\n\tcolor: rgba(255, 255, 255, 0.7);\r\n\tmargin-bottom: 0;\r\n\tborder: none;\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n#contact input[type=\"text\"],\r\n#contact input[type=\"password\"],\r\n#contact input[type=\"email\"] {\r\n\theight: 6.6rem;\r\n\tpadding: 1.8rem 2rem;\r\n}\r\n#contact input[type=\"text\"]:focus,\r\n#contact input[type=\"password\"]:focus,\r\n#contact input[type=\"email\"]:focus {\r\n\tborder-color: #FF0077;\r\n\tcolor: #FFFFFF;\r\n}\r\n#contact textarea {\r\n\tmin-height: 20rem;\r\n\tpadding: 1.8rem 2rem;\r\n}\r\n#contact textarea:focus {\r\n\tborder-color: #FF0077;\r\n\tcolor: #FFFFFF;\r\n}\r\n#contact button.submitform {\r\n\tfont-size: 1.5rem;\r\n\tdisplay: block;\r\n\tletter-spacing: .2rem;\r\n\theight: 6.6rem;\r\n\tline-height: 6.6rem;\r\n\tpadding: 0 3rem;\r\n\tmargin-top: 4.8rem;\r\n\twidth: 100%;\r\n\tbackground: #FF0077;\r\n\tcolor: #FFFFFF;\r\n}\r\n#contact button.submitform:hover, #contact button.submitform:focus {\r\n\tbackground: #cc005f;\r\n}\r\n#message-warning, #message-success {\r\n\tdisplay: none;\r\n\tbackground: #0d0d0d;\r\n\tborder-radius: 3px;\r\n\tpadding: 3rem;\r\n\tmargin-bottom: 3.6rem;\r\n\twidth: 100%;\r\n}\r\n#message-warning {\r\n\tcolor: #fa0003;\r\n}\r\n#message-success {\r\n\tcolor: #FF0077;\r\n}\r\n#message-warning i, #message-success i {\r\n\tmargin-right: 10px;\r\n}\r\n\r\n/* form loader */\r\n#submit-loader {\r\n\tdisplay: none;\r\n\tposition: relative;\r\n\tleft: 0;\r\n\ttop: 1.8rem;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n#submit-loader .text-loader {\r\n\tdisplay: none;\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tcolor: #FFFFFF;\r\n\tletter-spacing: .3rem;\r\n\ttext-transform: uppercase;\r\n}\r\n.oldie #submit-loader .s-loader {\r\n\tdisplay: none;\r\n}\r\n.oldie #submit-loader .text-loader {\r\n\tdisplay: block;\r\n}\r\n.contact-info {\r\n\tmargin: 4.8rem auto 0;\r\n\tfont-family: \"poppins-regular\", sans-serif;\r\n\tfont-size: 1.5rem;\r\n\ttext-align: center;\r\n}\r\n.contact-info .collapse {\r\n\tpadding: 0;\r\n}\r\n.contact-info .icon {\r\n\tmargin-bottom: 2.1rem;\r\n}\r\n.contact-info .icon i {\r\n\tfont-size: 4.2rem;\r\n\tcolor: #FFFFFF;\r\n}\r\n.contact-info h5 {\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n/*\r\n* Footer\r\n*/\r\n.social li{\r\n\tfont-size: 2.1rem;\r\n\tdisplay: inline-block;\r\n\tmargin-right: 100px\r\n}\r\n\r\n/*\r\n\tChat\r\n*/\r\n\r\n.str-chat {\r\n\tzoom: 1;\r\n\twidth: 30%;\r\n\tborder-radius: 10px;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/css/main.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB,EAAE,oBAAoB;AAC1C;;AAEA;IACI,aAAa;AACjB;;;AAGA;CACC,mBAAmB;CACnB,iBAAiB;CACjB,oBAAoB;AACrB;AACA;CACC,UAAU;CACV,kBAAkB;CAClB,gBAAgB;CAChB,WAAW;CACX,SAAS;CACT,YAAY;AACb;AACA;CACC,sBAAsB;CAKtB,gCAAgC;CAChC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,WAAW;CACX,YAAY;CACZ,uBAAuB;CAKvB,gCAAgC;AACjC;;AAEA;CACC,cAAc;CACd,WAAW;CACX,YAAY;CACZ,qBAAqB;;AAEtB;AACA;CACC,mBAAmB;CACnB,sBAAsB;CACtB,kBAAkB;CAKlB,gCAAgC;CAChC,kBAAkB;CAClB,qBAAqB;CACrB,WAAW;AACZ;;AAEA;CACC,cAAc;CACd,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,qBAAqB;AACtB;AACA;CACC,SAAS;CACT,UAAU;CACV,yBAAyB;CACzB,0CAA0C;CAC1C,iBAAiB;CACjB,qBAAqB;CACrB,+BAA+B;AAChC;AACA;CACC,8BAA8B;AAC/B;AACA;CACC,OAAO;AACR;AACA;CAGC,sBAAsB;AACvB;;AAEA;;;;EAIE;AACF;CACC;EACC,iBAAiB;CAClB;AACD;AACA;CACC;EACC,iBAAiB;EACjB,qBAAqB;CACtB;AACD;AACA;CACC;EACC,iBAAiB;CAClB;AACD;;AAEA;;;EAGE;AACF;CACC,gBAAgB;CAChB,mBAAmB;CACnB,kBAAkB;CAClB,cAAc;AACf;AACA;CACC,kBAAkB;AACnB;AACA;CACC,sBAAsB;AACvB;AACA;CACC,2BAA2B;AAC5B;AACA;CACC,uCAAuC;CACvC,iBAAiB;CACjB,mBAAmB;CACnB,oBAAoB;AACrB;AACA;CACC,0CAA0C;CAC1C,iBAAiB;CACjB,mBAAmB;CACnB,mBAAmB;AACpB;AACA;CACC,uCAAuC;CACvC,iBAAiB;CACjB,mBAAmB;CACnB,yBAAyB;CACzB,qBAAqB;CACrB,cAAc;CACd,gBAAgB;CAChB,yBAAyB;AAC1B;AACA;CACC,WAAW;CACX,gBAAgB;CAChB,mBAAmB;AACpB;AACA;CACC,uCAAuC;CACvC,iBAAiB;CACjB,iBAAiB;CACjB,cAAc;CACd,yBAAyB;CACzB,mBAAmB;CACnB,eAAe;CACf,cAAc;CACd,kBAAkB;CAClB,WAAW;CACX,UAAU;CAKV,gCAAgC;AACjC;AACA;CACC,gDAAgD;AACjD;AACA;CACC,mBAAmB;CACnB,YAAY;AACb;AACA;CACC;EACC,WAAW;EACX,cAAc;CACf;AACD;AACA;;;;;EAKE;AACF;CACC,mBAAmB;CACnB,kBAAkB;CAClB,sBAAsB;AACvB;AACA;CACC,YAAY;AACb;AACA;CACC,cAAc;AACf;AACA;CACC,+BAA+B;AAChC;;AAEA,iBAAiB;AACjB;CACC,gBAAgB;AACjB;;AAEA;CACC,+BAA+B;AAChC;AACA;CACC,+BAA+B,GAAG,gBAAgB;AACnD;AACA;CACC,+BAA+B,GAAG,gBAAgB;AACnD;AACA;CACC,+BAA+B;AAChC;AACA;CACC,0CAA0C;AAC3C;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,WAAW;CACX,cAAc;AACf;AACA;CACC,WAAW;AACZ;AACA;CACC,uCAAuC;CACvC,iBAAiB;CACjB,mBAAmB;CACnB,kBAAkB;CAClB,eAAe;CACf,YAAY;CACZ,yBAAyB;CACzB,qBAAqB;CACrB,eAAe;CACf,SAAS;CACT,cAAc;CACd,mBAAmB;AACpB;AACA;CACC,kBAAkB;CAClB,UAAU;CACV,QAAQ;CACR,gBAAgB;CAChB,iCAAiC;CACjC,oCAAoC;CACpC,+BAA+B;CAC/B,WAAW;AACZ;AACA;;;;CAIC,WAAW;CACX,+BAA+B;CAC/B,gBAAgB;CAChB,YAAY;CACZ,iDAAiD;AAClD;AACA;;;CAGC,cAAc;CACd,oBAAoB;AACrB;AACA;;;CAGC,qBAAqB;CACrB,cAAc;AACf;AACA;CACC,iBAAiB;CACjB,oBAAoB;AACrB;AACA;CACC,qBAAqB;CACrB,cAAc;AACf;AACA;CACC,iBAAiB;CACjB,cAAc;CACd,qBAAqB;CACrB,cAAc;CACd,mBAAmB;CACnB,eAAe;CACf,kBAAkB;CAClB,WAAW;CACX,mBAAmB;CACnB,cAAc;AACf;AACA;CACC,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,kBAAkB;CAClB,aAAa;CACb,qBAAqB;CACrB,WAAW;AACZ;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,kBAAkB;AACnB;;AAEA,gBAAgB;AAChB;CACC,aAAa;CACb,kBAAkB;CAClB,OAAO;CACP,WAAW;CACX,WAAW;CACX,kBAAkB;AACnB;AACA;CACC,aAAa;CACb,uCAAuC;CACvC,cAAc;CACd,qBAAqB;CACrB,yBAAyB;AAC1B;AACA;CACC,aAAa;AACd;AACA;CACC,cAAc;AACf;AACA;CACC,qBAAqB;CACrB,0CAA0C;CAC1C,iBAAiB;CACjB,kBAAkB;AACnB;AACA;CACC,UAAU;AACX;AACA;CACC,qBAAqB;AACtB;AACA;CACC,iBAAiB;CACjB,cAAc;AACf;AACA;CACC,cAAc;AACf;;AAEA;;CAEC;AACD;CACC,iBAAiB;CACjB,qBAAqB;CACrB;AACD;;AAEA;;CAEC;;AAED;CACC,OAAO;CACP,UAAU;CACV,mBAAmB;AACpB","sourcesContent":["body {\r\n  overflow-x: hidden; /* Hide scrollbars */\r\n}\r\n\r\n#element::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n\r\n#portfolio {\r\n\tbackground: #FFFFFF;\r\n\tpadding-top: 8rem;\r\n\tpadding-bottom: 3rem;\r\n}\r\n#portfolio .folio-item {\r\n\tpadding: 0;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tfloat: left;\r\n\tzoom: 0.5;\r\n\tmargin: 15px;\r\n}\r\n#portfolio .folio-item img {\r\n\tvertical-align: middle;\r\n\t-moz-transition: all 0.5s ease-in-out;\r\n\t-o-transition: all 0.5s ease-in-out;\r\n\t-webkit-transition: all 0.5s ease-in-out;\r\n\t-ms-transition: all 0.5s ease-in-out;\r\n\ttransition: all 0.5s ease-in-out;\r\n\twidth: 690px;\r\n\theight: 500px;\r\n}\r\n\r\n#portfolio .overlay {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: transparent;\r\n\t-moz-transition: all 0.5s ease-in-out;\r\n\t-o-transition: all 0.5s ease-in-out;\r\n\t-webkit-transition: all 0.5s ease-in-out;\r\n\t-ms-transition: all 0.5s ease-in-out;\r\n\ttransition: all 0.5s ease-in-out;\r\n}\r\n\r\n#portfolio .folio-item-table {\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttext-decoration: none;\r\n\r\n}\r\n#portfolio .folio-item-cell {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\ttext-align: center;\r\n\t-moz-transition: all 0.5s ease-in-out;\r\n\t-o-transition: all 0.5s ease-in-out;\r\n\t-webkit-transition: all 0.5s ease-in-out;\r\n\t-ms-transition: all 0.5s ease-in-out;\r\n\ttransition: all 0.5s ease-in-out;\r\n\tposition: relative;\r\n\ttext-decoration: none;\r\n\tleft: -100%;\r\n}\r\n\r\n#portfolio .folio-title {\r\n\tcolor: #FFFFFF;\r\n\tfont-size: 3.3rem;\r\n\tpadding: 0 3rem;\r\n\tmargin-bottom: 0;\r\n\ttext-decoration: none;\r\n}\r\n#portfolio .folio-types {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttext-transform: uppercase;\r\n\tfont-family: \"poppins-regular\", sans-serif;\r\n\tfont-size: 1.2rem;\r\n\tletter-spacing: .1rem;\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n}\r\n#portfolio .folio-item:hover .overlay {\r\n\tbackground: rgba(0, 0, 0, 0.8);\r\n}\r\n#portfolio .folio-item:hover .folio-item-cell {\r\n\tleft: 0;\r\n}\r\n#portfolio .folio-item:hover img {\r\n\t-webkit-transform: scale(1.05);\r\n\t-ms-transform: scale(1.05);\r\n\ttransform: scale(1.05);\r\n}\r\n\r\n/**\r\n * responsive:\r\n * portfolio\r\n * -------------------------------------------------------------------\r\n */\r\n@media only screen and (max-width:1024px) {\r\n\t#portfolio .folio-title {\r\n\t\tfont-size: 3.1rem;\r\n\t}\r\n}\r\n@media only screen and (max-width:768px) {\r\n\t#portfolio .folio-title {\r\n\t\tfont-size: 2.5rem;\r\n\t\ttext-decoration: none;\r\n\t}\r\n}\r\n@media only screen and (max-width:400px) {\r\n\t#portfolio .folio-title {\r\n\t\tfont-size: 2.2rem;\r\n\t}\r\n}\r\n\r\n/**\r\n * Popup Modal - (_layout.scss)\r\n * ------------------------------------------------------------------\r\n */\r\n.popup-modal {\r\n\tmax-width: 550px;\r\n\tbackground: #FFFFFF;\r\n\tposition: relative;\r\n\tmargin: 0 auto;\r\n}\r\n.popup-modal .media {\r\n\tposition: relative;\r\n}\r\n.popup-modal img {\r\n\tvertical-align: bottom;\r\n}\r\n.popup-modal .description-box {\r\n\tpadding: 1.8rem 3.6rem 3rem;\r\n}\r\n.popup-modal .description-box h4 {\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tfont-size: 1.5rem;\r\n\tline-height: 2.4rem;\r\n\tmargin-bottom: .6rem;\r\n}\r\n.popup-modal .description-box p {\r\n\tfont-family: \"poppins-regular\", sans-serif;\r\n\tfont-size: 1.4rem;\r\n\tline-height: 2.4rem;\r\n\tmargin-bottom: 12px;\r\n}\r\n.popup-modal .categories {\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tfont-size: 1.1rem;\r\n\tline-height: 1.8rem;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: .1rem;\r\n\tdisplay: block;\r\n\ttext-align: left;\r\n\tcolor: rgba(0, 0, 0, 0.5);\r\n}\r\n.popup-modal .link-box {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tbackground: #000000;\r\n}\r\n.popup-modal .link-box a {\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tfont-size: 1.2rem;\r\n\tline-height: 6rem;\r\n\tcolor: #FFFFFF;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 3px;\r\n\tcursor: pointer;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n\twidth: 50%;\r\n\t-moz-transition: all 0.3s ease-in-out;\r\n\t-o-transition: all 0.3s ease-in-out;\r\n\t-webkit-transition: all 0.3s ease-in-out;\r\n\t-ms-transition: all 0.3s ease-in-out;\r\n\ttransition: all 0.3s ease-in-out;\r\n}\r\n.popup-modal .link-box a:first-child {\r\n\tborder-right: 1px solid rgba(200, 200, 200, 0.1);\r\n}\r\n.popup-modal .link-box a:hover {\r\n\tbackground: #cc005f;\r\n\tborder: none;\r\n}\r\n@media only screen and (max-width:600px) {\r\n\t.popup-modal {\r\n\t\twidth: auto;\r\n\t\tmargin: 0 20px;\r\n\t}\r\n}\r\n/**\r\n * ===================================================================\r\n * 17. contact - (_layout.scss)\r\n *\r\n * -------------------------------------------------------------------\r\n */\r\n#contact {\r\n\tbackground: #151515;\r\n\tpadding-top: 12rem;\r\n\tpadding-bottom: 7.2rem;\r\n}\r\n#contact .section-intro h1 {\r\n\tcolor: white;\r\n}\r\n#contact .section-intro h5 {\r\n\tcolor: #FF0077;\r\n}\r\n#contact .section-intro p {\r\n\tcolor: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* contact form */\r\n.contact-form {\r\n\tmax-width: 740px;\r\n}\r\n\r\n.contact-form ::-webkit-input-placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3);\r\n}\r\n.contact-form :-moz-placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3);  /* Firefox 18- */\r\n}\r\n.contact-form ::-moz-placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3);  /* Firefox 19+ */\r\n}\r\n.contact-form :-ms-input-placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3);\r\n}\r\n.contact-form .placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.3) !important;\r\n}\r\n\r\n#contact form {\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 3rem;\r\n}\r\n#contact form .form-field {\r\n\tposition: relative;\r\n}\r\n#contact form .form-field:before, #contact form .form-field:after {\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n}\r\n#contact form .form-field:after {\r\n\tclear: both;\r\n}\r\n#contact form .form-field label {\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tfont-size: 1.1rem;\r\n\tline-height: 2.4rem;\r\n\tposition: absolute;\r\n\tbottom: -1.2rem;\r\n\tright: .6rem;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: .1rem;\r\n\tpadding: 0 2rem;\r\n\tmargin: 0;\r\n\tcolor: #FFFFFF;\r\n\tbackground: #FF0077;\r\n}\r\n#contact form .form-field label::after {\r\n\tposition: absolute;\r\n\tleft: -5px;\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\tborder-top: 5px solid transparent;\r\n\tborder-bottom: 5px solid transparent;\r\n\tborder-right: 5px solid #FF0077;\r\n\tcontent: \"\";\r\n}\r\n#contact input[type=\"text\"],\r\n#contact input[type=\"password\"],\r\n#contact input[type=\"email\"],\r\n#contact textarea {\r\n\twidth: 100%;\r\n\tcolor: rgba(255, 255, 255, 0.7);\r\n\tmargin-bottom: 0;\r\n\tborder: none;\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n#contact input[type=\"text\"],\r\n#contact input[type=\"password\"],\r\n#contact input[type=\"email\"] {\r\n\theight: 6.6rem;\r\n\tpadding: 1.8rem 2rem;\r\n}\r\n#contact input[type=\"text\"]:focus,\r\n#contact input[type=\"password\"]:focus,\r\n#contact input[type=\"email\"]:focus {\r\n\tborder-color: #FF0077;\r\n\tcolor: #FFFFFF;\r\n}\r\n#contact textarea {\r\n\tmin-height: 20rem;\r\n\tpadding: 1.8rem 2rem;\r\n}\r\n#contact textarea:focus {\r\n\tborder-color: #FF0077;\r\n\tcolor: #FFFFFF;\r\n}\r\n#contact button.submitform {\r\n\tfont-size: 1.5rem;\r\n\tdisplay: block;\r\n\tletter-spacing: .2rem;\r\n\theight: 6.6rem;\r\n\tline-height: 6.6rem;\r\n\tpadding: 0 3rem;\r\n\tmargin-top: 4.8rem;\r\n\twidth: 100%;\r\n\tbackground: #FF0077;\r\n\tcolor: #FFFFFF;\r\n}\r\n#contact button.submitform:hover, #contact button.submitform:focus {\r\n\tbackground: #cc005f;\r\n}\r\n#message-warning, #message-success {\r\n\tdisplay: none;\r\n\tbackground: #0d0d0d;\r\n\tborder-radius: 3px;\r\n\tpadding: 3rem;\r\n\tmargin-bottom: 3.6rem;\r\n\twidth: 100%;\r\n}\r\n#message-warning {\r\n\tcolor: #fa0003;\r\n}\r\n#message-success {\r\n\tcolor: #FF0077;\r\n}\r\n#message-warning i, #message-success i {\r\n\tmargin-right: 10px;\r\n}\r\n\r\n/* form loader */\r\n#submit-loader {\r\n\tdisplay: none;\r\n\tposition: relative;\r\n\tleft: 0;\r\n\ttop: 1.8rem;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n#submit-loader .text-loader {\r\n\tdisplay: none;\r\n\tfont-family: \"poppins-bold\", sans-serif;\r\n\tcolor: #FFFFFF;\r\n\tletter-spacing: .3rem;\r\n\ttext-transform: uppercase;\r\n}\r\n.oldie #submit-loader .s-loader {\r\n\tdisplay: none;\r\n}\r\n.oldie #submit-loader .text-loader {\r\n\tdisplay: block;\r\n}\r\n.contact-info {\r\n\tmargin: 4.8rem auto 0;\r\n\tfont-family: \"poppins-regular\", sans-serif;\r\n\tfont-size: 1.5rem;\r\n\ttext-align: center;\r\n}\r\n.contact-info .collapse {\r\n\tpadding: 0;\r\n}\r\n.contact-info .icon {\r\n\tmargin-bottom: 2.1rem;\r\n}\r\n.contact-info .icon i {\r\n\tfont-size: 4.2rem;\r\n\tcolor: #FFFFFF;\r\n}\r\n.contact-info h5 {\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n/*\r\n* Footer\r\n*/\r\n.social li{\r\n\tfont-size: 2.1rem;\r\n\tdisplay: inline-block;\r\n\tmargin-right: 100px\r\n}\r\n\r\n/*\r\n\tChat\r\n*/\r\n\r\n.str-chat {\r\n\tzoom: 1;\r\n\twidth: 30%;\r\n\tborder-radius: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.3d47b47faa725741613b.hot-update.js.map