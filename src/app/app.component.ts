import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  tripleCount: Signal<number> = computed(() => this.doubleCount() * 2);

  increase() {
    this.count.update((count) => count + 1);
  }

  decrease() {
    this.count.update((count) => count - 1);
  }

  restart() {
    this.count.set(0);
  }
}
