# Jobly
- Frontend: React
- Backend: express, postgresql

## Features Complete
- Login/Signup
- Users can: 
    - view companies, 
    - view jobs

## Getting Up & Running
### Backend
1. Node Environment Setup
    ```console
    $ npm install
    ```
2. Database Setup
    ```console
    $ psql
    =# CREATE DATABASE jobly;
    =# (control-d)
    psql db_name -f jobly.sql
    ```
3. Run the Server
    ```console
    $ npm start
    ```

### Frontend
1. Environment Setup
    ```console
    $ npm install
    ```
    
2. Run the Server
    ```console
    $ npm start
    ```

## Database Models
![db_models_diagram](./db_models_diagram.jpg)

## React Component Diagram
![db_models_diagram](./db_models_diagram.jpg)

## Features Outstanding
- Sending direct messages
- Allow admin users

## Dev Roadmap
1. Ensure comprehensive testing (priority: add testing for message model)
2. Make mobile friendly
    - Fix alignment of profile image in a message.
    - Message spacing on mobile
    - Logout button placement on mobile
6. Fix profile picture
7. Optimize SQL Query counts
