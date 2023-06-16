export enum PAGES {
  HOME = 'HOME',
  FOO = 'FOO',
  BAR = 'BAR',
}

type PageConfig = {
  label: string;
  route: string;
};

export const PAGE_CONFIGS: { [p in PAGES]: PageConfig } = {
  [PAGES.HOME]: {
    label: 'Home',
    route: 'home',
  },
  [PAGES.FOO]: {
    label: 'Foo',
    route: 'foo',
  },
  [PAGES.BAR]: {
    label: 'Bar',
    route: 'bar',
  },
};

export const PAGE_CONFIGS_ENTRIES = Object.entries(PAGE_CONFIGS);
