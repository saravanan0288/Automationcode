
describe('E2E_testcase_rabitfinance', function() 
 {
    it('VerifytheLandingPageLoaded', function()
    {
      cy.visit('https://staging-finance.rabbitinternet.com/en/product/health-insurance/questions')
      cy.get(".flex-grow-1").should('be.visible')

    })
    it('SelectTheInsuranceProduct', function()
    {
        
      cy.get("[for='product_category-disease']").click()

    })
    it('SelectTheSpecificDisease', function()
    {
        
      cy.get("[for='product_disease_subcategory-seasonalDiseases']").click()

    })
    it('EnterTheValidPhoneNumber', function()
    {
      cy.get("[name='customer_phone']").wait(100)  
      cy.get("[name='customer_phone']").click()
      cy.get("[name='customer_phone']").type('0661235678')

    })
    it('ClickNext', function()
    {
      cy.get("button.btn-block").eq(1).click()

    })
    it('VerifytheFIrstNameLabel', function()
    {
      cy.get("[for='customer_first_name']").should('have.text' , 'What is your first name?')
    })
    it('VerifytheFIrstNameTextbox', function()
    {
      cy.get("[placeholder='Ex: Maleena']").should('be.visible')
      cy.get("[placeholder='Ex: Maleena']").click()
      cy.get("[placeholder='Ex: Maleena']").type('FN')
    })
    it('VerifytheLastNameLabel', function()
    {
      cy.get("[for='customer_last_name']").should('have.text' , 'What is your last name?')
    })
    it('VerifytheLastNameTextbox', function()
    {
      cy.get("[placeholder='Ex: Nateerin']").should('be.visible')
      cy.get("[placeholder='Ex: Nateerin']").click()
      cy.get("[placeholder='Ex: Nateerin']").type('LN')
    })
    it('ClickNext', function()
    {
      cy.get("button.btn-block" , {timeout:60000}).eq(2).should('not.be.disabled')
      cy.get("button.btn-block").eq(2).click()
    })
    it('VerifytheEmail', function()
    {
      cy.get("[for='customer_email']").should('have.text' , 'What is your email?')
    })
    it('VerifyandInouttheEmail_in_Textbox', function()
    {
      cy.get("[placeholder='Ex: example@gmail.com']").should('be.visible')
      cy.get("[placeholder='Ex: example@gmail.com']").click()
      cy.get("[placeholder='Ex: example@gmail.com']").type('Test@mail.com')
    })
    it('ClickNext', function()
    {
      cy.get("button.btn-block" , {timeout:60000}).eq(3).should('not.be.disabled')
      cy.get("button.btn-block").eq(3).click()

    })
    it('VerifytheGenderLabel', function()
    {
      cy.get("[for='customer_gender']").should('have.text' , 'What is your gender?')
    })
    it('SelectTheGenderAsMale', function()
    {
      cy.get("[for='customer_gender-M']").should('be.visible')
      cy.get("[for='customer_gender-M']").click()
    })
    it('VerifytheDOBLabel', function()
    {
      cy.get("[for='customer_dob']").should('have.text' , 'What is your date of birth?')
    })
    it('VerifyandInputDOB', function()
    {
      cy.get("[placeholder='DD / MM / YYYY']" , {timeout:60000}).should('be.visible')
      cy.get("[placeholder='DD / MM / YYYY']").click()
      cy.get("[placeholder='DD / MM / YYYY']").type('07/02/2021')
    })
    it('ClickNext', function()
    {
      cy.get("button.btn-block" , {timeout:60000}).eq(4).should('not.be.disabled')
      cy.get("button.btn-block").eq(4).click()

    })
    it('checkFirstPara', function()
    {
      cy.get("p" , {timeout:60000}).eq(0).should('have.text' , 'In order for Rabbit Finance to process your personal information and to provide services to you, kindly acknowledge the below:')
    })
    it('checkSecondPara', function()
    {
      cy.get("p" , {timeout:60000}).eq(1).should('have.text' , 'I would like to receive latest offers from Rabbit Finance and consent to the collection, use, and disclosure of my data to companies in the Rabbit ecosystem (incl. affiliates, subsidiaries, business partners) for marketing, data analytics, and other business purposes outlined in the privacy policy.')
    })
    it('VerifyPrivacyDocumentandT', function()
    {
      cy.get("[href='https://rabbitfinance.com/en/privacy-policy']").should('be.visible')
      cy.get("[href='https://rabbitfinance.com/en/terms-and-conditions']").should('be.visible')
      
    })
    it('SelectAgree', function()
    {
      cy.get("[for='tc-1']" , {timeout:60000}).should('be.visible')
      cy.get("[for='tc-1']").click()
    })
    it('ShowQuotes', function()
    {
      cy.get("#btn-marketing-consent" , {timeout:60000}).should('not.be.disabled')
      cy.get("#btn-marketing-consent").click()

    })
    it('VerifyTheNextPageAfterSubmitQuote', function()
    {
      //cy.get(".btn-block" ,{timeout:60000}).should('be.visible')
      cy.get(".btn-primary").should('have.text' , 'APPLYBUY NOW360 THB/YearGET FREE ADVICE')
      //cy.get(".btn-primary").click()
    })


    
  
  })