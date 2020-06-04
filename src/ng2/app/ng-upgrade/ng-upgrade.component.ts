import { Component } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgUpgradeService } from './ng-upgrade.service';

@Component({
    template: ''
})
export class NgUpgradeComponent {
    constructor(
        private readonly upgrade: UpgradeModule,
        private readonly upgradeService: NgUpgradeService) {
        if (!upgradeService.bootstrapped) {
            this.upgrade.bootstrap(document.body, ['demoApp']);
            this.upgradeService.bootstrapped = true;
        }
    }
}
