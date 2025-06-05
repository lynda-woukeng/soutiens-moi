import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  montant = 500;
  methodePaiement = 'mtn';
  message = '';

  payer() {
    
    this.message = `Paiement de ${this.montant} FCFA en cours via ${this.methodePaiement.toUpperCase()}...`;

   
    setTimeout(() => {
      this.message = `✅ Paiement réussi ! Vous pouvez maintenant soumettre votre demande d'aide.`;
    }, 3000);
  }
}

