import { Controller, Get, UseGuards } from '@nestjs/common';
import { NavigationService } from '../Services/navigation.service';
import { ConfigService } from '@nestjs/config';
import { NavigationAndMeta } from '../Types/types';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('/navigation')
export class NavigationController {
  constructor(
    private readonly navigationService: NavigationService,
    private configService: ConfigService,
  ) {}

  @Get()
  getNavigation(): NavigationAndMeta {
    return {
      data: this.navigationService.getNavigation(),
      meta: {
        method: 'GET',
        urn: '/navigation',
        uri: this.configService.get<string>('API_ENDPOINT') + '/navigation',
      },
    };
  }
}
