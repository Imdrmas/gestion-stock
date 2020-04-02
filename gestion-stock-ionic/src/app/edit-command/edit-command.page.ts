import { Component, OnInit } from '@angular/core';
import { CommandDto } from '../model/rest';
import { JwtResponse } from '../services/JwtResponse';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommandService } from '../services/command-service';
import { TokenStorageService } from '../services/TokenStorageService';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-edit-command',
  templateUrl: './edit-command.page.html',
  styleUrls: ['./edit-command.page.scss'],
})
export class EditCommandPage implements OnInit {
  id: any;
  commande: CommandDto = {} as CommandDto;
  newDate: any;

  addCommandForm = new FormGroup({
    createAt: new FormControl('', Validators.required),
    comment: new FormControl('')
  });
  
  constructor(private commandService: CommandService) {}

  ngOnInit() {
    this.commandService.findCommandById(this.id).subscribe(data => {
      this.commande = data;
    });
  }
  addCommand() {
    const command = this.addCommandForm.value;
      this.commandService.updateCommand(command, this.id).subscribe(data => {
        this.commande = data;
        window.location.reload();
      });
  }
}