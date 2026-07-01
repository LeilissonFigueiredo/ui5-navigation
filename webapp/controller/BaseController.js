sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], (Controller, History, UIComponent) => {
    "use strict"

    const BaseController = Controller.extend("sap.ui.demo.nav.contrroler.BaseController", {

        getRouter(){
           return UIComponent.getRouterFor(this);
        },
        
        onNavBack() {
            const previousHash = History.getInstance().getPreviousHash();

            if (previousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("appHome",{}, true)
            }

        }

    });

    return BaseController;

})