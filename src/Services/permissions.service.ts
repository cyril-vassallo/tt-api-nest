import { Injectable } from '@nestjs/common';
import { PermissionsEnum } from '../enums/enums';

@Injectable()
export class PermissionService {
  public userPermissions(): string[] {
    return [
      PermissionsEnum.CAN_ACCESS_SETTINGS,
      PermissionsEnum.CAN_EDIT_TASK,
      PermissionsEnum.CAN_SEE_PARTNER_TASKS,
      PermissionsEnum.CAN_CLEAR_USER_HISTORY,
      PermissionsEnum.CAN_CLEAR_TODAY_HISTORY,
    ];
  }

  public adminPermissions(): string[] {
    return [
      PermissionsEnum.CAN_ACCESS_SETTINGS,
      PermissionsEnum.CAN_EDIT_TASK,
      PermissionsEnum.CAN_SEE_PARTNER_TASKS,
      PermissionsEnum.CAN_CLEAR_USER_HISTORY,
      PermissionsEnum.CAN_CLEAR_TODAY_HISTORY,
      PermissionsEnum.CAN_CLEAR_APP_HISTORY,
    ];
  }
}
