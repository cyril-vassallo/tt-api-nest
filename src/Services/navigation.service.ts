import { Injectable } from '@nestjs/common';
import { NavigationItemInterface } from '../Interfaces/interfaces';

@Injectable()
export class NavigationService {
  private navigationItemsFromDb = [
    {
      id: 1,
      label: 'My History',
      path: '/',
      isActive: true,
      title: 'Fill your information',
      componentId: 'app-my-history',
    },
    {
      id: 2,
      label: 'My Settings',
      path: '/my-settings',
      isActive: false,
      title: 'Find here your history settings',
      componentId: 'app-my-setting',
    },
    // {
    //   id: 3,
    //   label: 'My Charts',
    //   path: '/my-charts',
    //   isActive: false,
    //   title: 'Find here all demo charts',
    //   componentId: 'app-charts',
    // },
  ];

  getNavigation(): NavigationItemInterface[] {
    return this.navigationItemsFromDb;
  }
}
