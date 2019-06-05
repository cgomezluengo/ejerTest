import { Component, OnInit } from '@angular/core';
import { UnitService } from '../shared/unit.service';
import { Unit } from '../shared/unit.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  allUnit: Unit[];
  visibleUnit: Unit[];
  skip = 0;
  top = 20;
  showAnterior = false;
  constructor(public unitService: UnitService) {}
  
  ngOnInit() {
  this.mostrarUnit()
  
  }

  validarAnterior(){
    this.showAnterior = (this.skip > 0)
  }

  mostrarUnit(){
    this.validarAnterior()
    this.unitService.getUnit(this.skip,this.top).subscribe(
      units => {
        this.allUnit = units;
        this.visibleUnit = this.allUnit;
        
      }
    );

  }
 

  mostrarSiguientes(){
    
    this.skip = this.skip + 20;
    this.top = this.top + 20;
    
    this.mostrarUnit()

  }

  mostrarAnterior(){
    this.skip = this.skip - 20;
    this.top = this.top - 20;
    this.mostrarUnit()

  }

}
