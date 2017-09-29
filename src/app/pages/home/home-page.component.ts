import {AfterViewInit, Component} from '@angular/core';
import {EasterEggService} from '../../shared/easter-egg.service';

declare let $;

@Component({
  selector: 'ir-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {
  private greetings = ['Hello!', 'Salut!', 'Hallo!', 'Hola!', 'Konnichiwa!', 'Hi!', 'Hey!'];
  greeting: string;
  randomLike: string;
  projects: Array<any>;

  constructor(private easterEggService: EasterEggService) {
    this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
    let likes = ['electronicMusic', 'goToCinema', 'goCiclying',
      'goingToTheMountain', 'playingSquash', 'myGirlfriend', 'swimming', 'diving', 'coding', 'playVideogames',
      'driving', 'sleeping'];

    this.loopLikes(likes, 0);

    this.projects = [
      {
        id: '001',
        name: 'PPSWebsite',
        link: 'https://www.peluqueriapilarsilvan.com'
      },
      {
        id: '002',
        name: 'PackingUpApp',
        link: 'https://play.google.com/store/apps/details?id=packingup.core.activities&hl=es'
      },
      {
        id: '003',
        name: 'SECD',
        link: 'https://sourceforge.net/projects/secd/'
      },
      {
        id: '004',
        name: 'GSCApp',
        link: 'https://play.google.com/store/apps/details?id=gijonsquashclub.liga'
      },
      {
        id: '005',
        name: 'thisWebpage',
        link: 'https://github.com/Ismaestro/ismaelramos'
      },
    ];
  }

  loopLikes(likes, index) {
    if (index === likes.length) {
      return this.loopLikes(likes, 0);
    }
    this.randomLike = likes[index];
    setTimeout(() => {
      this.loopLikes(likes, index + 1);
    }, 3000);
  }

  ngAfterViewInit() {
    $('#greeting').textillate({in: {delay: 200, effect: 'slideInLeft'}});
  }

  clickGreeting() {
    $('#greeting span').textillate({in: {effect: 'hinge'}});
    this.easterEggService.decreaseCounter();
  }

  clickSmile() {
    $('#smile span').textillate({
      in: {
        effect: 'flash', callback: () => {
          $('#smile span').hide();
          this.easterEggService.decreaseCounter();
        }
      }
    });
  }
}
