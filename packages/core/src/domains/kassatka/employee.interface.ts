export interface IEmployee {
  id?: number;
  guid?: string;
  name?: string;
  email?: string;
  account_id?: number;
  role_id?: number;
  is_active?: number;
  can_web_login?: number;
  tablet_hide_x_report?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  locale?: string;
  last_notification_id?: number;
  notifications_settings?: unknown;
  notifications_enabled?: number;
}
