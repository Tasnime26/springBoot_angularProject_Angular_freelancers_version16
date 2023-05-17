import { Component, OnInit } from '@angular/core';
import { Freelancer } from '../model/freelancer.model';
import { FreelancerService } from '../services/freelancer.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html'
  
})
export class FreelancersComponent implements OnInit {
  freelancers? : Freelancer[];
  constructor(private freelancerService: FreelancerService,
    public authService: AuthService) { 
  // this.freelancers=[];
  // this.freelancers= this.freelancerService.listFreelancer();
  }
  ngOnInit(): void {

this.chargerFreelancer();
  }
  chargerFreelancer(){
    this.freelancerService.listFreelancer().subscribe(freel => {
      console.log(freel);
      this.freelancers = freel;
});
  }
  /*supprimerFreelancer (free:Freelancer){
   // console.log(free);
   let conf = confirm("Etes-vous sûr ?");
if (conf)//egale true
     this.freelancerService.supprimerFreelancer(free);
   
  }*/
  supprimerFreelancer(f: Freelancer)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.freelancerService.supprimerFreelancer(f.idFreelancer).subscribe(() => {
  console.log("freelancer supprimé");
  this.chargerFreelancer();
  });
  }
}
