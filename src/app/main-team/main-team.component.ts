import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';
import { CommonModule } from '@angular/common';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-main-team',
  standalone: true,
  imports: [TeamMemberCardComponent, CommonModule],
  templateUrl: './main-team.component.html',
  styleUrl: './main-team.component.scss'
})
export class MainTeamComponent implements OnInit, AfterViewInit {
  EthosInvestDescription: string = "";
  teamDescription: string = "";
  teamTitle: string = "";
  ethosInvestTitle: string = "";
  teamMembers: Array<any> = [{}];
  answerState: string = 'hidden';

  constructor() {

  }

  ngAfterViewInit(): void {
    this.animateTeamTitle();
  }
  
  animateTeamTitle(): void {
    const teamTitle = document.getElementById('meetTeamContainer');
    const leadershipContainer = document.getElementById('leadershipContainer');
  
    ScrollTrigger.create({
      trigger: teamTitle,
      start: 'top top',
      endTrigger: leadershipContainer,
      end: 'top top', // Adjust the end point to when the leadership container starts overlapping
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress >= 0.9) { // Adjust this value based on when you want the fade to start
          gsap.to(teamTitle, {
            opacity: 0,
            duration: 1, // Duration of the fade-out
            ease: 'power1.out',
          });
        } else {
          gsap.to(teamTitle, {
            opacity: 1,
            duration: 1,
            ease: 'power1.out',
          });
        }
      }
    });
  }
  
 
  toggleAnswerState() {
    this.answerState = this.answerState === 'hidden' ? 'visible' : 'hidden';
  }
  

  ngOnInit(): void {
    this.teamMembers = [{
      fullName: "John Doe",
      imageUrl: "assets/sample-profile-image.png",
      linkedinAddress: "https://www.linkedin.com/in/johndoe",
      designation: "Software Engineer",
      bio: "John Doe is a skilled software engineer with over 10 years of experience in web development..."
    },
    {
      fullName: "John Doe",
      imageUrl: "assets/sample-profile-image.png",
      linkedinAddress: "https://www.linkedin.com/in/johndoe",
      designation: "Software Engineer",
      bio: "John Doe is a skilled software engineer with over 10 years of experience in web development..."
    },
    {
      fullName: "John Doe",
      imageUrl: "assets/sample-profile-image.png",
      linkedinAddress: "https://www.linkedin.com/in/johndoe",
      designation: "Software Engineer",
      bio: "John Doe is a skilled software engineer with over 10 years of experience in web development..."
    },
    {
      fullName: "John Doe",
      imageUrl: "assets/sample-profile-image.png",
      linkedinAddress: "https://www.linkedin.com/in/johndoe",
      designation: "Software Engineer",
      bio: "John Doe is a skilled software engineer with over 10 years of experience in web development..."
    },
    {
      fullName: "John Doe",
      imageUrl: "assets/sample-profile-image.png",
      linkedinAddress: "https://www.linkedin.com/in/johndoe",
      designation: "Software Engineer",
      bio: "John Doe is a skilled software engineer with over 10 years of experience in web development..."
    },
    {
      fullName: "John Doe",
      imageUrl: "assets/sample-profile-image.png",
      linkedinAddress: "https://www.linkedin.com/in/johndoe",
      designation: "Software Engineer",
      bio: "John Doe is a skilled software engineer with over 10 years of experience in web development..."
    }
    ]
  }


}
