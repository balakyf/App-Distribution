// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
// Auth
import { AuthGuard } from './core/auth';
import { ModifierStockComponent } from './views/pages/modifier-stock/modifier-stock.component';
import { ProduitsComponent } from './views/pages/produits/produits.component';
import { ConfigurationComponent } from './views/pages/configuration/configuration.component';
import { SupprimerArticleComponent } from './views/pages/supprimer-article/supprimer-article.component';
import { ModifierArticleComponent } from './views/pages/modifier-article/modifier-article.component';
import { AnnulerTransComponent } from './views/pages/annuler-trans/annuler-trans.component';
import { ApprovisionnerComponent } from './views/pages/approvisionner/approvisionner.component';
import { InfoComponent } from './views/pages/info/info.component';
import { ModemsComponent } from './views/pages/modems/modems.component';
import { OperationEnCoursComponent } from './views/pages/operation-en-cours/operation-en-cours.component';
import { RechargeComponent } from './views/pages/recharge/recharge.component';
import { RolesComponent } from './views/pages/roles/roles.component';
import { UserComponent } from './views/pages/user/user.component';
import { MasterComponent } from './views/pages/master/master.component';
import { PopupAddComponent } from './views/pages/master/popup-add/popup-add.component';
import { RechargeDialogComponent } from './views/pages/recharge/recharge-dialog/recharge-dialog.component';
import { AjouterModemComponent } from './views/pages/modems/ajouter-modem/ajouter-modem.component';
import { ConfigurerModemComponent } from './views/pages/modems/configurer-modem/configurer-modem.component';
import { ConfigurerSimComponent } from './views/pages/modems/configurer-sim/configurer-sim.component';
import { EtatModemsComponent } from './views/pages/modems/etat-modems/etat-modems.component';
import { ModifierModemComponent } from './views/pages/modems/modifier-modem/modifier-modem.component';
import { RestaurerModemComponent } from './views/pages/modems/restaurer-modem/restaurer-modem.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)},
  {path: 'error', loadChildren: () => import('./views/pages/error/error.module').then(m => m.ErrorModule)},

  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'modifier-stock', // <= Page URL
        component: ModifierStockComponent // <= Page component registration
      },
      {
        path: 'produits', // <= Page URL
        component: ProduitsComponent // <= Page component registration
      },
      {
        path: 'configuration', // <= Page URL
        component: ConfigurationComponent // <= Page component registration
      },
      {
        path: 'supprimer-article', // <= Page URL
        component: SupprimerArticleComponent // <= Page component registration
      },
      {
        path: 'modifier-article', // <= Page URL
        component: ModifierArticleComponent // <= Page component registration
      },
      {
        path: 'annuler-trans', // <= Page URL
        component: AnnulerTransComponent // <= Page component registration
      },
      {
        path: 'approvisionner', // <= Page URL
        component: ApprovisionnerComponent // <= Page component registration
      },
      {
        path: 'info', // <= Page URL
        component: InfoComponent // <= Page component registration
      },
      {
        path: 'modems', // <= Page URL
        component: ModemsComponent // <= Page component registration
      },
      {
        path: 'operation-en-cours', // <= Page URL
        component: OperationEnCoursComponent // <= Page component registration
      },
      {
        path: 'recharge', // <= Page URL
        component: RechargeComponent // <= Page component registration
      },
      {
        path: 'roles', // <= Page URL
        component: RolesComponent // <= Page component registration
      },
      {
        path: 'user', // <= Page URL
        component: UserComponent // <= Page component registration
      },
      {
        path: 'master', // <= Page URL
        component: MasterComponent // <= Page component registration
      },
      {
        path: 'popup-add', // <= Page URL
        component: PopupAddComponent // <= Page component registration
      },
      {
        path: 'ajouter-modem', // <= Page URL
        component: AjouterModemComponent // <= Page component registration
      },
      {
        path: 'configurer-modem', // <= Page URL
        component: ConfigurerModemComponent // <= Page component registration
      },
      {
        path: 'configurer-sim', // <= Page URL
        component: ConfigurerSimComponent // <= Page component registration
      },
      {
        path: 'etat-modems', // <= Page URL
        component: EtatModemsComponent // <= Page component registration
      },
      {
        path: 'modifier-modem', // <= Page URL
        component: ModifierModemComponent // <= Page component registration
      },
      {
        path: 'restaurer-modem', // <= Page URL
        component: RestaurerModemComponent // <= Page component registration
      },
      {
        path: 'recharge-dialog', // <= Page URL
        component: RechargeDialogComponent // <= Page component registration
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'mail',
        loadChildren: () => import('./views/pages/apps/mail/mail.module').then(m => m.MailModule),
      },
      {
        path: 'ecommerce',
        loadChildren: () => import('./views/pages/apps/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
      },
      {
        path: 'ngbootstrap',
        loadChildren: () => import('./views/pages/ngbootstrap/ngbootstrap.module').then(m => m.NgbootstrapModule),
      },
      {
        path: 'material',
        loadChildren: () => import('./views/pages/material/material.module').then(m => m.MaterialModule),
      },
      {
        path: 'user-management',
        loadChildren: () => import('./views/pages/user-management/user-management.module').then(m => m.UserManagementModule),
      },
      {
        path: 'wizard',
        loadChildren: () => import('./views/pages/wizard/wizard.module').then(m => m.WizardModule),
      },
      {
        path: 'builder',
        loadChildren: () => import('./views/theme/content/builder/builder.module').then(m => m.BuilderModule),
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
    ],
  },
  {path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
