sap.ui.define([
   "sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
   "use strict";

   const Home=  BaseController.extend("sap.ui.demo.nav.controller.Home", {
      onDisplayNotFound(){
         //display the "notFound" target without changing the hash
         this.getRouter().getTargets().display("notFound", {
            fromTarget: "home"
         });
      }
   });

   return Home;

});