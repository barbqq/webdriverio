import { it } from 'mocha'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open()

        LoginPage.login('tomsmith', 'SuperSecretPassword!')
        expect(SecurePage.flashAlert).toBeExisting()
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
    it('should logout from login page', () => {
        SecurePage.logoutBtn.click();        
        expect(SecurePage.flashAlert).toBeExisting();
        console.log("testing");
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged out of the secure area!');
    })
})


