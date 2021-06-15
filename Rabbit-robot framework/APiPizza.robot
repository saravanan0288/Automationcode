*** Settings ***
Library           RequestsLibrary
Library           JSONLibrary

*** Variables ***
&{endpoint}       EP=/api/orders

*** Test Cases ***
Verify the orderAPI
    RequestsLibrary.create Session    ReadGetOrder    https://order-pizza-api.herokuapp.com    disable_warnings=0
    ${headers}=    Create Dictionary    environment=preprod    access_token=string
    ${response}=    RequestsLibrary.get request    ReadGetOrder    ${endpoint}[EP]    headers=${headers}
    log    ${response.status_code}
    log    ${response.content}
    log    ${response.headers}
    log    ${response.json()}
    ${json}=    set variable    ${response.json()}
    ${jsonVal}=    Get Value From Json    ${json}    $.[0].Order_ID
    ${jsonVal}=    Get Value From Json    ${json}    $.[1].Order_ID
    ${jsonVal}=    Get Value From Json    ${json}    $.[2].Order_ID
    log    ${jsonVal}

VerifythePostmethodforOrderAPI
    ${headers}=    Create Dictionary    environment=preprod    access_token=string
    ${body}=    Load JSON From File    ${CURDIR}\\OrderReq.json
    RequestsLibrary.create Session    PostOrder    https://order-pizza-api.herokuapp.com    disable_warnings=0
    ${response}=    RequestsLibrary.post request    PostOrder    ${endpoint}[EP]    headers=${headers}    data=${body}
    log    ${response.status_code}
    log    ${response.content}
    log    ${response.headers}
    log    ${response.json()}

VerifytheDeletemethodforOrderAPI
    Comment    ${headers}=    Create Dictionary    Order_ID=2    access_token=string
    ${headers}=    Create Dictionary    access_token=string
    RequestsLibrary.create Session    DeleteOrder    https://order-pizza-api.herokuapp.com    disable_warnings=0
    ${response}=    RequestsLibrary.DELETE On Session    DeleteOrder    api/orders/0    headers=${headers}
    log    ${response.status_code}
    log    ${response.content}
    log    ${response.headers}
    log    ${response.json()}
