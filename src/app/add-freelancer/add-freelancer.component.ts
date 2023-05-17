import { Component, OnInit } from '@angular/core';
import { Freelancer } from '../model/freelancer.model';
import { FreelancerService } from '../services/freelancer.service';
import { Domaine } from '../model/domaine.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html'
})
export class AddFreelancerComponent implements OnInit {
newFreelancer = new Freelancer();
domaines! :Domaine[];
newIdDom! : number;
newDomaine! : Domaine;
 message :String="";
//on a fait  linjection de dependance ily fy para constructeur 
  constructor(private freelancerService: FreelancerService,private router :Router) { }

  ngOnInit(): void {
  //  this.domaines =this.freelancerService.listeDomaines();
  this.freelancerService.listeDomaines().subscribe(doms => {
    this.domaines = doms._embedded.domaines;
    console.log(doms);
  });

  }
/*addFreelancer(){
  //console.log(this.newFreelancer);
  //console.log(this.newIdDom);
 // this.newDomaine = this.freelancerService.consulterDomaine(this.newIdDom);
  this.newFreelancer.domaine = this.newDomaine;
  this.freelancerService.ajouterFreelancer(this.newFreelancer);
  //this.message ="Freelancer "+ this.newFreelancer.nomFreelancer +"ajouté avec succes!";
  this.router.navigate(["freelancers"]);// fy app routing .module
}*/
addFreelancer(){
  this.newFreelancer.domaine = this.domaines.find(dom => dom.idDom == this.newIdDom)!;
  this.freelancerService.ajouterFreelancer(this.newFreelancer)
  .subscribe(freel => {
  console.log(freel);
  this.router.navigate(['freelancers']);
  });
  }
  
}
