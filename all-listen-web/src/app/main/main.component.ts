import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Search {
  limit: number,
  offset: number,
  s: string,
  type: number,
}

interface Song {
  album: string,
  artist: string,
  duration: number,
  id: number,
  name: string,
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private http: HttpClient, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.audio = this.renderer2.selectRootElement("audio");
    this.changeVol(this.vol);
  }

  public value1: number = 30;
  public vol: number = 50;
  public keyword: string = '';
  public param: Search = {
    limit: 20,
    offset: 0,
    s: '',
    type: 1
  };
  public list: Array<Song> = [];
  public audioUrl: string = '';
  public audio: any;

  search(keyword) {
    let url = 'http://localhost/listen/music/cloud/search';
    this.param.s = keyword;
    this.http.post(url, this.param).subscribe(json => this.list = this.list.concat(<Array<Song>>json));
  }

  getAudio(id) {
    console.log(id);
    let url =  `https://api.imjad.cn/cloudmusic/?type=song&id=${id}`
    this.http.get(url).subscribe(json => {
      this.audioUrl = json['data'][0].url;
      setTimeout(() => {
        this.playOrPause();
      }, 500)
    });
  }

  playOrPause(){
    if(this.audio.paused){
      this.audio.play();
      return;
    }
    this.audio.pause();
  }

  changeVol(num){
    this.audio.volume = num / 100;
  }
}
