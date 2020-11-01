// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { ModifierStockComponent } from './modifier-stock/modifier-stock.component';
import { ProduitsComponent } from './produits/produits.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
// NgBootstrap
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SupprimerArticleComponent } from './supprimer-article/supprimer-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { InfoComponent } from './info/info.component';
import { RechargeComponent } from './recharge/recharge.component';
import { AnnulerTransComponent } from './annuler-trans/annuler-trans.component';
import { OperationEnCoursComponent } from './operation-en-cours/operation-en-cours.component';
import { ApprovisionnerComponent } from './approvisionner/approvisionner.component';
import { UserComponent } from './user/user.component';
import { RolesComponent } from './roles/roles.component';
import { ModemsComponent } from './modems/modems.component';
import { MasterComponent } from './master/master.component';
import { PopupAddComponent } from './master/popup-add/popup-add.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RechargeDialogComponent } from './recharge/recharge-dialog/recharge-dialog.component';
import { AjouterModemComponent } from './modems/ajouter-modem/ajouter-modem.component';
import { ModifierModemComponent } from './modems/modifier-modem/modifier-modem.component';
import { ConfigurerSimComponent } from './modems/configurer-sim/configurer-sim.component';
import { RestaurerModemComponent } from './modems/restaurer-modem/restaurer-modem.component';
import { ConfigurerModemComponent } from './modems/configurer-modem/configurer-modem.component';
import { EtatModemsComponent } from './modems/etat-modems/etat-modems.component';
import { PopupEditComponent } from './master/popup-edit/popup-edit.component';
import { PopupDisableComponent } from './master/popup-disable/popup-disable.component';
import { PopupModemComponent } from './master/popup-modem/popup-modem.component';

// Partials


@NgModule({
  declarations: [
    ModifierStockComponent,
    ProduitsComponent,
    ConfigurationComponent,
    SupprimerArticleComponent,
    ModifierArticleComponent,
    InfoComponent,
    RechargeComponent,
    AnnulerTransComponent,
    OperationEnCoursComponent,
    ApprovisionnerComponent,
    UserComponent,
    RolesComponent,
    ModemsComponent,
    MasterComponent,
    PopupAddComponent,
    RechargeDialogComponent,
    AjouterModemComponent,
    ModifierModemComponent,
    ConfigurerSimComponent,
    RestaurerModemComponent,
    ConfigurerModemComponent,
    EtatModemsComponent,
    PopupEditComponent,
    PopupDisableComponent,
    PopupModemComponent],
    entryComponents: [PopupAddComponent,
    RechargeDialogComponent,
    PopupEditComponent,
    PopupDisableComponent,
    PopupModemComponent],
  exports: [],
  imports: [
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatDividerModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    PartialsModule,
    MailModule,
    ECommerceModule,
    UserManagementModule,
    MatTabsModule,
    MatStepperModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    // tslint:disable-next-line: deprecation
    NgbNavModule,
		NgbTooltipModule


  ],
  providers: []
})
export class PagesModule {
}
