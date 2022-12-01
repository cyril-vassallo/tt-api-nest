export enum MimeTypeEnum {
  JPG = 'image/jpeg',
  PNG = 'image/png',
}

export function GetMimeTypeEnumValues(): string[] {
  return Object.values(MimeTypeEnum);
}

export enum PermissionsEnum {
  CAN_ACCESS_SETTINGS = 'CAN_ACCESS_SETTINGS',
  CAN_EDIT_TASK = 'CAN_EDIT_TASK',
  CAN_SEE_PARTNER_TASKS = 'CAN_SEE_PARTNER_TASKS',
  CAN_CLEAR_APP_HISTORY = 'CAN_CLEAR_APP_HISTORY',
  CAN_CLEAR_USER_HISTORY = 'CAN_CLEAR_USER_HISTORY',
  CAN_CLEAR_TODAY_HISTORY = 'CAN_CLEAR_TODAY_HISTORY',
}

export function GetPermissionsEnumValues(): string[] {
  return Object.values(PermissionsEnum);
}
