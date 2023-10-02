import { CanActivateFn } from "@angular/router";

export const canActivateUserDetails: CanActivateFn = (route, state) => {
    console.log('Guard Activated');

    if (route.params['id'] === '1') {
        return true;
    }
    return false;
}
