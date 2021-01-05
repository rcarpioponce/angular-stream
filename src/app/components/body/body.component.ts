import { Component, NgModule, OnInit } from '@angular/core'
declare var WowzaPlayer: any;
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit{
    mostrar = true;
    frase: any = {
        mensaje: 'Un gran poder requiere una gran resposabilidad',
        autor: 'Ben Parker'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Octopus'];

    sourceUrl = "https://589ff3c36f7e8.streamlock.net:443/livecastevent4/livecastevent4/playlist.m3u8";

    ngOnInit(): void {
        this.getLive();
    }
    getLive(){
        console.log('live..');
        let sourceURL = this.sourceUrl;
        WowzaPlayer.create('MediaPlayerMiniPlayer',
        {
                  "license":"PLAY1-nFmXh-heXkR-uhmAv-dbujM-K6eMw",
         "title":"Live Streaming",
         "description":"",
         "sourceURL":sourceURL,
         "autoPlay":false,
         "volume":"75",
         "mute":false,
         "loop":false,
         "audioOnly":false,
         "uiShowQuickRewind":true,
         "uiQuickRewindSeconds":"30"
        }
        );        
    }    
}