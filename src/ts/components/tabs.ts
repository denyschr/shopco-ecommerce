interface TabDetails {
	tabsIndex: number;
	tabsNav: HTMLUListElement;
	tabsNavLine?: HTMLElement;
	tabsNavItems?: NodeListOf<HTMLLIElement>;
	tabsBtns: NodeListOf<HTMLButtonElement>;
	tabsPanels: NodeListOf<HTMLDivElement>;
}

class GrapthTabs {
	tabs: NodeListOf<HTMLDivElement>;
	tabsDetails: TabDetails[] = [];
	constructor() {
		this.tabs = document.querySelectorAll('[data-tabs]');
		try {
			this.tabs.forEach((tab, index): void => {
				tab.setAttribute('data-tabs-index', index.toString());
				const tabsNav = tab.querySelector('[data-tabs-nav]') as HTMLUListElement;
				const tabsBtns: NodeListOf<HTMLButtonElement> = tabsNav.querySelectorAll('button');
				const tabsPanels: NodeListOf<HTMLDivElement> = tab.querySelectorAll('[data-tabs-panels]>*');
				const tabDetails: TabDetails = { tabsIndex: index, tabsNav: tabsNav, tabsBtns: tabsBtns, tabsPanels: tabsPanels };
				this.tabsDetails.push(tabDetails);

			});
		} catch {
			console.error('Tabs not found');
		}
		this.check();
		this.init();
		this.events();
	}
	check() {
		this.tabsDetails.forEach((tabDetails): void => {
			if (tabDetails.tabsBtns.length !== tabDetails.tabsPanels.length) {
				console.error('Number of tabsBtns doesn`t equal number of tabsPanels');
			}
		});
	}
	init(): void {
		this.tabsDetails.forEach((tabDetails): void => {
			tabDetails.tabsNav.setAttribute('role', 'tablist');

			tabDetails.tabsBtns.forEach((tabsBtn, index): void => {
				tabsBtn.setAttribute('role', 'tab');
				tabsBtn.setAttribute('tabindex', String(-1));
				tabsBtn.setAttribute('id', `tab${tabDetails.tabsIndex + 1}-${index + 1}`);
			});

			tabDetails.tabsPanels.forEach((tabsPanel, index): void => {
				tabsPanel.setAttribute('role', 'tabpanel');
				tabsPanel.setAttribute('tabindex', String(-1));
				tabsPanel.setAttribute('aria-labelledby', tabDetails.tabsBtns[index].id);
			});

			tabDetails.tabsBtns[0].removeAttribute('tabindex');
			tabDetails.tabsBtns[0].setAttribute('aria-selected', String(true));
		});

	}
	events() {
		this.tabsDetails.forEach((tabDetails): void => {
			tabDetails.tabsBtns.forEach((tabBtn, index): void => {
				tabBtn.addEventListener('click', (e): void => {
					let currentTab = tabDetails.tabsNav.querySelector('[aria-selected]') as HTMLButtonElement;
					if (e.currentTarget !== currentTab) {
						this.switchTabs(tabDetails.tabsIndex, e.currentTarget as HTMLButtonElement, currentTab);
					}
				});
				tabBtn.addEventListener('keydown', (e): void => {
					let currentIndex = Array.prototype.indexOf.call(tabDetails.tabsBtns, e.currentTarget);

					let dir: number | string | null = null;

					switch (e.which) {
						case 37:
							dir = currentIndex - 1;
							break;
						case 39:
							dir = currentIndex + 1;
							break;
						case 40:
							dir = 'down';
							break;
						default:
							dir = null;
					}

					if (dir !== null) {
						if (dir === 'down') {
							tabDetails.tabsPanels[index].focus();
						} else if (typeof dir === 'number' && tabDetails.tabsBtns[dir]) {
							this.switchTabs(tabDetails.tabsIndex, tabDetails.tabsBtns[dir], e.currentTarget as HTMLButtonElement);
						} else {
							return;
						}
					}

				});
			});
		});
	}
	switchTabs(id: number, newTab: HTMLButtonElement, oldTab: HTMLButtonElement): void {
		newTab.focus();
		newTab.removeAttribute('tabindex');
		newTab.setAttribute('aria-selected', String(true));

		oldTab.removeAttribute('aria-selected');
		oldTab.setAttribute('tabindex', String(-1));

		const currentTabDetails: TabDetails = this.tabsDetails[id];
		let newIndex: number;
		let oldIndex: number;

		newIndex = Array.prototype.indexOf.call(currentTabDetails.tabsBtns, newTab);
		oldIndex = Array.prototype.indexOf.call(currentTabDetails.tabsBtns, oldTab);

		currentTabDetails.tabsPanels[oldIndex].classList.remove('_tab-active');
		currentTabDetails.tabsPanels[newIndex].classList.add('_tab-active');

		currentTabDetails.tabsBtns[oldIndex].classList.remove('_tab-active');
		currentTabDetails.tabsBtns[newIndex].classList.add('_tab-active');
	}
}

export default GrapthTabs;