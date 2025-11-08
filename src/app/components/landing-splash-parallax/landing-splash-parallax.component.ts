import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-landing-splash-parallax',
  imports: [],
  templateUrl: './landing-splash-parallax.component.html',
  styleUrl: './landing-splash-parallax.component.css',
})
export class LandingSplashParallaxComponent
  implements AfterViewInit, OnDestroy
{
  @ViewChild('parallaxImage', { static: false })
  parallaxImage!: ElementRef<HTMLImageElement>;
  @ViewChild('contentSection', { static: false })
  contentSection!: ElementRef<HTMLElement>;

  private onScroll = () => {
    if (!this.parallaxImage) return;
    const scrolled = window.scrollY;
    // ajusta el factor para más/menos parallax
    const factor = 0.35;
    this.parallaxImage.nativeElement.style.transform = `translate(-50%, ${
      scrolled * factor
    }px)`;
  };

  ngAfterViewInit() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }

  scrollDown() {
    const el = this.contentSection?.nativeElement;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }
}
