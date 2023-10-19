import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CityControllerService } from './api/cityController.service';
import { ClassControllerService } from './api/classController.service';
import { DistrictControllerService } from './api/districtController.service';
import { LevelSchoolControllerService } from './api/levelSchoolController.service';
import { MajoredControllerService } from './api/majoredController.service';
import { SubjectControllerService } from './api/subjectController.service';
import { TechClassControllerService } from './api/techClassController.service';
import { TimeTeachControllerService } from './api/timeTeachController.service';
import { UserControllerService } from './api/userController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CityControllerService,
    ClassControllerService,
    DistrictControllerService,
    LevelSchoolControllerService,
    MajoredControllerService,
    SubjectControllerService,
    TechClassControllerService,
    TimeTeachControllerService,
    UserControllerService,
]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
