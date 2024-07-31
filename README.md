# PROJECT DEVELOPMENT

Starting the project using Vite

```
npm create vite@latest
```

Follow the steps to create a new react app with TypeScript in Vite.
This will create a new React App.

Adding Storybook

```
npx storybook@latest init
```

This add all the files for storybook, which allows us to see all of our components in an encapsulated environment.

Afterwhich I manually made the different files within the component library the directories are `/src/components/.../`

Adding testing with `jest`

```
npm init jest@latest
```

```
npm install --save-dev jest
```

Add babel for jest

```
npm install --save-dev @babel/preset-typescript
```

Add Husky for pre-commit checks/hooks

```
npm install --save-dev husky
npx husky init
```

Add Prettier for code formatting/readability

```
npm install --save-dev --save-exact prettier
```

Put precommit hooks into /.husky/pre-commit file

```
    npm run eslint . --ext ts,tsx --report-unused-disable-directives
    npm run prettier . --check
    npm run prettier . --write
    npm run jest
```

Also, in package.json these can be renamed in the following syntax

```
"scripts": {
  ...
  "format": "prettier . --write"
  ...
},
```

Adding eslint is not required because building a react app with vite includes eslint out of the box.

# GITHUB ACTIONS

Add a file directory in the root named `.github` within that directory add a `workflows` folder.
Within the `workflows` folder, add a file, it can be named anything, but the extension must be `.yml`

Within the `.yml` file, enter the code for making sure the same commands in the husky pre-commit hooks run when a commit is pushed to github.

# COMPONENT LIBRARY

This project is a component library that has tests and can be viewed within Storybook.
The components added were the following

1. Button
   - Button.tsx
     > This is the button component for React
   - Button.test.tsx
     > This is the test file for the button component, it tests visibility and colour changing when the button is disabled
   - Button.stories.tsx
     > This is the file for storybook to reference, it contains an enabled and disabled states.
   - Button.types.ts
     > This file contains all the information regarding the variable for our button components.
2. Card
   - Card.tsx
     > This is the card component for React
   - Card.test.tsx
     > This is the test file for the card component, it tests visibility and colour changing when the card is disabled
   - Card.stories.tsx
     > This is the file for storybook to reference, it contains an enabled and disabled states.
   - Card.types.ts
     > This file contains all the information regarding the variable for our card components.
3. Dropdown
   - Dropdown.tsx
     > This is the dropdown component for React
   - Dropdown.test.tsx
     > This is the test file for the dropdown component, it tests visibility and colour changing when the dropdown is disabled
   - Dropdown.stories.tsx
     > This is the file for storybook to reference, it contains an enabled and disabled states.
   - Dropdown.types.ts
     > This file contains all the information regarding the variable for our dropdown components.
4. Label
   - Label.tsx
     > This is the label component for React
   - Label.test.tsx
     > This is the test file for the label component, it tests visibility and colour changing when the label is disabled
   - Label.stories.tsx
     > This is the file for storybook to reference, it contains an enabled and disabled states.
   - Label.types.ts
     > This file contains all the information regarding the variable for our label components.
5. Radio
   - Radio.tsx
     > This is the radio component for React
   - Radio.test.tsx
     > This is the test file for the radio component, it tests visibility and colour changing when the radio is disabled
   - Radio.stories.tsx
     > This is the file for storybook to reference, it contains an enabled and disabled states.
   - Radio.types.ts
     > This file contains all the information regarding the variable for our radio components.
6. Text
   - Text.tsx
     > This is the text component for React
   - Text.test.tsx
     > This is the test file for the text component, it tests visibility and colour changing when the text is disabled
   - Text.stories.tsx
     > This is the file for storybook to reference, it contains an enabled and disabled states.
   - Text.types.ts
     > This file contains all the information regarding the variable for our text components.

# FINAL SITE CONSTRUCTION

The final site is a portfolio website constructed out of the components made within the component library, this is to create a DRY workflow and increase testability through modular application construction.

The portfolio consists of 1 page containing the following

- Basic Information
  > Some basic information about myself
- Work
  > List of past work; Websites/Applications
  > Description of each piece of work
  > Link to the website where the work is hosted
- Skills
  > Languages/Frameworks
  > Tools
  > Methodologies
  > Game Engines
  > Design/Graphics Tools
- Resources
  > List of Resources
  > Description of each resource
  > Link to the resource's webpage
- Developer Setup
  > VsCode Setup
  > Terminal Setup
  > Preferred Editor Font

# REQUIREMENTS

The proper way to run this project requires Docker Desktop, make sure that both Docker and Docker Desktop is installed.

# CLONE

Clone the repository

```
git clone https://github.com/ChrisSmithArt/webd3012_coding_assignment14.git
```

# NAVIGATION

Navigate to the cloned folder

```
cd webd3012_coding_assignment14
```

# TESTING

Run the testing command

```
npm run test
```

Testing is down with `jest`.
This will run the tests for each component running `'component_name'.test.tsx` where the component name is an associated button.
Each .test.tsx file has two tests, one for checking visibility and one for checking if the colour has changed due to the disabled state.

# STORYBOOK

Run storybook to see the UI Component Library

```
npm run storybook
```

# DOCKERFILE

FROM node:20-alpine as build

> Grabbing Node20 and setting it to the variable 'build'

WORKDIR /smith_chris_final_site

> Setting the working directory to smith_chris_final_site

COPY . /smith_chris_final_site

> Copying that working directory

RUN npm install --silent

> installing npm packages silently(so that it doesn't show up in the terminal)

RUN npm run build

> Building the application

FROM ubuntu

> Grabbing ubuntu

RUN apt-get update

> Updating ubuntu

RUN apt-get install nginx -y

> Getting nginx

COPY --from=build /smith_chris_final_site/dist /var/www/html/

> copying our working directory and node20 into the ubuntu platform

EXPOSE 5575

> exposing port 5575 to host on.

CMD ["nginx","-g","daemon off;"]

> This tells Nginx to stay in the foreground. For containers this is useful as best practice is for one container = one process.
> One server (container) has only one service.

# BUILD

This will build the docker image, so that we can mount it into a container.

```
docker build . -t "csmith11-coding-assignment14:v1.0"


```

# RUN

launch the app with the following command
This command will mount the docker image from the Build step into a container.
This will keep the application encapsulated within a Container, where we don't need to worry about conflicts.

```
docker run -dp 5575:80 --name smith_chris_coding_assignment14 csmith11-coding-assignment14:v1.0

```

# ACCESS

The application will be accessible at `http://localhost:5575`
