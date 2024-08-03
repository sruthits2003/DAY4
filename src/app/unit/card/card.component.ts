import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  departments=[
    {
      id:1,
      Title:"Aerospace",
      Image:"../../../assets/aero.jpg",
      description: "Pusing boudaries and defending horizons with cutting-edge technologies",
    },
    {
      id:2,
      Title:"Defence",
      Image:"../../../assets/aero.jpg",
      description:"Pusing boudaries and defending horizons with cutting-edge technologies",
    },
    {
      id:3,
      Title:"Banking and financial",
      Image:"../../../assets/bank.jpg",
      description:"Accelerating the cashless economy efficiently by adopting global standards & local priorities",
    },
    {
      id:4,
      Title:"Healthcare",
      Image:"../../../assets/health.jpg",
      description:"Promoting digital innovation & excellence in the healthcare industry",
    },
    {
      id:5,
      Title:"Mobility",
      Image:"../../../assets/mobi.jpg",
      description:"We are Revolutionizing the world of Mobility",
    },
    {
      id:6,
      Title:"Insurance",
      Image:"../../../assets/Insurance.jpg",
      description:"Unlocking the potential of insurance through technology",
    },
    {
      id:7,
      Title:"Locomotive",
      Image:"../../../assets/loco.jpg",
      description:"Elevating Locomotive Experiences through Innovative Technologies",
    },
    {
      id:7,
      Title:"Industrial",
      Image:"../../../assets/industry.png",
      description:"Where Power Meets Production: Redefining Manufacturing & Energy",
    },




  ]
}
