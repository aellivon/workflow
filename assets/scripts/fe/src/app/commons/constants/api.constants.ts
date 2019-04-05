import { urlsafe } from '../utils/http.utils';

/* USERS ENDPOINTS
 */
export const USERS = '/api/users/';


/* AUTH ENDPOINTS
 */
export const AUTH_USER = urlsafe(USERS, 'auth');
export const AUTH_LOGIN = urlsafe(AUTH_USER, 'login');


/* SLACK AUTH ENDPOINTS
 */
export const SLACKAUTH = urlsafe(AUTH_USER, 'slack');
export const SLACKAUTH_CONFIG = urlsafe(SLACKAUTH, 'config');
export const SLACKAUTH_USER_TOKEN = urlsafe(SLACKAUTH, 'token');


/* PAYROLL ENDPOINTS
 */
export const PAYROLL = '/api/payroll/';

// This isn't by definition a "constant" url since the id changes, but this will let us
//   put all the api/endpoints in one place.
export const PAYROLL_REPORT = (id: any) => {return urlsafe(PAYROLL, id, 'report')} 