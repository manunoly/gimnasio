import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  playerId;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
