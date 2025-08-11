# Sugil's webpage hosted on GitHub Pages

## Message to my future-self

In case you forgot how you built & organized your static website:
- You used Jekyll for generating pages, and choose to stay with Bootstrap for the UI.
- Most of non-generic contents are written in `*.md` files in Markdown language. **Don't worry about the technicalities when making every day contents updates.** Just write like blogging.
- Those `*.md` files are nested in layouts in `/_layouts/*.html`. Repeatedly used HTML & CSS & JavaScript components that determine the design layout goes into layouts. Repeatedly used HTML containers (`<div>...</div>`) can be written in these layouts, but it can also be modularized in `/_includes` and called up whenever you need (read below).
    - Layout `*.html` files (in `/_layouts`) determine the design and layout such as `navBar` menus or `body/footer` composition in HTML. They also describe where your `*.md` content goes (`{{ content }}`) as well as where other generic, repeating HTML contents go (such as the "reach me" message at the end of each profile page).
        - In `*.md`, you declare which layout `*.html` that this `*.md` wants to be nested in.
        - Layouts can be nested by other layouts before getting used by an `*.md`. This is useful if you want to include more custom HTML elements for specific pages.
            - For example, `default.html` -> `profile.html` -> `research.md`.
            - Layouts are nested both in `*.html` and `*.md` in the following manner (YAML front matter):

    ```yaml
    ---
    layout: layout_name_here
    ---
    ```

    - Repeatedly used HTML contents (like the "reach me" message at the end of a profile page.) are stored separately as `*.html` files in `/_includes`. In this way, Jekyll can access them through the Liquid template language

    ```liquid
    {% include *.html %}
    ```

    - Repeatedly used variables (like my name or email address) rather than HTML elements (like in `<div>...</div>`) can be simply stored as `*.yml` and called from `/_data` using the following call in HTML:

        ```liquid
        {{ site.data.yml_file_name.variable_name }}
        ```
    
    I choose to use `*.yml` files to store my resume-related data so that I can just pull them up as dictionaries and iterate over them to generate list contents in `*.md` files.

Okay, this is all I can think of now to assure you that you don't have to be overwhelmed again next time making a major update to your webpage.

Good luck!
