import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../Service/utilisateur.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit
{

  EtatsVoir:any;
  file:any

  form: any = {
    username: null,
    email: null,
    password: null,
    nom: null,
    profession:null,
    contact: null,
    sexe: null,
    //Role:null,
    //file:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private route: Router,
    private utilis: UtilisateurService,
    ) { }

  ngOnInit(): void {

    // // Tout Etat:::::::::::::::::
    // this.utilis.VoirToutEtat().subscribe(data=>{
    //   this.EtatsVoir=data;
    // });

  }


  // Méthode Ajouter button
  onSubmit(): void {
    const { username, email, password, nom, contact, profession, sexe} = this.form;
    this.authService.register(username, email, password, nom, contact, profession, sexe, this.file).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // Redirection page
        this.route.navigateByUrl("/connexion")

      },

      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
      // Image:::::::::::::
      fileChangm(event: any) {
        this.file = event.target.files[0]
        console.log(this.file)
        }

}
