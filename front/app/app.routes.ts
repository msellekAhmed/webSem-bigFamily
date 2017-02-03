import { HomeComponent } from './components/home.component';
import { CreateFamilyComponent } from './components/createFamily.component';
import { GetFamilyComponent } from './components/getFamily.component';
import { AboutComponent } from './components/about.component';
import {AddMemberComponent} from "./components/addMember.component";
import {AuthGuard} from "./guards/auth.guard";
import {SearchComponent} from "./components/search.component";
import {GetByNameComponent} from "./components/getByName.component";
import {GetCommonComponent} from "./components/getCommon.component";
import {GetAnchestryComponent} from "./components/getAnchestry.component";

export const Routes = [
    { path: '', component: HomeComponent },
    { path: 'create', component: CreateFamilyComponent },
    { path: 'getFamily', component: GetFamilyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'anchestry', component: GetAnchestryComponent },
    { path: 'getAnchestryByName', component: GetByNameComponent },
    { path: 'getCommon', component: GetCommonComponent },
    { path: 'addMember', component: AddMemberComponent, canActivate: [AuthGuard] },

    { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },

];