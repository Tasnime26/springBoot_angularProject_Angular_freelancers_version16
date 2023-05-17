import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FreelancerService } from '../services/freelancer.service';
import { Freelancer } from '../model/freelancer.model';
import { Domaine } from '../model/domaine.model';

@Component({
  selector: 'app-update-freelancer',
  templateUrl: './update-freelancer.component.html'
})
export class UpdateFreelancerComponent implements OnInit {
currentFreelancer = new Freelancer();
domaines! :Domaine[];
updatedDomId! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,

    private freelancerService: FreelancerService) { }

  ngOnInit(): void {
    this.freelancerService.listeDomaines().
subscribe(doms => { 
  this.domaines = doms._embedded.domaines;
console.log(doms);
});
    //console.log(this.activatedRoute.snapshot.params['id']);
    
//this.domaines= this.freelancerService.listeDomaines();
    //this.currentFreelancer = this.freelancerService.consulterFreelancer(this.activatedRoute.snapshot.params['id']);
    
   // this.updatedDomId=this.currentFreelancer.domaine.idDom;
   this.freelancerService.consulterFreelancer(this.activatedRoute.snapshot.params['id']).
 subscribe( freel =>{ this.currentFreelancer = freel;
  this.updatedDomId = 
this.currentFreelancer.domaine.idDom;

 } ) ;

    //console.log(this.currentFreelancer);
  }
  /*updateFreelancer(){
    //console.log(this.currentFreelancer);
  
//this.currentFreelancer.domaine=this.freelancerService.consulterDomaine(this.updatedDomId);
    this.freelancerService.updateFreelancer(this.currentFreelancer);
    this.router.navigate(["freelancers"]);// fy app routing .module
  }*/
  updateFreelancer() {
    this.currentFreelancer.domaine = this.domaines.
 find(dom => dom.idDom == this.updatedDomId)!;

    this.freelancerService.updateFreelancer(this.currentFreelancer).subscribe(prod => {
    this.router.navigate(['freelancers']); }
    );
    }

    
}
