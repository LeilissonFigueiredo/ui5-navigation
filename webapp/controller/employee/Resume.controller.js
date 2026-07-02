sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController",
],(BaseController) => {
    "use strict";

    const Resume = BaseController.extend("sap.ui.demo.nav.controller.employee.Resume", {
        onInit(){
            const router = this.getRouter();
            router.getRoute("employeeResume").attachPatternMatched(this._onObjectMatched, this)

        },

        _onObjectMatched(oEvent){
            const eventArgs = oEvent.getParameter("arguments");
            const view = this.getView();
            view.bindElement({
                path: "/Employees(" + eventArgs.employeeID + ")",
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: () => {
                        view.setBusy(true);
                    },
                    dataReceived: () => {
                        view.setBusy(false);
                    }
                },
                model: "employees"
            })
        },
        
        _onBindingChange(){
            // No data for the binding
            if (!this.getView().getBindingContext("employees")){
                this.getRouter().getTargets().display("notFound");
            }
        },

    });

    return Resume;
})