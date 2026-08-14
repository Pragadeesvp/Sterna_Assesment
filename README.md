# Quick Preview
  <a href="https://assessmentpreview.netlify.app/">Demo Site</a> (Desktop)
 
## Login

**Email:**
- `pragadees@sterna.com`
- `mohan@sterna.com`

**Password:** Any 6-letter password

# LoginApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

## Application Architecture

```mermaid
flowchart TD
    A["Browser"] --> B["index.html"]
    B --> C["main.ts"]
    C --> D["AppModule<br/>app.module.ts"]

    D --> E["AppComponent<br/>app.component.ts"]
    D --> F["AppRoutingModule<br/>app-routing.module.ts"]

    F --> G["/login"]
    F --> H["Protected Routes"]

    G --> I["LoginComponent<br/>login.component.ts"]

    H --> J{"AuthGuard<br/>auth.guard.ts"}

    J -->|Allowed| K["LayoutComponent<br/>layout.component.ts"]
    J -->|Denied| G

    K --> L["DashboardComponent<br/>dashboard.component.ts"]
    K --> M["LocationComponent<br/>location.component.ts"]

    L --> N["DataService"]
    M --> N
