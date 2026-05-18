import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { companyProfile } from '../../feature/company/company.data';

@Component({
	imports: [NgOptimizedImage, TranslateDirective],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {
	protected readonly company = companyProfile;
	protected readonly mapsUrl = 'https://maps.app.goo.gl/P3iGmyqzQQkoJRAeA';
	protected readonly instagramUrl = 'https://www.instagram.com/nadsstavom/';
	protected readonly telHref = `tel:${companyProfile.phone.replaceAll(' ', '')}`;
}
