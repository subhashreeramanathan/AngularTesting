import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EJAngular2Module } from 'ej-angular2';

describe('ejButton Component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('#btn'));
        el = de.nativeElement;
      });
  }));
  it('Attribute(class) Rendering', () => {
    fixture.detectChanges();
    expect(el.className).toContain('e-button e-js');
  });
  it('Click Event Rendering', () => {
    comp.btntext = 'mybutton';
    fixture.detectChanges();
    comp.button.widget.model.click();
    expect(comp.btntext).toBeDefined(comp.button.widget.model.text);
  });
  afterAll(() => {
    el.remove();
  });
});

describe('ejGrid Component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('ej-grid'));
        el = de.nativeElement;
      });
  }));

  it('Attribute(class) Rendering', () => {
    fixture.detectChanges();
    expect(el.className).toContain('e-grid e-js');
  });

  it('Iterdiff(Array)(dataSource) Property Rendering', () => {
    comp.gridData = [{
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5,
      OrderDate: new Date(8364186e5), Freight: 32.38
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6,
      OrderDate: new Date(836505e6), Freight: 11.61
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4,
      OrderDate: new Date(8367642e5), Freight: 65.83
    },
    {
      OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3,
      OrderDate: new Date(8367642e5), Freight: 41.34
    }];
    fixture.detectChanges();
    expect(comp.gridData.length).toBe(comp.grid.widget.model.dataSource().length);
    comp.gridData.push({
      OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4,
      OrderDate: new Date(8368506e5), Freight: 51.3
    });
    fixture.detectChanges();
    expect(comp.gridData.length).toBe(comp.grid.widget.model.dataSource().length);
  });

  it('Property(allowPaging) Binding', () => {
    comp.paging = true;
    fixture.detectChanges();
    expect(comp.grid.widget.model.allowPaging).toBe(true);
  });

  afterAll(() => {
    el.remove();
  });
});

describe('ejChart Component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('ej-chart'));
        el = de.nativeElement;
      });
  }));
  it('Chart Component Rendering', () => {
    fixture.detectChanges();
    expect(comp.chart).toBeDefined();
  });
  it('Attribute(class) Rendering', () => {
    fixture.detectChanges();
    expect(el.className).toContain('e-datavisualization-chart e-js');
  });
  
  it('TwoWay Binding(dataSource) Property Rendering', () => {
    comp.chartlegend = true;
    fixture.detectChanges();
    expect(comp.chartlegend).toBeDefined(comp.chart.widget.model.legend.visible);
  });
  afterAll(() => {
    el.remove();
  });
});

describe('ejDatePicker Component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('#datepicker'));
        el = de.nativeElement;
      });
  }));
  it('Property(value) Binding', () => {
    comp.datepickval=new Date("5/5/2014") ;
    fixture.detectChanges();
    expect(comp.datepickval).toBe(comp.datepick.model.value);
  });
  afterAll(() => {
    el.remove();
  });
});

describe('ejColorPicker Component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('#colorpick'));
        el = de.nativeElement;
      });
  }));
  it('ColorPicker Component Rendering', () => {
    fixture.detectChanges();
    expect(comp.colorpicker).toBeDefined();
  });
  it('Property(value) Binding', () => {
    comp.colorval='#278787';
    fixture.detectChanges();
    expect(comp.colorval).toBe(comp.colorpicker.model.value());
    comp.colorval='#278788';
    fixture.detectChanges();
    expect(comp.colorval).toBe(comp.colorpicker.model.value());
  });
  afterAll(() => {
    el.remove();
  });
});

describe('ejListView Component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('ej-listview'));
        el = de.nativeElement;
      });
  }));
  it('Iterdiff(Array)(dataSource) Property Rendering', () => {
    comp.listdata = [{ "Texts": "Discover Music" },
    { "Texts": "Sales and Events" },
    { "Texts": "Categories" },
    { "Texts": "MP3 Albums" }];
    comp.fieldsdata = { "text": "Texts" };
    fixture.detectChanges();
    expect(comp.listdata.length).toBe(comp.listview.widget.model.dataSource().length);
    comp.listdata.push({
      "Texts": "More in Music"
    });
    fixture.detectChanges();
    expect(comp.listdata.length).toBe(comp.listview.widget.model.dataSource().length);
  });
  afterAll(() => {
    el.remove();
  });
});

describe('ejAutocomplete Component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('#autocomp'));
        el = de.nativeElement;
      });
  }));
  it('AutoComplete Component Rendering', () => {
    fixture.detectChanges();
    expect(comp.autocomplete).toBeDefined();
  });
  it('Options Property Rendering', () => {
    comp.option = {
      width: '100%', fields:'fields', dataSource: 'states'
    };
    comp.option.dataSource = [ { index: 's1', countryName: 'Alabama' }, { index: 's2', countryName: 'Alaska' },
    { index: 's3', countryName: 'Arizona' } ];
    comp.option.fields = { key: 'index', text: 'countryName' };
    fixture.detectChanges();
    expect(comp.autocomplete.widget.model.dataSource).toBeDefined();
  });
  
  afterAll(() => {
    el.remove();
  });
});

describe('ejDropdownList Component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('#dropdownlist'));
        el = de.nativeElement;
      });
  }));
  it('Attribute(class) Property Rendering', () => {
    fixture.detectChanges();
    expect(el.className).toBe('e-dropdownlist e-js');
  });
  it('TwoWay Binding(dataSource) Property Rendering', () => {
    comp.dropdowndata = [
      {text: "ListItem 1", value: "ListItem 1" },
      {text: "ListItem 2", value: "ListItem 2" },
      {text: "ListItem 3", value: "ListItem 3" },
      {text: "ListItem 4", value: "ListItem 4" },
      {text: "ListItem 5", value: "ListItem 5" },
    ];
    comp.fieldsvalues ={ dataSource: comp.dropdowndata, text: "text", value: "value" };
    fixture.detectChanges();
    expect(comp.fieldsvalues.value).toBe('value');
  });
  afterAll(() => {
    el.remove();
  });
});

describe('ejCircularGauge Component', () => {
  let comp: AppComponent; 
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('ej-circulargauge'));
        el = de.nativeElement;
      });
  }));
  it('CircularGauge Component Rendering', () => {
    fixture.detectChanges();
    expect(comp.circular).toBeDefined();
  });
  it('Options Property Rendering', () => {
    comp.circularoption = {
      height: 500, width:500
    }
    fixture.detectChanges();
    expect(comp.circular.widget.model.height).toBe(500);
  });
  afterAll(() => {
    el.remove();
  });
});
describe('ejNumericTextbox Component', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [EJAngular2Module.forRoot()]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('#numeric'));
        el = de.nativeElement;
      });
  }));
  it('NumericTextbox Component Rendering', () => {
    fixture.detectChanges();
    expect(comp.numerictextbox).toBeDefined();
  });
 
  it('ngModel(value) Property Rendering', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(de.nativeElement.value).toBe(123);

      de.nativeElement.value = 234;
      el.dispatchEvent(new Event('input'));

      expect(comp.value).toBe(234);
    });
 
  });
  
  
  afterAll(() => {
    el.remove();
  });
});