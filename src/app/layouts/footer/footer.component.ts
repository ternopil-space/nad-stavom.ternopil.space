import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-footer',
	imports: [RouterLink, RouterLinkActive, TranslateDirective],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	protected readonly navItems = [
		{ label: 'Nav', icon: 'navigation', route: '/navigation', exact: true },
		{ label: 'Menu', icon: 'restaurant_menu', route: '/menu', exact: true },
		{ label: 'About', icon: 'info', route: '/about', exact: true },
		{ label: 'Events', icon: 'event', route: '/events', exact: true },
		{ label: 'Socials', icon: 'share', route: '/socials', exact: true },
	];
}
