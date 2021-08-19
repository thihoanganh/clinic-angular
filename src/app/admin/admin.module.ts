import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';


import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';
import { AuthGuard } from '../guards/auth-guard.service';
import { StaffComponent } from './components/staff/staff.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from '../services/user.service';
import { StaffService } from '../services/staff.service';
import { DatePipe } from '@angular/common';
import { ManageComponent } from './components/seminar/manage/manage.component';
import { FeedbackComponent } from './components/seminar/feedback/feedback.component';
import { MailComponent } from './components/seminar/mail/mail.component';
import { SeminarService } from '../services/seminar.service';
import { CreateComponent } from './components/seminar/create/create.component';
import { CKEditorModule } from 'ng2-ckeditor-12';
import { EmailComponent } from './components/seminar/email/email.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { MedicineService } from '../services/medicine.service';
import { SmnRegisteredComponent } from './components/seminar/smn-registered/smn-registered.component';

import { ScientificEquipmentService } from '../services/scientificequipment.service';
import { Scientificequipment } from '../models/scientificequipment.model';
import { ScientificeqipmentComponent } from './components/scientificequipment/scientificequipment.component';
import { WarehouseScientificEquipmentComponent } from './components/scientificequipment/warehousescientificequipment.component';
import { WarehouseMedicineComponent } from './components/medicine/warehousemedicine.component';
import { InventoryMedicineComponent } from './components/medicine/inventorymedicine.component';
import { InventoryScientificEquipmentComponent } from './components/scientificequipment/inventoryscientificequipment.component';
import { StatisticalCustomerComponent } from './components/statistical/customer.component';
import { StatisticalMedicineComponent } from './components/statistical/medicine.component';
import { ReceiptMedicineService } from '../services/receipmedicineservice.service';
import { ReceiptScientificEquipmentService } from '../services/receiptscientificequipment.service';
import { PriceProductService } from '../services/priceproduct.service';
import { StatisticalService } from '../services/statistical.service';
import { StatisticalScientificEquipmentComponent } from './components/statistical/scientificequipment.component';

import { FeedbackDetailComponent } from './components/seminar/feedback-detail/feedback-detail.component';
import { ManageLectureComponent } from './components/lecture/manage/manage.component';
import { LectureService } from '../services/lecture.service';
import { CategoryComponent } from './components/lecture/category/category.component';
import { LectureCreateComponent } from './components/lecture/create/create.component';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { CreateQuizComponent } from './components/quiz/create/create.component';
import { QuizUpdateComponent } from './components/quiz/update/update.component';


export function tokenGetter(){
  return localStorage.getItem('admin-jwt')
}

@NgModule({
  declarations: [
    AdminComponent,
    StaffComponent,
    UserComponent,
    ManageComponent,
    FeedbackComponent,
    MailComponent,
    CreateComponent,
    EmailComponent,
    SmnRegisteredComponent,
    FeedbackDetailComponent,
    MedicineComponent,
    SmnRegisteredComponent,
    ScientificeqipmentComponent,
    WarehouseScientificEquipmentComponent,
    WarehouseMedicineComponent,
    InventoryMedicineComponent,
    InventoryScientificEquipmentComponent,
    StatisticalMedicineComponent,
    StatisticalCustomerComponent,
    StatisticalScientificEquipmentComponent,
    ManageLectureComponent,
    CategoryComponent,
    LectureCreateComponent,
    QuizComponent,
    CreateQuizComponent,
    QuizUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    AdminRouting,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:['localhost:5000'],
        disallowedRoutes:[]
      }
    }),
   
    
  ],
  providers: [
    AuthGuard,
    UserService,
    StaffService,
    DatePipe,
    SeminarService,
    MedicineService,
    PriceProductService,
    ScientificEquipmentService,
    ReceiptMedicineService,
    ReceiptScientificEquipmentService,
    StatisticalService,
    LectureService
  ]
})

export class AdminModule {

}