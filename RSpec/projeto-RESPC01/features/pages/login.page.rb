class LoginPage < SitePrism::Page

    element :emailField, :id, "session_key"
    element :passWordFild, :id, "session_password"
    element :loginButton,:xpath, "//button[@class='sign-in-form__submit-button']"

    def userLogin
        emailField.set "Seu Email"
        passwordFild.set "Sua Senha"
        loginButton.click
    end
end