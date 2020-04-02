import { TokenStorageService } from './../services/TokenStorageService';
import { AuthService } from './../services/AuthService';
import { ActivatedRoute } from '@angular/router';
import { CommandService } from './../services/command-service';
import { CommandDto } from './../model/rest.d';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { concat } from 'rxjs';
import { JwtResponse } from '../services/JwtResponse';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.page.html',
  styleUrls: ['./add-command.page.scss'],
})
export class AddCommandPage implements OnInit {
  commande: CommandDto = {} as CommandDto;
  jwtResponse: JwtResponse = new JwtResponse();
  newDate = new Date().toString();

  addCommandForm = new FormGroup({
    createAt: new FormControl('', Validators.required),
    comment: new FormControl('')
  });
  constructor(private commandService: CommandService, private storage: TokenStorageService,
    private route: ActivatedRoute, private authService: AuthService) {
    this.route.params.subscribe(
      params => {

      }
    )
   }

  ngOnInit() {
  }
  addCommand() {
    const command = this.addCommandForm.value;
    this.authService.getUSerByUsername(this.storage.getUsername()).subscribe(info => {
      this.jwtResponse = info;
      this.commandService.saveCommand(command, this.jwtResponse.id).subscribe(data => {
        this.commande = data;
        window.location.reload();
      });
      this.jwtResponse = info;
    });
  }
}
