import RouteController from "app.route";
import CoreModule from "core/core.module";
import WidgetsModule from "widgets/widgets.module";
import LayoutModule from "layout/layout.module";
import HomeModule from "home/home.module";

export default angular
    .module("app", [

        /* shared modules */
        CoreModule.name,
        WidgetsModule.name,

        /* feature areas */
        LayoutModule.name,
        HomeModule.name
    ])
    .controller("RouteController", RouteController);