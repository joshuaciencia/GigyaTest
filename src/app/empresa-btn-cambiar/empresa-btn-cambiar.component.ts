import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-empresa-btn-cambiar',
    templateUrl: './empresa-btn-cambiar.component.html',
    styleUrls: ['./empresa-btn-cambiar.component.css']
})

export class EmpresaBtnCambiar implements OnInit {

    constructor(){}

    ngOnInit(){
        
    }

    onClick(){
        console.log("Button clicked");
    }

}