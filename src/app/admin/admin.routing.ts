import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';

import { AdminComponent } from './admin.component';
import { AddMedicineAppComponent } from './components/addmedicinemana/addmedicineapp.component';
import { BrandComponent } from './components/brand/brand.component';
import { MecineTypeComponent } from './components/mecinetype/mecinetype.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { MedicineDetailComponent } from './components/medicinedetail/medicinedetail.component';
import { MedicineAppComponent } from './components/medicinemana/medicineapp.component';
import { MedicineTypeComponent } from './components/medicinetype/medicinetype.component';
import { OriginComponent } from './components/origin/origin.component';
import { PriceAllComponent } from './components/priceall/price.component';
import { ScientificComponent } from './components/scientific/scientific.component';
import { ScientificDetailComponent } from './components/scientificdetail/scientificdetail.component';
import { InventoryMedicineComponent } from './components/medicine/inventorymedicine.component';
import { WarehouseMedicineComponent } from './components/medicine/warehousemedicine.component';
import { InventoryScientificEquipmentComponent } from './components/scientificequipment/inventoryscientificequipment.component';
import { ScientificeqipmentComponent } from './components/scientificequipment/scientificequipment.component';
import { WarehouseScientificEquipmentComponent } from './components/scientificequipment/warehousescientificequipment.component';
import { CategoryComponent } from './components/lecture/category/category.component';
import { LectureCreateComponent } from './components/lecture/create/create.component';
import { ManageLectureComponent } from './components/lecture/manage/manage.component';
import { CreateQuizComponent } from './components/quiz/create/create.component';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { QuizUpdateComponent } from './components/quiz/update/update.component';
import { CreateComponent } from './components/seminar/create/create.component';
import { EmailComponent } from './components/seminar/email/email.component';
import { FeedbackDetailComponent } from './components/seminar/feedback-detail/feedback-detail.component';
import { FeedbackComponent } from './components/seminar/feedback/feedback.component';
import { MailComponent } from './components/seminar/mail/mail.component';
import { ManageComponent } from './components/seminar/manage/manage.component';
import { SmnRegisteredComponent } from './components/seminar/smn-registered/smn-registered.component';
import { StaffComponent } from './components/staff/staff.component';
import { UpdateMedicineAppComponent } from './components/updatemedicinemana/updatemedicineapp.component';
import { UpdateScientificComponent } from './components/updatescientific/updatescientific.component';
import { StatisticalCustomerComponent } from './components/statistical/customer.component';
import { StatisticalMedicineComponent } from './components/statistical/medicine.component';
import { StatisticalScientificEquipmentComponent } from './components/statistical/scientificequipment.component';
import { UserComponent } from './components/user/user.component';
import { MailsupportComponent } from './components/mailsupport/mailsupport.component';
import { LectureUpdateComponent } from './components/lecture/update/update.component';
import { NotfoundComponent } from '../user/component/notfound/notfound.component';



const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate:[AuthGuard],
        children: [
         {path:'',component:UserComponent},
         {path:'user',component:UserComponent},
         {path:'staff',component:StaffComponent},
         {path:'seminar/manage',component:ManageComponent},
         {path:'seminar/mail',component:MailComponent},
         {path:'seminar/feedback',component:FeedbackComponent},
         {path:'seminar/create',component:CreateComponent},
         {path:'seminar/email/:id',component:EmailComponent},
         {path:'updatepricemedicine',component:MedicineComponent},
         {path:'updatepricescientificequipment',component:ScientificeqipmentComponent},
         {path:'seminar/registered/:id',component:SmnRegisteredComponent},
         {path:'warehousemedicine',component:WarehouseMedicineComponent},
         {path:'warehousescientificequipment',component:WarehouseScientificEquipmentComponent},
         {path:'inventorymedicine',component:InventoryScientificEquipmentComponent},
         {path:'inventoryscientificequipment',component:InventoryMedicineComponent},
         {path:'statisticalsoldmedicine',component:StatisticalMedicineComponent},
         {path:'statisticalsoldscientificequipment',component:StatisticalScientificEquipmentComponent},
         {path:'statisticalcustomer',component:StatisticalCustomerComponent},
         
         {path:'seminar/feedback/details/:id',component:FeedbackDetailComponent},
         {path:'scientific',component:ScientificComponent},
         {path:'scientificdetail',component:ScientificDetailComponent},
         {path:'updatescientific',component:UpdateScientificComponent},
         {path:'medicineapp',component:MedicineAppComponent},
         {path:'medicinedetail',component:MedicineDetailComponent},
         {path:'addmedicineapp',component:AddMedicineAppComponent},
         {path:'updatemedicineapp',component:UpdateMedicineAppComponent},
         {path:'brand',component:BrandComponent},
         {path:'origin',component:OriginComponent},
         {path:'updatepricemedicine',component:MedicineComponent},
         {path:'seminar/registered/:id',component:SmnRegisteredComponent},
         {path:'seminar/feedback/details/:id',component:FeedbackDetailComponent},
         {path:'medicinetype',component:MedicineTypeComponent},
         {path:'mecinetype',component:MecineTypeComponent},
         {path:'priceall',component:PriceAllComponent},

         {path:'lecture',component:ManageLectureComponent},
         {path:'lecture/create',component:LectureCreateComponent},
         {path:'lecture/category',component:CategoryComponent},

         {path:'lecture/quiz',component:QuizComponent},
         {path:'lecture/quiz/create',component:CreateQuizComponent},
         {path:'lecture/quiz/update/:id',component:QuizUpdateComponent},
         {path:'lecture/update/:id',component:LectureUpdateComponent},

         {path:'mail/support',component:MailsupportComponent},
        ]
    },
    {path:'**',component:NotfoundComponent}
   
];

export const AdminRouting = RouterModule.forRoot(routes);