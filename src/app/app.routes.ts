import { Routes } from '@angular/router';
import { HorizontalScrollComponent } from './components/horizontal-scroll/horizontal-scroll.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TeamComponent } from './components/team/team.component';
import { TeamHorizontalScrollComponent } from './components/team-horizontal-scroll/team-horizontal-scroll.component';
import { ValuePropsComponent } from './components/value-props/value-props.component';
import { ScrollCardsComponent } from './components/scroll-cards/scroll-cards.component';
import { TextAnimationComponent } from './components/text-animation/text-animation.component';
import { LeftFadeCardsComponent } from './components/left-fade-cards/left-fade-cards.component';
import { HorizontalScrollCardsComponent } from './components/why-Us-Folder/horizontal-scroll-cards/horizontal-scroll-cards.component';
import { MarqueeEffectComponent } from './components/Marquee-Effect-Folder/marquee-effect/marquee-effect.component';
import { NewMarqueeEffectComponent } from './components/Marquee-Effect-Folder/new-marquee-effect/new-marquee-effect.component';
import { PortfolioComponent } from './components/portfolio-Folder/portfolio/portfolio.component';
import { LeftCardComponent } from './components/Left-Fade-Folder/left-card/left-card.component';
import { WhyUsNewComponent } from './components/why-Us-Folder/why-us-new/why-us-new.component';
import { Homepage1Component } from './Home-Pages/homepage1/homepage1.component';
import { Homepage4Component } from './Home-Pages/homepage4/homepage4.component';
import { TeamHorizontalComponent } from './components/team-horizontal/team-horizontal.component';
import { Homepage3Component } from './Home-Pages/homepage3/homepage3.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { MainTeamComponent } from './main-team/main-team.component';
import { LateralSectionComponent } from './lateral-section/lateral-section.component';

export const routes: Routes = [
    {
        path: 'horizontal-scroll', component: HorizontalScrollComponent
    },
    {
        path: 'landing-page', component: LandingPageComponent
    },
    {
        path: 'parallax', component: ParallaxComponent
    },
    {
        path: 'team', component: TeamComponent
    },
    {
        path: 'team-scroll', component: TeamHorizontalScrollComponent
    },
    {
        path: 'value', component: ValuePropsComponent
    },
    {
        path: 'scroll-cards', component: ScrollCardsComponent
    },
    {
        path: 'text-animation', component: TextAnimationComponent
    },
    {
        path: 'left', component: LeftFadeCardsComponent
    },
    {
        path: 'value-props', component: HorizontalScrollCardsComponent
    },
    {
        path: 'marquee', component: MarqueeEffectComponent
    },
    {
        path: 'new-marquee', component: NewMarqueeEffectComponent
    },
    {
        path: 'portfolio', component: PortfolioComponent
    },
    {
        path: 'left-fade', component: LeftCardComponent
    },

    {
        path: 'homepage1', component: Homepage1Component
    },
    {
        path: '', pathMatch: 'full', component: Homepage3Component
    },
    {
        path: 'homepage4', component: Homepage4Component
    },
    {
        path: 'why-us', component: WhyUsNewComponent
    },
    {
        path: 'new-team', component: TeamHorizontalComponent
    },
    {
        path: 'teams-page', component: NewTeamComponent
    },
    {
        path: 'team-1', component: MainTeamComponent
    },
    {
        path: 'lateral-section', component: LateralSectionComponent
    }
];
