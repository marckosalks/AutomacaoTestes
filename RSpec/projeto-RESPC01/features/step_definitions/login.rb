Dado('que loguei') do
    visit ''
    sleep 5
end

Quando('ele digitar as credeniais validas') do
    @test = LoginPage.new
    @test.userLogin
end

Entao('deve acessar o site com sucesso ') do
    @home = HomePage.new
    @home.checkLoginSuccessful
end