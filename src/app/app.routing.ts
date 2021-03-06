import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReceiveComponent } from './profile/receive/receive.component';
import { ParkkeepersComponent } from './profile/parkkeepers/parkkeepers.component';
import { MapComponent } from './profile/map/map.component';
import { EditpropicComponent } from './profile/editpropic/editpropic.component';
import { ProfileeditComponent } from './profile/profileedit/profileedit.component';
import { KeeperregComponent } from './parkkeeper/keeperreg/keeperreg.component';
import { AdminComponent } from './admin/admin.component';
import { RoleGuardServiceGuard } from './auth/role-guard-service.guard';
import { ProfileeditadminComponent } from './admin/profileeditadmin/profileeditadmin.component';
import { AdminmapComponent } from './admin/adminmap/adminmap.component';
import { NewaddedparksComponent } from './admin/newaddedparks/newaddedparks.component';
import { KeepersComponent } from './admin/keepers/keepers.component';
import { OwnersComponent } from './admin/owners/owners.component';
import { OwnerprofileComponent } from './admin/ownerprofile/ownerprofile.component';
import { AdminuploadComponent } from './admin/adminupload/adminupload.component';
import { AdminreceiveComponent } from './admin/adminreceive/adminreceive.component';
import { KeeperprofileComponent } from './parkkeeper/keeperprofile/keeperprofile.component';
import { ResetpwComponent } from './signup/resetpw/resetpw.component';
import { ParkingslotComponent } from './parkkeeper/parkingslot/parkingslot.component';
import { NewpwComponent } from './signup/newpw/newpw.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'keeper',     component: KeeperprofileComponent ,canActivate:[RoleGuardServiceGuard],data: { 
      expectedRole: 'keeper'
    }
    },


    { path: 'user-profile',     component: ProfileComponent ,canActivate:[RoleGuardServiceGuard],data: { 
      expectedRole: 'user'
    }
    ,children:[
      {path: 'send', component: FileUploadComponent},
    //   {path: 'settings', component: SettingsComponent},
      {path: 'inbox', component: ReceiveComponent},
      {path: 'edit', component: ProfileeditComponent},
      { path: 'myparks',      component: ParkkeepersComponent },
      { path: 'map',      component: MapComponent },
      { path: 'pic',      component:EditpropicComponent },
      { path: 'regkeeper',      component:KeeperregComponent },
      { path: 'keeper',           component: KeeperprofileComponent },
      { path: '',   redirectTo: 'userHome', pathMatch: 'full' },
 
    ]
    },
    { path: 'admin',           component: AdminComponent,canActivate:[RoleGuardServiceGuard],data: { 
      expectedRole: 'admin'
    } ,children:[
      {path: 'edit', component:ProfileeditadminComponent},
      { path: 'map',      component:AdminmapComponent },
      { path: 'newparks',      component:KeepersComponent},
      {path: 'owners', component:OwnersComponent},
      {path: 'sendfile/:id', component:AdminuploadComponent},

      {path: 'messages', component:AdminreceiveComponent},
    ] },
    {path: 'owner/:id', component:OwnerprofileComponent,canActivate:[RoleGuardServiceGuard],data: { 
      expectedRole: 'admin'
    }},
    { path: 'signup',           component: SignupComponent },
    { path: 'resetpassword',           component: ResetpwComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'signin',      component: SigninComponent },
    { path: 'slot',      component: ParkingslotComponent },
    { path: 'reset/:token',      component: NewpwComponent },
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
