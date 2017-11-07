import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2';
@Component({
    selector: 'ej-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public gridData: any;
    public paging: boolean;
    public pagenum: any;
    public pagesize: number;
    test: any;
    gridref: any;
    chartref: any;
    sorting: boolean;
    listdata: any;
    fieldsdata: any;
    colorval: string;
    datepickval: any;
    btntext: string;
    chartData: any;
    chartlegend: boolean;
    dropdowndata: any;
    fieldsvalues: any;
    value: any;
    option: any;
    circularoption: any;
    @ViewChild('grid') grid: EJComponents<any, any>;
    @ViewChild('button') button: EJComponents<any, any>;
    @ViewChild('chart') chart: EJComponents<any, any>;
    @ViewChild('datepick') datepick: EJComponents<any, any>;
    @ViewChild('colorpicker') colorpicker: EJComponents<any, any>;
    @ViewChild('listview') listview: EJComponents<any, any>;
    @ViewChild('autocomplete') autocomplete: EJComponents<any, any>;
    @ViewChild('dropdown') dropdown: EJComponents<any, any>;
    @ViewChild('numerictextbox') numerictextbox: EJComponents<any, any>;
    @ViewChild('circular') circular: EJComponents<any, any>;
    constructor(){
        this.value = 123;
    }
    change(event){}
    click(event){
    }
}
