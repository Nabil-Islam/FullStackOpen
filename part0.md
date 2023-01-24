
##Excersize 0.4

'''mermaid
sequenceDiagram
    participant browser 
    participant server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of server: activate server 
    server->>browser: HTML document 
    Note right of server: deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of server: activate server
    server->>browser: HTML document 
    Note right of server: deactivate browser
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Note right of server: activate server
    server->>browser: CSS document 
    Note right of server: deactivate browser
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Note right of server: activate server
    server->>browser: JavaScript file 
    Note right of server: deactivate browser
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Note right of server: activate server
    server->>browser: JSON document 
    Note right of server: deactivate browser
    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico
    Note right of server: activate server
    server->>browser: HTML document 
    Note right of server: deactivate browser
'''





